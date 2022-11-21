//ADICIONE SEUS LINKS FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyCwi3eSb4ix0ObyQmgEW6HXyAUhKyvoxZ0",
  authDomain: "instragaodb.firebaseapp.com",
  databaseURL: "https://instragaodb-default-rtdb.firebaseio.com",
  projectId: "instragaodb",
  storageBucket: "instragaodb.appspot.com",
  messagingSenderId: "613482420218",
  appId: "1:613482420218:web:86ad6cd9e443b442383643"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bem-Vindo ao Instragão "+ user_name;

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    proposito: "adicionando nome da sala"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
 localStorage.setItem("room_name",name);
 window.location = "kwitterPage.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

