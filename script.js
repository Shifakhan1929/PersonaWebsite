document.addEventListener('DOMContentLoaded', () => {
    const keywords = document.querySelectorAll('.keyword');
    console.log("Welcome animations are running!");
  
    // Optional: Interactivity for personality keywords
    keywords.forEach((keyword) => {
      keyword.addEventListener('mouseover', () => {
        keyword.style.color = '#f0a500';
      });
      keyword.addEventListener('mouseout', () => {
        keyword.style.color = 'white';
      });
    });
  });