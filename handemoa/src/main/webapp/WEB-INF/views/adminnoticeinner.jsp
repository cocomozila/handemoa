<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%  // 인증된 세션이 없는경우, 해당페이지를 볼 수 없게 함.
    if (session.getAttribute("signedUser") == null) {
        response.sendRedirect("adminlogin");
    }
%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>한데모아 - 공지관리</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
<link rel='stylesheet' type='text/css' href='css/index.css'>
<link rel='stylesheet' type='text/css' href='css/notice.css'>
<link rel='stylesheet' type='text/css' href='css/noticeinner.css'>
<link rel='stylesheet' type='text/css' href='css/adminnotice.css'>
<script src='/js/index.js'></script>
<script src="/jquery-3.6.0.min.js"></script>
<script type="text/javascript">

</script>
</head>

<body>
 <div class="container">
        <!-- 네비게이션 start -->
        <div id="nav_area">
            <div id="nav_space">
                <div id="logo">
                    <a href="/adminindex"> 
                        <img src="css/images/logo.png" />
                    </a>
                </div>
                <div id="nav_profile">
                    <div id="nav_profile_img">
                        <img src="css/images/login_before.png"/>
                    </div>
                     <h3>관리자</h3>
                     <button id="nav_login_btn"	onclick="location.href='/adminlogout'">로그아웃</button>
                </div>
                <div id="nav_list">
                    <div class="nav_list_area">
                        <a href="/adminmember"> <!-- 해당 링크 이동 -->
                            <h4>회원관리</h4></a>
                    </div>
                    <div class="nav_list_area">
                        <a href="/adminpostreport"> <!-- 해당 링크 이동 -->
                            <h4>신고관리</h4></a>
                    </div>
                    <div class="nav_list_area">
                        <a href="/postmanage"> <!-- 해당 링크 이동 -->
                            <h4>게시글/댓글관리</h4></a>
                    </div>
                    <div class="nav_list_area">
                        <a href="/adminnotice"> <!-- 해당 링크 이동 -->
                            <h4>공지사항 관리</h4></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 네비게이션 end -->
       <div id="content_container">
            <div id="content_container_space">
                <div id="admin_inner_space"></div>
                
       <div id="admin_content">
						
				<div class="notice_name">
                      <h1>공지사항</h1>
                </div>
                    	
               <div id="content_box">	
					<!-- 글제목 -->
					<div class="noticeinner_container">
						<div class="title">${noticedto.title}</div>
					</div>
					<!-- 글내용 -->
					<div class="noticeinner_container">
						<div class="content">${noticedto.content}</div>
					</div>
					
					<div id="notice_back_btn_area">
	                    <div id="notice_back_btn" >
	                   		<a href="/deletenotice?noticenum=${noticedto.noticenum }"><input type="button" id="notice_btn" style="cursor:pointer;" onclick='return confirm("정말 삭제하시겠습니까?");' value="삭 제"></a>
	                        <a href="/updateview?noticenum=${noticedto.noticenum }"><input type="button" id="notice_btn" style="cursor:pointer;" value="수 정"></a>
	                        <a href="/insertnotice"><input type="button" id="notice_btn" style="cursor:pointer;" value="새 글"></a>
	                        <input type="button" id="notice_btn" onclick="history.back(-1);" style="cursor:pointer;" value="뒤로가기"> 
	                    </div>
	                </div>
					
				</div>
					
                	
   	    </div>
</body>
</html>