//scrollTrigger 연결
gsap.registerPlugin(ScrollTrigger);
//lenis 연결
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//pre-road
let container = document.querySelector('#progress');
let progressBar = document.querySelector('.progress-bar');
let progressText = document.querySelector('.progress-text');


var imgLoad = imagesLoaded('body');
//console.log(imgLoad)
let imgTotal = imgLoad.images.length;

let imgLoaded = 0;
let current = 0;
let progressTimer;
let topValue;


progressTimer = setInterval(updateProgress, 1000/60);
imgLoad.on('progress', function(){ //이미지가 로드되는 중간중간 할일
    imgLoaded++;

});



function updateProgress(){
    let target = (imgLoaded / imgTotal) * 100;
    console.log(target)
    current += (target - current) * 0.03;

    progressBar.style.width = current + "%";
    progressText.innerHTML = `${Math.ceil(current)}%`;


    if(current > 99.9){
        clearInterval(progressTimer)
        container.classList.add('progress-complete');
        progressBar.style.width = "100%";
        gsap.to(container,{
            duration: 0.3,
            yPercent: -100,
        })
    }
}



////쿠키 팝업창
let currentCookie = document.cookie; //쿠키를 가져오는 방법
let cookieCheck = currentCookie.indexOf("green");
let noticeElement = document.querySelector('.notice');
let checkboxElement = document.querySelector('#cb');


if(cookieCheck > -1){
    noticeElement.style.display = "none";
}else {
    noticeElement.style.display = "block";
}

checkboxElement.addEventListener('change',()=>{
    let date = new Date();
    date.setDate(date.getDate() + 7);
    //console.log(date)

    if(checkboxElement.checked){ //input에 check가 됐다는 뜻
        let setCookie = "";
        setCookie += `green = true; `;
        setCookie += `expires=` + date.toUTCString();

        document.cookie = setCookie; //쿠키저장
        // noticeElement.style.display = "none"; //체크와 동시에 공지사항 닫기
    }
})


document.querySelector('.close').addEventListener('click',function(e){
  e.preventDefault();
    this.parentElement.style.display = "none";
})


//spline
let spline = document.querySelector('.spline');
let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page7",
    start: "top center",
    scrub: 2,
  }
});

tl9.to(spline,{xPercent : -100, autoAlpha:0,})


//menu 이동
let navs = document.querySelectorAll(".menu li a");
navs.forEach((element, index) => {
  element.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector(element.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
    })
  })
})





//1페이지 애니메이션

let tl5 = gsap.timeline({delay:4.5});


tl5.from(".maintitle h1",{
  y:200
})
tl5.from(".maintitle .rect1",{
  x:-500
})
tl5.from(".maintitle .rect2",{
  x:500
},"<")

tl5.from(".sidetitle h3",{
  opacity:0,
  stagger: 0.2,
  duration: 0.3
})
tl5.from(".subtitle h2",{
  opacity:0,
  stagger:0.5,
  x:-30,
  duration: 0.3
},"<")
tl5.from(".header4Wrap",{
  opacity:0,
  x:30,
  duration: 0.3
})


let tl = gsap.timeline({delay:6});

tl.from(".p1_title",{
  opacity:0,
  xPercent:100
})
tl.from(".p1_name",{
  opacity:0,
  xPercent:100
})
tl.from(".p1_Ename",{
  opacity:0,
  xPercent:100
},"<")
tl.from(".p1_birth",{
  opacity:0,
  xPercent:100
},"<")
tl.from(".p1_desc",{
  opacity:0,
  xPercent:100
})


//page2 애니메이션
let tl7 = gsap.timeline();
let tl8 = gsap.timeline();
tl7.from(".experienceWrap",{
  scrollTrigger:{
    trigger:".page1",
    start: "center top",
    scrub:2
  },
  xPercent:100
})
tl8.from(".certificateWrap",{
  scrollTrigger:{
    trigger:".page2",
    start: "bottom bottom",
    scrub: 1,
  },
  xPercent:-100
})


//title split
Splitting();
let tl6 = gsap.timeline({
  scrollTrigger:{
    start: "top top",
    ease: "bounce.out",
  },
});
let p1s = document.querySelectorAll(".p1_title .word .char");
let p2s = document.querySelectorAll(".p2_title .word .char");
let p3s = document.querySelectorAll(".p3_title .word .char");
let p5s = document.querySelectorAll(".p5_title .word .char");
let p6s = document.querySelectorAll(".p6_title .word .char");
let p7s = document.querySelectorAll(".p7_title .word .char");
let p9s = document.querySelectorAll(".p9_title .word .char");

