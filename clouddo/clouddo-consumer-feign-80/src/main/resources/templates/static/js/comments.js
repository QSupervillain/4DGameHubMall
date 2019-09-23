var myuserhost = "https://my.3dmgame.com";
var g_loginuserid = 0,g_posting=0,g_repling=0,g_praising=0,g_report=0,g_pagereport=0,zhztid=0,placemsg='点评一下...';
var g_comment_list = new Array();
var g_user_info = {uid:0,nickname:'',avatarstr:'',gender:1,regionstr:'',title:'',title_level:0};
var g_ct_order = "";
//好友数组
var g_friends_flag = false;
var g_lastconcat_arr=[];
var g_friends_arr=[
    {"name":"a","list":[]},
    {"name":"b","list":[]},
    {"name":"c","list":[]},
    {"name":"d","list":[]},
    {"name":"e","list":[]},
    {"name":"f","list":[]},
    {"name":"j","list":[]},
    {"name":"h","list":[]},
    {"name":"i","list":[]},
    {"name":"j","list":[]},
    {"name":"k","list":[]},
    {"name":"l","list":[]},
    {"name":"m","list":[]},
    {"name":"n","list":[]},
    {"name":"o","list":[]},
    {"name":"p","list":[]},
    {"name":"q","list":[]},
    {"name":"r","list":[]},
    {"name":"s","list":[]},
    {"name":"t","list":[]},
    {"name":"u","list":[]},
    {"name":"v","list":[]},
    {"name":"w","list":[]},
    {"name":"x","list":[]},
    {"name":"y","list":[]},
    {"name":"z","list":[]},
    {"name":"#","list":[]},
];
$(function(){
	init();//初始化
	var Cs_W = $('#Comments_wrap').width();
	$(window).resize(function(){
		Cs_W = $('#Comments_wrap').width();
		W_resize();	
	});
	W_resize();
	if($('#zhztid').length > 0){
		zhztid = $('#zhztid').val();
        placemsg = 'E3你怎么看？';
	}
	if($(".Ct_sel_order").length > 0){
		$(".Ct_sel_order a").click(function(){
			$(".Ct_sel_order a").removeClass('on');
			var ct_order = "";
			if($(this).html() == "最早"){
				ct_order = "time";
			}
			if(g_ct_order == ct_order){
				return true;
			}else{
				g_ct_order = ct_order;
				getpostlist(1);
			}
			$(this).addClass('on');
		});
	}
});
//展示回复的隐藏楼层
function showfloor(obj){
	$(obj).parent('.floor_item').siblings('.floor_item').show();
	$(obj).parent('.floor_item').remove();
}
//展示隐藏的评论内容
function showdetail(obj){
	$(obj).parent().css('max-height','none');
	$(obj).remove();
}
function W_resize(){
	var Cs_W = $('#Comments_wrap').width();
	$('.Cslis_wrap .cont_w').css('width',Cs_W - 82 +'px');
	$('.Cslis_wrap .cont-name p').css('width',Cs_W - 195 +'px');
}
function init(){
	//获取评论列表
	$('#Ct_top_total').text(0);
	initpostlist(0);
	//获取收藏状态
	getcollection();
	//获取文章举报状态
	getpagereport();
	//举报关闭框
	$(".Cs_report .Cs_report_show .close").click(function(){
		$('.Cs_report_show').hide()
	});
	$("#Ct_content").focus(function(){
		  $(".friendsBox").hide();//关闭@耗油
		$(".popFaceBox").hide();//关闭表情框
		hide_open_reply();
	});
	$("body").on("click", function(){
		$(".popFaceBox").hide();//关闭表情框
		  $(".friendsBox").hide();//关闭@耗油
	});

	
}
//显示好友弹框
function friends(obj,evt){
	$(".popFaceBox").hide();//关闭表情框
    $(obj).parents(".friends_warp").find(".friendsBox").show();
    stopNextEvent(evt);
}

