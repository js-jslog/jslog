$(window).scroll(function() {
    $(".title-box").css("opacity", 1 - $(window).scrollTop() / 750);
});

$(window).scroll(function() {
    var pos = $(window).scrollTop();
    var past_fold = (pos > 635);
    $("nav").css("position", past_fold ? "absolute" : "fixed");
    $("nav").css("top", past_fold ? "635px" : "0px");
});
