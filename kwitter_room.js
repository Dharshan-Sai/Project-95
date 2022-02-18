// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAKKpJsgljZwZdRLRhwM3z4PBr6WewHeZA",
      authDomain: "dhap-uxpr.firebaseapp.com",
      databaseURL: "https://dhap-uxpr-default-rtdb.firebaseio.com",
      projectId: "dhap-uxpr",
      storageBucket: "dhap-uxpr.appspot.com",
      messagingSenderId: "538615952622",
      appId: "1:538615952622:web:9ff853e9960cd01f092fff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });
});
}
getData();

function addRoom()             
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redrictToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
