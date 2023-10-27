const url =" https://restcountries.com/v3.1/all "
    const myreq = new XMLHttpRequest();
myreq.addEventListener("load", function(){
  const obj = JSON.parse(this.response)
  for(let val of obj){
      console.log(val.flags.png)
      console.log(val.countries names)
      console.log(val.regions)
      console.log(val.sub-region)
      console.log(val.populations)
  }
});
myreq.open("GET",url);
myreq.send()