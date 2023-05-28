eventListeners();



function eventListeners(){


    document.querySelector("#language").addEventListener("sumbit",translate);

}
const kelime=document.getElementById("#word");
const dil=document.getElementById("#lang");

const translate1=new Translate(kelime.value,dil.value);
function translate(e){


translate1.translatework();

e.preventDefault();
}