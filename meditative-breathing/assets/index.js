var button = document.createElement("button");
button.appendChild(document.createTextNode('Add to Home Screen?'));
document.body.appendChild(button);

var deferredPrompt = null;

button.addEventListener('click', function() {
  if (deferredPrompt === null) {
    return false;
  }
  button.style.setProperty('bottom', '-2.5em');
  deferredPrompt.prompt();
});

window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
  button.style.setProperty('bottom', '0');
});

if (Object.prototype.hasOwnProperty.call(window.navigator, 'serviceWorker')) {
  window.addEventListener('load', function() {
    window.navigator.serviceWorker.register('assets/service-worker.js');
  });
}
