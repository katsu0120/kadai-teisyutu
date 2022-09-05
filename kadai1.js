'use strict'
const dogName = document.getElementById('dogName') 
dogName.value = '犬の名前にしてね'

// focusしたらvalueを空にして入力しやすくしてみました。
document.getElementById('dogName').addEventListener('focus', () => {
  dogName.value = ''
});

document.getElementById('submit').addEventListener('click', () => {
  if (dogName.value === '') {
    alert('犬の名前を入力して下さい')
    return
  }
  fetch(`https://dog.ceo/api/breed/${dogName.value}/images/random`)
  .then(response => response.json())
  .then(data => ramdomImage(data.message));
  dogName.value = ''
});

const img = document.getElementById('img')
const randomApi = document.getElementById('testApi').addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => ramdomImage(data.message));
})

function ramdomImage(dataMessage) {
  img.src = dataMessage
}

