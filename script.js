let homeNumber = 0;
let guestNumber = 0;

function numberUpHome() {
  homeNumber++;
  document.getElementById("homeNumber").textContent = homeNumber.toString().padStart(2, "0");
}

function numberDownHome() {
  if(homeNumber > 0){
  homeNumber--;
  document.getElementById("homeNumber").textContent = homeNumber.toString().padStart(2, "0");
  }
}

function numberUpGuest() {
  guestNumber++;
  document.getElementById("guestNumber").textContent = guestNumber.toString().padStart(2, "0");
}

function numberDownGuest() {
  if(guestNumber > 0) {
  guestNumber--;
  document.getElementById("guestNumber").textContent = guestNumber.toString().padStart(2, "0");
  }
}
