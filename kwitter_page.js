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

room_name = localStorage.getItem("room_name");
Username = localStorage.getItem("Username");
  function msg_send(){
      message = document.getElementById("msg_taker").value;
      firebase.database().ref(room_name).push({
          name:Username,
          message:message,
          likes:0,
          dislikes:0
      });
      document.getElementById("msg_taker").value = "";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
likes = message_data['likes'];
names = message_data['name'];
message = message_data['message'];
namers = "<h4>"+names+"<img src='tick.png' class='user_tick'></h4>";
messagy = "<h4 class='message_h4'>"+message+"</h4>";
like_btn = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+likes+"' onclick = 'updatelikes(this.id)'>";
btn_continue = "<span class='glyphicon glyphicon-thumbs-up'>like:"+likes+"</span></button><hr>";
complete_msg = namers+messagy+like_btn+btn_continue ; 
document.getElementById("output").innerHTML += complete_msg;
//End code
 } });  }); }
 getData();
 function logouty(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("Username");
    window.location = "index.html";
  }
function updatelikes(msgeyo){
    unincreasedLikes = document.getElementById(msgeyo).value;
    Likes = Number(unincreasedLikes)+1;
    firebase.database().ref(room_name).child(msgeyo).update({
        likes:Likes
    });
}
function back(){
    window.location = "kwitter_room.html";
}