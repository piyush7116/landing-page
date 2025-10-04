// ======== Mobile Menu Toggle ========

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// ======== Join Button Alert ========
const joinBtn = document.getElementById('join-btn');

joinBtn.addEventListener('click', () => {
  alert('Thanks for your interest! Registration will open soon 😊');
});

