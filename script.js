const year = document.querySelector('#year');
year.innerHTML = " " + new Date().getFullYear() + " ";

const footBio = document.querySelector('#foot-bio');
footBio.innerHTML = 'The essence of Dani Fire lies in our commitment to creating a powerful narrative for recreational and medical cannabis. At Dani Fire, we thrive on the notion that all cannabis products should be cultivated with quality in mind.'

// Verify Modal
const verifyFunc = () => {
  const verify = document.querySelector('.verify-container');
  const modalOn = () => {
    verify.classList.remove('verify-hidden');
  };

  if (sessionStorage.getItem('key') === null) {
    window.onload = () => {
      setTimeout(modalOn, 10);
    };

    const verifyBtn = document.querySelector('.verify-btn');

    verifyBtn.addEventListener('click', () => {
      verify.classList.add('verify-hidden');
      sessionStorage.setItem('key', 'verified');
    });

  } else {
    verify.classList.add('verify-hidden');
  }

}

verifyFunc();

// hamburger menu
const x = document.getElementById('x1');

const dropcont = document.getElementById('dropcont');

x.onclick = function () {
  dropcont.style.display = "none";
  x.style.display = "none";
  hamburger.style.display = "block";
}

const hamburger = document.getElementById('hamburger');

hamburger.onclick = function () {
  dropcont.style.display = "block";
  x.style.display = "flex";

}

// broswer size for hamburge menu
if (screen.width > 1200) {
  hamburger.display = "none";
}


// map

let map;

