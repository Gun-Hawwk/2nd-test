// Initialize and add the map
function initMap() {
  // Your Loacation
  const loc = { lat: 31.599281, lng: 74.337990 };
  // Centred map on location
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map:map });
}

// Sticky Menu Background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity =.9;
  } else {
    this.document.querySelector('#navbar').style.opacity =1;
  }
});

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 95
      },
      700
    );
  }
});