// JS - PESEL 85050215487

var pesel = prompt("Podaj nr PESEL", "11 cyfr");

checkPesel();

//Check PESEL number
function checkPesel() {
    if (isNaN(Number(pesel))) {
        var alert_1 = 'Błędny numer';
        alert(alert_1);
        return alert_1;
    } else if (pesel == null || pesel.length !== 11) {
        var alert_2 = 'Nieprawidłowa ilość cyfr';
        alert(alert_2);
        return alert_2;
    } else /*if (checkAge() != undefined)*/ {
        alert('Twój wiek w latach: ' + calculateAge(checkAge(pesel)));
    }
}

function calculateAge(date) {
    //Date of today
    var data = new Date();
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    var day = data.getDate();

    //Age
    var age = year - date.yearPesel;
    if ((date.monthPesel > month) || ((date.monthPesel == month) && (date.dayPesel > day))) {
        age += -1;
        return age;
    } else if ((date.monthPesel == month) && (date.dayPesel == day)) {
        alert('Wszystkiego najlepszego w dniu urodzin!:)');
        return age;
    } else {
        return age;
    }
}