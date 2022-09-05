'use strict'

$(() => {

  const url = 'https://dog.ceo/api/breeds/image/random'

  createImage()

  async function createImage() {
    const img = document.createElement('img')
    img.classList.add('images')
    document.body.appendChild(img)

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        img.src = data.message
        wait()
      })
      .then(() => {
        setTimeout(() =>{
          console.log("imgChange発火")
          imgChange()
        }, 2000)
      })
      .catch(error => {
        alert(error)
      })
  };

  function wait() {
      setTimeout(() => {
        // $('.images').css('display', 'none');
        $('.images').fadeOut();
        console.log('setTimeOut Display none Test!!!')
      }, 2000);
  }
  async function imgChange() {
    const img = document.createElement('img')
    img.classList.add('images')
    document.body.appendChild(img)
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
        img.src = data.message
        wait()
      });
  }


});


