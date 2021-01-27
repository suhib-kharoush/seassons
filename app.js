var userName = prompt('what is your name?');

alert('welcome ' + userName);

var age = prompt('how older you?');


var seasons = prompt('what is the season you prefer?');
console.log(seasons);
if (seasons == 'summer') {
    message = 'turkey for the summer is good for you ';
} else if (seasons == 'winter') {
    message = 'greece for the winter is a very convenient to everyone ';
} else if (seasons == 'autumn') {
    message = 'croatia for the autumn is good for you ';
}


alert(message + userName)


document.write('<h1>' + message + userName +'<h1>');

