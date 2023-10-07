let myProfile = {
    name: "Livia Lira de Medeiros",
    photo: "images/Me.png",
    favoriteFoods: [
        'Sushi',
        'Lasagna',
        'Guacamole',
        'Hamburger',
        'Chocolate'
    ],
    hobbies: [
        'Playing the piano',
        'Watching anime',
        'Walking with my dog'
    ],
    placesLived: []
};

myProfile.placesLived.push(
    {
      place: 'Brasília, Brazil',
      length: '26 years'
    },
    {
        place: 'São Paulo, Brazil',
        length: '1.5 years'
      }
);


document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

const favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food =>{
    const li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});


const hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  const li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

const placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
  const dt = document.createElement('dt');
  dt.textContent = place.place;
  
  const dd = document.createElement('dd');
  dd.textContent = place.length;
  
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});