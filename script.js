
var timer = 60;
var hitnum=0;
var score =0;
var setTimeInterval;
var count=0;

function makeBubbles(){
    let clutter = "";
for(let i=1;i<=147;i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#container-btm").innerHTML= clutter;
}

function runTimer(){
    if(!setTimeInterval){
        setTimeInterval = setInterval(() => {
            if(timer>0){
              timer--;
              document.querySelector("#timer").innerHTML=timer;
            }
            else{
           clearInterval(setTimeInterval);
           document.querySelector("#container-btm").innerHTML=`  <h1 id="gameoverh1">Game Over!</h1>`;
           document.querySelector("#sethit").innerHTML=0;
            }
          }, 1000);
    }
}

function runHit(){
     hitnum = Math.floor((Math.random()*10));
    document.querySelector("#sethit").innerHTML= hitnum;
    
}

function increaseScore(){
  score += 10;
  document.querySelector("#score").innerHTML=score;
}

document.querySelector("#container-btm").addEventListener("click",function(details){
    document.querySelector("#startgameh3").innerHTML="";
    runTimer();
    var clickednum = Number(details.target.innerHTML);
      if(clickednum==hitnum){
        if(count==1){
            increaseScore();
        }
        makeBubbles();
        runHit();
        count=1;
      }
      
})

 

