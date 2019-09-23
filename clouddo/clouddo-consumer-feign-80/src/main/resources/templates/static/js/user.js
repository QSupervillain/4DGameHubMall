var myuserhost = "https://my.3dmgame.com";
if(typeof(layer) != "undefined"){
	a = document.getElementsByTagName("head")[0],
    s = document.createElement("link");
    s.rel = "stylesheet";
    s.href = myuserhost + "/user/css/haslayer.css?v=3.2.0";
    a.appendChild(s);
}else{
 	/*! layer-v3.1.0 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
 	;!function(e,t){"use strict";var i,n,a=e.layui&&layui.define,o={getPath:function(){var e=document.scripts,t=e[e.length-1],i=t.src;if(!t.getAttribute("merge"))return i.substring(0,i.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(t,i){var n=t.currentStyle?t.currentStyle:e.getComputedStyle(t,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](i)},link:function(t,i,n){r.path=myuserhost;if(r.path){var a=document.getElementsByTagName("head")[0],s=document.createElement("link");"string"==typeof i&&(n=i);var l=(n||t).replace(/\.|\//g,""),f="layuicss-"+l,c=0;s.rel="stylesheet",s.href=r.path+t,s.id=f,document.getElementById(f)||a.appendChild(s),"function"==typeof i&&!function u(){return++c>80?e.console&&console.error("layer.css: Invalid"):void(1989===parseInt(o.getStyle(document.getElementById(f),"width"))?i():setTimeout(u,100))}()}}},r={v:"3.2.0",ie:function(){var t=navigator.userAgent.toLowerCase();return!!(e.ActiveXObject||"ActiveXObject"in e)&&((t.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:e.layer&&e.layer.v?1e5:0,path:o.getPath,config:function(e,t){return e=e||{},r.cache=o.config=i.extend({},o.config,e),r.path=o.config.path||r.path,"string"==typeof e.extend&&(e.extend=[e.extend]),o.config.path&&r.ready(),e.extend?(a?layui.addcss("modules/layer/"+e.extend):o.link("theme/"+e.extend),this):this},ready:function(e){var t="layer",i="",n="/user/css/layer.css?v="+r.v+i;return a?layui.addcss(n,e,t):o.link(n,e,t),this},alert:function(e,t,n){var a="function"==typeof t;return a&&(n=t),r.open(i.extend({content:e,yes:n},a?{}:t))},confirm:function(e,t,n,a){var s="function"==typeof t;return s&&(a=n,n=t),r.open(i.extend({content:e,btn:o.btn,yes:n,btn2:a},s?{}:t))},msg:function(e,n,a){var s="function"==typeof n,f=o.config.skin,c=(f?f+" "+f+"-msg":"")||"layui-layer-msg",u=l.anim.length-1;return s&&(a=n),r.open(i.extend({content:e,time:3e3,shade:!1,skin:c,title:!1,closeBtn:!1,btn:!1,resize:!1,end:a},s&&!o.config.skin?{skin:c+" layui-layer-hui",anim:u}:function(){return n=n||{},(n.icon===-1||n.icon===t&&!o.config.skin)&&(n.skin=c+" "+(n.skin||"layui-layer-hui")),n}()))},load:function(e,t){return r.open(i.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,n){return r.open(i.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},n))}},s=function(e){var t=this;t.index=++r.index,t.config=i.extend({},t.config,o.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)};s.pt=s.prototype;var l=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];l.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],s.pt.config={type:0,shade:.3,fixed:!0,move:l[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},s.pt.vessel=function(e,t){var n=this,a=n.index,r=n.config,s=r.zIndex+a,f="object"==typeof r.title,c=r.maxmin&&(1===r.type||2===r.type),u=r.title?'<div class="layui-layer-title" style="'+(f?r.title[1]:"")+'">'+(f?r.title[0]:r.title)+"</div>":"";return r.zIndex=s,t([r.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+a+'" times="'+a+'" style="'+("z-index:"+(s-1)+"; ")+'"></div>':"",'<div class="'+l[0]+(" layui-layer-"+o.type[r.type])+(0!=r.type&&2!=r.type||r.shade?"":" layui-layer-border")+" "+(r.skin||"")+'" id="'+l[0]+a+'" type="'+o.type[r.type]+'" times="'+a+'" showtime="'+r.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+s+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fixed?"":";position:absolute;")+'">'+(e&&2!=r.type?"":u)+'<div id="'+(r.id||"")+'" class="layui-layer-content'+(0==r.type&&r.icon!==-1?" layui-layer-padding":"")+(3==r.type?" layui-layer-loading"+r.icon:"")+'">'+(0==r.type&&r.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+r.icon+'"></i>':"")+(1==r.type&&e?"":r.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=c?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return r.closeBtn&&(e+='<a class="layui-layer-ico '+l[7]+" "+l[7]+(r.title?r.closeBtn:4==r.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(r.btn?function(){var e="";"string"==typeof r.btn&&(r.btn=[r.btn]);for(var t=0,i=r.btn.length;t<i;t++)e+='<a class="'+l[6]+t+'">'+r.btn[t]+"</a>";return'<div class="'+l[6]+" layui-layer-btn-"+(r.btnAlign||"")+'">'+e+"</div>"}():"")+(r.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],u,i('<div class="layui-layer-move"></div>')),n},s.pt.creat=function(){var e=this,t=e.config,a=e.index,s=t.content,f="object"==typeof s,c=i("body");if(!t.id||!i("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==r.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:o.btn[0],r.closeAll("dialog");break;case 2:var s=t.content=f?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+l[4]+a+'" name="'+l[4]+a+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&0===t.icon,r.closeAll("loading");break;case 4:f||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}if(e.vessel(f,function(n,r,u){c.append(n[0]),f?function(){2==t.type||4==t.type?function(){i("body").append(n[1])}():function(){s.parents("."+l[0])[0]||(s.data("display",s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]),i("#"+l[0]+a).find("."+l[5]).before(r))}()}():c.append(n[1]),i(".layui-layer-move")[0]||c.append(o.moveElem=u),e.layero=i("#"+l[0]+a),t.scrollbar||l.html.css("overflow","hidden").attr("layer-full",a)}).auto(a),i("#layui-layer-shade"+e.index).css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade}),2==t.type&&6==r.ie&&e.layero.find("iframe").attr("src",s[0]),4==t.type?e.tips():e.offset(),t.fixed&&n.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(a),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback(),l.anim[t.anim]){var u="layer-anim "+l.anim[t.anim];e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i(this).removeClass(u)})}t.isOutAnim&&e.layero.data("isOutAnim",!0)}},s.pt.auto=function(e){var t=this,a=t.config,o=i("#"+l[0]+e);""===a.area[0]&&a.maxWidth>0&&(r.ie&&r.ie<8&&a.btn&&o.width(o.innerWidth()),o.outerWidth()>a.maxWidth&&o.width(a.maxWidth));var s=[o.innerWidth(),o.innerHeight()],f=o.find(l[1]).outerHeight()||0,c=o.find("."+l[6]).outerHeight()||0,u=function(e){e=o.find(e),e.height(s[1]-f-c-2*(0|parseFloat(e.css("padding-top"))))};switch(a.type){case 2:u("iframe");break;default:""===a.area[1]?a.maxHeight>0&&o.outerHeight()>a.maxHeight?(s[1]=a.maxHeight,u("."+l[5])):a.fixed&&s[1]>=n.height()&&(s[1]=n.height(),u("."+l[5])):u("."+l[5])}return t},s.pt.offset=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],o="object"==typeof t.offset;e.offsetTop=(n.height()-a[1])/2,e.offsetLeft=(n.width()-a[0])/2,o?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=n.width()-a[0]:"b"===t.offset?e.offsetTop=n.height()-a[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=n.width()-a[0]):"rb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=n.width()-a[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=n.scrollTop(),e.offsetLeft+=n.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=n.height()-(i.find(l[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},s.pt.tips=function(){var e=this,t=e.config,a=e.layero,o=[a.outerWidth(),a.outerHeight()],r=i(t.follow);r[0]||(r=i("body"));var s={width:r.outerWidth(),height:r.outerHeight(),top:r.offset().top,left:r.offset().left},f=a.find(".layui-layer-TipsG"),c=t.tips[0];t.tips[1]||f.remove(),s.autoLeft=function(){s.left+o[0]-n.width()>0?(s.tipLeft=s.left+s.width-o[0],f.css({right:12,left:"auto"})):s.tipLeft=s.left},s.where=[function(){s.autoLeft(),s.tipTop=s.top-o[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left+s.width+10,s.tipTop=s.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){s.autoLeft(),s.tipTop=s.top+s.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left-o[0]-10,s.tipTop=s.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],s.where[c-1](),1===c?s.top-(n.scrollTop()+o[1]+16)<0&&s.where[2]():2===c?n.width()-(s.left+s.width+o[0]+16)>0||s.where[3]():3===c?s.top-n.scrollTop()+s.height+o[1]+16-n.height()>0&&s.where[0]():4===c&&o[0]+16-s.left>0&&s.where[1](),a.find("."+l[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),a.css({left:s.tipLeft-(t.fixed?n.scrollLeft():0),top:s.tipTop-(t.fixed?n.scrollTop():0)})},s.pt.move=function(){var e=this,t=e.config,a=i(document),s=e.layero,l=s.find(t.move),f=s.find(".layui-layer-resize"),c={};return t.move&&l.css("cursor","move"),l.on("mousedown",function(e){e.preventDefault(),t.move&&(c.moveStart=!0,c.offset=[e.clientX-parseFloat(s.css("left")),e.clientY-parseFloat(s.css("top"))],o.moveElem.css("cursor","move").show())}),f.on("mousedown",function(e){e.preventDefault(),c.resizeStart=!0,c.offset=[e.clientX,e.clientY],c.area=[s.outerWidth(),s.outerHeight()],o.moveElem.css("cursor","se-resize").show()}),a.on("mousemove",function(i){if(c.moveStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1],l="fixed"===s.css("position");if(i.preventDefault(),c.stX=l?0:n.scrollLeft(),c.stY=l?0:n.scrollTop(),!t.moveOut){var f=n.width()-s.outerWidth()+c.stX,u=n.height()-s.outerHeight()+c.stY;a<c.stX&&(a=c.stX),a>f&&(a=f),o<c.stY&&(o=c.stY),o>u&&(o=u)}s.css({left:a,top:o})}if(t.resize&&c.resizeStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1];i.preventDefault(),r.style(e.index,{width:c.area[0]+a,height:c.area[1]+o}),c.isResize=!0,t.resizing&&t.resizing(s)}}).on("mouseup",function(e){c.moveStart&&(delete c.moveStart,o.moveElem.hide(),t.moveEnd&&t.moveEnd(s)),c.resizeStart&&(delete c.resizeStart,o.moveElem.hide())}),e},s.pt.callback=function(){function e(){var e=a.cancel&&a.cancel(t.index,n);e===!1||r.close(t.index)}var t=this,n=t.layero,a=t.config;t.openLayer(),a.success&&(2==a.type?n.find("iframe").on("load",function(){a.success(n,t.index)}):a.success(n,t.index)),6==r.ie&&t.IE6(n),n.find("."+l[6]).children("a").on("click",function(){var e=i(this).index();if(0===e)a.yes?a.yes(t.index,n):a.btn1?a.btn1(t.index,n):r.close(t.index);else{var o=a["btn"+(e+1)]&&a["btn"+(e+1)](t.index,n);o===!1||r.close(t.index)}}),n.find("."+l[7]).on("click",e),a.shadeClose&&i("#layui-layer-shade"+t.index).on("click",function(){r.close(t.index)}),n.find(".layui-layer-min").on("click",function(){var e=a.min&&a.min(n);e===!1||r.min(t.index,a)}),n.find(".layui-layer-max").on("click",function(){i(this).hasClass("layui-layer-maxmin")?(r.restore(t.index),a.restore&&a.restore(n)):(r.full(t.index,a),setTimeout(function(){a.full&&a.full(n)},100))}),a.end&&(o.end[t.index]=a.end)},o.reselect=function(){i.each(i("select"),function(e,t){var n=i(this);n.parents("."+l[0])[0]||1==n.attr("layer")&&i("."+l[0]).length<1&&n.removeAttr("layer").show(),n=null})},s.pt.IE6=function(e){i("select").each(function(e,t){var n=i(this);n.parents("."+l[0])[0]||"none"===n.css("display")||n.attr({layer:"1"}).hide(),n=null})},s.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(e){var t=function(){r.zIndex++,e.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),r.zIndex}},o.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},o.rescollbar=function(e){l.html.attr("layer-full")==e&&(l.html[0].style.removeProperty?l.html[0].style.removeProperty("overflow"):l.html[0].style.removeAttribute("overflow"),l.html.removeAttr("layer-full"))},e.layer=r,r.getChildFrame=function(e,t){return t=t||i("."+l[4]).attr("times"),i("#"+l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return i("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=i("#"+l[0]+e),a=n.find(l[1]).outerHeight()||0,o=n.find("."+l[6]).outerHeight()||0;n.css({height:t+a+o}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){i("#"+l[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var a=i("#"+l[0]+e),r=a.find(".layui-layer-content"),s=a.attr("type"),f=a.find(l[1]).outerHeight()||0,c=a.find("."+l[6]).outerHeight()||0;a.attr("minLeft");s!==o.type[3]&&s!==o.type[4]&&(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-f-c<=64&&(t.height=64+f+c)),a.css(t),c=a.find("."+l[6]).outerHeight(),s===o.type[2]?a.find("iframe").css({height:parseFloat(t.height)-f-c}):r.css({height:parseFloat(t.height)-f-c-parseFloat(r.css("padding-top"))-parseFloat(r.css("padding-bottom"))}))},r.min=function(e,t){var a=i("#"+l[0]+e),s=a.find(l[1]).outerHeight()||0,f=a.attr("minLeft")||181*o.minIndex+"px",c=a.css("position");o.record(a),o.minLeft[0]&&(f=o.minLeft[0],o.minLeft.shift()),a.attr("position",c),r.style(e,{width:180,height:s,left:f,top:n.height()-s,position:"fixed",overflow:"hidden"},!0),a.find(".layui-layer-min").hide(),"page"===a.attr("type")&&a.find(l[4]).hide(),o.rescollbar(e),a.attr("minLeft")||o.minIndex++,a.attr("minLeft",f)},r.restore=function(e){var t=i("#"+l[0]+e),n=t.attr("area").split(",");t.attr("type");r.style(e,{width:parseFloat(n[0]),height:parseFloat(n[1]),top:parseFloat(n[2]),left:parseFloat(n[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(l[4]).show(),o.rescollbar(e)},r.full=function(e){var t,a=i("#"+l[0]+e);o.record(a),l.html.attr("layer-full")||l.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===a.css("position");r.style(e,{top:t?0:n.scrollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()},!0),a.find(".layui-layer-min").hide()},100)},r.title=function(e,t){var n=i("#"+l[0]+(t||r.index)).find(l[1]);n.html(e)},r.close=function(e){var t=i("#"+l[0]+e),n=t.attr("type"),a="layer-anim-close";if(t[0]){var s="layui-layer-wrap",f=function(){if(n===o.type[1]&&"object"===t.attr("conType")){t.children(":not(."+l[5]+")").remove();for(var a=t.find("."+s),r=0;r<2;r++)a.unwrap();a.css("display",a.data("display")).removeClass(s)}else{if(n===o.type[2])try{var f=i("#"+l[4]+e)[0];f.contentWindow.document.write(""),f.contentWindow.close(),t.find("."+l[5])[0].removeChild(f)}catch(c){}t[0].innerHTML="",t.remove()}"function"==typeof o.end[e]&&o.end[e](),delete o.end[e]};t.data("isOutAnim")&&t.addClass("layer-anim "+a),i("#layui-layer-moves, #layui-layer-shade"+e).remove(),6==r.ie&&o.reselect(),o.rescollbar(e),t.attr("minLeft")&&(o.minIndex--,o.minLeft.push(t.attr("minLeft"))),r.ie&&r.ie<10||!t.data("isOutAnim")?f():setTimeout(function(){f()},200)}},r.closeAll=function(e){i.each(i("."+l[0]),function(){var t=i(this),n=e?t.attr("type")===e:1;n&&r.close(t.attr("times")),n=null})};var f=r.cache||{},c=function(e){return f.skin?" "+f.skin+" "+f.skin+"-"+e:""};r.prompt=function(e,t){var a="";if(e=e||{},"function"==typeof e&&(t=e),e.area){var o=e.area;a='style="width: '+o[0]+"; height: "+o[1]+';"',delete e.area}var s,l=2==e.formType?'<textarea class="layui-layer-input"'+a+">"+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}(),f=e.success;return delete e.success,r.open(i.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:l,skin:"layui-layer-prompt"+c("prompt"),maxWidth:n.width(),success:function(e){s=e.find(".layui-layer-input"),s.focus(),"function"==typeof f&&f(e)},resize:!1,yes:function(i){var n=s.val();""===n?s.focus():n.length>(e.maxlength||500)?r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",s,{tips:1}):t&&t(n,i,s)}},e))},r.tab=function(e){e=e||{};var t=e.tab||{},n="layui-this",a=e.success;return delete e.success,r.open(i.extend({type:1,skin:"layui-layer-tab"+c("tab"),resize:!1,title:function(){var e=t.length,i=1,a="";if(e>0)for(a='<span class="'+n+'">'+t[0].title+"</span>";i<e;i++)a+="<span>"+t[i].title+"</span>";return a}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,i=1,a="";if(e>0)for(a='<li class="layui-layer-tabli '+n+'">'+(t[0].content||"no content")+"</li>";i<e;i++)a+='<li class="layui-layer-tabli">'+(t[i].content||"no  content")+"</li>";return a}()+"</ul>",success:function(t){var o=t.find(".layui-layer-title").children(),r=t.find(".layui-layer-tabmain").children();o.on("mousedown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var a=i(this),o=a.index();a.addClass(n).siblings().removeClass(n),r.eq(o).show().siblings().hide(),"function"==typeof e.change&&e.change(o)}),"function"==typeof a&&a(t)}},e))},r.photos=function(t,n,a){function o(e,t,i){var n=new Image;return n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,t(n)},void(n.onerror=function(e){n.onerror=null,i(e)}))}var s={};if(t=t||{},t.photos){var l=t.photos.constructor===Object,f=l?t.photos:{},u=f.data||[],d=f.start||0;s.imgIndex=(0|d)+1,t.img=t.img||"img";var y=t.success;if(delete t.success,l){if(0===u.length)return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var p=i(t.photos),h=function(){u=[],p.find(t.img).each(function(e){var t=i(this);t.attr("layer-index",e),u.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(h(),0===u.length)return;if(n||p.on("click",t.img,function(){var e=i(this),n=e.attr("layer-index");r.photos(i.extend(t,{photos:{start:n,data:u,tab:t.tab},full:t.full}),!0),h()}),!n)return}s.imgprev=function(e){s.imgIndex--,s.imgIndex<1&&(s.imgIndex=u.length),s.tabimg(e)},s.imgnext=function(e,t){s.imgIndex++,s.imgIndex>u.length&&(s.imgIndex=1,t)||s.tabimg(e)},s.keyup=function(e){if(!s.end){var t=e.keyCode;e.preventDefault(),37===t?s.imgprev(!0):39===t?s.imgnext(!0):27===t&&r.close(s.index)}},s.tabimg=function(e){if(!(u.length<=1))return f.start=s.imgIndex-1,r.close(s.index),r.photos(t,!0,e)},s.event=function(){s.bigimg.hover(function(){s.imgsee.show()},function(){s.imgsee.hide()}),s.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),s.imgprev()}),s.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),s.imgnext()}),i(document).on("keyup",s.keyup)},s.loadi=r.load(1,{shade:!("shade"in t)&&.9,scrollbar:!1}),o(u[d].src,function(n){r.close(s.loadi),s.index=r.open(i.extend({type:1,id:"layui-layer-photos",area:function(){var a=[n.width,n.height],o=[i(e).width()-100,i(e).height()-100];if(!t.full&&(a[0]>o[0]||a[1]>o[1])){var r=[a[0]/o[0],a[1]/o[1]];r[0]>r[1]?(a[0]=a[0]/r[0],a[1]=a[1]/r[0]):r[0]<r[1]&&(a[0]=a[0]/r[1],a[1]=a[1]/r[1])}return[a[0]+"px",a[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+c("photos"),content:'<div class="layui-layer-phimg"><img src="'+u[d].src+'" alt="'+(u[d].alt||"")+'" layer-pid="'+u[d].pid+'"><div class="layui-layer-imgsee">'+(u.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(a?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(u[d].alt||"")+"</a><em>"+s.imgIndex+"/"+u.length+"</em></span></div></div></div>",success:function(e,i){s.bigimg=e.find(".layui-layer-phimg"),s.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),s.event(e),t.tab&&t.tab(u[d],e),"function"==typeof y&&y(e)},end:function(){s.end=!0,i(document).off("keyup",s.keyup)}},t))},function(){r.close(s.loadi),r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){u.length>1&&s.imgnext(!0,!0)}})})}},o.run=function(t){i=t,n=i(e),l.html=i("html"),r.open=function(e){var t=new s(e);return t.index}},e.layui&&layui.define?(r.ready(),layui.define("jquery",function(t){r.path=layui.cache.dir,o.run(layui.$),e.layer=r,t("layer",r)})):"function"==typeof define&&define.amd?define(["jquery"],function(){return o.run(e.jQuery),r}):function(){o.run(e.jQuery),r.ready()}()}(window);
}
var g_login = 0,g_logout = 0, g_register = 0;
$(function(){
	if($("#areacode").length > 0 && $("#areacode")[0].tagName == "SELECT" && $("#areacode").children('option').length == 0){
		var g_mobile_area_code_json = [{"code":"86","val":"中国大陆(China)"}];
		var g_mobile_area_code_len = g_mobile_area_code_json.length;
		var areacodeHtml = "";
		for (var i = 0; i < g_mobile_area_code_len; i++) {
			areacodeHtml += '<option value="'+g_mobile_area_code_json[i].code+'">'+g_mobile_area_code_json[i].val+'-'+g_mobile_area_code_json[i].code+'</option>';
		}
		$("#areacode").html(areacodeHtml);
	}
	checkuserlogin();
	$('#my_login_form .form_login input').on('keydown',function(e){
	    if(e.keyCode == 13) {
	        login_submit();
	    }
	});
    //添加富媒体
    $('#yxj_fmt_gg').append('<style>#yxj_fmt_gg{overflow: hidden;} #cs_DIV_cscpvrich7893B{width: 300px !important;height: 250px !important;}</style>');
});
//自动登录
function setautologin(obj){
    $(obj).parent().find('span').toggleClass('inpbg');
    $("#myautologin").val(obj.checked?1:0);
}
function checkuserlogin(){
	if($("#my_user_top").length>0){
		var url = myuserhost + "/api/getuserlogin";
		$.ajax({
			url: url,
			//async:false,
			type: "POST",
			dataType:'json',
			xhrFields:{withCredentials:true},
			success: function(data){
				if(data.code == 1){
					var userinfo = '<a href="'+myuserhost+(typeof(data.user.is_mobile) != "undefined" && data.user.is_mobile == 1 ? '/setting' : '/setting/binding')+'"target="_blank" style="padding:0"><img src="'+data.user.avatarstr+'"></a>';
                        userinfo += '<span class="username"><a href="'+myuserhost+(typeof(data.user.is_mobile) != "undefined" && data.user.is_mobile == 1 ? '/setting' : '/setting/binding')+'"target="_blank">'+data.user.nickname+'</a></span>';
                        var msglistlen = typeof(data.user.msglist) == "undefined" ? 0 : data.user.msglist.length;
                        if( msglistlen > 0){
                        	userinfo += '<div class="tixing"><a href="'+myuserhost+'/msg" target="_blank"></a></div>';
							userinfo += '<div class="tx_warp">';
							userinfo += '<div class="tx_warp_bt">';
							userinfo += '<span>消息盒子</span>';
							userinfo += '<a href="javascript:void(0);" class="rit_a" onclick="clearUserallMsg()">清空</a>';
							userinfo += '</div>';
							userinfo += '<div class="tx_warp_box">';
							userinfo += '<div class="list">';
							for(var imsg=0; imsg < msglistlen; imsg++){
								var msgtype = data.user.msglist[imsg]['type'];
								var msglist_type = "消息";
								var msglist_a = myuserhost+'/integral';
								if(msgtype == 2 || msgtype == 3 || msgtype == 4 || msgtype == 7){
									msglist_a = myuserhost+'/comment';
									msglist_type = "评论";
								}
								var msglist_msg = data.user.msglist[imsg].message;
								var matchA = msglist_msg.match(/<a href="(.*?)" target="_blank">(.*?)<\/a>/);
								if(matchA != null && matchA.length == 3){
									msglist_a = matchA[1];
									msglist_msg = msglist_msg.replace(matchA[0],matchA[2]);
								}
								userinfo += '<a href="'+msglist_a+'" target="_blank" '+(imsg == 0 ? ' class="on" ': '')+' onclick="clearUserMsg('+data.user.msglist[imsg]['id']+')"><i>['+msglist_type+']</i><span>'+msglist_msg+'</span></a>';
							}							
							userinfo += '</div>';
							userinfo += '</div>';
							userinfo += '<div class="tx_warp_more"><a href="'+myuserhost+'/msg" target="_blank">查看全部</a></div>';
							userinfo += '</div>';																							
                        }
                        userinfo += '<div class="exitwrap">';
                    	userinfo += '<div class="txwrap"><a href="'+myuserhost+(typeof(data.user.is_mobile) != "undefined" && data.user.is_mobile == 1 ? '/setting' : '/setting/binding')+'" target="_blank"><img src="'+data.user.avatarstr+'"/></a></div>';
                    	userinfo += '<div class="usname"><a href="'+myuserhost+(typeof(data.user.is_mobile) != "undefined" && data.user.is_mobile == 1 ? '/setting' : '/setting/binding')+'" target="_blank" class="name"><span>'+data.user.nickname+'</span>'+(data.user.vip_level > 0 ? ('<i class="_vip_grade vip_ico'+data.user.vip_level+'"></i>') : '')+'</a><a class="jf">积分：'+data.user.integral+'</a></div>';
                    	userinfo += '<ul class="bq_list"><li><a href="'+myuserhost+'/setting">资料</a></li><li><a href="'+myuserhost+'/orders/">订单</a></li><li><a href="'+myuserhost+'/comment">评论</a></li><li><a href="'+myuserhost+'/collection">收藏</a></li></ul>';
                    	userinfo += '<div class="exitbtn">';
                        userinfo += '<div class="list">';
                        userinfo += '<a href="'+myuserhost+'/setting/binding" target="_blank" class="phone'+(typeof(data.user.is_mobile) != "undefined" && data.user.is_mobile == 1 ? ' on' : '')+'"></a>';
                        userinfo += '<a href="'+myuserhost+'/setting/binding" class="weixin'+(typeof(data.user.is_wechat) != "undefined" && data.user.is_wechat == 1 ? ' on' : '')+'"></a>';
                        userinfo += '<a href="'+myuserhost+'/setting/binding" target="_blank" class="qq'+(typeof(data.user.is_qq) != "undefined" && data.user.is_qq == 1 ? ' on' : '')+'"></a>';
                        userinfo += '<a href="'+myuserhost+'/setting/binding" target="_blank" class="weibo'+(typeof(data.user.is_sina) != "undefined" && data.user.is_sina == 1 ? ' on' : '')+'"></a>';
                        userinfo += '</div>';
                        userinfo += '<a href="javascript:void(0);" class="exit" onclick="logout_submit()">[退出]</a>';
                    	userinfo += '</div>';
                		userinfo += '</div>';
						$("#my_user_top").html(userinfo);
					//需要刷新评论的地方
					try {
		                if(typeof setmyctuserlogin === "function") {
		                    setmyctuserlogin(data.user);
		                }
	            	}catch(e){
	            		
	            	}
					//唤起需要刷新登录的
	            	try {
		                if(typeof calluserlogin === "function") {
		                    calluserlogin(data.user.uid, data.user.nickname);
		                }
	            	}catch(e){
	            		
	            	}
	            	//唤起登录状态
	            	try{
	            		if(typeof calluserthird === "function") {
		                    calluserthird(data.user.uid, data.user.nickname, data.data.ticket);
		                }
	            	}catch(e){

	            	}
	            	//唤起需要更新的
	            	try {
		                if(typeof callshopuserinfo === "function") {
		                    callshopuserinfo();
		                }
	            	}catch(e){
	            		
	            	}
				}
			}
		});
	}
}
function openlogin(){
	if($('#my_login_form').is(':hidden')){
		var login =  layer.open({
			type: 1,
			title: false,
			closeBtn:1,
			shadeClose: false,
			area : ['440px' , '547px'],
			content: $('#my_login_form')
	   	});
	}
	if($("#my_login_form .form_login").is(':hidden')){
		$("#my_login_form .form_login").show();
	}
	if($("#my_login_form .form_register").is(':visible')){
		$("#my_login_form .form_register").hide();
	}
}
function openregister(){
	if($('#my_login_form').is(':hidden')){
		var login =  layer.open({
			type: 1,
			title: false,
			closeBtn:1,
			shadeClose: false,
			area : ['440px' , '547px'],
			content: $('#my_login_form')
	   	});
	}
	if($("#my_login_form .form_login").is(':visible')){
		$("#my_login_form .form_login").hide();
	}
	if($("#my_login_form .form_register").is(':hidden')){
		$("#my_login_form .form_register").show();
	}
}
function login_submit(){
	if(g_login){
        alert('正在发送请稍后');
        return false;
	}
	var username = $('#loginname').val();
    var pwd = $('#loginpassword').val();
    $('.Tipsbox').hide();
    if(username == ''){
        $('.Tips-name p').html('请输入手机号或论坛账号');
        $('.Tips-name').show();
        return false;
    }else if(pwd == ''){
        $('.Tips-pswd p').html('请输入密码');
        $('.Tips-pswd').show();
        return false;
    }
   	var url = myuserhost+"/api/login";
   	g_login = 1;
	$.ajax({
		url:url,
		type: "POST",
		data:{username:username, passwd:pwd, autologin:$("#myautologin").val()},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				//唤起登录状态
	           try{
	            	if(typeof calluserthird === "function") {
		                calluserthirdlogin(data.user.uid, data.user.nickname, data.data.ticket);
		            }else{
		            	window.location.reload();
		            }
	          	}catch(e){
	          		window.location.reload();
	           	}
			}else{
				if(typeof(data.filed)!="undefined" && data.filed=="passwd"){
					$('.Tips-pswd p').html(data.msg);
        			$('.Tips-pswd').show();
				}else{
					$('.Tips-name p').html(data.msg);
        			$('.Tips-name').show();
				}
			}
		},
		complete: function(){
			g_login = 0;
		}
	});
}
function logout_submit(){
	if(g_logout){
        alert('正在发送请稍后');
        return false;
	}
	var url = myuserhost+"/api/logout";
	g_logout = 1;
	$.ajax({
		url:url,
		type: "POST",
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
            	window.location.reload();
			}else{
				alert(data.msg);
			}
		},
		complete: function(){
			g_logout = 0;
		}
	});
}
//QQ 登录
function qq_login(){
    if($("#myreferurl").length>0){
        var url = myuserhost + "/login/qq?referer="+encodeURIComponent($("#myreferurl").val());
    }else{
        var url = myuserhost + "/login/qq?referer="+encodeURIComponent(getParentUrl());
    }
    window.open(url,'_top');
}
//微信登录
function wechat_login(){
    if($("#myreferurl").length>0){
        var url = myuserhost + "/login/wechat?referer="+encodeURIComponent($("#myreferurl").val());
    }else{
        var url = myuserhost + "/login/wechat?referer="+encodeURIComponent(getParentUrl());
    }
    window.open(url, '_top');
}
//微博登录
function sina_login(){
    if($("#myreferurl").length>0){
        var url = myuserhost + "/login/sina?referer="+encodeURIComponent($("#myreferurl").val());
    }else{
        var url = myuserhost + "/login/sina?referer="+encodeURIComponent(getParentUrl());
    }
    window.open(url, '_top');
}
//清空会员消息提醒页面顶部个人消息列表
function clearUserallMsg(){
	clearUserMsg('all');
}
//清空指定的页面顶部个人消息列表
function clearUserMsg(id){
	var url = myuserhost+"/api/clearusermsg";
	$.ajax({
		url:url,
		type: "POST",
		async: false,//使用同步的方式,true为异步方式,这里需要设置成false,不然跳转页面乱码
		data:{id:id},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			//if(data.code == 1){
			//}else{
				//alert(data.msg);
			//}
		}
	});
}
/*注册相关*/
//登录页面
$(function () {
    //判断用户名
    var r2 = '';
    var str2 = '';
    var r = '';
    var str3 = '';
    $("#loginname").blur(function () {
        var str = trim($("#loginname").val());
        if (str.length >=0) {
            //var ter = /^[\u4e00-\u9fffa-zA-Z0-9\.\@\!\#\$\%\^\&\*\(\)\_]{5,20}$/;
            //r = ter.test(str);
            if (str != '') {
                $('.Tips-name').hide()
                $('.Tipsbox_yes.Tips_name').show()
            } else {
                $('.Tips-name').show()
                $('.Tipsbox_yes.Tips_name').hide()
            }
        } else {
            $('.Tips-name').show()
            $('.Tipsbox_yes.Tips_name').hide()
        }
    });
    //判断密码
    $("#loginpassword").blur(function () {
        var str2 = trim($("#loginpassword").val());
        if (str2.length != 0) {
            //var reg = /^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,18}$/i;
            //r2 = reg.test(str2);
            if (str2 != '') {
                $('.Tips-pswd').hide()
                $('.Tipsbox_yes.Tips_pswd').show()
            } else {
                $('.Tips-pswd').show()
                $('.Tipsbox_yes.Tips_pswd').hide()
            }
        } else {
            $('.Tips-pswd').show()
            $('.Tipsbox_yes.Tips_pswd').hide()
        }
    });
});
//手机验证码反馈 tips
var feedback_1 = null, feedback_2 = null;
function show_feedback(){
	feedback_1 = layer.open({
        type: 1,
        title: false,
        skin: 'fk_tips', //样式类名
        closeBtn: 1, //不显示关闭按钮
        anim: 2,
        shadeClose: true, //开启遮罩关闭
        content: '<div class="fedbk">反馈</div><input value="" required="required" autocomplete="off" requiredtitle="请输入收不到验证码的手机(国际区号-手机号)" patterntitle="请输入收不到验证码的手机(国际区号-手机号)" class="" type="text" name="feedmobile" id="feedmobile" placeholder="请输入收不到验证码的手机(国际区号-手机号)"><div class="clos_tips" onclick="sub_feedback()">提交</div>',
    });
}
function sub_feedback(){
	var msg = sendmobilefeed();
    layer.close(feedback_1)
    $('.clos_tips').unbind()
    feedback_2 = layer.open({
        type: 1,
        title: false,
       	skin: 'fk_tips', //样式类名
        closeBtn: 1, //不显示关闭按钮
        anim: 2,
        shadeClose: true, //开启遮罩关闭
        content: msg
    });
}
function close_feedback(){
	layer.close(feedback_2);
}
//反馈手机失败方法
function sendmobilefeed(){
    var url= myuserhost + "/api/mobilefeed";
    var mobile = $("#feedmobile").val();
    var msg = '<p>感谢您的反馈，</br>我们将尽快修复问题。</p><div class="clos_tips" onclick="close_feedback()">关闭</div>';
    $.ajax({
        url: url,
        async:false,
        type: "POST",
        data:{mobile:mobile},
        dataType:'json',
        success: function(data){
            if(data.code == 1){
                msg = '<p>感谢您的反馈，</br>我们将尽快修复问题。</p><div class="clos_tips" onclick="close_feedback()">关闭</div>';
            }else{
                if(data.msg != ""){
                    msg = '<p>'+data.msg+'</p><div class="clos_tips" onclick="close_feedback()">关闭</div>';
                } else {
                    msg = '<p>反馈失败,<br/>请稍后重试。</p><div class="clos_tips" onclick="close_feedback()">关闭</div>';
                }
            }
        }
    });
    return msg;
}
function show_tip(dom,text,state){
    dom.parent().find('.tips_lis').remove();
    if(state ==0){
        dom.parent().append('<div class="tips_yese"></div>');
    }else if(state==1){
        dom.parent().append('<div class="tips_lis"><p><i></i><span class="tips_txt">'+text+'</span></p></div>');
        dom.addClass('red_c')
    }
    dom.on('keyup',function(){
        dom.parent().find('.tips_lis').remove();
        dom.removeClass('red_c')
        dom.off('keyup');
    });
}
//注册页面
$(function(){
    $("#mobile").blur(function(){
        var mobile = $('#mobile');
        $('#mobile').parent().find('.tips_lis').remove();
        if(mobile.val() == ''){
            show_tip(mobile,'请输入手机号',1);
            return false;
        }else if(mobile.val().substring(0,1)=="0"){
            show_tip(mobile, '请将手机号第一位"0"去掉');
            return false;
        }else if(!/^\d+$/.test(mobile.val())){
            show_tip(mobile,'请输入正确手机号码',1);
            return false;
        }
        checkmobile(mobile,$('#mobile').val());
    });
    $("#passwd").blur(function(){
        var passwd = $('#passwd');
        $('#passwd').parent().find('.tips_lis').remove();
        if(passwd.val().length < 6 || passwd.val().length > 20){
            show_tip(passwd,'请输入密码（6-18位字母、数字、符号）',1);
            return false;
        }
    });
    $("#checkpasswd").blur(function(){
        var checkpasswd = $('#checkpasswd');
        var passwd = $('#regpasswd');
        $('#checkpasswd').parent().find('.tips_lis').remove();
        if(checkpasswd.val()==""){
            show_tip(checkpasswd,'请再次输入密码',1);
            return false;
        }else if(passwd.val() != checkpasswd.val()){
            show_tip(checkpasswd,'（两次密码不一致）',1);
            return false;
        }
    });
    $("#validate").blur(function(){
        var validate = $('#validate');
        $('#validate').parent().find('.tips_lis').remove();
        if(validate.val()==""){
            show_tip(validate,'请输入验证码',1);
            return false;
        }
    });
});
//注册验证
function reg_submit(){
    $('.infowrap .tips_lis').remove();
    var areacode = $('#areacode');
    var vcode = $('#validate');
    var pwd = $('#regpasswd');
    var cpwd = $('#checkpasswd');
    var mobile = $('#mobile');
    if(mobile.val() == ''){
        show_tip(mobile,'请输入手机号',1);
        return false;
    }else if(mobile.val().substring(0,1)=="0"){
        show_tip(mobile, '请将手机号第一位"0"去掉');
        return false;
    }else if(!/^\d+$/.test(mobile.val())){
        show_tip(mobile,'请输入正确手机号码',1);
        return false;
    }else if(pwd.val() == ''){
        show_tip(mobile,'',0);
        show_tip(pwd,'请输入密码',1);
        return false;
    }else if(pwd.val().length < 6 || pwd.val().length > 20){
        show_tip(pwd,'密码应为6~20位之间',1);
        return false;
    }else if(cpwd.val() == ''){
        show_tip(mobile,'',0);
        show_tip(pwd,'',0);
        show_tip(cpwd,'请再次输入密码',1);
        return false;
    }else if(pwd.val() != cpwd.val()){
        show_tip(mobile,'',0);
        show_tip(pwd,'',0);
        show_tip(cpwd,'两次密码不一致',1);
        return false;
    }else if(vcode.val() == ''){
        show_tip(mobile,'',0);
        show_tip(pwd,'',0);
        show_tip(cpwd,'',0);
        show_tip(vcode,'请输入验证码',1);
        return false;
    }
    var url = myuserhost+"/api/register";
   	g_register = 1;
	$.ajax({
		url:url,
		type: "POST",
		data:{areacode:areacode.val(), mobile:mobile.val(), passwd:pwd.val(), checkpasswd:cpwd.val(), validate:vcode.val()},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
            	if(data.isreg == 1){
            		layer.msg("注册成功");
            	}else{
            		layer.msg("请先退出再注册");
            	}
            	setTimeout("reg_success()",500);
			}else{
				if(typeof(data.filed)!="undefined" && data.filed=="areacode"){
					show_tip(areacode,data.msg,1);
				}
				if(typeof(data.filed)!="undefined" && data.filed=="mobile"){
					show_tip(mobile,data.msg,1);
				}
				if(typeof(data.filed)!="undefined" && data.filed=="passwd"){
					show_tip(pwd,data.msg,1);
				}
				if(typeof(data.filed)!="undefined" && data.filed=="checkpasswd"){
					show_tip(cpwd,data.msg,1);
				}
				if(typeof(data.filed)!="undefined" && data.filed=="validate"){
					show_tip(vcode,data.msg,1);
				}
			}
		},
		complete: function(){
			g_register = 0;
		}
	});
}
function reg_success(){
	layer.close();
    window.location.reload();
}
//验证手机号是否合法
function checkmobile(dom,mobile){
    var url= myuserhost + "/api/checkmobile";
    var areacode = $("#areacode").val();
    var msg = "",findpasswd=0;
    if($('#findpasswd').length > 0){
        findpasswd = 1;
    }
    $.ajax({
        url: url,
        async:false,
        type: "POST",
        data:{areacode:areacode,mobile:mobile},
        dataType:'json',
        success: function(data){
            if(data.code == 1){
            }else{
                if(data.msg != ""){
                    msg = data.msg;
                }else{
                    msg = "请输入正确手机号码";
                }
                if(findpasswd == 0 || data.code != 24 ){
                    show_tip(dom,msg,1);
				}
            }
        }
    });
    return true;
}
function get_regsms(){
    $('.infowrap .tips_lis').remove();
    var pwd = $('#regpasswd');
    var cpwd = $('#checkpasswd');
    var mobile = $('#mobile');
    if(mobile.val() == ''){
        show_tip(mobile,'请输入手机号',1);
        return false;
    }else if(mobile.val().substring(0,1)=="0"){
        show_tip(mobile, '请将手机号第一位"0"去掉');
        return false;
    }else if(!/^\d+$/.test(mobile.val())){
        show_tip(mobile,'请输入正确手机号码',1);
        return false;
    }else if(pwd.val() == ''){
        show_tip(mobile,'',0);
        show_tip(pwd,'请输入密码',1);
        return false;
    }else if(pwd.val().length < 6 || pwd.val().length > 20){
        show_tip(pwd,'密码应为6~20位之间',1);
        return false;
    }else if(cpwd.val() == ''){
        show_tip(mobile,'',0);
        show_tip(pwd,'',0);
        show_tip(cpwd,'请再次输入密码',1);
        return false;
    }else if(pwd.val() != cpwd.val()){
        show_tip(mobile,'',0);
        show_tip(pwd,'',0);
        show_tip(cpwd,'两次密码不一致',1);
        return false;
    }
    $('#validate_btn').addClass('time_bg');
    $('#validate_btn').unbind('click');
    var  time =60;
    var time60 = setInterval(function(){
        time = time-1
        if(time==0){
            time= 0
        }
        $('#validate_btn').html('重新发送('+time+'S)')
        if(time==0){
            clearInterval(time60)
            $('#validate_btn').removeClass('time_bg');
            $('#validate_btn').on('click',function(){
                get_regsms();
            });
        }
    },1000);
    var url= myuserhost + "/api/sendsms";
    var areacode = $("#areacode").val();
    $.ajax({
        url: url,
        async:false,
        type: "POST",
        data:{areacode:areacode,mobile:mobile.val(),act:1},
        dataType:'json',
        success: function(data){
            if(data.code == 1){
                alert("验证码发送成功，请注意查收");
            }else{
                var msg = "";
                if(data.msg != ""){
                    msg = data.msg;
                }else{
                    msg = "验证码发送失败";
                }
                show_tip(mobile,msg,1);
            }
        },
        complete: function(){
            clearInterval(time60)
            $('#validate_btn').removeClass('time_bg');
            $('#validate_btn').on('click',function(){
                get_regsms();
            });
        }
    });
}
//去左右空格;
function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

$(".header_wrap .header button").css({"background":"#f19149"});
$(".header_wrap .header input").css({"background":"#f2f2f2","border-color":"#dbdbdb"});
$(".Tonglan").css("width","1200px");

function getParentUrl() { 
    var url = "";
    if (parent !== window) { 
        try {
           url = parent.location.href; 
        }catch (e) { 
           url = document.referrer; 
        } 
    }else{
    	url = window.parent.location.href; 
    }
    return url;
}