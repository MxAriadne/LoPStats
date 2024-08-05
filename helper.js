const letters = ['-', 'D', 'C', 'B', 'A', 'S']

$(function() {
    let category = 0;

    $('#category').on('click', "li > button", function() {
        main(parseInt($(this).val()));
    });

    for (handle in handles) {
        if (handles.hasOwnProperty(handle)) {
            let h = handles[handle]
            if (h.name !== "Acidic Crystal Spear") {
                document.getElementById("handle-list").insertAdjacentHTML('beforeend', '<option value="' + handle.valueOf() + '">' + h.name + '</option>')
            }
        }
    }

    main(category);
});

function main(category) {
    switch (category) {
        case 0:
            $('#handle-list, #crank-list, #reinf-list').change(function(){
                clearTable()
                handleStandard()
            });
            $('#motivity, #technique, #advance').on('input', handleStandard);
            handleStandard();
            break;
        case 1:
            $('#handle-list, #crank-list, #reinf-list').change(handleUnique);
            $('#motivity, #technique, #advance').on('input', handleUnique);
            handleUnique();
            break;
        case 2:
            $('#handle-list, #crank-list, #reinf-list').change(handleArms);
            $('#motivity, #technique, #advance').on('input', handleArms);
            handleArms();
            break;
    }
}

