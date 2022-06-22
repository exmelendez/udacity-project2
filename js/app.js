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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const createNavListItem = (section) => {
  const newLi = document.createElement('li');
  const sectionTitle = section.getAttribute('data-nav');
  let linkHtml = '';
  
  if(sectionTitle === 'Section 1') {
    linkHtml = `<a class="menu__link menu__link_active" href="#">${sectionTitle}</a>`;
  } else {
    linkHtml = `<a class="menu__link" href="#">${sectionTitle}</a>`;
  }

  newLi.insertAdjacentHTML('beforeend', linkHtml);
  const link = newLi.querySelector('.menu__link');
  link.addEventListener('click', (e) => {
    e.preventDefault();
    section.scrollIntoView(true);
  });

  return newLi;
};

const generateNavList = () => {
  const navList = document.getElementById('navbar__list');

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

