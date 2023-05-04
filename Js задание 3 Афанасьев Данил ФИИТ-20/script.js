const number=document.querySelector('#inputNumb')
const number2=document.querySelector('#inputNumb2')
const number3=document.querySelector('#inputNumb3')
const number4=document.querySelector('#inputNumb4')
const number5=document.querySelector('#inputNumb5')
const number6=document.querySelector('#inputNumb6')
const number7=document.querySelector('#inputNumb7')
const number8=document.querySelector('#inputNumb8')
const number9=document.querySelector('#inputNumb9')
const number10=document.querySelector('#inputNumb10')
const number11=document.querySelector('#inputNumb11')
const number12=document.querySelector('#inputNumb12')
const result=document.querySelector('#resultFirstExecise')
const result2=document.querySelector('#result2Execise')
const result3=document.querySelector('#result3Execise')
const result4=document.querySelector('#result4Execise')
const result5=document.querySelector('#result5Execise')
const result6=document.querySelector('#result6Execise')
const result7=document.querySelector('#result7Execise')
const result8=document.querySelector('#result8Execise')
const result9=document.querySelector('#result9Execise')
function sumArray(arg1)
{
    b=0
    a_=arg1.split(" ")
    a_.forEach(element => {
        b+=+element
    });
    return b.toString()
}
number.addEventListener("input",()=>{
    result.textContent=sumArray(number.value)
})

function getAboveZero(arg1)
{
    a_=arg1.split(" ")
    b_=a_.filter(function(zero){
        return zero>0
    })
    return b_.toString()
}
number2.addEventListener("input",()=>{
    result2.textContent=getAboveZero(number2.value)
})

function getPonies(arg1,arg2)
{
    a_=arg1.split(" ")
    с_=arg2.split(" ")
    b_=a_.find(function(zero){
        return zero==arg2
    })
    
    return b_.toString()
    
}
number3.addEventListener("input",()=>{
    result3.textContent=getPonies(number3.value,number4.value)
})
number4.addEventListener("input",()=>{
    result3.textContent=getPonies(number3.value,number4.value)
})

function isTxIncluded(arg1,arg2)
{
    a_=arg1.split(" ")
    b_=arg2.split(" ")
    c_=a_.includes(b_[0])
    if(c_==true)
    {
        d="true"
        return d.toString()
    }
    else
    {
        d="false"
        return d.toString()
    }
}
number5.addEventListener("input",()=>{
    result4.textContent=isTxIncluded(number5.value,number6.value)
})
number6.addEventListener("input",()=>{
    result4.textContent=isTxIncluded(number5.value,number6.value)
})

function getSizes(arg1)
{
    a_=arg1.split(" ")
    doubled=a_.map(function(zoro){
        f=zoro.split("")
        j=f.length
        return j.toString()
    })
    return doubled.toString()
}
number7.addEventListener("input",()=>{
    result5.textContent=getSizes(number7.value)
})

function getSizes(arg1)
{
    a_=arg1.split(" ")
    doubled=a_.map(function(zoro){
        f=zoro.split("")
        j=f.length
        return j
    })
    b=0
    doubled.forEach(element => {
        b+=+element
    });
    z=[1]
    z[0]=b
    q_=a_.join(' ')
    newArray = q_.concat(z);
    return newArray.toString()
}
number8.addEventListener("input",()=>{
    result6.textContent=getSizes(number8.value)
})

const anime={
    Title:"Гуррен лаган",
    episodes:"27"
}
function getEpisodes(arg1,arg2)
{
    anime.Title=arg1
    anime.episodes=arg2
    b=`Аниме:${anime.Title} включает ${anime.episodes} серий!`
    return b.toString()
}
number9.addEventListener("input",()=>{
    result7.textContent=getEpisodes(number9.value,number10.value)
})
number10.addEventListener("input",()=>{
    result7.textContent=getEpisodes(number9.value,number10.value)
})

const triple=(a)=>
{
    return a*3
}
number11.addEventListener("input",()=>{
    result8.textContent=triple(number11.value)
})

const getAvgGlucose=(a)=>
{
    a_=a.split(" ")
    len=a_.length;
    b=0
    a_.forEach(element => {
        b+=+element
    });
    z=b/len
    return z.toString()
}

number12.addEventListener("input",()=>{
    result9.textContent=getAvgGlucose(number12.value)
})