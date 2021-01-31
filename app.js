
function intro() {
    var userName = prompt('what is your name?');

    alert('welcome ' + userName);

    var age = prompt('how older you?');
}
intro();



function questions() {
    var seasons = prompt('what is the season you prefer?');
    console.log(seasons);
    if (seasons == 'summer') {
        message = 'turkey for the summer is good for you ';
    } else if (seasons == 'winter') {
        message = 'greece for the winter is a very convenient to everyone ';
    } else if (seasons == 'autumn') {
        message = 'croatia for the autumn is good for you ';

        alert(message + userName)


        document.write('<h1>' + message + userName + '<h1>');
    }
}
questions();



function detail() {
    var order = prompt('what is the contry you planing to visit?');
    while (order !== 'turkey' && order !== 'greece' && order !== 'croatia') {
        order = prompt('we are sorry our servises just in greece, turkey and croatia, if you interested to any one of them please write it here ')
    }

    var country = ''
    if (order === 'greece') {
        country = '<img src="images/greece.jpg" />';

    } else if (order === 'turkey') {
        country = '<img src="images/turkey.jpg" />"';

    } else if (order === 'croatia') {
        country = '<img src="images/croatia.jpg" />';


        document.write(country);
    }
    for (var i = 0; i < 7; i++) {
        document.write('welcome to ' + country);
    }
}


