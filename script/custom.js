gsap.registerPlugin(ScrollTrigger);

/*-----java결과물 카드효과-----*/
let upBox = document.querySelectorAll(".upBox");
console.log(upBox);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".java",
      start: "top top",
      end: "+=400%", //시작위치에서 400%까지 스크롤한 후 종료
      scrub: 2,
      pin: true,
      markers: true,
    },
  })
  /*변수일 때 따옴표 안 붙임*/
  .fromTo(upBox, { y: "100%", opacity: 0 }, { y: 0, opacity: 1, stagger: 1 });

/*-----coding 커튼효과-----*/
let boxes = document.querySelectorAll(".imgBox");
// console.log(boxes);

boxes.forEach((box) => {
  ScrollTrigger.create({
    trigger: box,
    start: "top 80%",
    end: "bottom 20%",
    toggleClass: "active",
    markers: true,
  });
});
//복수 개가 들어있는 boxes를 하나씩 받는 게 box

gsap.timeline({
  scrollTrigger: {
    trigger: ".coding",
    start: "40% 80%",
    end: "100% 0%",
    toggleClass: {
      targets: ".coding .picBox",
      className: "active",
    },
    markers: true,
  },
});

/**/
gsap.registerPlugin(ScrollTrigger);

let list = gsap.utils.toArray(".artworks li");
let listA = gsap.utils.toArray(".artworks li.a");
let listB = gsap.utils.toArray(".artworks li.b");
let listC = gsap.utils.toArray(".artworks li.c");

/*list는 변수라 따옴표 안 넣음*/
gsap.to(list, {
  xPercent: -400, //x축으로 왼쪽방향 list의 가로크기 400%만큼 이동. 단위 없으면 따옴표 안 씀
  scrollTrigger: {
    trigger: ".artworks",
    start: "top top",
    end: "+=2000",
    scrub: 2,
    pin: true,
    markers: true,
  },
});

gsap.to(listA, {
  rotation: 10,
  scrollTrigger: {
    trigger: ".artworks",
    start: "center center",
    scrub: 2,
  },
});

gsap.to(listB, {
  rotation: -10,
  scrollTrigger: {
    trigger: ".artworks",
    start: "center center",
    scrub: 2,
  },
});

gsap.to(listC, {
  rotation: 20,
  scrollTrigger: {
    trigger: ".artworks",
    start: "center center",
    scrub: 2,
  },
});

// 모달
// 모달
$(function () {
  // 1. 모달 열기 (artworks li 클릭 이벤트)
  $(".artworks ul li").on("click", function () {
    let i = $(this).index();

    // 1-1. 모달창 전체 활성화
    $(".modal").addClass("on");

    // 1-2. 모달 내의 모든 li 숨김 처리
    $(".modalBox li").removeClass("on");

    // 1-3. 클릭된 li에 해당하는 모달 li만 표시 (addClass 오타 수정)
    $(".modalBox li").eq(i).addClass("on");
  });

  // 2. 모달 닫기 (클래스: .closeModal 버튼 클릭 시)
  $(".closeModal").on("click", function () {
    $(".modal").removeClass("on");
  });

  // 3. 모달 닫기 (모달 배경 클릭 시)
  // 모달 오버레이(`.modal`) 자체를 클릭했을 때만 닫히도록 조건을 추가
  $(".modal").on("click", function (e) {
    // e.target은 실제로 클릭된 요소를 의미합니다.
    // 클릭된 요소가 모달(배경) 자체일 때만 닫습니다.
    if ($(e.target).hasClass("modal")) {
      $(this).removeClass("on");
    }
  });
});
