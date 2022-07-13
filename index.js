

const $button = document.querySelector('.btn-encrypt')

let $output = document.getElementsByClassName('.encrypttextright')

let $captura = ''

let $key = document.querySelector('.inputkey')

let $valores = ["a","b","c","d","e","f","g","h"
,"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


$button.addEventListener('click', function(){
   $captura = document.getElementById('input').value

   $keyInt = parseFloat($key.value)

   for( i = 0; i < $captura.length; i++){
      for( j = 0; j < $valores.length; j++){
         if($captura[i] == $valores[j]){
            $output = ($valores[(j + $keyInt)%26])
            console.log($output)
         }
      }
   }
})

