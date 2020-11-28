window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "rgb(13, 27, 39)";
    document.getElementById("header").style.color = "lightgrey";
  } else {
    document.getElementById("header").style.background = "rgba(0, 0, 0, 0.8)";
    document.getElementById("header").style.color = "white";
  }
}

var headingChange = {
    currentHeader: 0,
    headings: ['WORLD EXPLORER', 'STOCK ENTHUSIAST', 'WEB DEVELOPER'],
    heading: function() {
      document.querySelector('.parallax-heading__bottom').innerHTML = this.headings[this.currentHeader];
      if (this.currentHeader === this.headings.length - 1) {
        this.currentHeader = 0;
      } else {
        this.currentHeader = this.currentHeader + 1;
      }
    } 
  };
  
setInterval(function(){
    headingChange.heading();
}, 2500)

const parallaxEls = document.querySelectorAll("[data-speed]");
 
window.addEventListener("scroll", scrollHandler);
 
function scrollHandler() {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
    const transformY = this.pageYOffset * parallaxEl.dataset.speed;
    if (parallaxEl.classList.contains("parallax-heading")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    } else {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    }
  }
}

document.getElementById("contact__form").addEventListener("click", validateForm);
function validateForm() {
  document.getElementById("contact__email").value.reset();
  document.getElementById("contact__message").value.reset();
}