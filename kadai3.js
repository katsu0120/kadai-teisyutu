'use strict'

$(() => {

  let dogImage = 'https://images.dog.ceo/breeds/stbernard/n02109525_13780.jpg'

  dogView() 

  async function dogView() {
    await createImage(dogImage)
    await wait()
    dogImage = 'https://images.dog.ceo/breeds/borzoi/n02090622_5956.jpg'
    await createImage(dogImage)
    await wait()
  }
  
  function createImage(dogImage) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.classList.add('images')
      document.body.appendChild(img)
      img.src = dogImage
      resolve(img)
    })
  };
  function wait() {
    return new Promise((resolve) => {
      setTimeout(() => {
        $('.images').css('display', 'none');
        console.log('setTimeOut Display none Test!!!')
        // debugger
        resolve()
      }, 2000);
    })
  }

});


