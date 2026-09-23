// Funções simples para o Modal Lightbox da Galeria
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const img = element.querySelector("img");
    
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Fechar com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});