let lightMode = localStorage.getItem('lightMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightMode', null);
}

if (lightMode === 'enabled') {
  enableLightMode();
}

darkModeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode');

  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
