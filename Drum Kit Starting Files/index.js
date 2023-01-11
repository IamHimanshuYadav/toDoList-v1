var num=document.querySelectorAll(".drum").length;

for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        Playmusic(this.innerHTML);
        addAnimation(this.innerHTML);
    });
    
}

function addAnimation(key){
    document.querySelector("."+ key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ key).classList.remove("pressed");
    },100);
}

document.addEventListener("keydown",function(event)
{
    Playmusic(event.key);
});


function Playmusic(char){
    switch(char){
    case "w" :
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a" :
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

    case "s" :
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

    case "d" :
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

    case "j" :
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
        break;

    case"k" :
        var crash=new Audio('sounds/crash.mp3');
        crash.play();
        break;

    case "l" :
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

    default: gameOver();
    }

    
}

function gameOver(){
    document.querySelector("body").classList.add("game-over");
    setTimeout(function(){
        document.querySelector("body").classList.remove("game-over");
    },500);
}