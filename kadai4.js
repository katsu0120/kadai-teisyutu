'use strict'

$(() => {

  const img1 = 'https://images.dog.ceo/breeds/stbernard/n02109525_13780.jpg'
  const img2 = 'https://images.dog.ceo/breeds/borzoi/n02090622_5956.jpg'

  class DogImageView {
    constructor(img1, img2) {
      this.img1 = img1;
      this.img2 = img2;
    }

     createImage(image) {
        return new Promise((resolve) => {
          const img = document.createElement('img');
          img.classList.add('images');
          document.body.appendChild(img);
          img.src = image
          resolve(img);
        })
      };
     wait() {
        return new Promise((resolve) => {
          setTimeout(() => {
            $('.images').css('display', 'none');
            console.log('setTimeOut Display none Test!!!');
            resolve();
          }, 2000);
        })
      }
      
      async start() {
        await this.createImage(img1)
        await this.wait()
        await this.createImage(img2)
        await this.wait()
      }
      
  }

  new DogImageView(img1, img2).start()


});


