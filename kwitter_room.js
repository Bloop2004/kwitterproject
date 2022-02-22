const firebaseConfig = {
    apiKey: "AIzaSyBF9XLAFMj8IcXbM6XLwgZJgtapgbhxokg",
    authDomain: "kwitty-95179.firebaseapp.com",
    databaseURL: "https://kwitty-95179-default-rtdb.firebaseio.com",
    projectId: "kwitty-95179",
    storageBucket: "kwitty-95179.appspot.com",
    messagingSenderId: "787546118612",
    appId: "1:787546118612:web:90a929f2a551fb62a75e41"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

nameo = localStorage.getItem("Username"); 

document.getElementById("welcome_displayer").innerHTML = "Welcome "+nameo+"!";
document.getElementById("Username_displayer").innerHTML = nameo;
function add_room(){
  room_nameo = document.getElementById("room_name_taker").value;
  firebase.database().ref("/").child(room_nameo).update({
    purpose: "create room"
  });
  localStorage.setItem("room_name", room_nameo);
   window.location = "kwitter_page.html";
}
   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function redirectToRoom(name){
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}
function logouty(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("Username");
  window.location = "index.html";
}