const toggleMenu = document.querySelector('.toggle');

const overlay = document.querySelector('.overlay');

const x = document.querySelector('.close-img');

let links = document.querySelectorAll('.overlay__link');

//Convert links to array
let anchors = [];
    Array.from(links).forEach(function(link) {
        anchors.push(link);
    });


//Open overlay menu when toggle is clicked
toggleMenu.addEventListener('click', function(e) {
    overlay.classList.toggle('showOverlay');
    toggleMenu.style.display = 'none';
    
    //Add class to overlay links(anchors)
    anchors.map(function(anchor) {
        anchor.classList.add('overlaySlide');
    })
    
});

//Close overlay when 'x' is clicked
x.addEventListener('click', function(e) {
   overlay.classList.toggle('showOverlay'); 
   toggleMenu.style.display = '';
});
