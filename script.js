// URL de téléchargement de Pluma.
// Quand ta Release GitHub sera publiée avec exactement ce nom de fichier,
// ce lien téléchargera toujours la dernière version publiée.
const DOWNLOAD_URL =
  "https://github.com/Corentin-Mesure/Pluma/releases/latest/download/Pluma-1.0.0-x64.exe";

const downloadButtons = document.querySelectorAll("[data-download]");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2800);
}

downloadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Téléchargement de Pluma…");
    window.location.href = DOWNLOAD_URL;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
