const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#mobile-navbar');
const headline = document.querySelector('#headline');
const body = document.querySelector('body');
const projectBtn = document.querySelectorAll('.project .enabled-btn');
const popupOverlay = document.querySelector('#popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const popupHeader = document.querySelector('#popup-content h2');
const popupImg = document.querySelector('#popup-img');
const popupDescription = document.querySelector('#popup-description');
const liveLink = document.querySelector('.live-link');
const sourceLink = document.querySelector('.source-link');
const skillsList = document.querySelector('#popup-skills-buttons');

const projectCards = [
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './images/SnapshootPortfolio1.png',
    technologies: ['html', 'css', 'javaScript', 'github'],
    'live link': 'https://ha-manel.github.io/Microverse-Portfolio/',
    'source link': 'https://github.com/ha-manel/Microverse-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './images/SnapshootPortfolio2.png',
    technologies: ['html', 'css', 'javaScript', 'ruby'],
    'live link': 'https://ha-manel.github.io/Microverse-Portfolio/',
    'source link': 'https://github.com/ha-manel/Microverse-Portfolio',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './images/SnapshootPortfolio3.png',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://ha-manel.github.io/Microverse-Portfolio/',
    'source link': 'https://github.com/ha-manel/Microverse-Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './images/SnapshootPortfolio4.png',
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

projectBtn.forEach((btn) => btn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  body.classList.add('active');
  populatePopupWindow(Array.prototype.indexOf.call(projectBtn, btn));
}));

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
  body.classList.remove('active');
});
