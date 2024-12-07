 // Background Selector Functionality
 const backgroundSelector = document.querySelector('.background-selector');
 const body = document.body;
 const backgroundBtns = document.querySelectorAll('.background-btn');

 backgroundBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         // Remove active class from all buttons
         backgroundBtns.forEach(b => b.classList.remove('active'));
         
         // Add active class to clicked button
         btn.classList.add('active');

         // Change background based on selected option
         switch(btn.dataset.bg) {
             case 'default':
                 body.className = '';
                 body.style.backgroundColor = '#f4f6f9';
                 break;
             case 'gradient':
                 body.className = 'background-gradient';
                 break;
             case 'blue':
                 body.className = 'background-soft-blue';
                 break;
             case 'green':
                 body.className = 'background-soft-green';
                 break;
             case 'lavender':
                 body.className = 'background-soft-lavender';
                 break;
         }
     });
 });

 // Add subtle interactivity
 const card = document.querySelector('.profile-card');
 
 card.addEventListener('mousemove', (e) => {
     const rect = card.getBoundingClientRect();
     const x = e.clientX - rect.left;
     const y = e.clientY - rect.top;
     
     card.style.setProperty('--mouse-x', `${x}px`);
     card.style.setProperty('--mouse-y', `${y}px`);
 });