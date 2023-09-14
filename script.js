function nextItem() {
  const item1 = document.querySelector('.fb1');
  const item2 = document.querySelector('.fb2');

  item1.classList.add('active');
  item2.classList.add('active');
}

function prevItem() {
  const item1 = document.querySelector('.fb1');
  const item2 = document.querySelector('.fb2');

  item1.classList.remove('active');
  item2.classList.remove('active');
}

function showMenuNav() {
  const menu = document.querySelector('.header-menuNav');
  const menuButton = document.querySelector('.fa-bars-staggered');

  menu.classList.toggle('displayed');
  menuButton.classList.toggle('fa-x');
}

function showLoginButtons() {
  const loginBtn = document.querySelector('.loginZone');
  loginBtn.classList.toggle('displayed');
}