let user_array = []
let ask = parseInt(prompt("Quanti elementi dovrà contenere il tuo array?"))
console.log(ask)
let show = document.getElementById("show");
let num = document.getElementById("num");
const elements = document.querySelector("h5");

for(let i = 1; i<=ask; i++){
    user_array.push(Math.floor(Math.random() * 100))
}

console.log(user_array)
let num_elements;


show.addEventListener("click", function(){
    elements.innerText = ""
    num.innerText = ""
    num_elements = parseInt(prompt("Quanti elementi vuoi visualizzare?"))
    let show_elements = user_array.slice(`-${num_elements}`)
    if(num_elements > user_array.length){
        alert(`Il tuo array contiene ${user_array.length} elementi, non posso mostrare ${num_elements} elementi.`)
    }
    else if(num_elements <= user_array.length){
        elements.innerText += show_elements
        num.innerText += `Stai visualizzando gli ultimi ${num_elements} elementi del tuo array!`
    }
})

