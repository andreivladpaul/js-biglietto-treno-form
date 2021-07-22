var btnGenera = document.getElementById("calcolaPrezzo");

btnGenera.addEventListener("click",
    function() {
        /* var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fascia-eta").value; */

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "block";
    }
);

btnAnnulla = document.getElementById("anullaPrezzo");
btnAnnulla.addEventListener("click",
    function() {
        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "none";

        document.getElementById("nome").value = " ";
        document.getElementById("km").value = " ";
        document.getElementById("fascia-eta").value = " ";
    }
);