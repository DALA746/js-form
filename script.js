//Hämta
const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');

 
const validate = input => {
    
    switch(input.type) {

        case "text": 
            return validateText(input);

        case "email": 
            return validateEmail(input); 
        
        case "password": 
            return validatePassword(input);

            default:
                break; 
    }
}

// FÖR INPUT FIRST NAME and LAST NAME
const validateText = input => { // är det förkortat för function? 

    if(input.value === "") {
        setError(input, 'Name cannot be empty'); 
        return false; 
    } else if(input.value.length < 2) {
        setError(input, 'Name must be at least 2 characters long'); 
        return false;
    } else {
        setSuccess(input); 
        return true; 
    }
}


//FOR INPUT EMAIL 
const validateEmail = input => {
    
    let letters = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,}$/; 

    if(input.value === "") {
        setError(input, 'Email address cannot be empty'); 
        return false; 
    } else {
        setSuccess(input);
        return true;
    }
}

// FÖR INPUT PASSWORD 
const validatePassword = input => {
    
    if(input.value === '') {
        setError(input, 'Password cannot be empty'); 
        return false; 
    } else if(input.value.length < 5) {
        setError(input, 'Password must be atleast 5 characters long'); 
        return false; 
    } else {
        setSuccess(input) 
            return true; 
        }
}

//---HÄMTAR ERROR & SUCCESS MESSAGE FRÅN CSS---

//DEN ÄR FÖR FEL MEDDELANDE 
const setError = (input, message) => {
    const inputGroup = input.parentElement; 
    inputGroup.classList.add("error"); 
    inputGroup.classList.remove("success");

    const error =inputGroup.querySelector("small");
    error.innerText = message;
}

//NÄR ALLT STÄMMER DÅ KOMMER UPP GRÖNT, RÖTT FÖRVINNER 
const setSuccess = (input) => {
    const inputGroup = input.parentElement; 
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');  
}   


 
// GÖR ATT SIDAN EJ LADDAS OM NÄR MAN TRYCKER PÅ SUBMIT KNAPPEN
form.addEventListener('submit', e => {
    e.preventDefault();
  
    const errors = [];
  
    //ANROPAR SWITCH, DETTA ÄR LOPPEN FÖR FORMEN 
    for(let i = 0; i < form.length; i++) {
      errors[i] = validate(form[i])
    }

    //OM INGA FEL  
    if(!errors.includes(false)) { 
        // SKICKAS FORMEN TILL "TACK" SIDAN
      form.submit();

    }
  
  })