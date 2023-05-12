// Задание 1
console.log("Задание 1")
const getNickName = nik => { 
    //тут код вашей функции
    a=nik
    b=a.startsWith('@')
    if (b==true){
        return a.toString()
    }
    else
    {
        c="@"+a
        return c.toString()
    }
  }

//проверка
if ((getNickName("@oziaba") === "@oziaba") && (getNickName("python.hub") === "@python.hub")) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 2
console.log("Задание 2")
const getCurrency = price => {
    //тут код вашей функции
    a=price
    q=a.includes("$")
    w=a.includes("€")
    if (q==true){
       c ="Доллар"
        return c.toString()
    }
    else if (w==true)
    {
        c="Евро"
        return c.toString()
    }
    else
    {
        c="Недоступно"
        return c.toString()
    }
}

//проверка
if ((getCurrency("$100") === "Доллар" && getCurrency("5€") === "Евро" && getCurrency("30 USD") === "Недоступно" )) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}


// Задание 3
console.log("Задание 3")
const getSlug = title => {
    //тут код вашей функции
    a=title.split(' ')
    r=a.length -1;
    s=0
    f=[]
    for (let i = 0; i < a.length; i++) {
        b=a[i].split('')
        for (let j = 0; j < b.length; j++) {
            if(s<15)
            {
                s=s+1
                f.push(b[j])
            }
            else
            {
                break
            } 
        }
        if(s<=15 && i==0)
        {
            s=s+1
            f.push("-")
        }
        else if(s<15 && i!=r)
        {
            s=s+1
            f.push(" ")
        }
        else{break}
    }
    k=f.join("")
    p=k.toLowerCase()
    return p.toString()
}

//проверка
if (getSlug("Red Bull Gives You Wings") === "red-bull gives " &&
    getSlug("Maybe it's Maybelline") === "maybe-it's mayb" &&
    getSlug("Just Do It") === "just-do it" &&
    getSlug("Challenge Everything") === "challenge-every") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 4
console.log("Задание 4")
const getTodosNumber = todos => { 
    a=todos.split(",")
    b=a.length
    console.log(b)
    return b
  }

//проверка
if (getTodosNumber("Купить хлеб,Купить сыр,Приготовить ужин") === 3 &&
    getTodosNumber("Установить кондиционер,Заправить картридж") === 2) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 5
console.log("Задание 5")
const data = [["Bitcoin", 40468],
["Ethereum", 3005],
["Solana", 106],
["Tether", 1]]
function renderTableRows(rows) {
    //тут код вашей функции
    f=[]
   for (let i = 0; i < rows.length; i++) {
    b=`<td>${rows[i][0]}</td><td>${rows[i][1]}</td>`
    f.push(b)
   }
   z=f.join('')
   n="<tr>"+z+"</tr>"
   return n.toString()
  }

//проверка
if (renderTableRows(data) === "<tr><td>Bitcoin</td><td>40468</td><td>Ethereum</td><td>3005</td><td>Solana</td><td>106</td><td>Tether</td><td>1</td></tr>") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 6
console.log("Задание 6")
const notAnExcellent = grades => { 
    //тут код вашей функции
    for (let i = 0; i < grades.length; i++) {
        if (grades[i]<3) {
            a=1
            break
        }
        else 
        {
            a=0
        }
    }
    if (a==1) {
        return true
    }
    else
    {
        return false
    }
  }

//проверка
if (notAnExcellent([4, 2, 3, 5]) === true &&
    notAnExcellent([3, 4, 5, 3]) === false) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 7
console.log("Задание 7")
const demoteUser = roles => { 
    //тут код вашей функции
    a=roles
    a.splice(0,1)
    return a
  }

const user = ["Admin", "Moderator", "Editor"]

//проверка
const diff = (a, b) => {
    if (a.length != b.length) return false; // Мас­си­вы раз­ной дли­ны не рав­ны

    for(var i = 0; i < a.length; i++) // Цикл по всем эле­мен­там
      if (a[i] !== b[i]) return false; // Ес­ли хоть один эле­мент от­ли­ча­ет­ся, мас­си­вы не рав­ны
   
    return true; // Ина­че они рав­ны
}
if (diff(demoteUser(user), ["Moderator", "Editor"]) &&
    diff(demoteUser(user), ["Editor"])) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 8
console.log("Задание 8")
const multiply = nums => {
    //тут код вашей функции, используем reduce, и правильно ставим return
    res=nums.reduce(function(mn,current){
        return mn*current;
    })
    return res

}
//проверка
if (multiply([123, 78]) === 9594 &&
    multiply([504, 503, 807]) === 204584184) {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 9
console.log("Задание 9")
const getUserInfo = block => {
    //тут код вашей функции
    [name,age]=block;
    return `Пользователю ${name} - ${age} лет.`
  }


//проверка
if (getUserInfo(["Nina", 25]) === "Пользователю Nina - 25 лет." &&
    getUserInfo(["Anna", 11]) === "Пользователю Anna - 11 лет.") {
    console.log("Правильно")
} else {
    console.log("Плохо")
}

// Задание 10
console.log("Задание 10")
const joinArrays = (array1, array2) => {
    //тут код вашей функции
    a=[...array1,...array2]
    return a
  }

//проверка
if (diff(joinArrays(["Save", "Money"], ["Live", "Better"]), ['Save', 'Money', 'Live', 'Better']) &&
diff(joinArrays(['When', 'There'], ['Is', 'No', 'Tomorrow']), ['When', 'There', 'Is', 'No', 'Tomorrow'])){
    console.log("Правильно")
} else {
    console.log("Плохо")
}