function setmyctuserlogin(user){
	g_loginuserid = user.uid;
	$("#Ct_login").html('<div class="tx"><img src="'+user.avatarstr+'"/></div><div class="name">'+user.nickname+'</div>');
	$("#Ct_login").addClass('user_tx');
	$("#Ct_content").attr('placeholder', placemsg);
    $("#Ct_content").attr('onfocus', 'this.placeholder=""');
    $("#Ct_content").attr('onfocusout', 'this.placeholder="'+placemsg+'"');
    if($("#Comments_wrap .Cs_postwrap .txtwrap .poswrap .popFace").length < 1){
    	$("#Comments_wrap .Cs_postwrap .txtwrap .poswrap .postbtn").before(getCtFaceBox());
    	getFriends();
    }
	set_g_userinfo(user);
}
function ct_login(){
	var username = trim($("#username").val());
	var passwd = trim($("#passwd").val());
	if(username == ''){
		$("#username").focus();
		return false;
	}
	if(passwd == ''){
		$("#passwd").focus();
		return false;
	}
	posting = 1;
	var url = myuserhost + "/api/login";
	$.ajax({
		url:url,
		type: "POST",
		data:{username:username, passwd:passwd},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				$("#Ct_login").html('<div class="tx"><img src="'+data.user.avatarstr+'"/></div><div class="name">'+data.user.nickname+'</div>');
				$("#Ct_login").addClass('user_tx');
                $("#Ct_content").attr('placeholder', placemsg);
                $("#Ct_content").attr('onfocus', 'this.placeholder=""');
                $("#Ct_content").attr('onfocusout', 'this.placeholder="'+placemsg+'"');
            	if($("#my_user_top").length>0){
            		var userinfo = '<img src="'+data.user.avatarstr+'">';
                    userinfo += '<span class="username">'+data.user.nickname+'</span>';
					userinfo += '<div class="exitwrap">';
					userinfo += '<div class="txwrap"><a href="'+myuserhost+'/setting/binding" target="_blank"><img src="'+data.user.avatarstr+'"/></a></div>';
					userinfo += '<div class="usname"><a href="'+myuserhost+'/setting/binding" target="_blank">'+data.user.nickname+'</a></div>';
					userinfo += '<div class="signature">'+data.user.personalized+'</div>';
					userinfo += '<div class="exitbtn">';
					userinfo += '<div class="list">';
					userinfo += '<a href="'+myuserhost+'/setting/binding" target="_blank" class="phone'+(typeof(data.user.is_mobile) != "undefined" && data.user.is_mobile == 1 ? ' on' : '')+'"></a>';
					userinfo += '<a href="'+myuserhost+'/setting/binding" target="_blank" class="weixin'+(typeof(data.user.is_wechat) != "undefined" && data.user.is_wechat == 1 ? ' on' : '')+'"></a>';
					userinfo += '<a href="'+myuserhost+'/setting/binding" target="_blank" class="qq'+(typeof(data.user.is_qq) != "undefined" && data.user.is_qq == 1 ? ' on' : '')+'"></a>';
					userinfo += '<a href="'+myuserhost+'/setting/binding" target="_blank" class="weibo'+(typeof(data.user.is_sina) != "undefined" && data.user.is_sina == 1 ? ' on' : '')+'"></a>';
					userinfo += '</div>';
					userinfo += '<a href="javascript:void(0);" class="exit" onclick="logout_submit()">[退出]</a>';
					userinfo += '</div>';
					userinfo += '</div>';
					$("#my_user_top").html(userinfo);
            	}
            	if($("#Comments_wrap .Cs_postwrap .txtwrap .poswrap .popFace").length < 1){
			    	$("#Comments_wrap .Cs_postwrap .txtwrap .poswrap .postbtn").before(getCtFaceBox());
			    	getFriends();
			    }
            	set_g_userinfo(data.user);
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
			}else{
				alert(data.msg);
			}
			posting = 0;
		}
	});
}
//初始化评论列表
function initpostlist(refresh){
	var page = 1;
	var maxid = 0;
	var total = 0;
	var sid = 0;
	var pagesize = 20;
	var url = myuserhost + "/api/postlist";
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url: url,
		//async:false,
		type: "POST",
		data:{maxid:maxid,total:total,page:page,pagesize:pagesize,pageurl:pageurl,isinit:1},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1 && typeof(data.data) != "undefined" && typeof(data.data.list) != "undefined"){
				var totalpage = 1;
				var ct_position = 1;
				g_comment_list = new Array();
				total = parseInt(data.data.total);
				totalpage = data.data.total>pagesize ? Math.ceil(total/pagesize) : 1;
				if($("#Ct_maxid").length > 0){
					$("#Ct_maxid").val(data.data.maxid);
					$("#Ct_totalnum").val(total);
					$("#Ct_sid").val(data.data.sid);
					$("#Ct_totalpage").val(totalpage);
					$("#Ct_nowpage").val(page);
				}else{
					var str = '<input type="hidden" id="Ct_maxid" value="'+data.data.maxid+'" />';
					str += '<input type="hidden" id="Ct_totalnum" value="'+total+'" />';
					str += '<input type="hidden" id="Ct_sid" value="'+data.data.sid+'" />';
					str += '<input type="hidden" id="Ct_totalpage" value="'+totalpage+'" />';
					str += '<input type="hidden" id="Ct_nowpage" value="'+page+'"/>';
					$("#Comments_wrap").append(str);
				}
				$("#Ct_total").html('（<i>'+data.data.total_uid+'</i>人参与，<i>'+total+'</i>条评论）');
				if($("#Ct_top_total").length>0){
					$("#Ct_top_total").html(data.data.total_uid);
				}
				if(typeof(data.data.hotlist) != "undefined"  && data.data.hotlist.length>0){
					var hotstr = "";
                    var len = data.data.hotlist.length;
                    for(var i=0; i<len; i++){
                        hotstr += getCommentsHtml(data.data.hotlist[i],'');
                        g_comment_list[data.data.hotlist[i]['id']] = data.data.hotlist[i];
                    }
                    if(hotstr != ""){
                      	$("#Cslis_wrap_hot").html(hotstr);
                       	$("#Comments_wrap_div").show();
                    }
                }
                $("#Cslis_wrap").html('');
				if(data.data.list.length>0){
					var str = "";
					var len = data.data.list.length;
					for(var i=0; i<len; i++){
						str += getCommentsHtml(data.data.list[i],'');
						g_comment_list[data.data.list[i]['id']] = data.data.list[i]; 
						ct_position = data.data.list[i].position;
					}
					$("#Cslis_wrap").append(str);
					$("#Ct_norecord").remove();
				}
				if(page<totalpage && data.data.list.length>0 && ct_position > 1){
					if($("#Ct_more").length<1){
						$("#Comments_wrap").append('<div id="Ct_more" onclick="morepost()">查看更多&nbsp;(<span>'+(data.data.total-page*pagesize)+'</span>)</div>');
					}else{
						$("#Ct_more").html('查看更多&nbsp;(<span>'+(total-page*pagesize)+'</span>)');
					}
				}else{
					$("#Ct_more").remove();
				}
				if(refresh == 1){
					if($(".Ct_sel_order").length > 0){
						$(".Ct_sel_order a").removeClass('on');
						g_ct_order = "";
						$(".Ct_sel_order").children(":first").addClass('on');
					}
					var nav_num = document.getElementsByClassName('commentswrap')[0].offsetTop
					$("body,html").animate({scrollTop:nav_num - 200},400);
				}
			}else if(data.code==37){
				$("#Ct_norecord i").css('background','none');
				$("#Ct_norecord i").html(data.msg);
			}
		}
	});
}
//获取评论列表
function getpostlist(page){
	var maxid = 0;
	var total = 0;
	var sid = 0;
	var pagesize = 20;
	if($("#Ct_maxid").length>0){
		maxid = $("#Ct_maxid").val();
	}
	if($("#Ct_totalnum").length>0){
		total = $("#Ct_totalnum").val();
	}
	if($("#Ct_sid").length>0){
		sid = $("#Ct_sid").val();
	}
	var url = myuserhost + "/api/postlist";
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url: url,
		//async:false,
		type: "POST",
		data:{maxid:maxid,total:total,page:page,pagesize:pagesize,pageurl:pageurl,ordertype:g_ct_order},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1 && typeof(data.data) != "undefined" && typeof(data.data.list) != "undefined"){
				var totalpage = 1;
				var ct_position = 1;
				totalpage = $("#Ct_totalpage").val();
				$("#Ct_nowpage").val(page);
				if(page == 1){
					$("#Cslis_wrap").html('');
				}
				if(data.data.list.length>0){
					var str = "";
					var len = data.data.list.length;
					for(var i=0; i<len; i++){
						str += getCommentsHtml(data.data.list[i],'');
						g_comment_list[data.data.list[i]['id']] = data.data.list[i]; 
						ct_position = data.data.list[i].position;
					}
					$("#Cslis_wrap").append(str);
					$("#Ct_norecord").remove();
				}
				if(page<totalpage && data.data.list.length>0 && ct_position > 1){
					if($("#Ct_more").length<1){
						$("#Comments_wrap").append('<div id="Ct_more" onclick="morepost()">查看更多&nbsp;(<span>'+(data.data.total-page*pagesize)+'</span>)</div>');
					}else{
						$("#Ct_more").html('查看更多&nbsp;(<span>'+(total-page*pagesize)+'</span>)');
					}
				}else{
					$("#Ct_more").remove();
				}
			}else if(data.code==37){
				$("#Ct_norecord i").css('background','none');
				$("#Ct_norecord i").html(data.msg);
			}
		}
	});
}
//评论分页查看更多
function morepost(){
	if($("#Ct_nowpage").length>0){
		var page = parseInt($("#Ct_nowpage").val());
		page += 1;
		getpostlist(page);
	}else{
		return false;
	}
}

//防止js注入
function htmlEncodeJQ ( str ) {
    return $('<span/>').text( str ).html();
}

