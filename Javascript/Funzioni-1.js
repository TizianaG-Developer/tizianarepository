console.log("Hello World!!!");
alert ("Ciao Mondo");
//fuction serve per dare un comando//
function visualizzazioneMessaggio() {
console.log ("Ciao");
}
visualizzazioneMessaggio();

//bisogna crear eun blocco di funzioni//

//Le funzioni possono avere dei parametri//
/*
function visualizzazioneMessaggio (nome){
    let saluto="Ciao"+nome+"  "+ cognome;
return saluto;}
*//*
function cambiaTesto() {
    document.getElementById("terzoParagrafo").innerHTML = "Ciao";}. La prossima con lo stesso codice può consentire che l'utente inserisca il testo*/

    function cambiaTesto() {
        let testovariato = prompt ("inserisci il testo da variare");
        document.getElementById("terzoParagrafo").innerHTML = testovariato;


}
function ripristina () {
  document.getElementById("terzoParagrafo").innerHTML="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem aliqua"
  document.getElementById("terzoParagrafo").style.color = "black";
  document.getElementById("terzoParagrafo").style.backgroundColor = "white";
  

}

function CambiaColore(){
    let coloreTesto = prompt ("inserisci il colore da cambiare");
    let coloreSfondo= prompt ("Che colore ti piace?");
    
    document.getElementById("terzoParagrafo").style.color= coloreTesto;
    document.getElementById("terzoParagrafo").style.background= coloreSfondo;
}

function mousePassaggio(){
    document.getElementById("secondoParagrafo").innerHTML = "mousePassaggio <br> statt attind";
    
}
function mouseVia(){
    document.getElementById("secondoParagrafo").innerHTML = "stattbun";
}
mioSaluto=visualizzazioneMessaggio("Juan", "Rossi");
console.log (mioSaluto);


//*Per creare una nuova pagina al volo*//

function nuovaPagina(){
    document.open();
    document.write("<h1>Hello!!!</h1><p>Ciao</p>");
    document.write("<p>secondoParagrafo</p>");
    document.write("<p>Paragrafo</p>");
    document.write("<p>Paragrafo</p>");
    document.write("<p>Paragrafo</p>");
    document.close();
}

document.open("https://www.uniba.it/","", "noopener=true");