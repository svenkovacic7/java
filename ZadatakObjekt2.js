var ja = {
    ime: "Sven",
    prezime : "Kovacic",
    MjestoStanovanja : "Kasina",
    Godina : 1999,
    SkGod : "2016/2017"
};

function ispis() {
    ja.ime = document.getElementById("ime").value;
    ja.prezime = document.getElementById("prezime").value;
    for (var x in ja) {
        if (x == "ime" || x == "prezime") {
            console.log(ja[x]);
        }
    }
    var on = new Object();
    var ona = new Object();
}
