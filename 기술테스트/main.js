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

class sec1_main1{
    static attachEvent = ()=>{
        window.addEventListener('scroll',()=>{
            for(let i=0; i<Portpolio.getElementPortpolioItem().length;i++){
                setTimeout(()=>{
                    if(window.scrollY > 2700){
                        Portpolio.getElementPortpolioItem()[i].classList.add('visible');
                    }
                },i*300);
            }
        });
    }

    static getElementPortpolio = ()=>{
        return window.document.body.querySelector('[rel="js-portpolio"]');
    }
    static getElementPortpolioItem = ()=>{
        return Portpolio.getElementPortpolio().querySelectorAll('.grid-item');
    }
}