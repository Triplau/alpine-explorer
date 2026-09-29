
function mostraMessaggio() {

    document.getElementById("messaggio").textContent =
        "Benvenuto nel mondo dell'alpinismo!";

}



function mostraBonus() {

    let bonus = document.getElementById("bonus");

    if (bonus.style.display === "none") {

        bonus.style.display = "block";

    } else {

        bonus.style.display = "none";

    }

}