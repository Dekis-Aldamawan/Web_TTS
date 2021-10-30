const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }


    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
                jawabanSalah(table);


            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }

        });

    }
}

function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

}

// concat input to string
function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel) {
    if (concat.toUpperCase() == "JAVASCRIPT" && tipe == "d3") {
        pengulanganTabel(tabel);
        alert("Jawaban anda benar");
        jawabanSalah(table);
    } else if (concat.toUpperCase() == "HEADING" && tipe == "m1") {
        pengulanganTabel(tabel);
        alert("Jawaban anda benar");
        jawabanSalah(table);
    } else if (concat.toUpperCase() == "HTML" && tipe == "m2") {
        pengulanganTabel(tabel);
        alert("Jawaban anda benar");
        jawabanSalah(table);
    } else if (concat.toUpperCase() == "RADIO" && tipe == "d5") {
        pengulanganTabel(tabel);
        alert("Jawaban anda benar");
        jawabanSalah(table);   
    } else if (concat.toUpperCase() == "CHECKBOX" && tipe == "m4") {
        pengulanganTabel(tabel);
        alert("Jawaban anda benar");
        jawabanSalah(table);
    }
}

function pengulanganTabel(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
    }
}

function jawabanSalah(table) {
    for (let j = 0; j < 1; j++) {
        table[j].disabled != true;
        alert("Maaf, jawaban anda salah silahkan klik soal lagi");
    }
}