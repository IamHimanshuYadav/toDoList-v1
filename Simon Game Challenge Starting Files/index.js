var colorCode=["green" , "red" , "yellow" , "blue"];
var gamePattern=[];
var index = 0;

function nextsequence(){
    var randomNO=Math.floor(Math.random() * 4);
    playsound(colorCode[randomNO]);
    gamePattern.push(colorCode[randomNO]);
    animate(colorCode[randomNO],"pressed");
    var level="level " + gamePattern.length;
    $("h1").text(level);
    //console.log(temp);
}

//colorCode.push("green"); colorCode.push("red"); colorCode.push("yellow");colorCode.push("blue");

var ans=[];
//var input[];

$(".btn").click(function(){
    playsound(this.id);
    animate(this.id,"pressed");
    checkAnswer(this.id);
});

function playsound(name){
    var sound='sounds/' + name +'.mp3';
    var g = new Audio(sound);
    g.play();
}

function animate(name,className){
    var temp = "#"+ name;
    $(temp).addClass(className)
    setTimeout(function(){
        $(temp).removeClass(className);
    }, 100);
}

$(document).keydown(function(){
    if(gamePattern.length==0){
        $("h1").text("level 0");
        nextsequence();
    }
});

function checkAnswer(value){
    if(gamePattern[index]!=value){
        $("h1").text("game over");
        playsound("wrong");
        gamePattern=[];
        animate("over","game-over");
        $("h1").text("Press A Key to Start");
        index=0;
    }
    if(gamePattern[index]==value){
        index++;
    }
    if(gamePattern.length==index && index!=0){
        index=0;
        nextsequence();
    }
}


