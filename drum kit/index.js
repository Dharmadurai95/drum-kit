var numberOfButtons = document.querySelectorAll(".drum");
var i;
for(i=0; i<numberOfButtons.length;i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonEve = this.innerHTML;

        makeAsound(buttonEve);
        animation(buttonEVe);
    });
    
}
                   //if don't create the function this methos to use and play the sound
                   /* var buttonEve = this.innerHTML;
                    switch(buttonEve){
                        case"w":
                        var sound1 =new Audio("sounds/crash.mp3");
                        sound1.play();
                        break;
                        case"a":
                        var sound2 =new Audio("sounds/kick-bass.mp3");
                        sound2.play();
                        break;
                        case"s":
                        var sound3 =new Audio("sounds/snare.mp3");
                        sound3.play();
                        break;
                        case"d":
                        var sound4 =new Audio("sounds/tom-1.mp3");
                        sound4.play();
                        break;
                        case"j":
                        var sound5 =new Audio("sounds/tom-2.mp3");
                        sound5.play();
                        break;
                        case"l":
                        var sound6 =new Audio("sounds/tom-3.mp3");
                        sound6.play();
                        break;
                        default:console.log(buttonEve);
                    }*/
        
document.addEventListener("keypress",function(event){ 

    makeAsound(event.key);
    animation(animation.key);
});
    

function makeAsound(key) {
    switch(key){
        case"w":
        var sound1 =new Audio("sounds/crash.mp3");
        sound1.play();
        break;
        case"a":
        var sound2 =new Audio("sounds/kick-bass.mp3");
        sound2.play();
        break;
        case"s":
        var sound3 =new Audio("sounds/snare.mp3");
        sound3.play();
        break;
        case"d":
        var sound4 =new Audio("sounds/tom-1.mp3");
        sound4.play();
        break;
        case"j":
        var sound5 =new Audio("sounds/tom-2.mp3");
        sound5.play();
        break;
        case"l":
        var sound6 =new Audio("sounds/tom-3.mp3");
        sound6.play();
        break;
        default:console.log(buttonEve);
    }
};

function animation(currentkey) {
     var aniKey = document.querySelector("."+currentkey);

     aniKey.classList.add("pressed");
     setTimeout(function(){
     aniKey.classList.remove("pressed");
     },100);
};