//发布评论
function ct_post(){
	if(g_posting){
		alert('发送中，请稍后。。。');
		return false;
	}
	var url = myuserhost + "/api/post";
	var content = htmlEncodeJQ(trim($("#Ct_content").val())+ ' ');//防止最后一个@好友空格去掉
	var len = content.length;
	if(len<1){
		alert("评论内容太少了");
		return false;
	}
	if(len>1000){
		alert("评论内容已超出最大长度1000字");
		return false;
	}
	g_posting = 1;
	var sid = 0;
	if($("#Ct_sid").length>0){
		sid = $("#Ct_sid").val();
	}
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url:url,
		type: "POST",
		data:{content:content,sid:sid,pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				$("#Ct_content").val('');
				if(data.checkflag){
					alert('发布成功，需要等待系统审核');
					return false;
				}
				initpostlist(1);
				//set_g_comment_post(data.id,content,data.position);
				//var str = getCommentsHtml(g_comment_list[data.id],content);
				//$("#Ct_norecord").remove();
				//$("#Cslis_wrap").prepend(str);
				//if($("#Ct_sid").length==0){
				//	sidstr = '<input type="hidden" id="Ct_sid" value="'+data.sid+'" />';
				//	$("#Comments_wrap").append(sidstr);
				//}
			}else if(data.code == 9){
				openlogin();
			}else{
				alert(data.msg);
				if(typeof data.url !== "undefined"){
					top.location.href = myuserhost + data.url;
				}
			}
		},
		complete: function(){
			g_posting = 0;
		}
	});
}
//回复
function show_reply(obj){
	$(".popFaceBox").hide();//关闭表情框
	if(!$(obj).hasClass('replybtn2')){
		hide_open_reply();
		var t_wrap = $(obj).parent('.praise_btn').parent('.cont-address');
		t_wrap.find('.replybtn').toggle();
		t_wrap.next('.reply_wrap').slideDown();
	}else{
		var t_wrap = $(obj).parent('.praise_btn').parent('.cont-address');
		t_wrap.find('.replybtn').toggle();
		t_wrap.next('.reply_wrap').stop().slideUp();
	}
}
//l楼中楼回复
function show_reply_list(obj){	
	$(".popFaceBox").hide();//关闭表情框
	if(!$(obj).hasClass('replybtn2')){
		hide_open_reply();
		var t_wrap = $(obj).parents('.praise_btn').parents('.floor_item');
		t_wrap.find('.replybtn').toggle();
		t_wrap.find('.reply_wrap').slideDown();
	}else{
		var t_wrap = $(obj).parents('.praise_btn').parents('.floor_item');
		t_wrap.find('.replybtn').toggle();
		t_wrap.find('.reply_wrap').stop().slideUp();
	}
}
//关闭所有已展开的回复
function hide_open_reply(){
	//直接回复
	$(".cont-address .replybtn2:visible").each(function(){
		var show_wrap = $(this).parent('.praise_btn').parent('.cont-address');
		show_wrap.find('.replybtn').toggle();
		show_wrap.next('.reply_wrap').stop().slideUp();
	});
	//楼中楼回复
	$(".floor_item .replybtn2:visible").each(function(){
		var show_wrap = $(this).parents('.praise_btn').parents('.floor_item')
		show_wrap.find('.replybtn').toggle();
		show_wrap.find('.reply_wrap').stop().slideUp();
	});
}
//直接回复
function ct_reply(obj,id) {
	if(g_repling){
		alert('发送中，请稍后。。。');
		return false;
	}
	var url = myuserhost + "/api/reply";
	var content = htmlEncodeJQ( $(obj).parent().find('.reply_info').val() );
	var len = content.length;
	if(len<1){
		alert("回复内容太少了");
		return false;
	}
	if(len>1000){
		alert("回复内容已超出最大长度1000字");
		return false;
	}
	g_repling = 1;
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url:url,
		type: "POST",
		data:{content:content, id:id, pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				show_reply($(obj).parent().parent().find('.replybtn2'));
				if(data.checkflag){
					alert('回复成功，需要等待系统审核');
					return false;
				}
				initpostlist(1);
				//set_g_comment_reply(data.id,content,data.position,id);
				//var str = getCommentsHtml(g_comment_list[data.id],content);
				//$("#Ct_norecord").remove();
				//$("#Cslis_wrap").prepend(str);
				//if($("#Ct_sid").length==0){
				//	sidstr = '<input type="hidden" id="Ct_sid" value="'+data.sid+'" />';
				//	$("#Comments_wrap").append(sidstr);
				//}
			}else if(data.code == 9){
				openlogin();
			}else{
				alert(data.msg);
				if(typeof data.url !== "undefined"){
					top.location.href = myuserhost + data.url;
				}
			}
		},
		complete: function(){
			g_repling = 0;
		}
	});
}
//楼中楼回复
function ct_reply_list(obj,id,listid) {
	if(g_repling){
		alert('发送中，请稍后。。。');
		return false;
	}
	var url = myuserhost + "/api/reply";
	var content = htmlEncodeJQ( $(obj).parent().find('.reply_info').val() );
	var len = content.length;
	if(len<1){
		alert("回复内容太少了");
		return false;
	}
	if(len>1000){
		alert("回复内容已超出最大长度1000字");
		return false;
	}
	g_repling = 1;
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url:url,
		type: "POST",
		data:{content:content, id:id, pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				show_reply_list($(obj).parent().parent().find('.replybtn2'));
				if(data.checkflag){
					alert('回复成功，需要等待系统审核');
					return false;
				}
				initpostlist(1);
				//set_g_comment_reply_list(data.id,content,data.position,id,listid);
				//var str = getCommentsHtml(g_comment_list[data.id],content);
				//$("#Ct_norecord").remove();
				//$("#Cslis_wrap").prepend(str);
				//if($("#Ct_sid").length==0){
				//	sidstr = '<input type="hidden" id="Ct_sid" value="'+data.sid+'" />';
				//	$("#Comments_wrap").append(sidstr);
				//}
			}else if(data.code == 9){
				openlogin();
			}else{
				alert(data.msg);
				if(typeof data.url !== "undefined"){
					top.location.href = myuserhost + data.url;
				}
			}
		},
		complete: function(){
			g_repling = 0;
		}
	});
}
//点赞
function praise(obj,ctid,type){
	if(g_praising){
		alert('发送中，请稍后。。。');
	}
	var url = myuserhost + "/api/praise";
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url:url,
		type: "POST",
		data:{id:ctid, type:type, pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				if(data.add==1){
					$(obj).addClass('on');
					var nm = $(obj).find('u').html();
					$(obj).find('u').html(parseInt(nm)+1);
				}else{
					if(data.type == type){
						$(obj).addClass('on')
					}else{
						$(obj).parent().find('.zan_cai').addClass('on');
						$(obj).removeClass('on');
					}
				}
				$(obj).parent().find('.zan_cai').removeAttr('onclick');
			}else if(data.code == 9){
				openlogin();
			}else{
				alert(data.msg);
				if(typeof data.url !== "undefined"){
					top.location.href = myuserhost + data.url;
				}
			}
		},
		complete: function(){
			g_praising = 0;
		}
	});
}
function getCommentsHtml(data,content){
	var str = '<div class="Cslis_item'+(data.user.nickname == '3DM官方账号' ? ' Official' : '')+'">';
		str += '<div class="cont-head">';
		str += '<a href="'+getUserHome(data.user.uid)+'" class="tx" target="_blank"><img src="'+data.user.avatarstr+'"/></a>';
		str += '<div class="cont-floor">第<span>'+data.position+'</span>楼</div>';
		if(typeof(data.follow) != "undefined" && data.follow == 1){
			str += '<div class="follow_box on" onclick="follow_personal(this, '+data.user.uid+')"></div>';
		}else if(typeof(data.follow) == "undefined" || data.follow != -1){
			str += '<div class="follow_box" onclick="follow_personal(this, '+data.user.uid+')"></div>';
		}
		str += '</div>';
		str += '<div class="cont-name cont_w">';
		str += '<p>';
		str += '<a href="'+getUserHome(data.user.uid)+'" target="_blank"><span>'+data.user.nickname+'</span></a>';
		if(typeof data.user.vip_level != "undefined" && data.user.vip_level > 0){
			str += '<a href="https://yeyou.3dmgame.com/vip/index" target="_blank" class="_vip_grade vip_ico'+data.user.vip_level+'"></a>';
		}else{
			str += '<a href="javascript:void(0);" class="tx_box tx_color'+data.user.title_level+'">'+data.user.title+'</a>';
		}
		str += '</p>';
		str += '<div class="cont-time">'+data.time+'</div>';
		str += '</div>';
		if(data.replies.length>0){
			str += '<div class="floor_wrap cont_w">';
			str += getReplies(data.replies,data.id);
			str += '</div>';
		}
		str += '<div class="cont-message cont_w">';
		var nowcontent = content!='' ? content: data.content;
		if(nowcontent.length>=200){
			str += '<div class="cont-txt" style="max-height: 72px;">'+replaceFaceContent(nowcontent)+'<span class="conttxt-mor" onclick="showdetail(this)">...<span>查看更多</span></span></div>';
		}else{
			str += '<div class="cont-txt">'+replaceFaceContent(nowcontent)+'</div>';
		}
		str += '</div>';
		str += '<div class="cont-address cont_w">';
		str += '<p>'+data.user.regionstr+'网友</p>';
		str += '<div class="praise_btn">';
		if(typeof(data.praise)!="undefined" && (data.praise==1 || data.praise==2)){
			str += '<p class="zan_cai'+(data.praise == 1 ? ' on': '')+'"><i class="zan"></i><u>'+data.goodcount+'</u></p>';
		}else{
			str += '<p class="zan_cai" onclick="praise(this,'+data.id+',1)"><i class="zan"></i><u>'+data.goodcount+'</u></p>';
		}
		if(typeof(data.report)!="undefined" && data.report==1){
			str += '<p class="jingao on"><i class="ico_jingao" ></i><u>举报</u></p>';
		}else{
			str += '<p class="jingao"  onclick="jingao(this,'+data.id+')"><i class="ico_jingao" ></i><u>举报</u></p>';
		}
		str += '<div class="replybtn" onclick="show_reply(this)">回复</div>';
		str += '<div class="replybtn replybtn2" onclick="show_reply(this)">取消回复</div>';
		str += '</div>';
		str += '</div>';
		str += '<div class="reply_wrap cont_w">';
		str += '<input type="text" class="reply_info" value="" onfocus="this.placeholder=\'\'" onfocusout="this.placeholder=\'回复:\'" placeholder="回复:" />';	
		str += getReplyFaceBox();
		str += '<button class="repl_btn" onclick="ct_reply(this,'+data.id+')">回复</button>';
		str += '</div>';
		str += '</div>';
	return str;
}

