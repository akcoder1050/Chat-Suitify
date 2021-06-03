// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBokI9oGc14EpEhvXSqi8A_KS8WD7JASVE",
  authDomain: "chat-suitify-best.firebaseapp.com",
  databaseURL: "https://chat-suitify-best-default-rtdb.firebaseio.com",
  projectId: "chat-suitify-best",
  storageBucket: "chat-suitify-best.appspot.com",
  messagingSenderId: "734897717744",
  appId: "1:734897717744:web:946ba758f7c804f078dd35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS on top


    var user_name = localStorage.getItem("USERNAME");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
      })
      alert("Room Created!");
      document.getElementById("room_name").value = "";
      localStorage.setItem("Roomname" , room_name);
      window.location = "page.html";
    }

    function logout() {
      window.location = "index.html";
      localStorage.removeItem("USERNAME");
      localStorage.removeItem("Roomname");
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+
      " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Roomname" , name);
      window.location = "page.html";
    }
