function initMap() {


    const loc = {lat: 39.933365, lng: 32.859741};

    const map = new google.maps.Map(document.getElementsByClassName('map'), 
    { zoom: 15, center: loc });

    const marker = new google.maps.Marker({ position: loc, map: map });

}
