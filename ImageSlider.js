document.addEventListener('DOMContentLoaded', () => {
    const slideRef = document.querySelector('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
  
    const handleNextClick = () => {
      let items = document.querySelectorAll('.item');
      slideRef.appendChild(items[0]);
    };
  
    const handlePrevClick = () => {
      let items = document.querySelectorAll('.item');
      slideRef.prepend(items[items.length - 1]);
    };
  
    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);
  });
  