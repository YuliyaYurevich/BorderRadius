const border = document.querySelectorAll('.border');
const box = document.querySelector('.box');
const topright = document.querySelector('.topright');
const topleft = document.querySelector('.topleft');
const bottomright = document.querySelector('.bottomright');
const bottomleft = document.querySelector('.bottomleft');
const clipboard = document.querySelector('.clipboard');

topleft.value = '10';
topright.value = '10';
bottomleft.value = '10';
bottomright.value = '10';

border.forEach((item) =>
  item.addEventListener('change', function () {
    box.style.borderRadius = `${topleft.value}px ${topright.value}px ${bottomright.value}px ${bottomleft.value}px`;
    box.style.borderTopLeftRadius = `${topleft.value}px`;
    box.style.borderTopRightRadius = `${topright.value}px`;
    box.style.borderBottomLeftRadius = `${bottomleft.value}px`;
    box.style.borderBottomRightRadius = `${bottomright.value}px`;
    clipboard.innerHTML = `Top Left Border: ${topleft.value}<br>
    Top Right Border: ${topright.value}<br> Bottom Left Border: ${bottomleft.value}<br>Bottom Right Border: ${bottomright.value}`;
  })
);
