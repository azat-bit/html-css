function Translate(word,language){

    //this.apikey="1691e2b62fmsh5af502bb13f060ap1c3500jsnd15cd94b2e37";

    this.word=word;
    this.language=language;


    this.xhr=new XMLHttpRequest()
}

const data ="text=${this.word}&to=tr&from=${this.language1}";
Translate.prototype.translatework=function(callback){

    //AJAX İŞLEMLERİ

    const  options = {
        method: 'POST',
        url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'cd3ccac275mshd4f1dc25564bfd4p1649e3jsnc8f689164114',
          'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
        },
       
      };
xhr.open('POST', 'https://nlp-translation.p.rapidapi.com/v1/translate');
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('X-RapidAPI-Key', 'cd3ccac275mshd4f1dc25564bfd4p1649e3jsnc8f689164114');
xhr.setRequestHeader('X-RapidAPI-Host', 'nlp-translation.p.rapidapi.com');

console.log( xhr.send(data));
}
