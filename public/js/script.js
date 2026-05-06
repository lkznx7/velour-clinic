document.addEventListener('DOMContentLoaded', () => {
  console.log('Velour Clinic loaded');

  const form = document.querySelector('.booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado! Retornaremos em breve para confirmar seu agendamento.');
      form.reset();
    });
  }
});