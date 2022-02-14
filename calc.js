// give DOMs
const calc = document.querySelector(".calc");
const show_ResultProcsses = document.querySelector(".resultProcess");
const show_Result = document.querySelector(".result");


let result = 0;
let sentenceResult = "";
const number_btn = [0,1,2,3,4,5,6,7,8,9,' ',"."];
const notNum = ["+","-","*","/"];
let pushEqualOrNot = false;




class calculator{
    //give click info
    static whichBtn(e){
        const id = e.target.id;
        calculator.newClick(id);
    }

    static newClick(btn_id){
        if(btn_id == "btn_0"){
            sentenceResult = sentenceResult + "0";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_1"){
            sentenceResult = sentenceResult + "1";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_2"){
            sentenceResult = sentenceResult + "2";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_3"){
            sentenceResult = sentenceResult + "3";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_4"){
            sentenceResult = sentenceResult + "4";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_5"){
            sentenceResult = sentenceResult + "5";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_6"){
            sentenceResult = sentenceResult + "6";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_7"){
            sentenceResult = sentenceResult + "7";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_8"){
            sentenceResult = sentenceResult + "8";
            pushEqualOrNot = false;
        }
            
        else if(btn_id == "btn_9"){
            sentenceResult = sentenceResult + "9";
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_."){
            sentenceResult = sentenceResult + "."
            pushEqualOrNot = false
        }

        else if(btn_id == "btn_Del"){
            sentenceResult = sentenceResult.split("")
            console.log(sentenceResult);
            sentenceResult = sentenceResult.slice(0,sentenceResult.length-1);
            sentenceResult = sentenceResult.join("");
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_C"){
            sentenceResult = "";
            calculator_UI.showResult("0");
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_+"){
            let pastKey_isNumber = number_btn.some(btn => btn == sentenceResult[sentenceResult.length-2] )
            if(sentenceResult.length === 1){  //check if first number is under 10
                pastKey_isNumber = true;
            }

            if(sentenceResult.length !== 0){
                if(pastKey_isNumber == true)
                    sentenceResult = sentenceResult + " + ";
                else if(pastKey_isNumber == false){
                    sentenceResult = sentenceResult.split("");
                    sentenceResult.splice(sentenceResult.length-2,1,'+');
                    sentenceResult = sentenceResult.join('');
                }
            }
            pushEqualOrNot = false; 
        }
        else if(btn_id == "btn_-"){
            let pastKey_isNumber = number_btn.some(btn => btn == sentenceResult[sentenceResult.length-2])
            if(sentenceResult.length === 1){  //check if first number is under 10
                pastKey_isNumber = true;
            }

            if(sentenceResult.length !== 0){
                if(pastKey_isNumber == true)
                    sentenceResult = sentenceResult + " - ";
                else if(pastKey_isNumber == false){
                    sentenceResult = sentenceResult.split("");
                    sentenceResult.splice(sentenceResult.length-2,1,'-');
                    sentenceResult = sentenceResult.join('');
                }
            }
            pushEqualOrNot = false;
        }
        else if(btn_id == "btn_*"){
            let pastKey_isNumber = number_btn.some(btn => btn == sentenceResult[sentenceResult.length-2])
            if(sentenceResult.length === 1){  //check if first number is under 10
                pastKey_isNumber = true;
            }

            if(sentenceResult.length !== 0){
                if(pastKey_isNumber == true)
                    sentenceResult = sentenceResult + " * ";
                else if(pastKey_isNumber == false){
                    sentenceResult = sentenceResult.split("");
                    sentenceResult.splice(sentenceResult.length-2,1,'*');
                    sentenceResult = sentenceResult.join('');
                }
            }
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_/"){
            let pastKey_isNumber = number_btn.some(btn => btn == sentenceResult[sentenceResult.length-2])
            if(sentenceResult.length === 1){  //check if first number is under 10
                pastKey_isNumber = true;
            }

            if(sentenceResult.length !== 0){
                if(pastKey_isNumber == true)
                    sentenceResult = sentenceResult + " / ";
                else if(pastKey_isNumber == false){
                    sentenceResult = sentenceResult.split("");
                    sentenceResult.splice(sentenceResult.length-2,1,'/');
                    sentenceResult = sentenceResult.join('');
                }
            }
            pushEqualOrNot = false;
        }

        else if(btn_id == "btn_equal"){    //show the result the procsses
            if((sentenceResult[sentenceResult.length-2]  != '+') && (sentenceResult[sentenceResult.length-2]  != '-') && (sentenceResult[sentenceResult.length-2]  != '*') && (sentenceResult[sentenceResult.length-2]  != '/')){
                calculator.calculateResult_sentToUI(sentenceResult);
                pushEqualOrNot = true;
            }
            else
                pushEqualOrNot = false;
        }

        calculator.showProcsses_sentToUI(sentenceResult);
    }

