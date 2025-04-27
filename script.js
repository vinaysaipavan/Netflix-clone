  const button = document.getElementById('lang');
  const div = document.getElementById('lang-dropdown');
  
  // Toggle div when button is clicked
  button.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent this click from triggering the document click
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
  });
  
  // Close div when clicking anywhere else
  document.addEventListener('click', function() {
    div.style.display = 'none';
  });
  
  // Prevent clicks inside the div from closing it
  div.addEventListener('click', function(e) {
    e.stopPropagation();
  });  

  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(option =>{
    option.addEventListener('click',function(){
        div.style.display = 'none';
    })
  })