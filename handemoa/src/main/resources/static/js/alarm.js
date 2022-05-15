$(document).ready(function () {

    var alramTag = $('<div class="alarm"><div class="alarm_btn_area"><button class="alarm_btn">☎</button><div class="alarmcount"><p class="alarmcount_inner"></p></div></div><div class="alarmlist_area"></div></div>');
    $('#nav_list').append(alramTag);

    let alarmVisual = false;
    let alarmCount = 0;

    function alarmSwitch() {
        alarmVisual = !alarmVisual
        if (alarmVisual) {
            $('.alarmlist_area').css('display', 'block');
        }
        else {
            $('.alarmlist_area').css('display', 'none');
        }
    }

    $.ajax({
        type: "get",
        url: "/alarm",
        data: {},
        dataType: "json",
        success: function (response) {
            if (response == null) {
                alert("로그인이 필요합니다.");
            }
            else {
                $('.alarmlist').remove();
                $('.alarmcount').css('display', 'flex');
                $('.alarmlist_area').css('box-shadow', '0px 0px 5px rgb(218, 218, 218)');
                $('.alarmlist_area').css('border-bottom', '1px solid rgb(218, 218, 218)');
                alarmCount = 0;
                for (var i in response) {
                    alarmCount++;
                    var alramList = $('<div class="alarmlist"><div class="alarmlist_1"><p class="alarmlist_caller">'+response[i].id+'</p><p>내 글의 댓글</p><p class="alarmlist_date">｜'+response[i].time_al+'</p></div><div class="alarmlist_2"><p class="alarmlist_content"><a href="/rankingpost?postnum='+response[i].postnum+'">'+response[i].alarmcontent+'</a></p></div></div>');
                    console.log("id:", response[i].id);
                    console.log("caller:", response[i].caller);
                    console.log("postnum:", response[i].postnum);
                    console.log("내용:", response[i].alarmcontent);
                    console.log("시간:", response[i].time_al);
                    console.log("=========================");
                    $('.alarmlist_area').append(alramList);
                }
                $('.alarmcount_inner').html(alarmCount);
            }
        }
    });
    
    $(".alarm_btn").click(function () {
        alarmSwitch();
    });

});