//서브메뉴나타나기
$(".submenu,.subbg").hide()
$(".menu>ul>li,.subbg").mouseover(function(){
 $(".submenu,.subbg").show()
})

$(".menu>ul>li,.subbg").mouseleave(function(){
 $(".submenu,.subbg").hide()
})

//슬라이드

setInterval(slide2)

function slide2(){
 $(".slide2").delay(1500).animate({marginLeft:"-101%"},2000)
 $(".slide2").delay(2000).animate({marginLeft:"-202%"},2000)
 $(".slide2").delay(3000).animate({marginLeft:"0%"},2000)
}

//fsite 나타나기
$(".fsite>.site>ul").hide()
$(".fsite>.site").mouseover(function(){
 $(this).children(".fsite>.site>ul").show()
})
$(".fsite>.site").mouseleave(function(){
 $(this).children(".fsite>.site>ul").hide()
})





// 모바일메뉴안에있는 li를 클릭했을때, 서브메뉴 나타나기
// 단, 개인 서브메뉴가 나타나야 함!!
// 단, 서브메뉴가 나타나면 위에 li의 배경색이 남색으로 변경되고, 텍스트가 흰색으로 바뀌어야 한다.

