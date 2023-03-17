/*
1)Chiedi all’utente il suo nome,
2)poi chiedi il suo cognome,
3)poi chiedi il suo colore preferito
4)Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

const name = prompt("Scrivi il tuo nome");

const surname = prompt("Scrivi il tuo cognome");

const FavoriteColor = prompt("Scrivi il tuo colore preferito");

console.log( name , surname , FavoriteColor);

const FavoriteNumber = 23;

const outputStr = `
Ciao ${name} ${surname} <br>
Il tuo colore preferito è ${FavoriteColor} <br>
Il tuo numero preferito è ${FavoriteNumber}
`
console.log(outputStr);

document.getElementById("output").innerHTML = outputStr;





