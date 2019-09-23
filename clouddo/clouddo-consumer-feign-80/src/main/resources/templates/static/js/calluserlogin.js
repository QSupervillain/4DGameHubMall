function calluserlogin(uid,nickname){

    var sign = $("#signpf").val();
    if ( sign == "" ){
        return false;
    }
    if ( uid <= 0 ) uid = 0;
    // 获取用户评分
    $.post("/api/getuserscore", {sign: sign, uid: uid}, function(data){
        $(".data_pf").attr("data-dp", data.score);
        $(".data_pf .myscore").attr("data-sc", data.score);
        show_score();
        return false;
    },"json");

}
