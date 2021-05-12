
let target = document.querySelector("#dynamic");
function blink(){
    target.classList.toggle("active");
   
}
setInterval(blink,500);//커서 깜박임 효과




function randomString()
{
let stringArr = ["가장 효율적인 결과물을 만나보세요"];
let selectString = stringArr[Math.floor(Math.random() *stringArr.length)];
let selectStringArr = selectString.split("");

return selectStringArr;
}

//타이핑 리셋
function resetTyping()
{
    target.textContent = "";
    dynamic(randomString());
}



//한글자씩 텍스트 출력함수
function dynamic(randomArr)
{
  
    if(randomArr.length > 0)
    {
        target.textContent +=randomArr.shift();
        setTimeout(function()
        {
            dynamic(randomArr);
        },80);

    }
    else
    {
        setTimeout(resetTyping,3000);
    }
}

dynamic(randomString());




class Arrow{
    static attachEvent = ()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 300){
                Arrow.move();
            }else{
                Arrow.unMove();
            }
        });
    }

    static getElementArrow = ()=>{
        return window.document.body.querySelector('[rel="js-scroll_Arrow"]');
    }

    static move = ()=>{
        if(!Arrow.getElementArrow().classList.contains('move')){
            Arrow.getElementArrow().classList.add('move');
        }
    }
    static unMove = ()=>{
        if(Arrow.getElementArrow().classList.contains('move')){
            Arrow.getElementArrow().classList.remove('move');
        }
    }
}
// 네비게이션 바 
function navigo (){
    const header = document.querySelector('header'); //헤더부분획득
    const headerheight = header.clientHeight;//헤더높이
  document.addEventListener('scroll', onScroll, { passive: true });//스크롤 이벤트
   function onScroll () {
       const scrollposition = pageYOffset;//스크롤 위치
     const nav = document.querySelector('header');//네비게이션
     if (headerheight<=scrollposition){//만약 헤더높이<=스크롤위치라면
       nav.classList.add('fix')//fix클래스를 네비에 추가
     }
     else {//그 외의 경우
       nav.classList.remove('fix');//fix클래스를 네비에서 제거
     }
   } 
    
  }
  navigo()

