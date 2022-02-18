//YOUR FIREBASE LINKS
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
        
        user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4 " + name +"<img class="user_tick" src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
like_button ="<button class = 'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='uppdatelike(this.id)'>" 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
 function uppdatelike() 
 {
       console.log("click on like button - " + message_id);
       button_id = message_id;
       likes = document.getElementById?(button_id).value;
       update_likes = Number(likes) + 1;
       console.log(updated_likes);

       firebase.databaseURL().ref(room_name).child(message_id).update({
             like: update_likes
       });
 }