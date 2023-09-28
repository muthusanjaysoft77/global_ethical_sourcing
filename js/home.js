! function(c) {
    function t() {
        c(document).ready(function() {
            c(window).width() <= 766 && (c("html,body").animate({
                scrollTop: 0
            }, 100), c(".white-box,.white-box p,.white-box-two,.white-box-two p,.green-box,.green-box p,.black-box,.black-box p,#pure_cotton,#biobased,#hero-animate,#hero-animate h1,#hero-animate h2,#hero-animate a,.white-box .et_pb_button_module_wrapper,.white-box-two .et_pb_button_module_wrapper,.green-box .et_pb_button_module_wrapper,.black-box .et_pb_button_module_wrapper").css("opacity", "1")), 766 < c(window).width() && (c("html,body").animate({
                scrollTop: 0
            }, 100), setTimeout(function() {
                c("#hero-animate h2:first-of-type").addClass("fadeInLeft animated")
            }, 800), setTimeout(function() {
                c("#hero-animate h2:last-of-type").addClass("fadeInLeft animated")
            }, 1250), setTimeout(function() {
                c("#hero-animate h1").addClass("fadeInLeft animated")
            }, 1700), setTimeout(function() {
                c("#hero-animate a.blue-lt.underline").addClass("fadeInLeft animated")
            }, 1700))
        }), c(window).scroll(function() {
            var t, o, e, a, s, i, n, i, d, i, p, i;
            766 < c(window).width() && (t = c("#progress-offset").offset().top, o = c("#confidence-offset").offset().top, e = c("#stories-offset").offset().top, a = c("#leader-offset").offset().top, s = c("#why-offset").offset().top, i = c(".white-box h3").offset().top, c(window).scrollTop() >= i && c("#news").slideDown(600), i = c(window).scrollTop() / 13 + "px", c("#pure_cotton").css("transform", "translateY(-" + i + ")"), i = c(window).scrollTop() / 13 + "px", c("#spool").css("transform", "translateY(" + i + ")"), i = c(window).scrollTop() / 10 + "px", c("#biobased").css("transform", "translateY(" + i + ")"), c(window).scrollTop() >= t && (c(".white-box").addClass("fadeInRight animated").css("opacity", "1"), setTimeout(function() {
                c(".white-box p").addClass("fadeInRight animated").css("opacity", "1")
            }, 200), setTimeout(function() {
                c(".white-box .et_pb_button_module_wrapper").addClass("fadeInRight animated").css("opacity", "1")
            }, 400), setTimeout(function() {
                c("#pure_cotton").addClass("fadeIn animated").css("opacity", "1")
            }, 700)), c(window).scrollTop() >= o && (c(".green-box").addClass("fadeInLeft animated"), setTimeout(function() {
                c(".green-box p").addClass("fadeInLeft animated")
            }, 200), setTimeout(function() {
                c(".green-box .et_pb_button_module_wrapper").addClass("fadeInLeft animated").css("opacity", "1")
            }, 400)), c(window).scrollTop() >= a && (c(".black-box").addClass("fadeInRight animated").css("opacity", "1"), setTimeout(function() {
                c(".black-box p").addClass("fadeInRight animated").css("opacity", "1")
            }, 200), setTimeout(function() {
                c(".black-box .et_pb_button_module_wrapper").addClass("fadeInRight animated").css("opacity", "1")
            }, 400), setTimeout(function() {
                c("#five_logos a img#jcpenney-img").addClass("pulse animated").css("opacity", "1")
            }, 1e3), setTimeout(function() {
                c("#five_logos a img#gap-img").addClass("pulse animated").css("opacity", "1")
            }, 1100), setTimeout(function() {
                c("#five_logos a img#llbean-img").addClass("pulse animated").css("opacity", "1")
            }, 1200), setTimeout(function() {
                c("#five_logos a img#walmart-img").addClass("pulse animated").css("opacity", "1")
            }, 1300), setTimeout(function() {
                c("#five_logos a img#wrangler-img").addClass("pulse animated").css("opacity", "1")
            }, 1400)), c(window).scrollTop() >= s && (c(".white-box-two").addClass("fadeInRight animated").css("opacity", "1 !important"), setTimeout(function() {
                c(".white-box-two p").addClass("fadeInRight animated").css("opacity", "1")
            }, 200), setTimeout(function() {
                c(".white-box-two .et_pb_button_module_wrapper").addClass("fadeInRight animated").css("opacity", "1")
            }, 400)))
        })
    }
    t(), c(window).on("resize", t())
}(jQuery);