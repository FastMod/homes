const number=document.querySelector('#inputNumb')
const number2=document.querySelector('#inputNumb2')
const number3=document.querySelector('#inputNumb3')
const number4=document.querySelector('#inputNumb4')
const number5=document.querySelector('#inputNumb5')
const number6=document.querySelector('#inputNumb6')
const result=document.querySelector('#resultFirstExecise')
const result2=document.querySelector('#resultSecondExecise')
const result3=document.querySelector('#resultThirdExecise')
const result4=document.querySelector('#result4Execise')
const result5=document.querySelector('#result5Execise')
const res=document.querySelector('#result')
function getNumb(arg1)
{
    return arg1.toString()

}
number.addEventListener("input",()=>{
    result.textContent=getNumb(number.value)
})
function getAge(arg1)
{
    a_=parseInt(arg1)+parseInt("1")
        return a_.toString()
}
number.addEventListener("input",()=>{
    res.textContent=getAge(number.value)
})
function getRemainder(arg1,arg2)
{
    a_=parseInt(arg1)
    b_=parseInt(arg2)
        return a_ % b_
}
number2.addEventListener("input",()=>{
    result2.textContent=getRemainder(number2.value,number3.value)
})
number3.addEventListener("input",()=>{
    result2.textContent=getRemainder(number2.value,number3.value)
})
function faceControl(arg1)
{
    a_=parseInt(arg1)
    if (a_>=18)
    {
        answ="Welcome"
        return answ.toString()
    }
    else
    {
        answ="Отказ"
        return answ.toString()
    }
}
number4.addEventListener("input",()=>{
    result3.textContent=faceControl(number4.value)
})

function getNextAge(arg1)
{
    a_=parseInt(arg1)+1
    if (arg1=='')
    {
        answ="0"
        return answ.toString()
    }
    else
    {
        return a_.toString()
    }
}
number5.addEventListener("input",()=>{
    result4.textContent=getNextAge(number5.value)
})

function faceControl(arg1)
{
    a_=parseInt(arg1)
    b_=(a_>=140)? true:false
    return b_
}
number6.addEventListener("input",()=>{
    result5.textContent=faceControl(number6.value)
})
