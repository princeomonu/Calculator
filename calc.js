/**
 * **********
 *  ALGORITHM
 * **********
 * set defaults
 *  1. first value as 0
 *  2. second value as 0
 *  3. mode is first mode
 * when button is clicked:
 *   1. get button text
 *   2. check for mode
 *          if first mode: 
 *                 if button text is "=", ignore it
 *                 if text is operator, save operator and switch to second mode
 *                 else change first value to button text
 *          else second mode:
 *                  if button is operator, ignore it
 *                  if button is "=", calculate, show value switch ,reset 
 *                  else change second value to button text          
 */

// set defaults
let firstValue = 0
let secondValue = 0
let operator = ""
let mode = "first"


function isOperator(text) {
    return (text == "+") || (text =="-") || (text=="x") || (text=="/")
}

function calculate() {
    if(operator=="+"){
        return Number(firstValue) + Number(secondValue)
    }
    else if(operator=="-"){
        return Number(firstValue) - Number(secondValue)
    }
    else if(operator=="x"){
        return Number(firstValue) * Number(secondValue)
    }
    else if(operator=="/"){
        return Number(firstValue) / Number(secondValue)
    }
    else{
        return 0
    }

}

function reset(){
    firstValue = "0"
    secondValue = "0"
    operator = ""
    mode = "first"
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// on button click
$(".button").click((e) =>{

    // get button text from jquery event
    let buttonText = e.target.innerHTML
    console.log({buttonText})

    // clear
    if(buttonText=="c"){
        reset()
        $("#result").text("0")
        return
    }

   

    if(mode=="first"){ //if first mode
        // console.log('is first mode')

        //ignore "="
        if(buttonText=="=") {
            // console.log('button is "=", ignore!')
            return
        }
        else if(isOperator(buttonText)){ //if operator
            // console.log('button text is operator')
            // save operator
            operator = buttonText
            mode = "second"
            $("#result").text(operator)

        }else{ //number
            // change first value
            firstValue = (firstValue+buttonText)
            $("#result").text(numberWithCommas(Number(firstValue)))
        }


    }
    else{ // seconde mode
        // console.log('is second mode')

        if(isOperator(buttonText)){ //
            // console.log('button text is operator, ignore')
            return
        }
        else if(buttonText=="=") {
            // console.log('button is "=", calculate!')
            const result = calculate()    
            console.log({result})      
            // show value
            $("#result").html(numberWithCommas(result))
            // back to first mode
            reset()
        }else{ //number
            // change second value
            secondValue = secondValue+buttonText
            $("#result").text(numberWithCommas(Number(secondValue)))
        }

    }
})

