const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.textContent = img.alt;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});