



function login(){
    username = document.getElementById("username_taker").value;
    localStorage.setItem("Username" , username);
    window.location = "kwitter_room.html";
}