tl6.from(p1s,{
  scrollTrigger:{
    trigger:".header",
    start: "top top",
    scrub:1,
  },
  y:-50,
  stagger: 0.3,
  duration: 2
})

tl6.from(p2s,{
  scrollTrigger:{
    trigger:".page1",
    start: "center center",
    scrub:1,
  },
  y:-50,
  stagger: 0.3,
  duration: 2
})

tl6.from(p3s,{
  scrollTrigger:{
    trigger:".page2",
    start: "center center",
    scrub:1,
  },
  y:-50,
  stagger: 0.3,
  duration: 2
})

tl6.from(p5s,{
  scrollTrigger:{
    trigger:".treebg",
    start: "center top",
    scrub:1,
  },
  y:-50,
  stagger: 0.3,
  duration: 2
})

tl6.from(p6s,{
  scrollTrigger:{
    trigger: ".page5",
    start: "bottom top",
    end: "+=150",
    scrub:1,
  },
  y:-50,
  stagger: 0.3,
  duration: 2
})

tl6.from(p7s,{
  scrollTrigger:{
    trigger: ".page7",
    start: "top top",
    end: "+=150",
    scrub:1,
  },
  scale: 1.5,
  stagger: 0.3,
  duration: 2
})

tl6.from(p9s,{
  scrollTrigger:{
    trigger: ".page9",
    start: "top top",
    end: "+=150",
    scrub:1,
  },
  scale: 1.5,
  stagger: 0.3,
  duration: 2
})

//시계
function updateClock() {
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
const second = now.getSeconds();

let years = document.getElementsByClassName('year')[0];
let months = document.getElementsByClassName('month')[0];
let day = document.getElementsByClassName('day')[0];
let hours = document.getElementsByClassName('hours')[0];
let mins = document.getElementsByClassName('mins')[0];
let sec = document.getElementsByClassName('sec')[0];

years.innerHTML = year;
months.innerHTML = month + 1;
day.innerHTML = date;
hours.innerHTML = hour;
mins.innerHTML = min;
sec.innerHTML = second;

}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

initClock();


//p1 img clip path
let video = document.querySelector('.p1_left img'),
videoWidth,
videoHeight;


function setVideo(){
    videoWidth = video.offsetWidth;
    videoHeight = video.offsetHeight;
    

}

setVideo();

window.addEventListener('resize',setVideo);

let inset = {
    x:35,
    y:35,
};
let snap = gsap.utils.snap(3);



let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".header",
        start: "top -10%",
        scrub: 1.2
    }
})
.fromTo(inset,{
    x:35,
    y:35,
},{
    duration:0.3,
    x:0,
    y:0,
    //onUpdate:()=>{}
    onUpdate(){
        video.style.clipPath = `inset(${(inset.x) * videoWidth / 200}px ${(inset.y) * videoHeight / 200}px)`;
    }
})

//page2 이미지
let p2Img = document.querySelector('.p2_left .imgwrap img');
gsap.from(p2Img,{
  scrollTrigger:{
    trigger: ".page1",
    start: "center top",
    scrub: 1.6
  },
  xPercent: 50,
  yPercent: 50
})

//page3 이미지
let p3Img = document.querySelector('.p3_left img');
gsap.from(p3Img,{
  scrollTrigger:{
    trigger: ".page2",
    start: "bottom bottom",
    scrub: 1
  },
  rotation :-90,

})



//애니메이션
let header = document.querySelector('.header');
let p1_rect = document.querySelector('.p1_left .rect');
let p2_rect = document.querySelector('.p2_left .rect');
let p3_rect = document.querySelector('.p3_left .rect');
let p1_img = document.querySelector('.p1_left img');

let stroke = document.querySelector('.side_stroke');
let hobbyArea = document.querySelector('.hobbyArea');
let mails = document.querySelectorAll('.mails img');



gsap.from(p1_rect,{
  scrollTrigger:{
    trigger: ".header",
    start: "top top",
    scrub: 1.2
  },
  x: -50,
  y: 50,
  scale: 0.5
})


