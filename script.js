const inputDEsloc = document.querySelector('#deslocamento')
const textCifra = document.querySelector('.cifrar textarea')
const textDeCifra = document.querySelector('.decifrar textarea')
const buttonCifrar = document.querySelector('.cifrar button')
const buttonDeCifrar = document.querySelector('.decifrar button')
const textContent = document.querySelector('.content')



buttonCifrar.addEventListener('click' , () => {
    textCifra.value = cifra(textContent.value , Number(inputDEsloc.value) )
})

buttonDeCifrar.addEventListener('click' , () => {
   textDeCifra.value = decifra(textContent.value , Number(inputDEsloc.value))
})





let array = []
let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
for(let i = 0 ; i < alfabeto.length ; i++) {
   array.push(alfabeto[i].toLowerCase())
}

function cifra(mensage , desloc) {
   let mensageCrip = ''
   for(let i = 0 ; i < mensage.length ; i++) {
      let string = mensage
      if(string[i].toUpperCase() === string[i]) {
         string =  mensage.replace(string[i] , string[i].toLowerCase())
      }
      if(/[0-9]/.test(string[i]) ) {
         mensageCrip += string[i]
         continue
      }
      let index = array.indexOf(string[i]) + desloc
      if(string[i] === ' ') {
         mensageCrip += ' '
         continue
      }
      if(desloc >= 26) {
         return 'essa oeperação não e possivel'
      }
      if(index > 25) {
         index = ( index -25 ) - 1
      }
      if(mensage[i].toUpperCase() === mensage[i]) {
         mensageCrip += array[index].toUpperCase()
         continue
      }
      mensageCrip += array[index]
   }
   return mensageCrip
}



function decifra(mensage , desloc) {
   let mensageCrip = ''
   for(let i = 0 ; i < mensage.length ; i++) {
      let string = mensage
      if(string[i].toUpperCase() === string[i]) {
         string =  mensage.replace(string[i] , string[i].toLowerCase())
      }
      let index = array.indexOf(string[i]) - desloc
      if(string[i] === ' ') {
         mensageCrip += ' '
         continue
      }
      if(desloc >= 26) {
         return 'essa oeperação não e possivel'
      }
      if(index < 0) {
         let conta = desloc + index
         index = 25 -  (desloc - conta ) +1
      }
      if(mensage[i].toUpperCase() === mensage[i]) {
         mensageCrip += array[index].toUpperCase()
         continue
      }
      mensageCrip += array[index]
   }
   return mensageCrip
}






function cifraPoli(mensage , deslocs) {
   let desclocsArray = []
   let string = ''
   deslocs = deslocs +  '  '
   for(let i = 0 ; i < deslocs.length ;  i++ ) {
      if(/[0-9]/.test(deslocs[i])) {
         string =  string + deslocs[i]
         console.log(string)
         continue
      }
      if(!/[0-9]/.test(deslocs[i])) {
         if(string.length === 0) {
            continue
         }
         desclocsArray.push(Number(string))
         string = ''
      }
   }
   let mensageCifra = ''
   for(let i of desclocsArray) {
      if(i > 25) {
         continue
      }
      mensageCifra = cifra( mensage  , i)
      mensage = mensageCifra
   }
   return mensageCifra
}

function deCifraPoli(mensage , deslocs) {
   let desclocsArray = []
   let string = ''
   deslocs = deslocs +  '  '
   for(let i = 0 ; i < deslocs.length ;  i++ ) {
      if(/[0-9]/.test(deslocs[i])) {
         string =  string + deslocs[i]
         console.log(string)
         continue
      }
      if(!/[0-9]/.test(deslocs[i])) {
         if(string.length === 0) {
            continue
         }
         desclocsArray.push(Number(string))
         string = ''
      }
   }
   let menssageDecifra = ''
   for(let i = desclocsArray.length -1; i >= 0 ; i-- ) {
      if(desclocsArray[i] > 25) {
         continue
      }
      menssageDecifra = decifra(mensage , desclocsArray[i] )
      mensage = menssageDecifra
      console.log(i)
   }
   return menssageDecifra
}

const inputDescloc2 = document.querySelector('#deslocamentoPoli')
const contentPoli = document.querySelector('.contentPoli')
const texteAreaPoliCifra = document.querySelector('.caposCifraPoli .cifrar textarea')
const buttonCifrapoli = document.querySelector('.caposCifraPoli .cifrar button')
const contentAreaPoliCifra = document.querySelector('.decifrarPoli textarea')
const buttonDecifraPoli = document.querySelector('.decifrarPoli button')

buttonCifrapoli.addEventListener('click' , () => {
   texteAreaPoliCifra.value =  cifraPoli(contentPoli.value , inputDescloc2.value)
})

buttonDecifraPoli.addEventListener('click' , () => {
   contentAreaPoliCifra.value = deCifraPoli(contentPoli.value , inputDescloc2.value)
})