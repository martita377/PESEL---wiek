function checkAge(pesel) {
    //Date of Birth 
    var yearPesel = Number(pesel.substr(0, 2)) + 1900;
    if (yearPesel < 1917) {
        yearPesel = yearPesel + 100;
    }
    var monthPesel = Number(pesel.substr(2, 2));
    if ((monthPesel == 0) || (monthPesel > 12)) {
        throw new Error('PESEL nieprawidłowy - sprawdź cyfry');
    }
    var dayPesel = Number(pesel.substr(4, 2));
    if ((dayPesel == 0) || (dayPesel > 31)) {
        throw new Error('PESEL nieprawidłowy - sprawdź cyfrę 5. i 6.');
        return;
    }

    return {
      yearPesel: yearPesel,
      monthPesel: monthPesel,
      dayPesel: dayPesel
    }
}