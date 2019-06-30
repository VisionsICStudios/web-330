/*
============================================
; Title: Portfolio.js
; Author: Aaron Wilson
; Date:   22 March 2019
; Description: JQuery Code Portfolio Website
;===========================================
*/

// I created all Jquery code here!

// Automatic JQuery Statement to let the DOM know is is ready.
$(document).ready(function() {

  // Hide all other sections.
  $("#homePage, #aboutPage, #portfolioPage, #contactPage, .introCaption").hide();

  // Run ths JQuery code when the home button is clicked.
  $(".homePage").click(function () {
    $("#homePage").show();
    $("#introPage, #aboutPage, #portfolioPage, #contactPage").hide();
  });

  // Run ths JQuery code when the home button is clicked.
  $("#homeBtn").click(function () {
    $("#homePage, #spacer").show();
    $("#introPage, #aboutPage, #portfolioPage, #contactPage").hide();
  });

  // Run ths JQuery code when the about button is clicked.
  $("#aboutBtn").click(function () {
    $("#aboutPage").show();
    $("#introPage, #homePage, #portfolioPage, #contactPage, #spacer").hide();
  });

  // Run ths JQuery code when the logo is clicked.
  $("#logoBtn").click(function () {
    $("#introPage").show();
    $("#homePage, #aboutPage, #portfolioPage, #contactPage, #spacer").hide();
  });

  // Run ths JQuery code when the portfolio button is clicked.
  $("#portfolioBtn").click(function () {
    $("#portfolioPage").show();
    $("#introPage, #homePage, #aboutPage, #contactPage, #spacer").hide();
  });

  // Run ths JQuery code when the contact button is clicked.
  $("#contactBtn").click(function () {
    $("#contactPage").show();
    $("#introPage, #homePage, #aboutPage, #portfolioPage, #spacer").hide();
  });

  // Logo Rollover.
  $('.logoBody').hover(function () {
    $(".introCaption").show();
    $(this).find('img').attr('src', function (i, src) {
        return src.replace('svg/logoNorm.svg', 'svg/logoRoll.svg')
    })
  }, function () {
    $(this).find('img').attr('src', function (i, src) {
        return src.replace('svg/logoRoll.svg', 'svg/logoNorm.svg')
    })
  });

  //Rotate cards.
  $(".buckBlock").mouseenter(function(){
    $(this).addClass("roto").delay(2000).queue(function(){
      $(this).removeClass("roto").dequeue();
    });
  });

  // For touch support for touch devices.
  var touchSensitivity = 5;
  $(".carousel").on("touchstart", function (event) {
      var xClick = event.originalEvent.touches[0].pageX;
      $(this).one("touchmove", function (event) {
          var xMove = event.originalEvent.touches[0].pageX;
          if (Math.floor(xClick - xMove) > touchSensitivity) {
              $(this).carousel('next');
          } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
              $(this).carousel('prev');
          }
      });
      $(".carousel").on("touchend", function () {
          $(this).off("touchmove");
      });
  });
});
