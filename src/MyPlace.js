import { Map } from './UI/Map';

class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.textContent = address;
  }
}

/*

Now after this, we can instantiate this LoadedPlace class
and we have to parse some data from the URL,
so we'll call "new LoadedPlace" and I'll need to forward "coordinates" an "address"
and that is part of the URL and needs to be parsed.

For that, there is a built-in URL constructor function or class, however you want to call it
=> new URL()

*/

const url = new URL(location.href);
// "location.href" is the current location
// new URL() creates an object with options for us to get information out of that URL
const queryParams = url.searchParams;
// So this will be our dynamic options here, so the thing after the question mark basically,
// stored as key-value pairs in queryParams now, thanks to searchParams
const coords = {
  lat: parseFloat(queryParams.get('lat')), // converted into a number by adding a + or parseFloat()
  lng: +queryParams.get('lng') // converted into a number by adding a + or parseFloat()
};
const address = queryParams.get('address');
new LoadedPlace(coords, address);
