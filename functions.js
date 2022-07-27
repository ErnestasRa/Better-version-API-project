export function renderListElement(data) {
    let itemElement = document.createElement('li');
    if(data.class) {
        itemElement.classList.add(data.class)
    }
    itemElement.innerHTML = `<a href="${data.href}">${data.content}</a>`;
    data.parentElement.append(itemElement);
}

export function renderOptionElement(data) {
  let optionElement = document.createElement('option');
  optionElement.textContent = data.content;
  optionElement.value = data.value;
  data.parentElement.append(optionElement);
}

export function toUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}   

export function renderAllAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos&_limit=15')
      .then(res => res.json())
      .then(albums => {
        albums.map(singleAlbum => {
          renderSingleAlbum({
            album: singleAlbum,
            title: 'All albums:',
            createdBy: `<div>Album created by: <a href="./user.html?user_id=${singleAlbum.user.id}">${singleAlbum.user.name}</a></div>`,
          });
        })
      })
  }


export function renderSingleAlbum(data) {
    let albumItemWrapper = document.getElementById('album-item-wrapper')
    let albumsWrapperTitle = document.createElement('h2');
    let {album, title, createdBy} = data;
  
    let albumItem = document.createElement('div');
    albumItem.classList.add('album-item');
    
    albumsWrapperTitle.textContent = title;
  
    let randomIndex = Math.floor(Math.random() * album.photos.length);
  
    albumItem.innerHTML = `<h3><a href="./album.html?album_id=${album.id}&album_title=${album.title}&user_id=${album.userId}&user_name=${album.user.name}">${album.title}</a> (${album.photos.length})</h3>
                          ${createdBy}
                          <img src="${album.photos[randomIndex].thumbnailUrl}">`;
  
    albumsWrapper.prepend(albumItem);
  }


export function alertMessage(text, elementClass = '') {
    const alertElement = document.querySelector('#alert');
    alertElement.textContent = text;
  
    if (elementClass) {
      alertElement.classList.add(elementClass);
    }
  
    setTimeout(() => {
      alertElement.textContent = '';
      if (elementClass) {
        alertElement.classList.remove(elementClass);
      }
    }, 5000);
  }
 export function formErrorHandler(form) {
    form.querySelectorAll('.input-error-message').forEach(input => input.remove());
  
    let requiredInputs = form.querySelectorAll('input.required');
  
    let validForm = true;
  
    requiredInputs.forEach(input => {
      input.classList.remove('input-error');
  
      if (!input.value) {
        inputErrorMessage(input, 'Šis laukelis yra privalomas.');
        validForm = false;
        return;
      }
  
      if (input.name === 'name' && input.value.length < 3) {
        inputErrorMessage(input, 'Vardas privalo būti bent 3 simbolių ilgumo.');
        validForm = false;
        return;
      }
  
      if (input.name === 'surname' && input.value.length < 3) {
        inputErrorMessage(input, 'Pavardė privalo būti bent 3 simbolių ilgumo.');
        validForm = false;
        return;
      }
  
      if (input.name === 'age') {
        if (input.value < 0) {
          inputErrorMessage(input, 'Amžius privalo būti teigiamas skaičius.');
          validForm = false;
          return;
        }
  
        if (input.value > 120) {
          inputErrorMessage(input, 'Įvestas amžius yra per didelis.');
          validForm = false;
          return;
        }
      }
      
      if (input.name === 'phone') {
        if (input.value.length < 9 || input.value.length > 12) {
          inputErrorMessage(input, 'Įvestas telefono numeris yra neteisingas.');
          validForm = false;
          return;
        }
      }
      
      if (input.name === 'email') {
        if (input.value.length < 5 || !input.value.includes('@')) {
          inputErrorMessage(input, 'Įvestas elektroninis paštas yra neteisingas.');
          validForm = false;
          return;
        }
      }
    })
  
    return validForm;
  }

 export function inputErrorMessage(inputElement, errorMessage) {
    let alertText = 'Ne visi laukeliai užpildyti.';
    alertMessage(alertText, 'error-alert');
  
    inputElement.classList.add('input-error');
  
    let inputError = document.createElement('span');
    inputError.textContent = errorMessage;
    inputError.classList.add('input-error-message');
  
    inputElement.after(inputError);
  }
