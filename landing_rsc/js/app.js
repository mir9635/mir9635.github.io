"use strict";

// WINDOW WIDTH DETECT
var currentWidth = $(window).width();
$(window).resize(function () {
  currentWidth = $(window).width();
});
var Application = {
  init: function init() {
    this.events();
  },
  events: function events() {
    this.eventList.popups();
    this.eventList.scrollToElement();
    this.eventList.wow();
    this.eventList.mask();
  },
  eventList: {
    popups: function popups() {
      $('.js-open-popup').on('click', function () {
        $('.js-popup').css('display', 'block');
      });
      $('.js-close-popup').on('click', function () {
        $('.js-popup').css('display', 'none');
      }); //close popup by document click

      $(document).on('click', function (e) {
        var icon = $('.js-open-popup');
        var element = $('.popup');

        if (!icon.is(e.target) && icon.has(e.target).length === 0 && !element.is(e.target) && element.has(e.target).length === 0) {
          $('.js-popup').css('display', 'none');
        }
      }); //close popup by esc click

      $(document).keyup(function (e) {
        if (e.key === "Escape") {
          $('.js-popup').css('display', 'none');
        }
      });
    },
    scrollToElement: function scrollToElement() {
      $('.js-scroll').on('click', function () {
        var id = $(this).attr('id');
        id = id.replace('#', '');
        $('html, body').animate({
          scrollTop: $('.' + id).offset().top
        }, 1400, 'swing');
      });
    },
    wow: function wow() {
      new WOW().init({
        offset: 800,
        mobile: false
      });
    },
    mask: function mask() {
      $("[type=tel]").inputmask({
        mask: '+7 (999) 999-99-99',
        "clearIncomplete": false,
        "showMaskOnHover": true,
        "showMaskOnFocus": true,
        "clearMaskOnLostFocus": false
      });
    }
  }
};
$(function () {
  'use strict';

  Application.init();
});