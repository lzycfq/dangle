//task growth
var switchPic = (function() {

    /*
        now:当前第几个li
        linum:总共几个li
        shownum:要展示几个li
        w_li:li的宽度
        marginR_li:li的右边距
    */
    var now = 1;
    var linum, shownum, offset, w_li, marginR_li, pre, next, wrap;

    function init(o) {
        pre = o.preBtn;
        next = o.nextBtn;
        wrap = o.wrap;
        bindBtn();
    }

    function btnShow() {
        getInfo();
    }

    function getInfo() {
        linum = $("#switchPic").find("li").size();
        shownum = 3;
        w_li = wrap.find("li").outerWidth(); //算上了border的宽度
        marginR_li = parseInt(wrap.find("li").css("marginRight"));
        offset = w_li + marginR_li;
    }

    function bindBtn() {
        btnShow();
        next.on("click", function() {
            if(now<linum - 2){
                now++;
                btnShow();
                wrap.stop(true).animate({
                    "margin-left": -(now - 1) * offset
                });
            }
        });
        pre.on("click", function() {
            if(now>1){
                now--;
                btnShow();
                wrap.stop(true).animate({
                    "margin-left": -(now - 1) * offset
                });
            }
        });

        $(window).resize(function() {
            now = 1;
            btnShow();
            wrap.animate({
                "margin-left": 0
            });
        });
    }
    return {
        init: init
    }
})();
