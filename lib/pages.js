/**
 * Created by hallstatt on 2016/12/6.
 */

var pages = function() {
        function bind(element, event, callback) {
            if(element.addEventListener)
                element.addEventListener(event, callback, false);
            else
                element.attachEvent('on' + event, callback);
        }
        var idx = 0,count = 0, i,times,num,imgs;
        function Run(selector,btn,wrapper, options){
            imgs = document.querySelectorAll(selector);
            var prePageButton = document.querySelectorAll(btn)[0];
            var nextPageButton = document.querySelectorAll(btn)[1];
            var cutterWidth = document.getElementById(wrapper).offsetWidth;
            num = Math.floor(cutterWidth/258);

            times = Math.ceil(imgs.length/num);

            bind(prePageButton, 'click', function() {
                prePage();
            });
            bind(nextPageButton, 'click', function() {
                nextPage();
            });
        }

        function nextPage(){
            //console.log(num);
            //console.log(times);
            if(count==times-1) return;
            if (idx == 0){
                for ( i=idx;i<num;i++){             //  0 1 2 3  idx=5
                    imgs[i].className = 'cutter-hidden';
                }
                idx+=num;
                count++;
            }else if (idx+num>imgs.length){
                for ( i=idx;i<imgs.length;i++){
                    imgs[i].className = 'cutter-hidden';
                }
                idx=imgs.length;
                count++;
            }else{
                for ( i=idx;i<idx+num;i++){
                    imgs[i].className = 'cutter-hidden';
                }
                idx+=num;
                count++;
            }
        }
        function prePage(){
            if(count==0) return;
            for (var i=idx-1;i>=idx-num;i--){  // i=4;i>0;i--
                imgs[i].className = '';
            }
            idx-=num;
            count--;
        }
        return {
            run: Run
        }
    };
var page1 = new pages();
var page2 = new pages();
var page3 = new pages();
var page4 = new pages();
var page5 = new pages();
page1.run('#sketches a','.sketches-btn','sketches');
page2.run('#photo a','.photo-btn','photo');
page3.run('#render a','.render-btn','render');
page4.run('#mirror a','.mirror-btn','mirror');
page5.run('#digital a','.digital-btn','digital');