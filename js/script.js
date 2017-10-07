
// JS - PESEL 85050215487

var pesel = prompt("Podaj nr PESEL", "11 cyfr");


checkPesel();
//Check PESEL number
function checkPesel() {
	if (isNaN(Number(pesel))){
	  var alert_1='Błędny numer';	
	  alert(alert_1);
	  return alert_1;
	} else if (pesel == null || pesel.length !== 11) {
	  var alert_2='Nieprawidłowa ilość cyfr';	
	  alert(alert_2);
	  return alert_2;
	} else /*if (checkAge() != undefined)*/ {
	  alert('Twój wiek w latach: ' + checkAge());
	}	
}


function checkAge() {
  //Date of Birth 
  var yearPesel = Number(pesel.substr(0,2)) + 1900;
  if (yearPesel < 1917) {
    yearPesel = yearPesel + 100;  
    console.log(yearPesel);  
  }
  var monthPesel = Number(pesel.substr(2,2));
  if ((monthPesel==0) || (monthPesel>12)) {
    alert('PESEL nieprawidłowy - sprawdź cyfry');
    return;
  }
  var dayPesel = Number(pesel.substr(4,2));
  if ((dayPesel==0) || (dayPesel>31)) {
    alert('PESEL nieprawidłowy - sprawdź cyfrę 5. i 6.');
    return;
  }

  //Date of today
  var data = new Date();
  var year = data.getFullYear();
  var month = data.getMonth() + 1;
  var day = data.getDate();

  //Age
  var age= year - yearPesel;
  if ((monthPesel>month) || ((monthPesel==month) && (dayPesel>day))) {
    age +=-1; 
    console.log(age);
  } else if ((monthPesel==month) && (dayPesel==day)) {
    alert('Wszystkiego najlepszego w dniu urodzin!:)');
    age;
    console.log(age);
  } else {
    age;
    console.log(age);
  }
  return age;
}