class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
      );
      return;
    }
    navigator.geolocation.getCurrentPosition(
      successResult => {
        // console.log(successResult);
        const coordinates = {
          lat: successResult.coords.latitude + Math.random() * 50, // to not display my current position
          lng: successResult.coords.longitude + Math.random() * 50 // to not display my current position
        };
        console.log(coordinates);
      },
      error => {
        alert(
          'Could not locate you unfortunately. Please enter an address manually!'
        );
      }
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
// we need to make sure that we of course trigger our constructor here for the PlaceFinder
// and we do that by instantiating PlaceFinder.
