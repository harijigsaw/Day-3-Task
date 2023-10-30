const url =" https://restcountries.com/v3.1/all "
    const myreq = new XMLHttpRequest();
myreq.addEventListener("load", function(){
  const obj = JSON.parse(this.response)
  for(let val of obj){
      console.log(val.population) 
      console.log(val.region)
      console.log(val.subregion)
  }
});
myreq.open("GET",url);
myreq.send()