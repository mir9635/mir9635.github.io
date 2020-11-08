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
    this.eventList.nav();
    this.eventList.owl();
    this.eventList.select();

    //this.eventList.mask();
  },
  eventList: {
    nav:  function (){
      let elem = $('.desktop-hidden__menu'),
          btn = $('.desktop-hidden__btn'),
          close = $('.desktop-hidden__close');

      btn.click(function (){
        elem.addClass("active");
      })
      close.click(function (){
          elem.removeClass("active");
      })

    },
    owl: function owl() {
      $('.js-hero-owl').owlCarousel({
        dots: false,
        autoplay: true,
        loop: true,
        margin: 0,
        navText: ['<img src="../imgs/chevron-left.svg" />', '<img src="../imgs/chevron-right.svg" />'],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          768: {
            items: 1,
            nav: true,
          }
        }
      });
      $('.js-main-dir').owlCarousel({
        dots: true,
        autoplay: true,
        loop: true,
        margin: 0,
        navText: ['<img src="../imgs/chevron-left.svg" />', '<img src="../imgs/chevron-right.svg" />'],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          768: {
            items: 1,
            nav: true,
          }
        }
      });
      $('.js-comments-slider').owlCarousel({

        autoplay: true,
        loop: true,
        margin: 0,
        navText: ['<img src="../imgs/chevron-left.svg" />', '<img src="../imgs/chevron-right.svg" />'],
        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: false,
          },
          768: {
            items: 1,
            nav: true,
            dots: true,
          },
          992: {
            items: 2
          }
        }
      });


    },
    select: function select() {
      $('.js-select').styler({
        selectSmartPositioning: false
      });
    },
    mask: function mask() {
      $("[type=phone]").inputmask({
        mask: '+375 (99) 999-99-99',
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