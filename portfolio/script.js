// モーダルを開く
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
    }
}

// モーダルを閉じる
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}

// モーダル外クリックで閉じる
window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});