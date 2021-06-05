// we take the door class from html and give the value to element, then we add an addEventListener so everytime it gets clicked we call the function toggleDoor.
//----------------------------------------------
var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

var element2 = document.querySelector(".door2");
element2.addEventListener("click", toggleDoor2);

function toggleDoor2() {
  element2.classList.toggle("doorOpen2");
}

var element3 = document.querySelector(".door3");
element3.addEventListener("click", toggleDoor3);

function toggleDoor3() {
  element3.classList.toggle("doorOpen3");
}

var element4 = document.querySelector(".door4");
element4.addEventListener("click", toggleDoor4);

function toggleDoor4() {
  element4.classList.toggle("doorOpen4");
}

var element5 = document.querySelector(".door5");
element5.addEventListener("click", toggleDoor5);

function toggleDoor5() {
  element5.classList.toggle("doorOpen5");
}
//--------------------------------------------------

//A really old way to do this but it works so who cares. Basicly it "removes" everything in the html exept the class "look"
//-------------------------------------------------------------------------------------------------------------------------------
function RAINBOW(){
  
  document.open();
  document.write("<div class='Look'>Look </div>");
  document.close();
//-------------------------------------------------------------------------------------------------------------------------------
  
  //then as well keep the stylesheet aka the css so that the animation can exist
  //------------------------------------------------------------------------------
  let hd = document.createElement('link');
  hd.rel = "stylesheet";
  hd.href="styles.css";
  document.getElementsByTagName('head')[0].appendChild(hd);
  //------------------------------------------------------------------------------
}
