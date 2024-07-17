const array = [4, 2, 7, 1, 9, 5, 3, 8, 6];
const arrayContainer = document.getElementById('array-container');
const message = document.getElementById('message');

function createArrayElements() {
    arrayContainer.innerHTML = '';
    array.forEach((num, index) => {
        const element = document.createElement('div');
        element.className = 'array-element';
        element.textContent = num;
        element.id = `element-${index}`;
        arrayContainer.appendChild(element);
    });
}

createArrayElements();



function startSearch() {
    const searchInput = document.getElementById('search-input');
    const target = parseInt(searchInput.value);
    
    if (isNaN(target)) {
        message.textContent = 'Please enter a valid number';
        return;
    }
    
    createArrayElements();
    message.textContent = 'Searching...';
    linearSearch(target);
}