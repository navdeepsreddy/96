const firebaseConfig = {
    apiKey: "AIzaSyA5d5ZeG_PwEDnY2XOlkrX28WOEtGxUc70",
    authDomain: "kwitter-ee452.firebaseapp.com",
    projectId: "kwitter-ee452",
    storageBucket: "kwitter-ee452.appspot.com",
    messagingSenderId: "214748185205",
    appId: "1:214748185205:web:21724453c134b0a63fae3c",
    measurementId: "G-MRG8JNCP3N"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();