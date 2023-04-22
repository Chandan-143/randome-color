let mainbtn=document.querySelector("button");

let body=document.body;
let textcolors=document.querySelector(".abc");


function randomColorGenerator(){
    let red=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);

    let randomColor=`rgb(${red}, ${green}, ${blue})`
    return randomColor;

}
mainbtn.addEventListener("click", ()=>{

    let randomColor=randomColorGenerator();
    body.style.backgroundColor=randomColor;
    textcolors.textContent=randomColor;


})