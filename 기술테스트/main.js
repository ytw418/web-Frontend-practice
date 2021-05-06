let target = document.querySelector("#dynamic");
function blink(){
    target.classList.toggle("active");
   
}
setInterval(blink,500);//커서 깜박임 효과




function randomString()
{
let stringArr = ["정확한 분석과 맞춤 솔루션으로"];
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