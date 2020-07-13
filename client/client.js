console.log("Hello");

const form = document.querySelector('form'); //grabbing an element by id
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/news'

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    //let's js handle the data
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const mew = {
        name,
        content
    };

    form.style.display = 'none';

    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers : {
            'content-type': 'application/json'
        }
    });
});