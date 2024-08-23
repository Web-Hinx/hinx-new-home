// nav

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const discussBtn = document.querySelector(".discuss");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  if (discussBtn) {
    discussBtn.classList.toggle("active");
  }
});




window.addEventListener('scroll', function() {
  
    // Selectors
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY + (windowHeight / 5);
    
    // Get all panels
    var panels = document.querySelectorAll('.panel');
    
    panels.forEach(function(panel) {
      // Get panel position
      var panelTop = panel.offsetTop;
      var panelHeight = panel.offsetHeight;
  
      // Check if panel is in view
      if (panelTop <= scrollPosition && panelTop + panelHeight > scrollPosition) {
        
        // Get the color from the data-color attribute
        var color = panel.getAttribute('data-color');
        
        // Remove previous color classes
        document.body.className = document.body.className.replace(/\bcolor-\S+/g, '');
        
        // Add the new color class
        document.body.classList.add('color-' + color);
      }
    });
    
  });
  