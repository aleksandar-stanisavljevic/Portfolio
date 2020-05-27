function sendFunction() {

  var x = document.getElementById("mySend");
  if (x.style.display === "inline") {
    x.style.display = "none";
  } else {
    x.style.display = "inline";
  };
  setTimeout(function () {
        location.reload()
    }, 2500);
}

//PORTFOLIO

setInterval(function(){
var port = document.querySelector("#portfolio");
var boundingP = port.getBoundingClientRect();

if ((boundingP.bottom >= 1 && boundingP.bottom <= (boundingP.height+1))&&
  boundingP.bottom <= (boundingP.height+1) &&
	boundingP.left >= 0 &&
	boundingP.right <= (window.innerWidth || document.documentElement.clientWidth)

) {
  document.querySelector('#portfolioHead').setAttribute('class', 'active1');
}

else {
  document.querySelector('#portfolioHead').setAttribute('class', '');
}}, 100);

//EDUCATION

setInterval(function(){
var edu = document.querySelector("#education");
var boundingE = edu.getBoundingClientRect();

if ((boundingE.bottom >= 1 && boundingE.bottom <= (boundingE.height+1))&&
  boundingE.bottom <= (boundingE.height+1) &&
	boundingE.left >= 0 &&
	boundingE.right <= (window.innerWidth || document.documentElement.clientWidth)

) {
  document.querySelector('#educationHead').setAttribute('class', 'active1');
}

else {
  document.querySelector('#educationHead').setAttribute('class', '');
}}, 100);

//SKILLS

setInterval(function(){
var ski = document.querySelector("#skills");
var boundingS = ski.getBoundingClientRect();

if ((boundingS.bottom >= 1 && boundingS.bottom <= (boundingS.height+1))&&
  boundingS.bottom <= (boundingS.height+1) &&
	boundingS.left >= 0 &&
	boundingS.right <= (window.innerWidth || document.documentElement.clientWidth)

) {
  document.querySelector('#skillsHead').setAttribute('class', 'active1');
}

else {
  document.querySelector('#skillsHead').setAttribute('class', '');
}}, 100);

//SKILLS

setInterval(function(){
var exp = document.querySelector("#experiences");
var boundingEX = exp.getBoundingClientRect();

if ((boundingEX.bottom >= 1 && boundingEX.bottom <= (boundingEX.height+1))&&
  boundingEX.bottom <= (boundingEX.height+1) &&
	boundingEX.left >= 0 &&
	boundingEX.right <= (window.innerWidth || document.documentElement.clientWidth)

) {
  document.querySelector('#experiencesHead').setAttribute('class', 'active1');
}

else {
  document.querySelector('#experiencesHead').setAttribute('class', '');
}}, 100);

//ABOUT

setInterval(function(){
var abo = document.querySelector("#about");
var boundingA = abo.getBoundingClientRect();

if ((boundingA.bottom >= 0.9 && boundingA.bottom <= (boundingA.height+0.9))&&
  boundingA.bottom <= (boundingA.height+0.9) &&
	boundingA.left >= 0 &&
	boundingA.right <= (window.innerWidth || document.documentElement.clientWidth)

) {
  document.querySelector('#aboutHead').setAttribute('class', 'active1');
}

else {
  document.querySelector('#aboutHead').setAttribute('class', '');
}}, 100);

//CONTACT

setInterval(function(){
var conta = document.querySelector("#contact");
var boundingC = conta.getBoundingClientRect();

if ((boundingC.bottom >= 1 && boundingC.bottom <= (boundingC.height+1))&&
  boundingC.bottom <= (boundingC.height+1) &&
	boundingC.left >= 0 &&
	boundingC.right <= (window.innerWidth || document.documentElement.clientWidth)

) {
  document.querySelector('#contactHead').setAttribute('class', 'active1');
}

else {
  document.querySelector('#contactHead').setAttribute('class', '');
}}, 100);
