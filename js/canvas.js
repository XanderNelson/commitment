$(document).ready(function(){
  window.setInterval(switchBack, 800);


  function switchBack(){
    $("body").toggleClass("move");
    $("h1").toggleClass("letterMove");
  }
  $("#triOne").click(function(){
    $("#triOne").toggleClass("color");
  });
  $("#triTwo").click(function(){
    $("#triTwo").toggleClass("color");
  });
});
