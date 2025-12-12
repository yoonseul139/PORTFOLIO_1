$(function () {
  // right li에 마우스를 갖다대면 크기가 15% -> 35% 커짐

  $(".right li").on("mouseenter", function () {
    vid = $(this).find("video").get(0); //비디오 탐색
    vid.currentTime = 0; //비디오 0번 트랙으로
    vid.play(); // 비디오 재생

    $(this)
      .stop()
      .animate({ width: "35%" }, function () {
        $(this).find("video").stop().animate({ opacity: "0.8" });
        //콜백함수 적용 (35%로 늘린 후, 투명도 조절)

        $(this).find("h3").stop().animate({ opacity: "1", right: "10px" });
        $(this).find("p").stop().animate({ opacity: "1", right: "10px" });
      });
  });

  $(".right li").on("mouseleave", function () {
    vid.pause(); //비디오 일시정지

    $(this).stop().animate({ width: "15%" });
    $(this).find("video").animate({ opacity: "0" });
    $(this).find("h3").stop().animate({ opacity: "0", right: "-100px" });
    $(this).find("p").stop().animate({ opacity: "0", right: "-100px" });
  });
});
