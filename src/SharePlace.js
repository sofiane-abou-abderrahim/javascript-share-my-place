import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress } from './Utility/Location';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  selectPlace(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
      );
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      successResult => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude + Math.random() * 50, // to not display my current position
          lng: successResult.coords.longitude + Math.random() * 50 // to not display my current position
        };
        this.selectPlace(coordinates);
      },
      error => {
        modal.hide();
        alert(
          'Could not locate you unfortunately. Please enter an address manually!'
        );
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address entered - please try again!');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
    modal.show();

    /* 
    
    Next, we need to make sure that we reach out to Google's servers because they do have an API for us 
    which we can use to translate the entered address (which could be something like a street name) into coordinates
    (see Utility/Location.js) This should be a file which holds utility methods for getting coordinates for an address for example

    */

    try {
      const coordinates = await getCoordsFromAddress(address); // we get the coordinates
      this.selectPlace(coordinates); // we forward the coordinates in exactly the same format we would get them if we auto locate the user
    } catch (err) {
      alert(err.message); // this will display the error message set in Location.js
    } // because it might fail though
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
