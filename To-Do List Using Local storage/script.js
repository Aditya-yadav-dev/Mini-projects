
// let cont = document.querySelector('.container');
// let docs = document.getElementsByClassName("docs");
//   cont.addEventListener('mousemove',(e)=>{
//       cont.style.background="blue";
//     //  let location = cont.getBoundingClientRect;
//       console.log(e); 
//       docs.style.transfrom = transfrom(-50px,-50px);
//   //    docs.style.top = e.y+"px";
  
//   })


let btn = document.querySelector('.btn');
let inp = document.querySelector('.inp');
let ulist = document.querySelector('.task-list');

btn.addEventListener('click',(e)=>{

    if(inp.value === ''){
      alert('plaese! Enter your task to add');
    }
    else {
     let li = document.createElement('li');
     li.innerHTML = inp.value;
     ulist.prepend(li);
     let ancher = document.createElement('a');
     ancher.href = '#';
     ancher.innerHTML= 'remove';
     li.appendChild(ancher);
     savadata();
    }
})

ulist.addEventListener('click',(e)=>{
    if(e.target.tagName ==='LI'){
         e.target.classList.toggle('checked');
         savadata();
    }
    else if(e.target.tagName==='A'){
        e.target.parentElement.remove();
        savadata();
    }

})

function savadata(){
    localStorage.setItem('data',ulist.innerHTML);
}

function showdata(){
   ulist.innerHTML=localStorage.getItem('data');
}

showdata();