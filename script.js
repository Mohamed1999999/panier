

let div1= document.getElementById("prod1")
let div2= document.getElementById("prod2")
let buttonremove= document.querySelector(".btn1")
let buttonremove2= document.querySelector(".btn2")

// delete
buttonremove.addEventListener("click",remove1)
function remove1(){
  buttonremove.parentElement.remove()
}
buttonremove2.addEventListener("click",remove2)
function remove2(){
  buttonremove2.parentElement.remove()
}

// like

let liked = document.querySelector(".like1")
let liked2 = document.querySelector(".like2")


liked.addEventListener("click",likeit)
function likeit(){

  liked.style.backgroundColor= "red"
}
liked2.addEventListener("click",likeit2)
function likeit2(){

  liked2.style.backgroundColor= "red"
}

//gestion prix
let decrementation = document.getElementById("btn-")
let quantity = document.getElementById("quant")
let quantity2 = document.getElementById("quant2")
let incrementation = document.getElementById("btn+")
let prix1= document.getElementById("price1")
let prix2= document.getElementById("price2")
let total= document.getElementById("total")
let decrementation2 = document.getElementById("btn-2")
let incrementation2 = document.getElementById("btn+2")



decrementation.addEventListener("click",decrementer)
function decrementer(){
  if(quantity.value>0){
    quantity.value--
    // prix1.textContent = parseInt(prix1.textContent) - 7000
    total.textContent = parseInt(total.textContent) - 7000
  }
}

incrementation.addEventListener("click",incrementer)
function incrementer(){
  quantity.value++
  // prix1.textContent = parseInt(prix1.textContent) + 7000
  total.textContent = parseInt(total.textContent) + 7000

}


decrementation2.addEventListener("click",decrementer2)
function decrementer2(){
  if(quantity2.value>0){
    quantity2.value--
    // prix2.textContent= parseInt(prix2.textContent) - 3000
    total.textContent = parseInt(total.textContent) - 3000
  }
}

incrementation2.addEventListener("click",incrementer2)
function incrementer2(){
    quantity2.value++
    // prix2.textContent = parseInt(prix2.textContent) + 3000
    total.textContent = parseInt(total.textContent) + 3000

}



