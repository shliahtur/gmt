const isNotEmail = document.createElement('div');
isNotEmail.className = 'email-error';
isNotEmail.innerText = "email is not correct"


const validateForm = (e) => {
    e.preventDefault();
    const inputs = e.target.parentNode.parentNode.querySelectorAll('input');
    let isValid = true;
    inputs.forEach(input => {
        if(!input.value){
            input.classList.add('input-error');
            isValid = false
        }
        else{
          const type = input.getAttribute('type');
          const isEmail = type === "email" ? true : false;
          if(isEmail && !validateEmail(input.value)){
            input.classList.add('input-error');
            input.parentNode.insertBefore(isNotEmail, input.nextSibling);   
            isValid = false;
          }
        }
    });
    if(isValid){
        return true;
    }
}

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = re.test(String(email).toLowerCase());
    console.log(email)
    return res
}

export default validateForm;