let array = [4, 2, 7, 1, 9, 5, 3, 8, 6];
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

async function linearSearch(target) {
    for (let i = 0; i < array.length; i++) {
        const element = document.getElementById(`element-${i}`);
        element.classList.add('current');
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (array[i] === target) {
            element.classList.remove('current');
            element.classList.add('found');
            message.textContent = `Found ${target} at index ${i}`;
            return i;
        }
        
        element.classList.remove('current');
    }
    
    message.textContent = `${target} not found in the array`;
    return -1;
}

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

function addNumber() {
    const addInput = document.getElementById('add-input');
    const num = parseInt(addInput.value);
    
    if (isNaN(num)) {
        message.textContent = 'Please enter a valid number to add';
        return;
    }
    
    array.push(num);
    createArrayElements();
    message.textContent = `Added ${num} to the array`;
    addInput.value = '';
}

function removeNumber() {
    const removeInput = document.getElementById('remove-input');
    const num = parseInt(removeInput.value);
    
    if (isNaN(num)) {
        message.textContent = 'Please enter a valid number to remove';
        return;
    }
    
    const index = array.indexOf(num);
    if (index !== -1) {
        array.splice(index, 1);
        createArrayElements();
        message.textContent = `Removed ${num} from the array`;
    } else {
        message.textContent = `${num} not found in the array`;
    }
    removeInput.value = '';
}

function clearArray() {
    array = [];
    createArrayElements();
    message.textContent = 'Array cleared';
}

function generateRandomArray() {
    const length = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14
    array = Array.from({length}, () => Math.floor(Math.random() * 100) + 1);
    createArrayElements();
    message.textContent = `Generated new random array with ${length} elements`;
}