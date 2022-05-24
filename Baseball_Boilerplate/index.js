
const startGame = document.getElementById("gamestart");
const Input = document.getElementById("input-number");
const Form = document.getElementById("form-number")
const reStart = document.getElementById("restart")
const result = document.getElementById("result-area")
let answer=[];
let select=[];
let strike;
let ball;
let chances = 10;

function randomNum(){
  answer = String(Math.floor(Math.random()*900)+100).split('')
}
startGame.addEventListener("click",randomNum)

function numSubmit(num){
  num.preventDefault();
  chances --;
  select = String(Input.value).split('')
  console.log(select,"선택")
  console.log(answer,"정답")
  if(select.length !=3 ){
    alert("3자리 숫자를 입력하세요")  };
    strike = 0;
    ball = 0;
  for(let i = 0; i<3; i++){
      for (let j = 0; j<3;j++){
        if(select[i] === answer[j]){
          if( i === j){
            strike ++
          } else {ball ++}
        }
      } result.textContent = `스트라이크 ${strike}개 / 볼 ${ball}개`
     }
     console.log(chances)
  if(chances <1){  alert("실패 삼진아웃!");}

    }

  function restartNum(){
    chances = 10;
    randomNum();
  }
    

reStart.addEventListener("click",restartNum);
Form.addEventListener("submit",numSubmit);