gsap.from(p2_rect,{
  scrollTrigger:{
    trigger: ".page1",
    start: "center top",
    scrub: 1.2
  },
  x: -50,
  y: -50
})

gsap.from(stroke,{
  scrollTrigger:{
    trigger: ".page2",
    start: "top 20%",
    scrub: 1.2
  },
  height:0
})

gsap.from(p3_rect,{
  scrollTrigger:{
    trigger: ".page2",
    start: "center top",
    scrub: 1.2
  },
  x: 80,
  y: 80
})

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger: ".page3",
    start: "center top",
    scrub: 1
  }
});


tl3.from(mails,{
  scale:1.5,
  stagger:0.6,
  rotation: 0,
  ease: "power2.out",
})

gsap.from(hobbyArea,{
  scrollTrigger:{
    trigger: ".page4",
    start: "top top",
    end: "+=60%",
    scrub: 1.2,
    pin: true
  },
  xPercent: -100,
})


//page2 path 애니메이션
let path1 = document.querySelector('#name');
let path1Length = path1.getTotalLength(); //path의 길이
console.log(path1Length) //2237

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".nameWrap",
        start: "top top",
        end: "165% bottom",
        scrub: 1,
        pin: true,
        ease: "none"
    }
});



tl2.to(path1,{
    strokeDashoffset:0,
})



//skill----------------------------------
let executed = false;



function animateSkills(){
    document.querySelectorAll('.skill-per').forEach((perElement)=>{
        gsap.to(perElement,{
            duration: 1.5,
            width: perElement.getAttribute('per') + "%",
            onUpdate:function(){
                perElement.setAttribute('per', Math.ceil(this.progress() * parseInt(perElement.style.width)) + "%");
            }
        })
    })
}


ScrollTrigger.create({
    trigger: ".page5",
    start: "top 20%",
    onEnter: ()=>{
        if(!executed){
            animateSkills();
            executed = true;
        }
    }
})



//page6 스크롤
let xPos = 0;

gsap.timeline()
    .set('.ring', { rotationY:180, cursor:'grab' }) //set initial rotationY so the parallax jump happens off screen
    .set('.img',  { // apply transform rotations to each image
      rotateY: (i)=> i*-36,
      transformOrigin: '50% 50% 500px',
      z: -500,
      backgroundImage:(i)=>'url(https://picsum.photos/id/'+(i+32)+'/600/400/)',
      backgroundPosition:(i)=>getBgPos(i),
      backfaceVisibility:'hidden'
    })    
    .from('.img', {
      duration:1.5,
      y:200,
      opacity:0,
      stagger:0.1,
      ease:'expo'
    })
    .add(()=>{
      $('.img').on('mouseenter', (e)=>{
        let current = e.currentTarget;
        gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
      })
      $('.img').on('mouseleave', (e)=>{
        gsap.to('.img', {opacity:1, ease:'power2.inOut'})
      })
    }, '-=0.5')

$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
      

function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.ring', {cursor:'grabbing'})
  $(window).on('mousemove touchmove', drag);
}


function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gsap.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
  });
  
  xPos = Math.round(e.clientX);
}


function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
  gsap.set('.ring', {cursor:'grab'});
}


function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}



//page7 버튼
let wbs = document.querySelectorAll('.wb');
let sites = document.querySelectorAll('.site');
//console.log(sites) //site 전부 다들어옴


wbs.forEach((wb,index)=>{
  

  wb.addEventListener("click",function(e){
    e.preventDefault();
    let sites = document.querySelectorAll('.site');
    let site1 = document.querySelector('.site1');
    let site2 = document.querySelector('.site2');
    let site3 = document.querySelector('.site3');
    let site4 = document.querySelector('.site4');
    let site5 = document.querySelector('.site5');
    let site6 = document.querySelector('.site6');
    let site7 = document.querySelector('.site7');
    let site8 = document.querySelector('.site8');
    let site9 = document.querySelector('.site9');
    let site10 = document.querySelector('.site10');
    let site11 = document.querySelector('.site11');
    let site12 = document.querySelector('.site12');
    let site13 = document.querySelector('.site13');
    
    sites.forEach((site)=>{
      site.classList.remove('active');
    })

    switch(index){
      case 0:
        site1.classList.add("active");
      break;

      case 1:
        site2.classList.add("active");
      break;

      case 2:
        site3.classList.add("active");
      break;

      case 3:
        site4.classList.add("active");
      break;

      case 4:
        site5.classList.add("active");
      break;

      case 5:
        site6.classList.add("active");
      break;

      case 6:
        site7.classList.add("active");
      break;

      case 7:
        site8.classList.add("active");
      break;

      case 8:
        site9.classList.add("active");
      break;

      case 9:
        site10.classList.add("active");
      break;

      case 10:
        site11.classList.add("active");
      break;

      case 11:
        site12.classList.add("active");
      break;

      case 12:
        site13.classList.add("active");
      break;
    }


  })
})


