document.addEventListener('DOMContentLoaded', () => {
  const telegramLink = 'https://t.me/shuragan63';
  const buttonLink = document.querySelector('.button-link');

  buttonLink.addEventListener('click', () => {
    window.open(telegramLink, '_blank');
  });
});
