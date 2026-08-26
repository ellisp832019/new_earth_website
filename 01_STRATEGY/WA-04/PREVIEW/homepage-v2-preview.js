(function () {
  'use strict';

  document.documentElement.classList.add('js-enabled');
  var button = document.querySelector('[data-menu-button]');
  var menu = document.querySelector('[data-mobile-menu]');

  if (!button || !menu) return;

  button.addEventListener('click', function () {
    var isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
    if (!isOpen) menu.querySelector('a').focus();
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
}());
