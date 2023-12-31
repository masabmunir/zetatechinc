// RAD triage/quick fix JS - 4/24/2023

//Top Nav - Accenture Logo Temporary Fix - JPPL - 5/12/2023

// import $ from 'jquery';
import $ from '/js/libs/jquery/dist/jquery.js'
$(function(){
    $(".cmp-logo__svg-wrapper svg title").text("Accenture");
})

$(window).on("load", function() {
    let w_href = window.location.href
      , target_hash = "#" + w_href.split("#")[1];
    if (w_href.indexOf("#") > -1) {
        $("html, body").animate({
            scrollTop: $(target_hash).offset().top - $(".cmp-global-header__navbar-container").height()
        }, 1000);
    }

})
