const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#mobile-navbar');
const headline = document.querySelector('#headline');
const body = document.querySelector('body');
const popupOverlay = document.querySelector('#popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const popupHeader = document.querySelector('#popup-content h2');
const popupImg = document.querySelector('#popup-img');
const popupDescription = document.querySelector('#popup-description');
const liveLink = document.querySelector('.live-link');
const sourceLink = document.querySelector('.source-link');
const skillsList = document.querySelector('#popup-skills-buttons');
const form = document.querySelector('#contact-form');
const formName = document.querySelector('#name');
const email = document.querySelector('#email');
const formMessage = document.querySelector('#message');
const emailErrorMsg = document.querySelector('#email-error-msg');
const popupBg = document.querySelector('#popup-bg');
const projectsDiv = document.getElementById('works');

const projectCards = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio1.svg',
    technologies: ['html', 'css', 'javaScript', 'github'],
    'live link': 'https://ha-manel.github.io/Microverse-Portfolio/',
    'source link': 'https://github.com/ha-manel/Microverse-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio2.svg',
    technologies: ['html', 'css', 'javaScript', 'ruby'],
    'live link': 'https://ha-manel.github.io/Microverse-Portfolio/',
    'source link': 'https://github.com/ha-manel/Microverse-Portfolio',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio3.svg',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://ha-manel.github.io/Microverse-Portfolio/',
    'source link': 'https://github.com/ha-manel/Microverse-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio4.svg',
    technologies: ['html', 'css', 'javaScript', 'bootstrap'],
    'live link': 'https://ha-manel.github.io/Microverse-Portfolio/',
    'source link': 'https://github.com/ha-manel/Microverse-Portfolio',
  },
];

hamburger.addEventListener('click', () => {
  headline.classList.toggle('active');
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => link.addEventListener('click', () => {
  headline.classList.remove('active');
  hamburger.classList.remove('active');
  navBar.classList.remove('active');
  body.classList.remove('active');
}));

const ul = document.createElement('ul');
ul.className = 'project-languages';
skillsList.prepend(ul);

projectCards.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project';
  projectCard.innerHTML = `<img class="project-screenshot" src="${project.image}" alt="screenshot of Tonic project"> <div class="project-div"> <h2 class="project-title">${project.name}</h2> <p class="project-info"> <span class="project-company">CANOPY</span> <span><img src="./images/Counter.png" alt=" "></span> <span class="project-type">Back End Dev</span> <span><img src="./images/Counter.png" alt=" "></span> <span class="project-year">2015</span> </p> <p class="project-description">${project.description}</p> <ul class="project-languages">${project.technologies.map((tech) => `<li class='language'>${tech}</li>`).join('')}</ul> <button class="enabled-btn">See Project</button> </div>`;
  projectsDiv.appendChild(projectCard);
});

function populatePopupWindow(index) {
  ul.innerHTML = '';
  popupHeader.innerText = projectCards[index].name;
  popupImg.src = projectCards[index].image;
  popupDescription.innerText = projectCards[index].description;
  projectCards[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'language';
    li.innerText = skill;
    ul.appendChild(li);
  });
  liveLink.href = projectCards[index]['live link'];
  sourceLink.href = projectCards[index]['source link'];
}

const projectBtn = document.querySelectorAll('.project .enabled-btn');
projectBtn.forEach((btn) => btn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  body.classList.add('active');
  popupBg.classList.add('active');
  populatePopupWindow(Array.prototype.indexOf.call(projectBtn, btn));
}));

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
  body.classList.remove('active');
  popupBg.classList.remove('active');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    form.reset();
  } else {
    email.classList.add('active');
    emailErrorMsg.innerText = 'Please enter the e-mail in lowercase';
  }
});

const inputData = {};
const storage = window.localStorage;

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
      || e.code === 1014
      || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

function retrieveFormData() {
  if (storageAvailable('localStorage')) {
    const formDataString = storage.getItem('formData');
    const formData = JSON.parse(formDataString);
    return formData;
  }
  return false;
}

function populateForm() {
  const formData = retrieveFormData();
  if (formData) {
    if (formData.name) {
      formName.value = formData.name;
    }
    if (formData.email) {
      email.value = formData.email;
    }
    if (formData.message) {
      formMessage.value = formData.message;
    }
  }
}
populateForm();

formName.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.message = formMessage.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

email.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.message = formMessage.value;
  storage.setItem('formData', JSON.stringify(inputData));
});

formMessage.addEventListener('change', () => {
  inputData.name = formName.value;
  inputData.email = email.value;
  inputData.message = formMessage.value;
  storage.setItem('formData', JSON.stringify(inputData));
});