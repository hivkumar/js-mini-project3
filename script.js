var timer = 20;
var score = 0;
var rnHit =0;

function makeBubbles(){
    var bubbles="";
    for(var i=1; i<=133 ; i++){
        var rn = Math.floor(Math.random()*10);
       bubbles += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML= bubbles;
}


function runtimer(){
  var inttime=  setInterval(function(){
       if(timer > 0){
        timer--;
        document.querySelector("#time").textContent = timer;
       }else{
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over!</h1> <br><h3>Score is = ${score}</h3>`;
        clearInterval(inttime);
       }
    },1000)
}


function getHit(){
     rnHit= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rnHit;
}

function increseScore(){
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum===rnHit){
        increseScore();
        makeBubbles();
        getHit();
    }   
  
});


function resetGame(){
    getHit();
    runtimer();
    makeBubbles();
    timer = 20;
}


document.querySelector("#btn").addEventListener("click", function(){
    resetGame();
})

getHit();
runtimer();
makeBubbles();
