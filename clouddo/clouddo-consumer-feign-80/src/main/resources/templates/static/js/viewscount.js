function viewscount(type, id){
    if ( type == "" || id <= 0 ){
        return false;
    }
    // 浏览统计
    $.post("/api/countviews", {type: type, id: id}, function(){
        return false;
    });
}

function getviews(type, id){
    if ( type == "" || id <= 0 ){
        return false;
    }
    // 获取浏览数
    $.post("/api/getviews", {type: type, id: id}, function(data){
        $(".views").html(data.nums);
    },"json");
}

function getplnums(type, id){
    if ( type == "" || id <= 0 ){
        return false;
    }
    // 获取评论数
    $.post("/api/getplnums", {type: type, id: id}, function(data){
        $(".nums").html(data.nums);
    },"josn");
}

function getscore(sign, pclass){
    var num = $("."+pclass+" .myscore").attr("data-sc");
    if ( sign == "" || num < 0.0 ){
        alerta("评分异常");
        return false;
    }
    // 获取游戏评分
    $.post("/api/getgamescore", {sign: sign, score: num}, function(data){
        if ( data.code == 12 ){
            location.href="https://my.3dmgame.com/setting/binding";
            return false;
        }
        if ( data.code == 5 ){
            openlogin();
            return false;
        }

        alert(data.msg);
        show_score();
        return false;
    },"json");
}

function expvalcount(sign){
    if ( sign == "" ){
        alert("投票异常");
        return false;
    }
    // 获取玩家期待值
    $.post("/api/countexpval", {sign: sign}, function(data){
        if ( data.code == 12 ){
            location.href="https://my.3dmgame.com/setting/binding";
            return false;
        }

        alert(data.msg);
        $(".expnums").html(data.nums);
        return false;
    },"json");
}

function getexpvals(sign){
    if ( sign == "" ){
        return false;
    }
    // 获取玩家期待值
    $.post("/api/getexpvals", {sign: sign}, function(data){
        $(".expnums").html(data.nums);
        return false;
    },"json");
}
