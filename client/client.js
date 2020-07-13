

console.log("Hello");

const form = document.querySelector('form'); //grabbing an element by id
const loadingElement = document.querySelector('.loading');
const mewsElement = document.querySelector('.mews');
const API_URL = 'http://localhost:5000/news';

loadingElement.style.display = 'none';

listAllMews();


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

    //requesting server basically ajax
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers : {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
      .then(createdMew => {
        console.log(createdMew);
        form.reset();
        form.style.display = '';
        loadingElement.style.display = 'none';
      });
});


function listAllMews(){
    fetch(API_URL)
        .then(response => response.json())
        .then(mews => {
            console.log(mews);
            mews.forEach(mew => {
                const div = document.createElement('div');

                const header = document.createElement('h3');
                header.textContent = mew.name;

                const contents = document.createElement('p');
                contents.textContent = mew.content;

                div.appendChild(header);
                div.appendChild(contents);

                mewsElement.appendChild(div);
            });
        });
}