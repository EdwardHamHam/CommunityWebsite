function valForm(frm)
{
    var userName = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var defColor = "white"
    var errColor = "red"

    var isValid=true;
    //reset the background colors
    custName.style.backgroundColor = defColor;
    //email.style.backgroundColor = defColor;
    phone.style.backgroundColor = defColor;


    if (frm.name.value == "")
    {
       document.getElementById('nameError').innerHTML = "Invalid Name"
       userName.style.backgroundColor = errColor;
       isValid = false;
    }
    if (frm.email.value == "")
    {
       document.getElementById('emailErr').innerHTML = "Invalid Email"
       email.style.backgroundColor = errColor;
       isValid = false;
    }


    if (frm.phone.value == "")
    {
       document.getElementById('phoneError').innerHTML = "Invalid Phone"
       phone.style.backgroundColor = errColor;
       isValid = false;
    }

    if (isValid)
    {
        frm.submit();
    }
}

function printQuery() {
    var url = window.location.search.substr(1);
    var pairs = url.split("&");

    pairs.forEach(function(el)
    {
        var keyValue = el.split("=")
        document.write(keyValue[0] +  ": " + keyValue[1] + "<br>")
    })

}