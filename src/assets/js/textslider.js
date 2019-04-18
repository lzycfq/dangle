/**
 * @author feiwen
 */
;(function($){
	$.fn.textslider = function(settings){    
        settings = jQuery.extend({
        	speed : "normal",
			line : 2,
			timer : 1000
    	}, settings);
		return this.each(function() {
			$.fn.textslider.scllor( $( this ), settings );
    	});
    }; 
	$.fn.textslider.scllor = function($this, settings){
		var ul = $( "ul:eq(0)", $this );
		var timerID;
		var li = ul.children();
		var _btnUp=$(".up:eq(0)", $this)
		var _btnDown=$(".down:eq(0)", $this)
		var liHight=$(li[0]).height();
		var upHeight=0-settings.line*liHight;//滚动的高度；
		var scrollUp=function(){
			ul.animate({marginTop:upHeight},settings.speed,function(){
				for(i=0;i<settings.line;i++){
					 ul.find("li:first").appendTo(ul);
                }
               	ul.css({marginTop:0});
			});	
		};
		var autoPlay=function(){
			timerID = window.setInterval(scrollUp,settings.timer);
		};
		var autoStop = function(){
            window.clearInterval(timerID);
        };
		//事件绑定
		ul.hover(autoStop,autoPlay).mouseout();
		_btnUp.hover(autoStop,autoPlay);
		_btnDown.hover(autoStop,autoPlay)
	};
})(jQuery);
