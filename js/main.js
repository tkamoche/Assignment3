$(document).ready(function () {
  $("#design").click(function () {
    $("#design").hide(1200);
    //  $("#text").toggle(1200);
    $("#text").show(1200);
  })
  $("#text").click(function () {
    $("#text").hide(1200);
    //  $("#design").toggle(1200);
    $("#design").show(1200);
  });
});

$(document).ready(function () {
  $("#development_pic").click(function () {
    $("#development_pic").hide(1200);
    $("#dev-text").toggle(1200);
    $("#dev-text").show(1200);
  })
  $("#dev-text").click(function () {
    $("#dev-text").hide(1200);
    $("#development_pic").toggle(1200);
    $("#development_pic").show(1200);
  });
});


$(document).ready(function () {
  $("#product-management").click(function () {
    $("#product-management").hide(1200);
    $("#product-text").toggle(1200);
    $("#product-text").show(1200);
  })
  $("#product-text").click(function () {
    $("#product-text").hide(1200);
    $("#product-management").toggle(1200);
    $("#product-management").show(1200);
  });
});

$(document).ready(function () {
  $("#parent1").mouseover(function () {
    $("#child1").css({ "opacity": "1" });
    $("#img1").css({ "opacity": "0.3" });
  });

  $("#parent1").mouseout(function () {
    $("#child1").css({ "opacity": "0" });
    $("#img1").css({ "opacity": "1" });
  });
}); 
$(document).ready(function () {
  $("#parent2").mouseover(function () {
    $("#child2").css({ "opacity": "1" });
    $("#img2").css({ "opacity": "0.3" });
  });

  $("#parent2").mouseout(function () {
    $("#child2").css({ "opacity": "0" });
    $("#img2").css({ "opacity": "1" });
  });
}); 
$(document).ready(function () {
  $("#parent3").mouseover(function () {
    $("#child3").css({ "opacity": "1" });
    $("#img3").css({ "opacity": "0.3" });
  });

  $("#parent3").mouseout(function () {
    $("#child3").css({ "opacity": "0" });
    $("#img3").css({ "opacity": "1" });
  });
}); 

