// Creo l'array con la lista della frutta

let fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(fridge);
let peach = "pesca";
console.log(peach);
let check = false;

let list = document.querySelector("ul");
let availability = document.querySelector("strong");
const add = document.getElementById("add");
const verify = document.getElementById("verify");

for(let i = 0; i<fridge.length; i++){
    list.innerHTML += `<li>${fridge[i]}</li>`
}

add.addEventListener("click", function(){
    fridge.push(peach)
    console.log(fridge);
    list.innerHTML = ""
    for(let i = 0; i<fridge.length; i++){
        list.innerHTML += `<li>${fridge[i]}</li>`
    }
})

verify.addEventListener("click", function(){
    for(let i = 0; i<fridge.length; i++){
        if("cocomero" == fridge[i]){
            check = true
        }
    }

    if(check){
        availability.innerText += "Trovato! Devo solo preparare il cocktail."
    }
    else{
        availability.innerText += "Oh no, devo uscire a comprare il cocomero!"
    }
})