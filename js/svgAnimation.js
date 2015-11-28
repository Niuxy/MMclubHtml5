function animationStart(){
  var animateMotion=document.getElementsByTagName('animateMotion')[0];
  if(animateMotion){
    animateMotion.beginElement();
    divShow();
  }
}

function divShow(){
  for(var i=0; i<5; i++){
    var achievementDiv=document.getElementsByClassName('achievement')[i];
    // achievementDiv.style.animation="show 5s ease-out";
    achievementDiv.style.WebkitAnimation="show 5s ease-out"+" "+i+"s";
    achievementDiv.style.WebkitAnimationFillMode="forwards";
  }
}

// var svg=document.getElementsByTagName('svg')[0];
// svg.onclick=function(){
//   animationStart();
// }

// var footer=document.getElementsByTagName('footer')[0];
// var height=footer.offsetTop;
// console.log(height);

window.onscroll=function(){
  var height=document.documentElement.scrollTop||document.body.scrollTop;
  if(height>=1352){
    animationStart();
    window.onscroll=null;
  }else{}
}
