/**
 * Created by hallstatt on 2016/11/29.
 */
getWrapper.style.transform = 'translateY('+ -cHeight +'px)';

for(var i=0; i<getSwipeDown.length; i++){
    getSwipeDown[i].style.height = cHeight  + 'px';
}
getWrapper.style.height = getSwipeDown.length * cHeight + 'px';

var renderPage = (function(){
    var pagination = document.createElement("div");
    var fgm = document.createDocumentFragment();
    pagination.className = "silder-vertical";
    for(var i=0; i<getSwipe.length-2; i++){
        var span = document.createElement('span');
        span.className = 'swiper-pagination-switch';
        span.setAttribute('data-item',i);
        fgm.appendChild(span);
    }
    pagination.appendChild(fgm);
    document.getElementsByClassName('silder')[0].appendChild(pagination);
    gb.addClass(document.querySelector('.swiper-pagination-switch'),'pagination-active');
})();

var swiperScroll = function(){
    var page = document.querySelectorAll('.swiper-pagination-switch');
    getWrapper.style.transition = 'all 300ms ease';


    getWrapper.style.transform = 'translateY('+ -(index*cHeight) +'px)';

    if(index > getSwipeDown.length-2){
        setTimeout(function(){
            getWrapper.style.transition = 'all 0ms';
            getWrapper.style.transform = 'translateY('+ -cHeight +'px)';

        },300);
        index = 1;
    }

    gb.removeClass(document.querySelector('.pagination-active'),'pagination-active');
    gb.addClass(page[index-1],'pagination-active');

};

var init = setInterval(function(){
    index++;
    swiperScroll();
},3000);

document.querySelector('.silder-vertical').addEventListener('click',function(e){
    var e = e || window.event;
    var target = e.target || e.srcElement;

    if(target.nodeName.toLowerCase() == 'span'){
        clearInterval(init);
        index = parseInt(target.getAttribute('data-item')) + 1;
        swiperScroll();
        init = setInterval(function(){
            index++;
            swiperScroll();
        },3000);
    }
},false);