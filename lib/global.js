/**
 * Created by hallstatt on 2016/11/30.
 */

function globalFun(){}
globalFun.prototype.addClass = function(el, className) {
    if (!className) return;
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};

globalFun.prototype.removeClass = function(el, className) {
    if (!className) return;
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

globalFun.prototype.hasClass = function(el, className) {
    if (!className) return false;
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
};

globalFun.prototype.addEvent = function(object, type, callback) {
    if (object === null || typeof(object) === 'undefined') return;

    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
};

globalFun.prototype.$ = function(ele) {
    if (ele === null || typeof(ele) === 'undefined' || typeof(ele) !== 'string') {return}
    else{return document.querySelectorAll(ele)}
};

var gb = new globalFun();

//var sliderThemes = ['white','gray','white','gray','white'];
var iWidth = window.innerWidth;
var iHeight = window.innerHeight;
var cWidth = document.body.clientWidth;
var cHeight = document.body.clientHeight;
var getSwipe = document.querySelectorAll('.swipe ');
var getVideoSwipe = document.querySelectorAll('.video-swipe');
var getWrapper = document.querySelector('.silder-wrapper');
var totalWrapper = document.querySelector('.header');
var index = 1;

getWrapper.style.transform = 'translateX('+ -cWidth +'px)';