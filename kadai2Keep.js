'use strict'

// $(() => {

  createImage();

  function createImage() {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.classList.add('images')
      img.src = 'https://images.dog.ceo/breeds/stbernard/n02109525_13780.jpg'
      return resolve(document.body.appendChild(img))
    })
    .then((val) => console.log('src内容', val.src))
    .then(() => {
      console.log('wait発火')
      wait()
    })
    .then(() =>{
      setTimeout(() =>{
        console.log("imgChange発火")
        imgChange()
      }, 2000)
    })
    .catch((error) => {
      reject(error)
      alert('エラーです')
    })
  };

  function wait() {
      setTimeout(() => {
        // $('.images').css('display', 'none');
        $('.images').fadeOut();
        console.log('setTimeOut Display none Test!!!')
      }, 2000);
  }
  function imgChange() {
    return new Promise((resolve, reject) => {
      console.log('imgChange')
      const img = document.createElement('img')
      img.classList.add('images')
      img.src = 'https://images.dog.ceo/breeds/borzoi/n02090622_5956.jpg'
      return resolve(document.body.appendChild(img))
    })
    .then(() => {
      console.log('wait発火')
      wait()
    });
  }


// });