//page8 text 스크롤
let pTag1 = document.querySelector('.first-parallel');
let pTag2 = document.querySelector('.second-parallel');

let textArr1 = 'PUBLISHER PUBLISHER PUBLISHER PUBLISHER PUBLISHER '.split(' ');

let textArr2 = 'LIMHYUNJU LIMHYUNJU LIMHYUNJU LIMHYUNJU LIMHYUNJU '.split(' ');


let count1 = 0;
let count2 = 0;

initTexts(pTag1,textArr1);
initTexts(pTag2,textArr2);

function initTexts (element, textArray){
    textArray.push(...textArray)
    for(let i = 0;i<textArray.length;i++){
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`
    }
}

/////////////////////////////////////////////////////////
function animate(){
    count1++;
    count2++;

    count1 = marqueeText(count1,pTag1,-1)
    count2 = marqueeText(count2,pTag2,1)


    window.requestAnimationFrame(animate);
    
}


function marqueeText(count, element, direction){
  

    if(count>element.scrollWidth/2){
        count = 0;
        element.style.transform=`translate(0,0)`;
    }

    element.style.transform=`translate(${count * direction}px,0)`;

    return count;

}

function scrollHandler(){
  count1 += 5;
  count2 += 5;
}

animate();

window.addEventListener('scroll',scrollHandler);


//page9 contact
let acc=document.getElementsByClassName('accordion');



for(let i=0; i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active')

        let panel = this.nextElementSibling;

        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight=panel.scrollHeight + "px";
        }
    })
}


//ripple
var ripple6 = new RippleEffect({
  parent: document.querySelector('.p9_right'),
  texture: 'img/KakaoTalk_20231120_210415523.jpg',
  intensity: 1,  //1.2
  strength: .5,  //.5
  waveSpeed: 0.002,  //0.008
  hover: true,  //false
});

ripple6.start();
document.querySelector('.p9_right').addEventListener('mouseenter', ripple6.stop);
document.querySelector('.p9_right').addEventListener('mouseleave', ripple6.start);

let p9_right_canvas = document.querySelector('.p9_right canvas');

p9_right_canvas.style.width = "600px";



//page 8-2
var itemsImg = document.querySelectorAll(".item img")

// itemsImg.forEach(function(item, i) {
//   item.src = "https://source.unsplash.com/random/?iceland&" + i
// })

var TL = gsap.timeline({scrollTrigger: {
  trigger: ".page8-2",
  pin: ".items",
  pinSpacing: false,
  scrub: 2,
  start: () => window.innerHeight + " bottom",
  end: "bottom bottom",
  invalidateOnRefresh: true
}})

TL.to(".items__inner", {rotate: 0}, 0)
TL.fromTo(".items .items__col:nth-child(2n + 0)", {y: "-0vh"}, {y: "40vh"}, 0)
TL.fromTo(".items .items__col:nth-child(2n + 1)", {y: "40vh"}, {y: "0vh"}, 0)
TL.to(".item", {width: "15vw"}, 0)
TL.fromTo(".item img", {scale: 1.4}, {scale: 1}, 0)

var contentTL = gsap.timeline({scrollTrigger: {
  trigger: ".page8-2",
  scrub: 2,
  start: () => window.innerHeight * 1 + " bottom",
  end: "bottom bottom",
  invalidateOnRefresh: true
}})
contentTL.fromTo(".content", 1, {borderRadius: "100%", scale: 0}, {borderRadius: "0%", scale: 1})
contentTL.fromTo(".content h1", 1, {scale: 0}, {scale: 1})
contentTL.fromTo(".content p", 1, {scale: 0}, {scale: 1})
