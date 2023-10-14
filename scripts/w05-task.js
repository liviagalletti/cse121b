/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleElement = document.createElement('article');
    const h3Element = document.createElement('h3');
    h3Element.textContent = temple.templeName;
    const imgElement = document.createElement('img');
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch() */
const getTemples = async () => {
  async function fetchData() {
    try {
      const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      templeList = data; 

      
      displayTemples(templeList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Call the async function to fetch and process the data
  fetchData();
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};

const sortBy = (temples) => {
    
reset();
  
   
const filter = document.getElementById('sortBy').value;
  
    
switch (filter) {
    case 'utah':
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
    case 'nonutah':
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
    case 'older':
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
    case 'all':
        displayTemples(temples);
        break;
    default:
    console.log('Invalid filter value');
        break;
    }
};

const sortByElement = document.getElementById('sortBy'); 

sortByElement.addEventListener('change', () => {
  sortBy(templeList);
});

    getTemples();
