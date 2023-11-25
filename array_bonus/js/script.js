let array_1 = ["Franco", "Matteo", "Pasquale", "Nino", "Maria", "Jessica", "Fabrizio"]
let array_2 = ["Pietro", "Marco"]

const first_list = document.getElementById("firstlist");
const second_list = document.getElementById("list");

for(let i = 0; i<array_1.length; i++){
    first_list.innerHTML += `<li>${array_1[i]}</li>`
}

for(let i = 0; i<array_2.length; i++){
    second_list.innerHTML += `<li>${array_2[i]}</li>`
}

const add = document.getElementById("add");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    second_list.innerHTML = ""
    
    if(array_1.length > array_2.length){
        array_2.push(add.value);
        for(let i = 0; i<array_2.length; i++){
            second_list.innerHTML += `<li>${array_2[i]}</li>`
        }
    }
    else if(array_2.length = array_1.length){
        alert("I due array contengono lo stesso numero di elementi!!!")
        for(let i = 0; i<array_2.length; i++){
            second_list.innerHTML += `<li>${array_2[i]}</li>`
        }
    }
})
