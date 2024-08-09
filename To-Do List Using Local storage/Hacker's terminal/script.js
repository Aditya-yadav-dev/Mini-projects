  // let cont = document.body.firstElementChild;
  //     let cont2 = '<b>THIS IS MY CONT<b> 2';
  //     let div = document.createElement("div");
  //     div.innerHTML =`<b> the length of the first div is = ${cont2.length-1}`;
  //     cont.insertAdjacentElement("afterend", div);
      
const first = async (data) => {
    await randomtime();
    let div = document.createElement("div");
    div.innerHTML = data;
    document.body.append(div);
    div.setAttribute("style","text-align:center")
    div.style.color = "blue";
    div.setAttribute("style","font-size:2em")
}
const randomtime = async () => {
    return new Promise((resolve, reject) => {
      let  time = 1 + 10 * Math.random()
        setTimeout(() => {

            resolve()
        }, time * 100)

    })
}
  async function main(){
      
      let t = setInterval(()=>{
         let last = document.body.lastElementChild;
         if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3);
         }
         else{
         last.innerHTML = last.innerHTML + ".";
         }

      },700)

let arr = ["hacking is initializing", "All Files are detecting", "your inter information is detecting", "passoword is detecting", "Your system hassbeen hacked"];

 for(let item of arr){
   await first(item);
 }
   await randomtime()
   clearInterval(t)
}
main();