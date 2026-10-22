(function () {
  var base = window.CLOUDINARY_BASE;
  if (base) {
    document.querySelectorAll('img[src^="images/"]').forEach(function (img) {
      var p = img.getAttribute('src').replace(/^images\//, '').replace(/\.webp$/, '');
      img.src = base + p;
    });
  }
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    a.target = '_blank'; a.rel = 'noopener noreferrer';
  });
  var t = document.querySelector('.to-top');
  if (t) t.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();
