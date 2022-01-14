export function showForm() {
  const ticketBtn = document.querySelector('.tickets__button');
  const booking = document.querySelector('.booking');
  const close = document.querySelector('.booking__close');

  ticketBtn.addEventListener('click', (e) => {
    e.preventDefault();
    booking.classList.add('active');
  });

  booking.addEventListener('click', e => {
    if (e.target == booking || e.target == close) {
      booking.classList.remove('active')
    }
  });
}