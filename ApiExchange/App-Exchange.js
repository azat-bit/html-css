const girdi = document.querySelector(".form-control");

const İlkSEcici = document.querySelector("#secim1");

const İkinciSecici=document.querySelector("#secim2");

const cr = new Currency("USD","TRY");

eventlistener();


function eventlistener(){

    girdi.addEventListener("input",exchangecurrecy);

    İlkSEcici.onchange = function(){


    };

    İkinciSecici.onchange = function(){


    };
}


function exchangecurrecy(){


   cr.exchange();
}