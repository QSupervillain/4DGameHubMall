$(function(){
  function search_width(){
	var  nava_width=$(".header_warp .banner .top .nava ul").width()
	var  navaa= $(".header_warp .banner .top .nava").width()
	var search_with=navaa-nava_width
   	$(".header_warp .banner .top .nava .search").css("width",search_with+"px")
   }
   search_width()
	//鼠标hover  事件  右侧3
	$(".centright .warp_c ul .ali").hover(function() {
	     $(this).addClass("list").siblings().removeClass("list")
	});
	   $(".centright .warp_f ul li").hover(function(){
    	$(this).children(".showin").fadeIn()
  
	},function(){
	   $(this).children(".showin").hide()
	  
	}); 
//网游评测
function warp_b(){
	$(".centright .warp_b ul li ").each(function(index) {
			var _font = $(".centright .warp_b ul li ").eq(index).find("font").text();		
			var _whdth = $(".centright .warp_b ul li ").eq(index).find(".processingbar").width() * 2;
			var abc = -Math.floor(_font) * _whdth + "px";		
			//$(".centright .warp_b ul li ").eq(index).find(".processingbar").css("background-positionX", abc);
			if (_font >= 9.8) {
				//$(".centright .warp_b ul li ").eq(index).find(".processingbar").css("background-positionX", "-1008px");
				$(".centright .warp_b ul li ").eq(index).find(".processingbar").addClass('p_on'+Math.floor(10));
			}else{
				$(".centright .warp_b ul li ").eq(index).find(".processingbar").addClass('p_on'+Math.floor(_font));
			}
			if(_font>=10){
				$(".centright .warp_b ul li ").eq(index).find("font").text('10')
			}
			if(parseInt(_font)==0){
				$(".centright .warp_b ul li ").eq(index).find("font").text(' ');
			}
		});
}
warp_b()
  function warp_c(){		
	  $('.warp_c ul li').each(function (){  
	      var a=$(this).find(".a2").attr("href")   
	       var tex=$(this).find(".a2").text();
          if(a !==undefined){
              if(tex=="领取"){
                  $(this).find(".yx_ma a").css("color","#f0412a")
              }
	      }
	  }); 
	}		
	warp_c()	
	//导航条实现的锚点跳转
	$('.centleft .warp_top .pin').on('click',function(){					
		var nav_clas = $(this).attr('data-id');	
		var nav_num = document.getElementById(nav_clas).offsetTop		
		$("body,html").animate({scrollTop:nav_num},300);
	
	})
  	function HomeScroll(a,b){function g(){var g=$(window).scrollLeft(),h=$(window).scrollTop(),i=$(document).height(),j=$(window).height(),k=c.height(),l=d.height(),m=k>l?f:e,n=k>l?d:c,o=k>l?c.offset().left+c.outerWidth(!0)-g:d.offset().left-c.outerWidth(!0)-g,p=k>l?l:k,q=k>l?k:l,r=parseInt(q-j)-parseInt(p-j);$(a+","+b).removeAttr("style"),j>i||p>q||m>h||p-j+m>=h?n.removeAttr("style"):j>p&&h-m>=r||p>j&&h-m>=q-j?n.attr("style","margin-top:"+r+"px;"):n.attr("style","_margin-top:"+(h-m)+"px;position:fixed;left:"+o+"px;"+(j>p?"top":"bottom")+":0;")}if($(a).length>0&&$(b).length>0){var c=$(a),d=$(b),e=c.offset().top,f=d.offset().top;$(window).resize(g).scroll(g).trigger("resize")}}
$(function(){
  HomeScroll(".centleft",".centright");
});

//点击跳转大图
    $('.centleft .warp_center p > img, .content .ZLmp3 .zl_cent p > img').click(function () {
        var imgurl = $(this).attr('src');
        if($("#abigimg").length == 0){
            var a = document.createElement("a");
            a.setAttribute("id", "abigimg");
            a.setAttribute("href", imgurl);
            a.setAttribute("target", "_blank");
            document.body.appendChild(a);
        }else{
            $("#abigimg").attr("href", imgurl);
        }
        document.getElementById("abigimg").click();
    });
//攻略列表切换点击
	  if ($(".wytjbox .bd li").size() >= 1) {
        jQuery(".wytjbox").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",vis:4,prevCell:".btn_peve",nextCell:".btn_next"});
    }
	
})
//评论投票
 function show_score(){
    $('.data_pf').each(function(){ 
        var that = $(this);
        var ypf = $(this).attr("data-dp");
        var a =$(this).find('.scorewrap');
        var	b=a.find('.score');
        var	c=a.find('.processingbar');
        var d=a.find('.txt');

        var w = c.children().first()
        var n = c.children().first().text();

        var h = a.find('.hover');
        //var d = c.find('span');
        var e = d.find('u');

        var i_nuber = e.find('i');

        h.unbind("mousemove")
        h.unbind("mouseleave")
        h.unbind("click")
        if(n>=10){n==10}
        var _w = c.width()*2;

        var postion=-Math.floor(n) * _w + "px";

       if(n>= 9.8){
           // c.css("background-positionX", -c.width()*19);
			 c.addClass('p_on10');
        }else{
           // c.css("background-positionX", postion);
			  c.addClass('p_on'+Math.floor(n) );
        }
		if(parseInt(n) == 0){
			w.text('')
		}
        b.children().first().css('width',n*10 +'%')

        if(ypf != undefined && ypf != 0){
            e.text('您的评分为'+ ypf +'分');
        }

        h.mousemove(function(event) {
            if ( ypf == 0 || ypf == undefined || ypf =="" ) {
				console.log(ypf)
                var x = event.offsetX;
                var f = (x / b.width()) * 10
                f = f.toFixed(1)
                e.html('您的评分为'+ '<i>'+f+'</i>' +'分');
                e.attr("data-sc",f)
                $(this).children().first().css("width", x + "px")

            }
        });
        h.mouseleave(function(event){
            if ( ypf == 0 || ypf == undefined || ypf =="" ) {
                var x = event.offsetX;
                b.children().first().css("width", n*10 +'%')
                e.text('您还未评分！');
            }
        });
        h.click(function(){
			
            if ( $('.username').size()>=1 && ypf == 0 ){
                var x = event.offsetX;
                var f = (x / b.width()) * 10
                f = f.toFixed(1)
                e.html('您的评分为'+ '<i>'+f+'</i>' +'分');
                e.attr("data-sc",f)
                that.attr("data-dp",f)
				ypf = that.attr("data-dp");
				//layer.msg('评分成功！')
            } else {
               // e.attr("data-sc",f)
			   //layer.msg('您已评分')
            }
        })
    })
}
show_score()
//h3
$('.warp_center>h3').each(function(){
	$(this).html('<span class="bt">'+$(this).html()+'</span>')
});

