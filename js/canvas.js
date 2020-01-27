$(document).ready(function(){
  // window.setInterval(switchBack, 800);


  function switchBack(){
    $("body").toggleClass("move");
    $("h1").toggleClass("letterMove");
  }
  function triangleflash(){
    if ($("#triFive").hasClass("flash")){
      $("#triFive").removeClass("flash");
    }
    else{
      $("#triFive").addClass("flash");
    }
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
  $("#triSix").click(function(){
    $("#triSix").toggleClass("rotate");
  });
  $("#triSeven").click(function(){
    $("#triSeven").toggleClass("moveDown");
  });
});
