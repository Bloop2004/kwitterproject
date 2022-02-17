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
function name_display(){
document.getElementById("welcome_displayer").innerHTML = "Welcome "+nameo+"!";
}