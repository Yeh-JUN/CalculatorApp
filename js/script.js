

const alertName = document.querySelector('.alertName');
const btnAC = document.querySelector('.btn-ac');
const numBack = document.querySelector('.numBack');
const numDecimal = document.querySelector('.decimal');
const doubleZero = document.querySelector('.doubleZero');
const btnNumG = document.querySelectorAll('.btn-num');
const btnConG = document.querySelectorAll('.btn-con');
const displayDetail = document.querySelector('#displayDetail');
const displayResult = document.querySelector('#displayResult');
let pendingVal;
let evalStrAry = [];
let evalStrAry_math = [];
let displayVal ="0";
let btnText;

//reset
btnAC.addEventListener('click' , () =>{
    displayVal ="0";
    pendingVal =undefined;
    evalStrAry =[];
    evalStrAry_math =[];
    displayResult.innerText = displayVal;
    displayDetail.innerText = displayVal;
});

//backspace
numBack.addEventListener('click' , () =>{
    let displayVal_length = displayVal.length;
    displayVal = displayVal.slice(0 , displayVal_length - 1);
    if(displayVal === ''){
        displayVal ="0";
    }
    displayDetail.innerText = displayVal;
    displayResult.innerText = displayVal;
    
}, false);

//add decimal
numDecimal.addEventListener('click' , ()=>{
    if(!displayVal.includes('.')){
        displayVal +='.';
    }
    displayDetail.innerText = displayVal;
    displayResult.innerText = displayVal;
},false);

doubleZero.addEventListener('click' , ()=>{
    if(displayVal !=='0'){
        displayVal += '00';
    }
    displayDetail.innerText = displayVal;
    displayResult.innerText = displayVal;
})

let updateDisplayVal = (e) =>{
    btnText = e.target.dataset.num;
    if(displayVal === "0"){
        displayVal ='';
        displayVal += btnText;
    }
    else{
        displayVal += btnText;
    }
    displayResult.innerText = displayVal;
    displayDetail.innerText = displayVal;
}
//將每個btnNum加上事件
for(let i=0 ; i<btnNumG.length; i++){
    btnNumG[i].addEventListener('click' ,updateDisplayVal,false );
}


let performOperation = (e) =>{
    let operator =e.target.dataset.math;
    let operatorText = e.target.innerText;
    if(displayVal && operator !== "="){
        //如果有值 "且" opera不等於=
        pendingVal = displayVal; //將值放佔存
        displayVal ='0'; //預設顯示0
        displayResult.innerText = displayVal;
        evalStrAry.push(pendingVal);
        evalStrAry.push(operatorText);
        evalStrAry_math.push(pendingVal);
        evalStrAry_math.push(operator);

        let evaluation = evalStrAry.join(' ');
        let evaluation_list = evalStrAry.join(' ');
        displayDetail.innerText = evaluation_list;
    }
    else{
        evalStrAry_math.push(displayVal);
        evalStrAry.push(displayVal);

        let evaluation = evalStrAry.join(' ');
        let evaluation_list = evalStrAry.join(' ');

        let evaluation_math = eval(evalStrAry_math.join(' '));
        let evaluation_math_list = eval(evalStrAry_math).join('');

        displayResult.innerText = evaluation_math;
        displayDetail.innerText = evaluation_list;

        displayVal ='0';
        evalStrAry = [];
        evalStrAry_math = [];
    }
}

//將每個btnCon加上事件
for(let i=0 ; i<btnConG.length; i++){
    btnConG[i].addEventListener('click' ,performOperation,false );
}

//#region <測試碼>
// function clickNum(target){
//     display.innerText +=target.innerText;
// }

// function control(targer){
//     switch(targer.innerText){
//         case "+" :
//             display.innerText += "+";
//             break;
//         case "-":
//             display.innerText += "-";
//             break;
//         case "*":
//             display.innerText += "*";
//             break;
//         case "/":
//             display.innerText += "/";
//             break;    
//     }
// }

// const btnG = document.querySelector('.button-group');
// btnG.addEventListener('click' , (e){
//     let value =e.target.innerText;
//     switch(value){
//         case "1" :
//         case "2" :
//         case "3" :
//         case "4" :
//         case "5" :
//         case "6" :
//         case "7" :
//         case "8" :
//         case "9" :
//         case "0" :
//             if(firstNum){
//                 secondNum += e.target.innerText;
//                 display.innerText +=secondNum;
//             }
//             else{
//                 firstNum = firstNum + e.target.innerText;
//                 display.innerText +=firstNum;
//             }
//             break;

//         case "+" :
//         case "-" :
//         case "*" :
//         case "/" :
//             display.innerText +=e.target.innerText;
//             break;

//         case "±" :
//         case "%" :
//             alert("");
//             break;

//         case "Clear":
//             display.innerText ="";
//             break;

//         case "←":
//             alert("");
//             break;

//         case "=" :
//             break;

//         case "Jun" :
//             alert("");
//             break;

//         default:
//             console.log("");
//     }
// },false);
//#endregion





