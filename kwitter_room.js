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

 //ADD YOUR FIREBASE LINKS HERE
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
 function addRoom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitterpage.html";
 }
 function getdata()
 {
       firebase.database().ref("/").on('value',function (snapshot){
             document.getElementById("output").innerHTML=" ";
 snapshot.forEach(function(childsnapshot){
       childKey=childsnapshot.key;
       Room_names=childKey;
       console.log("room name -"+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       });
 });
 } 
 getData();
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitterpage.html";
 }
 
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="Index.html";
 }
  
