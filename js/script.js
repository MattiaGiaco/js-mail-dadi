// Mail
// 1 creare lista di chi può accedere
// 2 chiedere email utente
// 3 controllo utente nella lista
// 4 stampa msg esito controllo

const emailList = ['ciao@gmail.com',
  'goku@gmail.com',
  'rufy@gmail.com',
  'naruto@gmail.com',
  'tizio@gmail.com',
  'vegeta@gmail.com',
  'jamesbond@gmail.com',
  'thanos@gmail.com',
  'capamerica@gmail.com',
  'spiderman@gmail.com',
  'hulk@gmail.com',
  'thor@gmail.com'
];

 let userEmail = 'thor@gmail.com' // prompt

 let email = false;

 for (let i=0; i<emailList.lenght; i++){
  if(emailList[i] === emailList){
    console.log('trovato');
    email = true;
  }
 }

 if(email == true){
   console.log('login');
 }else{
   console.log('out');
 }

// Dadi
// 1 creare random di 6 numeri per player e cpu
// 2 confronto risultati
// 3 vince numero più alto

const cpu = Math.floor(Math.random()*(6) + 1);
console.log(Math.floor(Math.random()*(6) + 1));
document.getElementById('cpu-num').innerHTML = cpu

const player = Math.floor(Math.random()*(6) + 1);
console.log(Math.floor(Math.random()*(6) + 1));
document.getElementById('user-num').innerHTML = player

if (cpu > player) {
  document.getElementById('winner').innerHTML = "Computer"
}else{
  document.getElementById('winner').innerHTML = "Player"
}