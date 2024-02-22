let form = document.getElementById("lobby__form");

let displayName = sessionStorage.getItem("display_name");
if (displayName) {
  form.name.value = displayName;
}

let urlParams = new URLSearchParams(window.location.search);
let roomId = urlParams.get("room");

if (roomId) {
  document.getElementById("room__name").remove();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  sessionStorage.setItem("display_name", e.target.name.value);

  //Get invite code from URL param
  //If there is no room id, then we are creating a room
  if (!roomId) {
    roomId = String(1);
  }
  if (e.target.room) {
    sessionStorage.setItem("room_name", e.target.room.value);
  }
  console.log("Form submitted..");
  // let response = await fetch(`http://127.0.0.1:8000/get_token/?channel=${roomId}`)
  // let data = await response.json()
  // sessionStorage.setItem('token', data.token)

  window.location = `room.html?room=${roomId}`;
});
