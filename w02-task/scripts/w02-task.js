/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Lívia Lira de Medeiros';
let currentYear = 2023;
let profilePicture = 'images/Me.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('picture img'); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image'); 

/* Step 5 - Array */
let favoriteFoods = ['Sushi', 'Lasagna', 'Guacamole','Hamburger'];
let listItems = favoriteFoods.join(', ');

foodElement.innerHTML +=`<br>${favoriteFoods}`

let newFood = 'Chocolate';
favoriteFoods.push(newFood);

foodElement.innerHTML +=`<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML +=`<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;