
function openLightbox(imageSrc) {
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}
