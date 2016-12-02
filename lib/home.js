/**
 * Created by hallstatt on 2016/11/29.
 */
for(var i=0; i<getSwipe.length; i++){
    getSwipe[i].style.width = cWidth  + 'px';
}
getWrapper.style.width = getSwipe.length * cWidth + 'px';

var renderPage = function(flag){

    var pagination = document.createElement("div");
    var fgm = document.createDocumentFragment();
    if(flag == 1){
        pagination.className = "silder-Clist";
        for(var i=0; i<getSwipe.length-2; i++){
            var span = document.createElement('span');
            span.className = 'swiper-pagination-switch';
            span.setAttribute('data-item',i);
            fgm.appendChild(span);
        }
        pagination.appendChild(fgm);
        document.getElementsByClassName('silder')[0].appendChild(pagination);
        gb.addClass(document.querySelector('.swiper-pagination-switch'),'pagination-active');
    }
    if (flag == 0){
        pagination.className = "silder-vertical";
        for(var i=0; i<getVideoSwipe.length-2; i++){
            var span = document.createElement('span');
            span.className = 'swiper-pagination-switch';
            span.setAttribute('data-item',i);
            fgm.appendChild(span);
        }
        pagination.appendChild(fgm);
        document.getElementsByClassName('silder')[0].appendChild(pagination);
        gb.addClass(document.querySelector('.swiper-pagination-switch'),'pagination-active');
    }

};
renderPage(1);

var swiperScroll = function(){
    var page = document.querySelectorAll('.swiper-pagination-switch');
    getWrapper.style.transition = 'all 300ms ease';
    getWrapper.style.transform = 'translateX('+ -(index*cWidth) +'px)';

    if(index > getSwipe.length-2){
        setTimeout(function(){
            getWrapper.style.transition = 'all 0ms';
            getWrapper.style.transform = 'translateX('+ -cWidth +'px)';

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

window.addEventListener("resize", function(){
    clearInterval(init);
    var reg = /\-?[0-9]+/g;
    var val = cWidth;
    var translX = getWrapper.style.transform ? parseInt(getWrapper.style.transform.match(reg)[0]) : 0;
    console.log(translX);
    cWidth = document.body.clientWidth;
    var minusdist =  cWidth - val;
    console.log(minusdist);
    for(var i=0; i<getSwipe.length; i++){
        getSwipe[i].style.width = cWidth  + 'px';
    }
    getWrapper.style.width = getSwipe.length * cWidth + 'px';
    getWrapper.style.transition = 'all 0ms';
    getWrapper.style.transform = 'translateX('+ (translX - (minusdist*index)) +'px)';
    setTimeout(init = setInterval(function() {
        index++;
        swiperScroll();
    }, 3000), 300)
}, false);

//var nav = document.querySelector('.nav');

document.querySelector('.silder-Clist').addEventListener('click',function(e){
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