const GOOGLE_API_KEY = 'YOUR_API_KEY';

export async function getAddressFromCoords(coords) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch address. Please try again!');
  }
  const data = await response.json(); // extracts the response data
  if (data.error_message) {
    throw new Error(data.error_message);
  } // it could also fail without using an error status code, so without making it to the if (!response.ok) {} (it's a Google specific thing)

  // console.log(data);
  const address = data.results[0].formatted_address;
  return address; // since we're using async/await, this is in the end what this invisibly created promise will resolve to
}

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address); // translated into a URL-friendly encoding: we get a URL-friendly string back
  // we could use axios here or then() and catch() as well
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }
  const data = await response.json(); // extracts the response data
  if (data.error_message) {
    throw new Error(data.error_message);
  } // it could also fail without using an error status code, so without making it to the if (!response.ok) {} (it's a Google specific thing)

  // console.log(data);
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}