    //sent procses for show
    static showProcsses_sentToUI(sentenceResult_){
        calculator_UI.showProcsses(sentenceResult)
    }

    //calculate the sentencesResult and sent to result for show
    static calculateResult_sentToUI(sentenceResult){
        result = calculator.calcThis(sentenceResult);
        calculator_UI.showResult(result);
    }

    static calcThis(calcThis_){
        const calcThis = calcThis_.split(" ");
        //test if answer is ready to return
        let isAnswer = true;
        for(let i = 0; i < calcThis.length; i++){
            if ((calcThis[i] == '+') || (calcThis[i] == '-') || (calcThis[i] == '*') || (calcThis[i] == '/')){
                isAnswer = false;
                break;
            }
        }

        if(isAnswer == true)
            return calcThis_;
        else if(isAnswer == false){
            for(let i = 0; i < calcThis.length; i++){
                if(calcThis[i] == '*'){
                    const newCalc = Number(calcThis[i-1]) * Number(calcThis[i+1]);
                    let calcThis_new = calcThis;
                    calcThis_new.splice(i-1,3,String(newCalc));
                    calcThis_new = calcThis_new.splice(',');
                    calcThis_new = calcThis_new.join(" ");
                    return calculator.calcThis(String(calcThis_new));
                    break;    
                }
            }
            for(let i = 0; i < calcThis.length; i++){
                if(calcThis[i] == '/'){
                    const newCalc = Number(calcThis[i-1]) / Number(calcThis[i+1]);
                    let calcThis_new = calcThis;
                    calcThis_new.splice(i-1,3,String(newCalc));
                    calcThis_new = calcThis_new.splice(',');
                    calcThis_new = calcThis_new.join(" ");
                    return calculator.calcThis(String(calcThis_new));
                    break;    
                }
            }
            for(let i = 0; i < calcThis.length; i++){
                if(calcThis[i] == '+'){
                    const newCalc = Number(calcThis[i-1]) + Number(calcThis[i+1]);
                    let calcThis_new = calcThis;
                    calcThis_new.splice(i-1,3,String(newCalc));
                    calcThis_new = calcThis_new.splice(',');
                    calcThis_new = calcThis_new.join(" ");
                    return calculator.calcThis(String(calcThis_new));
                    break;    
                }
            }
            for(let i = 0; i < calcThis.length; i++){
                if(calcThis[i] == '-'){
                    const newCalc = Number(calcThis[i-1]) - Number(calcThis[i+1]);
                    let calcThis_new = calcThis;
                    calcThis_new.splice(i-1,3,String(newCalc));
                    calcThis_new = calcThis_new.splice(',');
                    calcThis_new = calcThis_new.join(" ");
                    return calculator.calcThis(String(calcThis_new));
                    break;    
                }
            }
        }
    }
}


class calculator_UI{
    //show procsses
    static showProcsses(sentenceResult_){
        let sentenceResult_end = sentenceResult_;
        if(pushEqualOrNot == false)
            sentenceResult_end = sentenceResult;
        else if(pushEqualOrNot == true)
            sentenceResult_end = sentenceResult+' =';
        show_ResultProcsses.textContent = sentenceResult_end;
    }

    //show result
    static showResult(result_){
        let result = result_.split("");
        result = result.slice(0,12)
        result = result.join("");
        show_Result.textContent = result;
    }
    
}



//click on calculator:
calc.addEventListener("click",calculator.whichBtn);

//update UI:



