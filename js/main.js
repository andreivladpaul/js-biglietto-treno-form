var btnGenera = document.getElementById("calcolaPrezzo");

btnGenera.addEventListener("click",
    function() {
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fascia-eta").value; 

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "block";

        document.getElementById("nomePassBigl").innerHTML = nome;
        document.getElementById("nomeOfferta").innerHTML = fasciaEta;
        //------------------------------------------------------
        var numeroCarrozzaRandom = Math.floor((Math.random() * 10) + 1);
        document.getElementById("numeroCarrozza").innerHTML = numeroCarrozzaRandom; 
        //------------------------------------------------------
        var numeroCP = Math.floor((Math.random() *  90000) + 10000);
        document.getElementById("codiceCP").innerHTML = numeroCP;
        //------------------------------------------------------
         
        var km =  document.getElementById("km").value;
        var costoBiglietto = (km * 0.21).toFixed(2);

        document.getElementById("costoBigliettoFinale").innerHTML = costoBiglietto;

        var d = document.getElementById("fascia-eta");
        var selectOption = d.options[d.selectedIndex].value;
        console.log(selectOption);

        if (fasciaEta == "Sconto minorenni") {
            costoBiglietto = costoBiglietto * 0.8;
        } else if (fasciaEta == "Sconto Over 65") {
            costoBiglietto = costoBiglietto * 0.6;
        } else {
            document.getElementById("costoBigliettoFinale").innerHTML = costoBiglietto;
        }

        document.getElementById("costoBigliettoFinale").innerHTML = costoBiglietto;

    
       
        /* 

        var scontoMinori = (prezzo * 0.2).toFixed(2);
        var sconto65 = (prezzo * 0.4).toFixed(2);
        
        if (eta < 18){
            var bigliettoMinori = (prezzo - scontoMinori).toFixed(2);
            
        } else if (eta > 65) {
            var biglietto65 = (prezzo - sconto65).toFixed(2);

        } else {
        
            
        }  */
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