function getReplies(data,listid){
	var len = data.length;
	var str = '';
	for(var i=len-1; i>=0; i--){
		if(len>3 && i==len-3){
			str += '<div class="floor_item'+(data[i].user.nickname == '3DM官方账号' ? ' Official2' : '')+'"><div class="mor_floor" onclick="showfloor(this)">重复楼层已隐藏'+(len-3)+'条</div></div>'
		}
		str += '<div class="floor_item'+(data[i].user.nickname == '3DM官方账号' ? ' Official2' : '')+'"'+(i>0 && i<len-2 ? ' style="display:none;"' : (i==0 ? ' style="border-bottom: none;"' : ''))+'>';
		str += '<p>';
		str += '<a href="'+getUserHome(data[i].user.uid)+'" target="_blank" class="name">'+data[i].user.nickname+'</a>';
		if(typeof data[i].user.vip_level != "undefined" && data[i].user.vip_level > 0){
			str += '<a href="https://yeyou.3dmgame.com/vip/index" target="_blank" class="_vip_grade vip_ico'+data[i].user.vip_level+'"></a>';
		}else{
			str += '<a href="javascript:void(0);" class="tx_box tx_color'+data[i].user.title_level+'">'+data[i].user.title+'</a>';
		}
		str += data[i].user.regionstr+'<span>'+data[i].time+'</span></p>';
		str += '<div class="repl_info">'+replaceFaceContent(data[i].content)+'</div>';
		str += '<div class="praise_btn">';
		if(typeof(data[i].praise)!="undefined" && (data[i].praise==1 || data[i].praise==2)){
			str += '<p class="zan_cai'+(data[i].praise == 1 ? ' on': '')+'"><i class="zan"></i><u>'+data[i].goodcount+'</u></p>';
		}else{
			str += '<p class="zan_cai" onclick="praise(this,'+data[i].id+',1)"><i class="zan"></i><u>'+data[i].goodcount+'</u></p>';
		}
		if(typeof(data[i].report)!="undefined" && data[i].report==1){
			str += '<p class="jingao on"><i class="ico_jingao" ></i><u>举报</u></p>';
		}else{
			str += '<p class="jingao"  onclick="jingao(this,'+data[i].id+')"><i class="ico_jingao" ></i><u>举报</u></p>';
		}
		str += '<div class="replybtn" onclick="show_reply_list(this)">回复</div>';
		str += '<div class="replybtn replybtn2" onclick="show_reply_list(this)">取消回复</div>';
		str += '</div>';
		str += '<div class="reply_wrap">';
		str += '<input type="text" class="reply_info" value="" onfocus="this.placeholder=\'\'" onfocusout="this.placeholder=\'回复:\'" placeholder="回复:" />';
		str += getReplyFaceBox();
		str += '<button class="repl_btn" onclick="ct_reply_list(this,'+data[i].id+','+listid+')">回复</button>';
		str += '</div>';
		str += '</div>';
	}
	return str;
}
function getUserHome(uid){
	return myuserhost+'/user/'+uid;
}
//获取收藏状态
function getcollection(){
	var url = myuserhost + "/api/getfavorite";
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url: url,
		type: "POST",
		data:{pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				if(data.favorite){
					$("#Cs_collection").find('i').addClass('on');
					$("#Cs_collection").find('span').html('取消');
				}
				if(data.sid){
					$("#Cs_collection").append('<input type="hidden" id="Cs_collect_sid" value="'+data.sid+'" />');
				}
			}
		}
	});
}
//设置收藏
function ct_collect(obj){
	var favoriteact = 2;
	if($(obj).find('span').html() == '收藏'){
		favoriteact = 1;
	}
	var sid = 0;
	if($("#Cs_collect_sid").length>0){
		sid = $("#Cs_collect_sid").val();
	}
	var url = myuserhost + "/api/setfavorite";
	var ctype = typeof(collect_type) != "undefined" ? collect_type : 1;
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url: url,
		//async:false,
		type: "POST",
		data:{sid:sid,favoriteact:favoriteact,type:ctype,pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				if(favoriteact == 1){
					if($("#Cs_collect_sid").length == 0){
						$("#Cs_collection").append('<input type="hidden" id="Cs_collect_sid" value="'+data.sid+'" />');
					}
					$(obj).find('i').addClass('on');
					$(obj).find('span').html('取消');
				}else{
					$(obj).find('i').removeClass('on');
					$(obj).find('span').html('收藏');
				}
			}else if(data.code == 9){
				openlogin();
			}else{
				alert(data.msg);
				if(typeof data.url !== "undefined"){
					top.location.href = myuserhost + data.url;
				}
			}
		}
	});
}
function set_g_userinfo(user){
	if(typeof(user.uid) == "undefined" || !isRealNum(user.uid) || user.uid<1){
		return false;
	}
	g_user_info.uid = user.uid;
	g_user_info.nickname = typeof(user.nickname) == "undefined" ? '' : user.nickname;
	g_user_info.avatarstr = typeof(user.avatarstr) == "undefined" ? '' : user.avatarstr;
	g_user_info.gender = typeof(user.gender) == "undefined" ? '' : user.gender;
	g_user_info.regionstr = typeof(user.regionstr) == "undefined" ? '' : user.regionstr;
	g_user_info.title = typeof(user.title) == "undefined" ? '' : user.title;
	g_user_info.title_level = typeof(user.title_level) == "undefined" ? 0 : user.title_level;
	return true;
}
function set_g_comment_post(pid,content,position){
	g_comment_list[pid] = {id:0,position:position,goodcount:0,badcount:0,content:'',time:'刚刚',user:{},replies:[]};
	g_comment_list[pid].id = pid;
	g_comment_list[pid].content = content;
	g_comment_list[pid].user = g_user_info;
	g_comment_list[pid].replies = new Array();
}
function set_g_comment_reply(pid,content,position,replyid){
	g_comment_list[pid] = {id:0,position:position,goodcount:0,badcount:0,content:'',time:'刚刚',user:{},replies:[]};
	g_comment_list[pid].id = pid;
	g_comment_list[pid].content = content;
	g_comment_list[pid].user = g_user_info;
	if(typeof(g_comment_list[replyid]) == "undefined"){
		g_comment_list[pid].replies = new Array();
	}else{
		var listreplies = g_comment_list[replyid].replies;
		var replies = Array();
		replies[0] = g_comment_list[replyid];
		var len = listreplies.length;
		for(var i=0;i<len;i++){
			replies[i+1] = listreplies[i];
		}
		g_comment_list[pid].replies = replies;
	}
}
function set_g_comment_reply_list(pid,content,position,replyid,listid){
	g_comment_list[pid] = {id:0,position:position,goodcount:0,badcount:0,content:'',time:'刚刚',user:{},replies:[]};
	g_comment_list[pid].id = pid;
	g_comment_list[pid].content = content;
	g_comment_list[pid].user = g_user_info;
	if(typeof(g_comment_list[replyid]) == "undefined"){
		if(typeof(g_comment_list[listid]) == "undefined"){
			g_comment_list[pid].replies = new Array();
		}else{
			var listreplies = g_comment_list[listid].replies;
			var len = listreplies.length;
			var replies = new Array();
			var pos_index = -1;
			for(var i=0;i<len; i++){
				if(listreplies[i].id == replyid){
					pos_index = i;//找到位置
				}
			}
			if(pos_index>-1){
				var j=0;
				for(var i=pos_index;i<len; i++){
					replies[j++] = listreplies[i];
				}
			}
			g_comment_list[pid].replies = replies;
		}
	}else{
		var listreplies = g_comment_list[replyid].replies;
		var replies = Array();
		replies[0] = g_comment_list[replyid];
		var len = listreplies.length;
		for(var i=0;i<len;i++){
			replies[i+1] = listreplies[i];
		}
		g_comment_list[pid].replies = replies;
	}
}
function isRealNum(val){
	// isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
	if(val === "" || val ==null){
		return false;
	}
	if(!isNaN(val)){
		return true;
	}else{
		return false;
	}
}
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
} 
//点击打开页面举报框；
function Ct_report(){
	$('.Cs_report_show').slideToggle();
}
//提交页面举报
function page_report(obj){
	if(g_pagereport){
		alert('发送中，请稍后。。。');
	}
	var url = myuserhost + "/api/pagereport";
	var content = htmlEncodeJQ(trim($("#report_content").val()));
	var len = content.length;
	if(len<1){
		alert("举报内容太少了");
		return false;
	}
	if(len>600){
		alert("举报内容已超出最大长度600字");
		return false;
	}
	g_pagereport = 1;
	var sid = 0;
	if($("#Ct_sid").length>0){
		sid = $("#Ct_sid").val();
	}
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url:url,
		type: "POST",
		data:{content:content,sid:sid,pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				alert('举报成功');
				if($("#Ct_sid").length==0){
					sidstr = '<input type="hidden" id="Ct_sid" value="'+data.sid+'" />';
					$("#Comments_wrap").append(sidstr);
				}
				$("#Cs_report_bt").removeAttr("onclick");
				$("#Cs_report_bt").addClass("on");
				$(obj).removeAttr("onclick");
				$('.Cs_report_show').hide();
			}else if(data.code == 9){
				openlogin();
			}else{
				alert(data.msg);
				if(typeof data.url !== "undefined"){
					top.location.href = myuserhost + data.url;
				}
			}
		},
		complete: function(){
			g_pagereport = 0;
		}
	});
}    
//点击评论下的举报
function jingao(obj,ctid){
	if(g_report){
		alert('发送中，请稍后。。。');
	}
	var url = myuserhost + "/api/report";
	$.ajax({
		url:url,
		type: "POST",
		data:{id:ctid},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				alert('举报成功');
				$(obj).addClass("on");
				$(obj).removeAttr("onclick");
			}else if(data.code == 9){
				openlogin();
			}else{
				alert(data.msg);
				if(typeof data.url !== "undefined"){
					top.location.href = myuserhost + data.url;
				}
			}
		},
		complete: function(){
			g_report = 0;
		}
	});
}
//获取文章举报状态
function getpagereport(){
	var url = myuserhost + "/api/getpagereport";
	var pageurl = "";
	if(typeof(collect_pageurl) != "undefined"){
		pageurl = collect_pageurl;
	}
	$.ajax({
		url: url,
		type: "POST",
		data:{pageurl:pageurl},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				if(data.pagereport){
					$("#Cs_report_bt").removeAttr("onclick");
					$("#Cs_report_bt").addClass("on");
				}
			}
		}
	});
}
(function ($) {
	$.fn.extend({
		insertAtCaret: function (myValue) {
		    var $t = $(this)[0];
		    if (document.selection) {
		        this.focus();
		        sel = document.selection.createRange();
		        sel.text = myValue;
		        this.focus();
		    } else if ($t.selectionStart || $t.selectionStart == '0') {
		        var startPos = $t.selectionStart;
		        var endPos = $t.selectionEnd;
		        var scrollTop = $t.scrollTop;
		        $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
		        this.focus();
		        $t.selectionStart = startPos + myValue.length;
		       	$t.selectionEnd = startPos + myValue.length;
		        $t.scrollTop = scrollTop;
		    } else {
		        this.value += myValue;
		        this.focus();
		    }
	    }
	});
})(jQuery);
//获取评论表情框
function getCtFaceBox(){
	var popFace_bt = [
        {"text_":"默认表情","id_":"0"}, 
        {"text_":"无主之地","id_":"1"},    		
	];
	var popFace_img=[
		[
			{ "name":"微笑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico1.png" },
			{ "name":"爱心" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico2.png"},
			{ "name":"委屈" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico3.png" },
			{ "name":"害羞" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico4.png" },
			{ "name":"闭嘴" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico5.png"},
			{ "name":"犯困" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico6.png" },
			{ "name":"大哭" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico7.png" },			
			{ "name":"尴尬" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico8.png" },
			{ "name":"生气" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico9.png"},
			{ "name":"可爱" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico10.png" },
			{ "name":"赞个" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico11.png" },
			{ "name":"怀疑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico12.png"},
			{ "name":"汗" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico13.png" },
			{ "name":"鄙视" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico14.png" },		
			{ "name":"呆" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico15.png"},
			{ "name":"辣" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico16.png"},
			{ "name":"坏笑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico17.png" },
			{ "name":"机智" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico18.png" },
			{ "name":"晕" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico19.png"},
			{ "name":"思考" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico20.png" }				
		],
		[
			{ "name":"晚安" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico1.png" },
			{ "name":"拿来" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico2.png"},
			{ "name":"困" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico3.png" },
			{ "name":"疑惑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico4.png" },
			{ "name":"666" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico5.png"},
			{ "name":"555" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico6.png" },
			{ "name":"生气2" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico7.png" },			
			{ "name":"全要" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico8.png" },
			{ "name":"吃瓜" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico9.png"},
			{ "name":"棒" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico10.png" },
			{ "name":"观察" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico11.png" },
			{ "name":"我的锅" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico12.png"},
			{ "name":"无奈" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico13.png" },
			{ "name":"嘲笑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico14.png" },		
			{ "name":"绝望" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico15.png"},
			{ "name":"约吗" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico16.png"}
	
		]	

		
	];
	var index_id=0;
	var this_;
   	var popFace_='<div class="popFace">';
		popFace_ += '<div class="popFace_bt" onclick="openCtFaceBox(this,event)"><i class="ico_bq_bt"></i>添加表情</div>';
		popFace_ += '<div class="popFaceBox">';
		popFace_ += '<div class="popFaceBox_close" onclick="closeCtFaceBox(this)"></div>';
		popFace_ += '<div class="p_item">';
		for(var i=0; i<=popFace_bt.length-1; i++){
			if(i == 0){
				popFace_ += '<p data-id="'+popFace_bt[i].id_+'" class="on" onclick="changeFaceItem(this,'+i+',event)">'+popFace_bt[i].text_+'</p>';
			}else{
				popFace_ += '<p data-id="'+popFace_bt[i].id_+'" onclick="changeFaceItem(this,'+i+',event)">'+popFace_bt[i].text_+'</p>';
			}
		}
		popFace_ += '</div>';
		popFace_ += '<div class="popFace_lis">';
		for(var i=0; i<=popFace_bt.length-1; i++){
			if(i == 0){
				popFace_ += '<div class="face'+i+' face">';
			}else{
				popFace_ += '<div class="face'+i+'">';
			}
			if(typeof(popFace_img[i]) == "undefined"){
				continue;
			}
			var faceImgLen = popFace_img[i].length;
			for(var j=0; j<faceImgLen; j++){
				popFace_ += '<a href="javascript:void(0);" onclick="addCtFace(this,\''+popFace_img[i][j].name+'\','+i+')"><img src="'+popFace_img[i][j].img_+'" title="'+popFace_img[i][j].name+'"><i>'+popFace_img[i][j].name+'</i></a>';
			}
			popFace_ += '</div>';
		}
		popFace_ += '</div>';
        popFace_ += '</div>';		
		popFace_ += '</div>';
		return popFace_;   
}
//获取回复表情框
function getReplyFaceBox(){
	var popFace_bt = [
        {"text_":"默认表情","id_":"0"},   
        {"text_":"无主之地","id_":"1"},    		
	];
	var popFace_img=[
		[
			{ "name":"微笑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico1.png" },
			{ "name":"爱心" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico2.png"},
			{ "name":"委屈" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico3.png" },
			{ "name":"害羞" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico4.png" },
			{ "name":"闭嘴" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico5.png"},
			{ "name":"犯困" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico6.png" },
			{ "name":"大哭" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico7.png" },			
			{ "name":"尴尬" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico8.png" },
			{ "name":"生气" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico9.png"},
			{ "name":"可爱" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico10.png" },
			{ "name":"赞个" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico11.png" },
			{ "name":"怀疑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico12.png"},
			{ "name":"汗" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico13.png" },
			{ "name":"鄙视" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico14.png" },		
			{ "name":"呆" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico15.png"},
			{ "name":"辣" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico16.png"},
			{ "name":"坏笑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico17.png" },
			{ "name":"机智" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico18.png" },
			{ "name":"晕" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico19.png"},
			{ "name":"思考" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico/ico20.png" }				
		],
		[
			{ "name":"晚安" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico1.png" },
			{ "name":"拿来" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico2.png"},
			{ "name":"困" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico3.png" },
			{ "name":"疑惑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico4.png" },
			{ "name":"666" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico5.png"},
			{ "name":"555" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico6.png" },
			{ "name":"生气2" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico7.png" },			
			{ "name":"全要" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico8.png" },
			{ "name":"吃瓜" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico9.png"},
			{ "name":"棒" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico10.png" },
			{ "name":"观察" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico11.png" },
			{ "name":"我的锅" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico12.png"},
			{ "name":"无奈" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico13.png" },
			{ "name":"嘲笑" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico14.png" },		
			{ "name":"绝望" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico15.png"},
			{ "name":"约吗" ,"img_":"https://my.3dmgame.com/ct/images/bq_ico2/ico16.png"}
	
		]	
	];
	var index_id=0;
	var this_;
   	var popFace_='<div class="popFace">';
		popFace_ += '<div class="popFace_bt" onclick="openReplyFaceBox(this,event)"><i class="ico_bq_bt"></i>添加表情</div>';
		popFace_ += '<div class="popFaceBox">';
		popFace_ += '<div class="popFaceBox_close" onclick="closeReplyFaceBox(this)"></div>';
		popFace_ += '<div class="p_item">';
		for(var i=0; i<=popFace_bt.length-1; i++){
			if(i == 0){
				popFace_ += '<p data-id="'+popFace_bt[i].id_+'" class="on" onclick="changeFaceItem(this,'+i+',event)">'+popFace_bt[i].text_+'</p>';
			}else{
				popFace_ += '<p data-id="'+popFace_bt[i].id_+'" onclick="changeFaceItem(this,'+i+' ,event)">'+popFace_bt[i].text_+'</p>';
			}
		}
		popFace_ += '</div>';
		popFace_ += '<div class="popFace_lis">';
		for(var i=0; i<=popFace_bt.length-1; i++){
			if(i == 0){
				popFace_ += '<div class="face'+i+' face">';
			}else{
				popFace_ += '<div class="face'+i+'">';
			}
			if(typeof(popFace_img[i]) == "undefined"){
				continue;
			}
			var faceImgLen = popFace_img[i].length;
			for(var j=0; j<faceImgLen; j++){
				popFace_ += '<a href="javascript:void(0);" onclick="addReplyFace(this,\''+popFace_img[i][j].name+'\','+i+')"><img src="'+popFace_img[i][j].img_+'" title="'+popFace_img[i][j].name+'"><i>'+popFace_img[i][j].name+'</i></a>';
			}
			popFace_ += '</div>';
		}
		popFace_ += '</div>';
        popFace_ += '</div>';		
		popFace_ += '</div>';
		return popFace_;
}
//展示评论表情框
function openCtFaceBox(obj,evt){
	$(".popFaceBox").hide();
	$(".friendsBox").hide();
	hide_open_reply();
	$(obj).parents(".popFace").find(".popFaceBox").show();
	stopNextEvent(evt);
}
//展示回复表情框
function openReplyFaceBox(obj,evt){
	$(".popFaceBox").hide();
	$(".friendsBox").hide();
	$(obj).parents(".popFace").find(".popFaceBox").show();
	stopNextEvent(evt);
}
//关闭评论表情框
function closeCtFaceBox(obj){
	$(obj).parents(".popFaceBox").hide();
	
}
//关闭回复表情框
function closeReplyFaceBox(obj){
	$(obj).parents(".popFaceBox").hide();
	
}
//切换评论表情的主题
function changeFaceItem(obj,index,evt){
	stopNextEvent(evt);
	$(obj).addClass("on").siblings().removeClass("on");
	var popFace_lis = $(obj).parent().parent().find(".popFace_lis");
	popFace_lis.children().hide();
	popFace_lis.find(".face").removeClass("face");
	popFace_lis.find(".face"+index).addClass("face");
	popFace_lis.find(".face"+index).show();
}
//添加评论表情
function addCtFace(obj, face, type){
	var face_pop = $(obj).parent().parent().parent();
	var faceText = '';
	faceText = '['+face+']';
	$("#Ct_content").insertAtCaret(faceText);
	face_pop.hide();
}
//添加回复表情
function addReplyFace(obj, face, type){
	var face_pop = $(obj).parent().parent().parent();
	var face_box = face_pop.parent();
	var reply_content = face_box.prev();
	var faceText = '';
	faceText = '['+face+']';
	reply_content.insertAtCaret(faceText);
	face_pop.hide();
}
function replaceFaceContent(content){
	var find_face = ['\\[微笑\\]','\\[爱心\\]','\\[委屈\\]','\\[害羞\\]','\\[闭嘴\\]','\\[犯困\\]','\\[大哭\\]','\\[尴尬\\]','\\[生气\\]','\\[可爱\\]','\\[赞个\\]','\\[怀疑\\]','\\[汗\\]','\\[鄙视\\]','\\[呆\\]','\\[辣\\]','\\[坏笑\\]','\\[机智\\]','\\[晕\\]','\\[思考\\]','\\[晚安\\]','\\[拿来\\]','\\[困\\]','\\[疑惑\\]','\\[666\\]','\\[555\\]','\\[生气2\\]','\\[全要\\]','\\[吃瓜\\]','\\[棒\\]','\\[观察\\]','\\[我的锅\\]','\\[无奈\\]','\\[嘲笑\\]','\\[绝望\\]','\\[约吗\\]'];
	var replace_face = [
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico1.png" title="微笑" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico2.png" title="爱心" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico3.png" title="委屈" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico4.png" title="害羞" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico5.png" title="闭嘴" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico6.png" title="犯困" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico7.png" title="大哭" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico8.png" title="尴尬" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico9.png" title="生气" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico10.png" title="可爱" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico11.png" title="赞个" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico12.png" title="怀疑" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico13.png" title="汗" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico14.png" title="鄙视" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico15.png" title="呆" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico16.png" title="辣" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico17.png" title="坏笑" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico18.png" title="机智" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico19.png" title="晕" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico/ico20.png" title="思考" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico1.png" title="晚安" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico2.png" title="拿来" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico3.png" title="困" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico4.png" title="疑惑" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico5.png" title="666" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico6.png" title="555" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico7.png" title="生气" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico8.png" title="全要" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico9.png" title="吃瓜" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico10.png" title="棒" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico11.png" title="观察" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico12.png" title="我的锅" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico13.png" title="无奈" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico14.png" title="嘲笑" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico15.png" title="绝望" />',
						'<img src="https://my.3dmgame.com/ct/images/bq_ico2/ico16.png" title="约吗" />',
					];
	var len_face = find_face.length;
	for (var i=0;i<len_face;i++) {
		content = content.replace(new RegExp(find_face[i],"g"), replace_face[i]);
	}
	return content;
}
//阻止事件冒泡
function stopNextEvent(evt){
	var e=(evt)?evt:window.event;
	if (window.event) {
		e.cancelBubble=true;// ie下阻止冒泡
	} else {
		//e.preventDefault();
		e.stopPropagation();// 其它浏览器下阻止冒泡
	}
}
//3DM官方交流群
$(function(){
	$("#Comments_wrap .Cs_head p.Cs_titile").after('<p class="official_group"><a href="//shang.qq.com/wpa/qunwpa?idkey=f597a2b6ceb05fb58b5a26f97d75f4a4ac2f2c3c74fcefce9b79a373b2cf857d" target="_blank">3DM官方交流群</a></p>');
});
//评论@好友
function getFriends(){
	if(!g_friends_flag){
		var url = myuserhost + "/api/getctfollows";
		$.ajax({
			url:url,
			type: "POST",
			dataType:'json',
			xhrFields:{withCredentials:true},
			success: function(data){
				if(data.code == 1){
					var actLen = data.data.act.length;
					if(actLen > 0){
						for (var i = 0; i < actLen; i++) {
							var obj1 = new Object();
							obj1.uid = data.data.act[i].uid;
							obj1.nickname = data.data.act[i].nickname;
							g_lastconcat_arr[i] = obj1;
						}
					}
					var followLen = data.data.follow.length;
					if(followLen > 0){
						for (var i = 0; i < followLen; i++) {
							var  obj1 = new Object();
							obj1.uid = data.data.follow[i].uid;
							obj1.nickname = data.data.follow[i].nickname;
							switch(data.data.follow[i].nick_first){
								case 'A':
									g_friends_arr[0]['list'].push(obj1);
									break;
								case 'B':
									g_friends_arr[1]['list'].push(obj1);
									break;
								case 'C':
									g_friends_arr[2]['list'].push(obj1);
									break;
								case 'D':
									g_friends_arr[3]['list'].push(obj1);
									break;
								case 'E':
									g_friends_arr[4]['list'].push(obj1);
									break;
								case 'F':
									g_friends_arr[5]['list'].push(obj1);
									break;
								case 'G':
									g_friends_arr[6]['list'].push(obj1);
									break;
								case 'H':
									g_friends_arr[7]['list'].push(obj1);
									break;
								case 'I':
									g_friends_arr[8]['list'].push(obj1);
									break;
								case 'J':
									g_friends_arr[9]['list'].push(obj1);
									break;
								case 'K':
									g_friends_arr[10]['list'].push(obj1);
									break;
								case 'L':
									g_friends_arr[11]['list'].push(obj1);
									break;
								case 'M':
									g_friends_arr[12]['list'].push(obj1);
									break;
								case 'N':
									g_friends_arr[13]['list'].push(obj1);
									break;
								case 'O':
									g_friends_arr[14]['list'].push(obj1);
									break;
								case 'P':
									g_friends_arr[15]['list'].push(obj1);
									break;
								case 'Q':
									g_friends_arr[16]['list'].push(obj1);
									break;
								case 'R':
									g_friends_arr[17]['list'].push(obj1);
									break;
								case 'S':
									g_friends_arr[18]['list'].push(obj1);
									break;
								case 'T':
									g_friends_arr[19]['list'].push(obj1);
									break;
								case 'U':
									g_friends_arr[20]['list'].push(obj1);
									break;
								case 'V':
									g_friends_arr[21]['list'].push(obj1);
									break;
								case 'W':
									g_friends_arr[22]['list'].push(obj1);
									break;
								case 'X':
									g_friends_arr[23]['list'].push(obj1);
									break;
								case 'Y':
									g_friends_arr[24]['list'].push(obj1);
									break;
								case 'Z':
									g_friends_arr[25]['list'].push(obj1);
									break;
								case '#':
									g_friends_arr[26]['list'].push(obj1);
									break;
							}
						}
					}
				}
			},
			complete: function(){
				g_friends_flag = 0;
				var friends_html='';
				friends_html+='<div class="friends_warp"><div class="friends_bt" onclick="friends(this)">滴好友</div>';
				friends_html+='<div class="friendsBox" ><div class="popup"><span></span></div><div class="box_">';
				friends_html+='<div class="friends_lately"><span class="bt">最近联系：</span>';
				if(g_lastconcat_arr.length){
				   	for (var i = 0; i <= g_lastconcat_arr.length-1; i++) {
				    	friends_html += '<a href="javascript:void(0);" class="a" data-follow-uid='+g_lastconcat_arr[i].uid+' onclick="add_atlastfollow(this,\''+g_lastconcat_arr[i].nickname+'\')">'+g_lastconcat_arr[i].nickname+'</a>';
				    }
				}
				friends_html+='</div>';
				friends_html+='<div class="friends_ul">';
				for(var i=0;i<=g_friends_arr.length-1;i++){
				    friends_html+='<a class="a_" data-id="friends_li'+ i +'"  onclick="friendsul_data(this,event)">'+ g_friends_arr[i].name + '</a>';
				}
				friends_html+='</div>';
				friends_html+='<div class="friends_data">';
				for(var i=0;i<=g_friends_arr.length-1;i++){
				    friends_html+='<div class="friends_lis" data-lis="friends_li'+ i +'">';
				     if(i!=0){
				        friends_html+='<div class="bt">'+ g_friends_arr[i].name + '</div>';
				    }
				    friends_html+='<div class="friends_name_box">';
				    for(var a=0;a<=g_friends_arr[i].list.length-1;a++){
				        friends_html+='<a href="javascript:void(0);" class="a" data-follow-uid='+g_friends_arr[i].list[a].uid+' onclick="add_atfollow(this,\''+g_friends_arr[i].list[a].nickname+'\')"> '+ g_friends_arr[i].list[a].nickname + '</a>';
				    }
				    friends_html+='</div></div>';
				}
				friends_html+='</div></div></div></div>';
				$(".popFace").append(friends_html);
			}
		});
	}
}

//定位好友位置
function friendsul_data(obj,evt){
	stopNextEvent(evt);
	 var nav_clas = $(obj).attr("data-id");
     var index=$(obj).index();
    var  scroll_top=$(obj).parents(".friends_warp").find(".friends_data").scrollTop();
	var nav_num =$(obj).parents(".friends_warp").find(".friends_lis").eq(index).position().top;	
	$(obj).addClass("on").siblings().removeClass("on");
	$(obj).parents(".friends_warp").find(".friends_data").animate({scrollTop: nav_num+scroll_top}, 300);
}

//关注
function follow_personal(obj, follow_uid){
	var act = 1;
	if($(obj).hasClass("on")){
		act = 2;
	}
	var url = myuserhost + "/api/setfollow";
	$.ajax({
		url: url,
		type: "POST",
		data:{follow_uid:follow_uid, follow_act:act},
		dataType:'json',
		xhrFields:{withCredentials:true},
		success: function(data){
			if(data.code == 1){
				if($(obj).hasClass("on")){
					$(obj).removeClass("on");
				}else{
					$(obj).addClass("on");
				}
			}else if(data.code == 9){
				openlogin();
			}
		}
	});
}

//添加@符号
function add_atfollow(obj, nickname){
	var follow_pop = $(obj).parent().parent().parent().parent().parent().parent().parent();
	var follow_box = follow_pop.parent();
	if(follow_box.hasClass('poswrap')){
		//评论
		var reply_content = follow_box.prev().find('textarea');
	}else{
		//回复
		var reply_content = follow_box.find(".reply_info");
	}
	var followText = '';
	followText = '@'+nickname+' ';
	reply_content.insertAtCaret(followText);
}
//添加@最近联系人
function add_atlastfollow(obj, nickname){
	var follow_pop = $(obj).parent().parent().parent().parent().parent();
	var follow_box = follow_pop.parent();
	if(follow_box.hasClass('poswrap')){
		//评论
		var reply_content = follow_box.prev().find('textarea');
	}else{
		//回复
		var reply_content = follow_box.find(".reply_info");
	}
	var followText = '';
	followText = '@'+nickname+' ';
	reply_content.insertAtCaret(followText);
}