
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCNEC-vKcIRq6wTQF0LoSxU6a-l0rOXGBs",
      authDomain: "meconnect-a279.firebaseapp.com",
      databaseURL: "https://meconnect-a279-default-rtdb.firebaseio.com",
      projectId: "meconnect-a279",
      storageBucket: "meconnect-a279.appspot.com",
      messagingSenderId: "410968974108",
      appId: "1:410968974108:web:b5c10707d032159d2a90d9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome, "+user_name+"!";

    function addRoom(){
          Room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update({
                purpose:"ROOM NAME ADDED"
          })
          localStorage.setItem("room_name", Room_name);
          window.location="chatpage.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("ZE NAME OF ZE ROOM IS "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
    getData();

    function redirecttoroomname(name){
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location="chatpage.html";
    }

    function logOut(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }