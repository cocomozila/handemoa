$(document).ready(function () {

    var alramTag = $('<div><button class="alarm">울라</button><div class="alarmlist"></div></div>');
    $('#nav_list').append(alramTag);
    
    $(".alarm").click(function () {
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
                    for (var i in response) {
                        console.log("id:", response[i].id);
                        console.log("caller:", response[i].caller);
                        console.log("postnum:", response[i].postnum);
                        console.log("내용:", response[i].alarmcontent);
                        console.log("시간:", response[i].time_al);
                        console.log("=========================");
                    } 
                }
            }
        });
    });

});