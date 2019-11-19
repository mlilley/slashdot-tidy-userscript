// ==UserScript==
// @name         Slashdot-tidy
// @namespace    http://github.com/mlilley
// @version      1.0
// @description  Tidy slashdot, remove side and top bars, etc.
// @author       mlilley
// @include      http://*slashdot.org/*
// @include      https://*slashdot.org/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js 
// @run-at       document-start
// ==/UserScript==
$(() => {
    'use strict';
    $('.has-rail-right').removeClass('has-rail-right');
    $('#slashboxes').remove();
    $('#announcement').remove();
});
