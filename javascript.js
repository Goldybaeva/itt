const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu_header');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}



window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var dots = document.querySelectorAll('.dot');
    let about_line = document.querySelector('.about_line');
    let about_line2 = document.querySelector('.about_line2');

    
    sections.forEach(function(section, index) {
      var sectionRect = section.getBoundingClientRect();
      var sectionCenter = sectionRect.top + sectionRect.height / 2;
  
      if (sectionCenter >= window.innerHeight / 2 && sectionCenter <= window.innerHeight / 2 + sectionRect.height) {
        section.classList.add('active');
        dots[index].classList.add('active');
        about_line.style.opacity = '0';
        about_line2.style.opacity = '1';

      } else {
        section.classList.remove('active');
         dots[index].classList.remove('active');
         about_line.style.opacity = '1';
         about_line2.style.opacity = '0';

      }
    });
  });


  var scrolledUp = false;
  
  window.addEventListener('scroll', function() {
    var circle1 = document.getElementById('circle1');
    var circle2 = document.getElementById('circle2');
    
    if (window.scrollY > 0 && !scrolledUp) {
      var temp = circle1.innerHTML;
      circle1.innerHTML = circle2.innerHTML;
      circle2.innerHTML = temp;
      
      scrolledUp = true;
    } else if(window.scrollY === 0 && scrolledUp) {
      var temp = circle1.innerHTML;
      circle1.innerHTML = circle2.innerHTML;
      circle2.innerHTML = temp;
      
      scrolledUp = false;
    }
  });


