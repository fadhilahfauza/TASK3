// Manipulasi dom nama.
const nama = 'Fadhilah Fauza Hamda';
document.querySelector('#nama').innerText = nama;

// Menampilkan page section.
function hideAll() {
  document.querySelector('#tentang').style.display = 'none';
  document.querySelector('#kerja').style.display = 'none';
  document.querySelector('#saya').style.display = 'none';
}

function showPage(id) {
  hideAll();
  document.querySelector(id).style.display = 'block';
}