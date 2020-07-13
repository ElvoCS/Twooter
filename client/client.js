console.log("Hello");

const form = document.querySelector('form'); //grabbing an element by id
const loadingElement = document.querySelector('.loading');

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
    console.log(mew);

    form.style.display = 'none';

    loadingElement.style.display = '';

});