document.addEventListener('DOMContentLoaded', () => {
  
  // Scroll Reveal
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger once on load

  // FAQ Accordion
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('active');
    });
  });

  // Feature Tabs (Simple implementation)
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all
      tabs.forEach(t => t.classList.remove('active', 'btn-primary'));
      tabs.forEach(t => t.classList.add('btn-outline'));
      contents.forEach(c => c.style.display = 'none');
      
      // Add active class to clicked
      tab.classList.remove('btn-outline');
      tab.classList.add('active', 'btn-primary');
      
      const targetId = tab.getAttribute('data-target');
      document.getElementById(targetId).style.display = 'block';
    });
  });
});