//详情页面左右切换;
/*(function () {
    if($(".centleft .fenye .keyup_ts_text").size()>=1){
        'use strict';
        if(typeof(Cdetail_total) == "undefined"){
            Cdetail_total = $(".fenye .pagination .next").prev().text();
        }
        var gkeyup_k = 0;
        var gkeyup_n = 0;
        var gkeyup_U1 = BeginUrl(location.href);
        $(document).keyup(function(event){
            var isFocus= $("input , textarea").is(":focus"); 
            let e = event || window.event;
            gkeyup_k = e.keycode || e.which;
            if (gkeyup_k == 37 && isFocus==false) {
                //left
                PlusUrl('-');
            }else if (gkeyup_k == 39 && isFocus==false) {
                //right
                PlusUrl('+');
            }
            return;
        }); */
       /* function BeginUrl(u) {
            let uTmp = '';
            if (u.indexOf('_') > 0) {
                uTmp = u.substring(0,u.indexOf('_'));
                gkeyup_n = u.substring(u.indexOf('_') + 1,u.indexOf('.html'));
            }
            else {
                uTmp = u.substring(0,u.indexOf('.html'));
                gkeyup_n = 1;
            }
            return uTmp;
        }
        function PlusUrl(n1) {
            let nTmp = gkeyup_n;
            if (n1 == '-') {
                nTmp--;
            }else if (n1 == '+') {
                nTmp++;
            }
            if (nTmp <=0) {
                gkeyup_n=1;
                return;
            }else if(nTmp > Cdetail_total){
                gkeyup_n=Cdetail_total;
                return;
            }
            AddUrl(nTmp);
        }*/
/*        function AddUrl(u) {
            //跳转...
            if (u === null) {
                return;
            }
            if (u%1 === 0 && u <= Cdetail_total) {
                if (u <= 1) {
                    window.location.assign(gkeyup_U1 + '.html');
                }else {
                    window.location.assign(gkeyup_U1 + '_' + u + '.html');
                }
            }else {
                return;
            }
        }
    }               
})();*/

 //攻略详情点击复制复制
$(function (){
	function Copy(){
		  $(".warp_center .linkinput").css("margin","10px 0")
		  $(".warp_center .btn_").css("display","block")
		$(".warp_center .btn_Copy").click(function(){
			var input=$(".warp_center .linkinput");
			var input=$(this).parents("p").find(".linkinput")
			input.select(); //选择对象
			document.execCommand("Copy"); //执行浏览器复制命令
			layer.msg('复制成功', {time:1000});
		})
	}
	Copy()
})





