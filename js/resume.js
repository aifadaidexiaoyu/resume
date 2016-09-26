 //简写形式,使页面出来后再出效果
new WOW().init();  

//FlexSlider 使滚动文字内容显示出来
$(document).ready(function(){
   $(".flexslider").flexslider({
		animation: "slide",      //变换方式：淡入淡出或者滑动
		slideshowSpeed: 4000,   //自动播放速度毫秒
		animationSpeed: 1500,   //滚动效果播放时长
		touch: true   //载入页面时，是否自动播放
	});
});

//滚动条效果
$(document).ready(function(){
    $("html").niceScroll({
    	cursorcolor:"#E88010", 
    	cursorwidth: '6',
    	cursorborderradius: '10px',
    	background: '#555', 
    	spacebarenabled:false,
    	cursorborder: '0'
    });
    $(".scrollbar").niceScroll({
    	cursorcolor:"#E88010", 
    	cursorwidth: '6', 
    	cursorborderradius: '10px',
    	autohidemode: 'false',    //不隐藏
    	background: '#5b5b55', 
    	spacebarenabled:false,
    	cursorborder: '0'
    });
});

                     
     
  