function clearTable() {
    let table = document.getElementById("table")
    let rows = table.getElementsByTagName('tr');
    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    table = document.getElementById("s_table")
    rows = table.getElementsByTagName('tr');
    for (let i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function toggleElements(elements, show) {
    elements.forEach(element => {
        if (show) {
            $(element).show();
        } else {
            $(element).hide();
        }
    });
}

function searchItems() {
    let input = document.getElementById("Search");
    let filter = input.value.toLowerCase();
    let nodes = document.getElementsByClassName('target');

    for (let i of nodes) {
        for (const j of i.children) {
            if (j.children[0].innerText.toLowerCase().includes(filter)) {
                j.style.display = "";
            } else {
                j.style.display = "none";
            }
        }
    }
}

function calcDamage(base_dmg, dmg_scaling, type, upgrade) {
    let m = $('#motivity').val() - 1;
    let t = $('#technique').val() - 1;
    let a = $('#advance').val() - 1;

    upgrade = upgrade === undefined ? 1 : upgrade;
    let result = 0;

    switch (type) {
        case 0:
            result  = Math.floor((base_dmg * upgrade) + (base_dmg * ((weapon_phys[m] * scaling[dmg_scaling[0]][0]) +
                                                                        (weapon_phys[t] * scaling[dmg_scaling[1]][0]) +
                                                                        (weapon_adv[a] * scaling[dmg_scaling[2]][1]))));
            break;
        case 1:
            result  = Math.floor(base_dmg + (base_dmg * ((arm_phys[m] * scaling[dmg_scaling[0]][2]) +
                                                            (arm_phys[t] * scaling[dmg_scaling[1]][2]) +
                                                            (arm_adv[a] * scaling[dmg_scaling[2]][3]))));
            break;
        case 2:
            result  = Math.floor((base_dmg * upgrade) + (base_dmg * ((weapon_adv[a] * scaling[dmg_scaling[2]][1]))));
            break;
    }
    return result
}

function handleStandard() {
    toggleElements(['#handle-list', '#handle-label', '#crank-list', '#crank-label', '#reinf-list', '#reinf-label', '#s_table'], true);
    clearTable()

    let r = parseInt($('#reinf-list').val());

    let h = $('#handle-list option:selected').val();
    let handle = handles[h];
    let handleScaling = applyCrank(handle.scaling, document.getElementById("crank-list").selectedIndex);

    $('#s_table').append('<tr>' +
        '<td>' + letters[handleScaling[0]] + '</td>' +
        '<td>' + letters[handleScaling[1]] + '</td>' +
        '<td>' + letters[handleScaling[2]] + '</td>' +
        '</tr>');

    //Iterate over the blades and calc damage
    for (blade in blades) {
        if (blades.hasOwnProperty(blade)) {
            let weapon = blades[blade]

            let upgrade = weapon.reinforcements === undefined ? standard_weapon_reinforcements[r] : weapon.reinforcements[r];

            let blitz_ar = calcDamage(weapon.elemATK[0], handleScaling, 2, upgrade);
            let fire_ar  = calcDamage(weapon.elemATK[1], handleScaling, 2, upgrade);
            let acid_ar  = calcDamage(weapon.elemATK[2], handleScaling, 2, upgrade);
            let phys_ar  = calcDamage(weapon.physATK, handleScaling, 0, upgrade);

            let total_ar = blitz_ar + fire_ar + acid_ar + phys_ar;
            let l_ar     = Math.floor(total_ar * handle.light_mult);
            let h_ar     = Math.floor(total_ar * handle.heavy_mult);
            let ch_h_ar  = Math.floor(total_ar * handle.ch_heavy_mult);

            $('#table').append('<tr>' +
                '<td>' + weapon.name + '</td>' +
                '<td>' + phys_ar + '</td>' +
                '<td>' + blitz_ar + '</td>' +
                '<td>' + fire_ar + '</td>' +
                '<td>' + acid_ar + '</td>' +
                '<td>' + total_ar + '</td>' +
                '<td>' + l_ar + '</td>' +
                '<td>' + h_ar + '</td>' +
                '<td>' + ch_h_ar + '</td>' +
                '</tr>');
        }
        $('#table').append("</tbody>")
        Sortable.init()
    }
}

function handleUnique() {
    toggleElements(['#handle-list', '#handle-label', '#s_table'], false);
    toggleElements(['#crank-list', '#crank-label', '#reinf-list', '#reinf-label'], true);
    clearTable()

    let r = parseInt($('#reinf-list').val());
    if (r > 5) { r = 5 }

    //Iterate over the blades and calc damage
    for (blade in unique) {
        if (unique.hasOwnProperty(blade)) {
            let weapon = unique[blade]

            let handleScaling = applyCrank(weapon.scaling, document.getElementById("crank-list").selectedIndex);

            let upgrade = weapon.reinforcements === undefined ? unique_weapon_reinforcements[r] : weapon.reinforcements[r];
            let total_ar  = calcDamage(weapon.physATK, handleScaling, 0, upgrade);

            $('#table').append('<tr>' +
                '<td>' + weapon.name + '</td>' +
                '<td>' + total_ar + '</td>' +
                '<td>' + 0 + '</td>' +
                '<td>' + 0 + '</td>' +
                '<td>' + 0 + '</td>' +
                '<td>' + total_ar + '</td>' +
                '<td>' + total_ar + '</td>' +
                '<td>' + total_ar + '</td>' +
                '<td>' + total_ar + '</td>' +
                '</tr>');
        }
        $('#table').append("</tbody>")
        Sortable.init()
    }
}

function handleArms() {
    toggleElements(['#handle-list', '#handle-label', '#crank-list', '#crank-label', '#reinf-list', '#reinf-label', '#s_table'], false);
    clearTable()

    for (arm in arms) {
        if (arms.hasOwnProperty(arm)) {
            let legion = arms[arm]

            let blitz_ar = calcDamage(legion.elemATK[0], legion.scaling, 1);
            let fire_ar  = calcDamage(legion.elemATK[1], legion.scaling, 1);
            let acid_ar  = calcDamage(legion.elemATK[2], legion.scaling, 1);
            let phys_ar  = calcDamage(legion.physATK, legion.scaling, 1);

            let total_ar = Math.floor(blitz_ar + fire_ar + acid_ar + phys_ar);

            $('#table').append('<tr>' +
                '<td>' + legion.name + '</td>' +
                '<td>' + phys_ar + '</td>' +
                '<td>' + blitz_ar + '</td>' +
                '<td>' + fire_ar + '</td>' +
                '<td>' + acid_ar + '</td>' +
                '<td>' + total_ar + '</td>' +
                '<td>' + "N/A" + '</td>' +
                '<td>' + "N/A" + '</td>' +
                '<td>' + "N/A" + '</td>' +
                '</tr>');
        }
        $('#table').append("</tbody>")
        Sortable.init()
    }
}

function applyCrank(scaling, index) {
    //Order = [Motivity, Technique, Advance]
    //Scaling = [-, D, C, B, A, S]
    let temp = [0, 0, 0];
    switch (index) {
        //Motivity crank
        case 1:
            temp[0] = scaling[0] + 1;
            temp[1] = scaling[1] - 1;
            temp[2] = scaling[2]
            break;
        //Technique crank
        case 2:
            temp[0] = scaling[0] - 1;
            temp[1] = scaling[1] + 1;
            temp[2] = scaling[2]
            break;
        //Advance crank
        case 3:
            temp[0] = scaling[0];
            temp[1] = scaling[1];
            temp[2] = scaling[2] + 1;
            break;
        default:
            return scaling;
    }
    return temp;
}