let play_now = document.querySelector("#button");
play_now.addEventListener("click",function (){
  play_now.remove();
  play();
});
let bubbles = "" ;
let hiter;
let timer = 61;
let score = 0;

let main = document.querySelector("#bottom");

main.addEventListener("click", function click(e){
    let click = e.target.textContent;
    if(click == hiter){
        updatescore();
        bubblegenerator(bubbles);
        hit();
    }

})

function timeupdate(timer){
    var time = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;  
        }
        else{
            clearInterval(time);
            document.querySelector("#bottom").innerHTML = `<b class="stats">GAME OVER</br>YOUR SCORE IS ${score}</b>`;
        }
        
    },1000)
}
function bubblegenerator (bubbles){
    for(let i=1;i<=112;i++){
        let randomnum = Math.floor(Math.random()*51);
        bubbles += `<div class="bubble">${randomnum}</div>`;
   }
   document.querySelector("#bottom").innerHTML = bubbles;
}
function hit (){
    let randomnum = Math.floor(Math.random()*50);
    hiter = randomnum;
    document.querySelector("#hit").textContent = randomnum;
}
function updatescore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
function play(){
    bubblegenerator(bubbles);
    hit();
    timeupdate(timer);
}
