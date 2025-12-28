
document.addEventListener('DOMContentLoaded', function() {
  const classificationDivs = document.querySelectorAll('.classification div');

  classificationDivs.forEach(div => {
    div.addEventListener('click', function() {
      classificationDivs.forEach(d => d.classList.remove('active'));
      this.classList.add('active');
    });
  });
});