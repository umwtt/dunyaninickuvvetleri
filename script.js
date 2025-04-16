// Sayfa yüklendikçe içerikleri göster
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let delay = 0;
  
    // Her içerik için kaydırma animasyonunu başlat
    pages.forEach(page => {
      setTimeout(() => {
        page.classList.add('show');
      }, delay);
      delay += 200;  // Her bir animasyonun arasına 200ms gecikme ekler
    });
  });
  