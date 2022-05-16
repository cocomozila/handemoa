$(document).ready(function () {

    var alramTag = $('<div class="alarm"><div class="alarm_btn_area"><button class="alarm_btn">☎</button><div class="alarmcount"><p class="alarmcount_inner"></p></div></div><div class="alarmlist_area"></div></div>');
    $('#nav_list').append(alramTag);

    let alarmVisual = false;
    let alarmCount = 0;
    alarmAjax();

    function alarmSwitch() {
        alarmVisual = !alarmVisual
        if (alarmVisual) {
            $('.alarmlist_area').css('display', 'block');
        }
        else {
            $('.alarmlist_area').css('display', 'none');
        }
    }

    // <div class="alarmlist">
    //     <input type="hidden" value="'+response[i].alarmnum+'">
    //     <div class="alarmlist_1">
    //         <p class="alarmlist_caller">'+response[i].id+'　'+'</p>
    //         <p class="alarmlist_text">내 글의 댓글</p>
    //         <p class="alarmlist_date">｜'+response[i].time_al+'</p>
    //     </div>
    //     <div class="alarmlist_2">
    //         <p class="alarmlist_content">
    //             <a class="alarmread" href="/rankingpost?postnum='+response[i].postnum+'">'+response[i].alarmcontent+'</a>
    //         </p>
    //     </div>
    // </div>

    function alarmAjax() {
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
                        console.log("num:",response[i].alarmnum);
                        console.log("id:", response[i].id);
                        console.log("caller:", response[i].caller);
                        console.log("postnum:", response[i].postnum);
                        console.log("내용:", response[i].alarmcontent);
                        console.log("시간:", response[i].time_al);
                        console.log("=========================");
                        if ( response[i].read_al == false ) {
                            alarmCount++;
                            var alramList = $('<div class="alarmlist"><input class="alarm_num" type="hidden" value="'+response[i].alarmnum+'"><input class="alarm_postnum" type="hidden" value="'+response[i].postnum+'"><div class="alarmlist_1"><p class="alarmlist_caller">'+response[i].id+'　'+'</p><p class="alarmlist_text">내 글의 댓글</p><p class="alarmlist_date">｜'+response[i].time_al+'</p></div><div class="alarmlist_2"><p class="alarmlist_content">'+response[i].alarmcontent+'</p></div></div>');
                        }
                        else {
                            var alramList = $('<div class="alarmlist"><input type="hidden" value="'+response[i].alarmnum+'"><div class="alarmlist_1"><p class="alarmlist_caller2">'+response[i].id+'　'+'</p><p class="alarmlist_text2">내 글의 댓글</p><p class="alarmlist_date">｜'+response[i].time_al+'</p></div><div class="alarmlist_2"><p class="alarmlist_content2"><a class="alarmread" href="/rankingpost?postnum='+response[i].postnum+'">'+response[i].alarmcontent+'</a></p></div></div>');
                        }
                        $('.alarmlist_area').append(alramList);
                    }
                    $(".alarmlist_content").click(function () { 
                        $.ajax({
                            type: "get",
                            url: "/alarmread",
                            data: {'alarmnum': $(this).parents().parents().children('.alarm_num').val()},
                            dataType: "json",
                            success: function (response) {
                
                            }
                        });
                        location.replace("/rankingpost?postnum="+$(this).parents().parents().children('.alarm_postnum').val());
                    });
                    $('.alarmcount_inner').html(alarmCount);
                }
            }
        });
    }

    
    $(".alarm_btn").click(function () {
        alarmSwitch();
    });

});