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