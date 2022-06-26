/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const topNavBtn = document.getElementById('top-nav-btn');
const pageTop = document.getElementById('top');
const homeLink = document.getElementById('home-link');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const createNavListItem = (section) => {
  const newLi = document.createElement('li');
  const sectionTitle = section.getAttribute('data-nav');
  let linkHtml = `<a class="menu__link" href="#">${sectionTitle}</a>`;

  newLi.innerHTML = linkHtml;
  const link = newLi.querySelector('.menu__link');
  link.addEventListener('click', (e) => {
    e.preventDefault();
    section.scrollIntoView(true);
  });

  return newLi;
};

const generateNavList = () => {
  sections.forEach(section => {
    const newLi = createNavListItem(section);
    navList.appendChild(newLi);
  });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
generateNavList();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', () => {
  let sectionTitle = '';

  sections.forEach(section => {
    const sectionData = section.getBoundingClientRect();
    const sectionBottom = sectionData.bottom;
    const sectionTop = sectionData.top;
    const sectionHeight = sectionData.height;

    if(sectionTop <= 0 && sectionBottom >= sectionHeight / 8) {
      sectionTitle = section.getAttribute('data-nav');
    }
    
    section.classList.remove('active');
    
    if(section.getAttribute('data-nav') === sectionTitle) {
      section.classList.add('active');
    }
  });
  
  navList.querySelectorAll('.menu__link').forEach(link => {
    link.classList.remove('menu__link_active');
    
    if(link.textContent === sectionTitle) {
      link.classList.add('menu__link_active');
    }
  });
});

topNavBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});

homeLink.addEventListener('click', () => {
  console.log('Clicked ');
  window.location.replace('./index.html'); 
});
