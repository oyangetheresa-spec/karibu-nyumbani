(function () {
  'use strict';
 
  var button = document.getElementById('menu-btn');   // the "Menu" button
  var menu   = document.getElementById('menu');        // the list of links
  if (!button || !menu) return;                        // nothing to do on pages without them
 
  button.addEventListener('click', function () {
    // toggle() adds the class if it's missing, removes it if it's there,
    // and tells us which one happened (true = now open)
    var isOpen = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
})();
