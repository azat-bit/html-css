class Currency{


    constructor(para1,para2){

        this.para1=para1;

        this.para2=para2;

        this.url="https://api.exchangeratesapi.io/v1/latest?base=";
        
        this.amount=null;
        this.setpara1=function(){return this.para1};
        this.setpara2=function(){return this.para2};

    };

    
exchange(){

    fetch(this.url+this.para1)
    .then(Response=>Response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
    
}