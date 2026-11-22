// قائمة الموبايل
document.getElementById('burger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// زر التواصل: مكان مخصص لرابط الواتساب أو نموذج التواصل لاحقًا
document.getElementById('ctaBtn').addEventListener('click', function (e) {
  e.preventDefault();
  alert('قريبًا: رابط التواصل المباشر. الموقع لسه نسخة أولية تحت المراجعة.');
});
