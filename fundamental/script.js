// Menampilkan alert saat halaman selesai dimuat
window.onload = function() {
  alert("Selamat datang di WebGIS!");
};

// Mengubah teks pada elemen h1 saat diklik
document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.addEventListener("click", function() {
      h1.textContent = "Anda mengklik judul!";
    });
  }
});