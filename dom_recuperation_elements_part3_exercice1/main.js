// 03.01
let h2 = document.querySelector ("h2")
console.log(h2.innerHTML)

// 03.02
h2.textContent = "Exercice 1"
console.log(h2.innerText)
// 03.03
let nextP = h2.nextElementSibling
nextP.innerText = "Exercice1"
console.log(nextP.innerText)

// 03.04
let section = document.querySelector('section');
console.log(section.id);

// 03.05
let h1 = document.querySelector('h1')
console.log(h1.className)
console.log(h1.classList)
// 03.06
let lesH1 = document.querySelectorAll('h1')
lesH1.forEach(element => {
    console.log(element.className)
})

// 03.07
let input = document.querySelector('input')
console.log(input.attributes)

// 03.08
console.log(input.attributes.type.value)

// 03.09 
let input2 = document.querySelector('#inputPassword3')
input2.setAttribute('type','password')
console.log(input2.attributes.type)

// 03.10