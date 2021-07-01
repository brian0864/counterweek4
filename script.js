//delecaring variables for each ids
var counterPlaceholder=document.getElementById("counter-placeholder");
var btnIncrement= document.getElementById("btn-increment");
var btnDecrement= document.getElementById("btn-decrement");
var btnReset= document.getElementById("btn-reset");

var number= 0;

//function to change color of the number
//if number is less than 0 color is red, if more than 0 color is green, if 0 color is black;

function changecolor(number) {
    var color="";
    if(number<0){
        color="red"
    }else if
        (number>0) {color="green";}
    else 
    {color="black";}
    return color;
}
btnIncrement.addEventListener("click", function() {
    number++;
    counterPlaceholder.innerHTML=number;
    counterPlaceholder.style.color=changecolor(number);
});
btnDecrement.addEventListener("click", function() {
    number--;
    counterPlaceholder.innerHTML=number;
    counterPlaceholder.style.color=changecolor(number);
});
btnReset.addEventListener("click", function() {
    number=0;
    counterPlaceholder.innerHTML=number;
    counterPlaceholder.style.color=changecolor(number);
});
    
    
