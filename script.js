function showNext(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Email Response Logic
function sendResponse(val) {
    document.getElementById('responseInput').value = val;
    const form = document.getElementById('responseForm');
    
    showNext('final-screen');

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    });
}

// DODGE LOGIC: Button bhagane wala code
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    // Screen dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    // Random position
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'fixed'; // Make it float anywhere
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Loading screen timer
setTimeout(() => showNext('screen2'), 3000);

// Background subtle animation
setInterval(() => {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = '100vh';
    star.style.fontSize = '15px';
    star.style.opacity = '0.3';
    star.style.transition = 'linear 6s';
    document.body.appendChild(star);
    setTimeout(() => { star.style.top = '-10vh'; }, 100);
    setTimeout(() => { star.remove(); }, 6000);
}, 800);