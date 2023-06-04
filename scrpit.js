
let tbl = document.getElementById('tbl');

let tr = '';

for (let i = 0; i < 8; i++) {
    tr += '<tr>';

    for (let j = 0; j < 8; j++) {

    if (i % 2 == 1) {
        if (j % 2 == 1) {
            tr += '<td class="bg-white"></td>';
        } else {
            tr += '<td class="bg-black"></td>';
        }
    } else {
        if (j % 2 == 1) {
            tr += '<td class="bg-black"></td>';
        } else {
            tr += '<td class="bg-white"></td>';
        }
    }

        
        

    }

    tr += '<tr/>'
}

tbl.innerHTML = tr;