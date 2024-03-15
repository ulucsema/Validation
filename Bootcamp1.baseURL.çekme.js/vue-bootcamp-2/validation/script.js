const form  = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById("email");
//observer design pattern
email.addEventListener('keyup',function(event) {
    const key = event.key //her tuşa basıldığında klavyedeki ilgili tuş bilgisini verir
    if(key === 'Backspace' || key === "Delete")
    {
        emailCheck(email);
    }
    else
    {
        emailCheck(email);
    }
})
function checkLength(input,min,max)
{
    if(input.value.length <min)
    {
         hataGoster(input,`${input.id} en az ${min} karakter olmalıdır`);
    }
    else if(input.value.length >max)
    {
         hataGoster(input,`${input.id} en fazla ${max} karakter olmalıdır`);
    }
    else
    {
        basarili(input);
    }
}
function hataGoster(input,mesaj)
{
     input.className = 'form-control is-invalid';
     const div  = input.nextElementSibling;
     div.innerText = mesaj;
     div.className = 'invalid-feedback';
}

function basarili(input)
{
    input.className = 'form-control is-valid';
}

function checkRequired(inputs)
{
    inputs.forEach(function(input) {
        if(input.value === '')
        {
            hataGoster(input, `${input.id} için bir değer giriniz`)
        }
        else
        {
            basarili(input);
        }
    });
}
function emailCheck(input)
{
   const emailControl =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if(emailControl.test(input.value))
   {
      basarili(input);
   }
   else
   {
    hataGoster(input,'geçersiz bir email adresi yazdınız');
   }
}



form.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log("butona tıklandı");
    checkRequired([username,email]);
    checkLength(username,6,10);
    emailCheck(email);
})