const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.sidebar')
  const links = document.querySelectorAll("things");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

      // Close sidebar (if open)
      document.getElementById("sidebar").style.right = "-250px";
    });
  });

function menushow(){
    menu2.style.display = 'flex'
}

function menuoff(){
    menu2.style.display = 'none'
}

function alert(){
  alert("YOU ORDERED")
}