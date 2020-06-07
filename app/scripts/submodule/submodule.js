
window.onload = handleMoreBeacon();

/**
 * Adding event listener for button
 */
function handleMoreBeacon() {
  const addMoreBtn = document.querySelector('#btn_addMore');
  addMoreBtn.addEventListener('click', cloneBeaconImage);
}

/**
 * Cloning beacon image
 */
function cloneBeaconImage() {
  const beaconImg = document.querySelector('#img_beacon');
  const beaconContainer = document.querySelector('#div_beaconContainer');
  beaconContainer.appendChild(beaconImg.cloneNode());
}
