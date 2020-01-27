$(document).ready(function(){
  window.setInterval(switchBack, 500);


  function switchBack(){
    $("body").toggleClass("move");
  }
});