function initMap(){
  // Map options
  var options = {
    zoom:6,
    mapId:'13039bde94cb49e7',
    center:{lat:36.302736,lng:-119.7865142}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  

  // Array of markers
  var markers = [
    {
      // culture cannabis co
      coords:{lat:32.694010,lng:-115.508400},
      content:'<h1 class="map-title">Culture Cannabis Co</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">2403 Van De Graaf Blvd W, Calexico, CA 92231</p>'
      +
      '<p class="map-p">T: (562) 354-6363</p>'
      +
      '<p class="map-p"><a href="https://culturecannabisclub.com" class="map-a" target="blank">culturecannabisclub.com</a></p>'
    },
    {
      // elevate
      coords:{lat:34.171650,lng:-118.568910},
      content:'<h1 class="map-title">Elevate</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">20010 Ventura Blvd, Woodland Hills, CA 91364</p>'
      +
      '<p class="map-p">T: (818) 835-9525</p>'
      +
      '<p class="map-p"><a href="https://elevate-dispensary.com" class="map-a" target="blank">elevate-dispensary.com</a></p>'
    },
    {
      // empire connect
      coords:{lat:34.087260,lng:-117.299600},
      content:'<h1 class="map-title">Empire Connect</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">764 Inland Center Drive, San Bernadino, CA 92408</p>'
      +
      '<p class="map-p">T: (866) 336-7473</p>'
      +
      '<p class="map-p"><a href="https://shopempire.com" class="map-a" target="blank">shopempire.com</a></p>'
    },
    {
      // empire twin palms
      coords:{lat:34.010940,lng:-117.499070},
      content:'<h1 class="map-title">Empire Twin Palms</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">9806 Mission Blvd, Riverside, CA 92509</p>'
      +
      '<p class="map-p">T: (866) 336-7473</p>'
      +
      '<p class="map-p"><a href="https://shopempire.com" class="map-a" target="blank">shopempire.com</a></p>'
    },
    {
      // Greenhouse Collective
      coords:{lat:34.637850,lng:-120.457660},
      content:'<h1 class="map-title">Greenhouse Collective</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">126 South H Street, Lompoc, CA 93436</p>'
      +
      '<p class="map-p">T: (805) 819-0623</p>'
      +
      '<p class="map-p"><a href="http://thegreenhouseca.com" class="map-a" target="blank">thegreenhouseca.com</a></p>'
    },
    {
      // Holistic Healing Collective
      coords:{lat:37.9901216,lng:-122.3358781},
      content:'<h1 class="map-title">Holistic Healing Collective</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">15501 San Pablo Ave, Richmond, CA 94806</p>'
      +
      '<p class="map-p">T: (510) 275-3365</p>'
      +
      '<p class="map-p"><a href="http://www.holistichealingcollective.org" class="map-a" target="blank">holistichealingcollective.org</a></p>'
    },
    {
      // MedCare Farms
      coords:{lat:33.69036102294922,lng:-117.34368896484375},
      content:'<h1 class="map-title">MedCare Farms</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">29395 Hunco Way, Lake Elsinore, CA 92530</p>'
      +
      '<p class="map-p">T: (800) 466-6420</p>'
      +
      '<p class="map-p"><a href="https://medcarefarms.com" class="map-a" target="blank">medcarefarms.com</a></p>'
    },
    {
      // The Prime Leaf
      coords:{lat:33.6102903,lng:-114.5975427},
      content:'<h1 class="map-title">The Prime Leaf</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">836 East Hobsonway, Blythe, CA 922252</p>'
      +
      '<p class="map-p">T: (760) 701-2227</p>'
      +
      '<p class="map-p"><a href="https://dutchie.com/dispensaries/the-prime-leaf/menu" class="map-a" target="blank">dutchie.com/dispensaries/the-prime-leaf/menu</a></p>'
    },
    {
      // Valley Pure - woodlake
      coords:{lat:36.4143361,lng:-119.0990454},
      content:'<h1 class="map-title">Valley Pure</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">132 N. Valencia Blvd. Woodlake, CA 93286</p>'
      +
      '<p class="map-p">T: (559) 769-2080</p>'
      +
      '<p class="map-p"><a href="https://valleypure.net" class="map-a" target="blank">valleypure.net</a></p>'
    },
    {
      // Valley Pure - farmersville
      coords:{lat:36.326647,lng:-119.2185844},
      content:'<h1 class="map-title">Valley Pure</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">515 Avenue 295 Farmersville, CA 93223</p>'
      +
      '<p class="map-p">T: (559) 690-0411</p>'
      +
      '<p class="map-p"><a href="https://valleypure.net" class="map-a" target="blank">valleypure.net</a></p>'
    },
    {
      // Valley Pure - lemoore
      coords:{lat:36.302736,lng:-119.7865142},
      content:'<h1 class="map-title">Valley Pure</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">308 E Street Lemoore, CA 93245</p>'
      +
      '<p class="map-p">T: (559) 997-5542</p>'
      +
      '<p class="map-p"><a href="https://valleypure.net" class="map-a" target="blank">valleypure.net</a></p>'
    },
    {
      // Valley Pure - lindsay
      coords:{lat:36.202261,lng:-119.091196},
      content:'<h1 class="map-title">Valley Pure</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">133 West Honolulu Street Lindsay, CA 93247</p>'
      +
      '<p class="map-p">T: (559) 788-7640</p>'
      +
      '<p class="map-p"><a href="https://valleypure.net" class="map-a" target="blank">valleypure.net</a></p>'
    },
    {
      // Westside Cllctv
      coords:{lat:33.8536932,lng:-117.2444352},
      content:'<h1 class="map-title">Westside Cllctv</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">872 Washington St, Perris, CA 92571</p>'
      +
      '<p class="map-p">T: (951) 442-7395</p>'
      +
      '<p class="map-p"><a href="http://westsidecllctv.com" class="map-a" target="blank">westsidecllctv.com</a></p>'
    },
    {
      // From the Earth
      coords:{lat:33.7905344,lng:-118.2103771},
      content:'<h1 class="map-title">From the Earth</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">1834 Harbor Ave, Long Beach, CA 90810</p>'
      +
      '<p class="map-p">T: (562) 317-0459</p>'
      +
      '<p class="map-p"><a href="https://fromtheearth.com/long-beach/" class="map-a" target="blank">fromtheearth.com/long-beach/</a></p>'
    },
    {
      // Shango
      coords:{lat:33.948957,lng:-117.261469},
      content:'<h1 class="map-title">Shango</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">11875 Pigeon Pass Rd. C-1, Moreno Valley, CA, 92557</p>'
      +
      '<p class="map-p">T: (866) 474-2646</p>'
      +
      '<p class="map-p"><a href="https://goshango.com" class="map-a" target="blank">goshango.com</a></p>'
    },
    {
      // Planet Buds
      coords:{lat:33.827267,lng:-117.213056},
      content:'<h1 class="map-title">Planet Buds</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">3060 Wilson Ave, Perris, CA 92572</p>'
      +
      '<p class="map-p">T: (951) 943-9777</p>'
      +
      '<p class="map-p"><a href="https://weedmaps.com/dispensaries/planet-budz-2/about" class="map-a" target="blank">weedmaps.com/dispensaries/planet-budz-2/about</a></p>'
    },
    {
      // Phytologie
      coords:{lat:37.7438375,lng:-122.1940095},
      content:'<h1 class="map-title">Phytologie</h1>'
      +
      '<p class="map-type">Retail Location</p>'
      +
      '<p class="map-p">8440 Enterprise Way, Oakland, CA 94621</p>'
      +
      '<p class="map-p">T: (510) 454-9779</p>'
      +
      '<p class="map-p"><a href="https://phytologieoakland.com" class="map-a" target="blank">phytologieoakland.com</a></p>'
    },
    {
      // Fresh Mint Delivery
      coords:{lat:37.4443293,lng:-122.1598465},
      content:'<h1 class="map-title">Fresh Mint Delivery</h1>'
      +
      '<p class="map-type">Delivery Only Services</p>'
      +
      '<p class="map-p">Palo Alto, CA 94304</p>'
      +
      '<p class="map-p">T: (510) 692-5365</p>'
      +
      '<p class="map-p"><a href="http://www.freshmint.delivery" class="map-a" target="blank">freshmint.delivery</a></p>'
    },
    {
      // Primetiming Delivery
      coords:{lat:38.5810606,lng:-121.4938951},
      content:'<h1 class="map-title">Primetiming Delivery</h1>'
      +
      '<p class="map-type">Delivery Only Services</p>'
      +
      '<p class="map-p">Sacramento, CA 95814</p>'
      +
      '<p class="map-p">T: (916) 407-1129</p>'
      +
      '<p class="map-p"><a href="https://weedmaps.com/deliveries/cali-cannabliss-health-wellness-2" class="map-a" target="blank">weedmaps.com/deliveries/cali-cannabliss-health-wellness-2</a></p>'
    },
    {
      // Rosebud Delivery
      coords:{lat:37.8044,lng:-122.2712},
      content:'<h1 class="map-title">Rosebud Delivery</h1>'
      +
      '<p class="map-type">Delivery Only Services</p>'
      +
      '<p class="map-p">Oakland, CA </p>'
      +
      '<p class="map-p">T: (415) 531-6070</p>'
      
    }
  ];

  // Loop through markers
  for(var i = 0;i < markers.length;i++){
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if(props.iconImage){
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}