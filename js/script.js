checkPesel(prompt("Podaj nr PESEL", "11 cyfr"));

function checkPesel(pesel) {
    if (isNaN(Number(pesel))) {
        alert('Błędny numer');
    } else if (pesel == null || pesel.length !== 11) {
        alert('Nieprawidłowa ilość cyfr');
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
    } else if ((date.monthPesel == month) && (date.dayPesel == day)) {
        alert('Wszystkiego najlepszego w dniu urodzin!:)');
    }

    return age;
}