import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress, getAddressFromCoords } from './Utility/Location';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    this.shareBtn.addEventListener('click', this.sharePlaceHandler);
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  sharePlaceHandler() {
    const sharedLinkInputElement = document.getElementById('share-link');
    if (!navigator.clipboard) {
      sharedLinkInputElement.select();
      return;
    }

    navigator.clipboard
      .writeText(sharedLinkInputElement.value)
      .then(() => {
        alert('Copied into clipboard!');
      })
      .catch(err => {
        console.log(err);
        sharedLinkInputElement.select();
      });
  }

  selectPlace(coordinates, address) {
    // accepts both arguments now
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    // we want to create a sharable link and output it in my-place/index.html
    this.shareBtn.disabled = false; // we enable the button which is disabled initially in index.html
    const sharedLinkInputElement = document.getElementById('share-link');
    sharedLinkInputElement.value = `${
      location.origin
    }/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${
      coordinates.lng
    }`;
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
      async successResult => {
        const coordinates = {
          lat: successResult.coords.latitude + Math.random() * 50, // to not display my current position
          lng: successResult.coords.longitude + Math.random() * 50 // to not display my current position
        };

        const address = await getAddressFromCoords(coordinates); // we get the address now
        modal.hide();

        this.selectPlace(coordinates, address); // now we forward the address here
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
      this.selectPlace(coordinates, address); // we forward the coordinates and address in exactly the same format we would get them if we auto locate the user
    } catch (err) {
      alert(err.message); // this will display the error message set in Location.js
    } // because it might fail though
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
