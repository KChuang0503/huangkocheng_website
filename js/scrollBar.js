$(document).scroll(function (e) {
    var scrollAmount = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
    var roundScroll = Math.round(scrollPercent);

    // For scrollbar 2
    $(".scrollBar2").css("height", scrollPercent + "%");
    $(".scrollBar2 span").text(roundScroll);
});
