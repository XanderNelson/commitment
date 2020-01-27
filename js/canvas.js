$(document).ready(function(){
  // window.setInterval(switchBack, 800);


  function switchBack(){
    $("body").toggleClass("move");
    $("h1").toggleClass("letterMove");
  }
  function triangleflash(){
      $("#triFive").toggleClass("flash");
  }
  $("#triOne").click(function(){
    $("#triOne").toggleClass("color");
  });
  $("#triTwo").click(function(){
    $("#triTwo").toggleClass("opac");
  });
  $("#triThree").click(function(){
    $("#triThree").toggleClass("turn");
  });
  $("#triFour").click(function(){
    $("#triFour").toggleClass("size");
  });
  $("#triFive").click(function(){
    setInterval(triangleflash, 200);
  });
});
