// script.js
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.getElementById('night-mode-toggle');
  toggleSwitch.addEventListener('change', function() {
    document.body.classList.toggle('night-mode');
  });
});
