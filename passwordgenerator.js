
//Special Characters User Input


function checkSpecialChar(){

    console.log("Special function is called");
if (document.getElementById("inlineCheckbox1").checked){

   specialChar = "!@#$%^&*!@#$%^&*!@#$%^&*&";
    console.log("Special characters is true");
}

else {
    specialChar = "";
}

}

if (document.getElementById("inlineCheckbox1").checked == false){
    console.log("special characters not checked")
    specialChar = "";
}



//Numeric Characters User Input

function checkNumericChar(){
    console.log(" Numeric function is called");


if (document.getElementById("inlineCheckbox2").checked){

    numericChar = "0123456789012345678956789";
    console.log("Numeric characters is true");

}

else {
    numericChar = "";
}

}

//Numeric Characters if box unchecked

if (document.getElementById("inlineCheckbox2").checked == false) {
    console.log("numeric characters not checked");
    numericChar = "";
}


//Lowercase Characters User Input
function checkLowerChar(){
    console.log("Lowercase function is called");

if (document.getElementById("inlineCheckbox3").checked){

    lowercaseChar = "abcdefghijklmnopqrstuvxyz";
    console.log("Lowercase characters is true");
}

else {
    lowercaseChar = "";
}

}

//Lowercase Characters if box unchecked

if (document.getElementById("inlineCheckbox3").checked == false) {
    console.log("lowercase characters not checked");
    lowercaseChar = "";
}


//Uppercase Characters User Input
function checkUpperChar(){
    console.log("Uppercase funtion is called")

if (document.getElementById("inlineCheckbox4").checked){

    uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    console.log("Uppercase characters is true");
}

else {
    uppercaseChar = "";
}

}

//Uppercase Characters if box unchecked

if (document.getElementById("inlineCheckbox4").checked == false) {
    console.log("uppercase characters not checked");
    uppercaseChar = "";
}


function generatePassword(){
        console.log("Generate Password function is called");

        let passlength = document.getElementById("slider").value;

        //Value for generatePassword function 

        let value = specialChar + numericChar + lowercaseChar + uppercaseChar;
        let password= ""; 

        for (var i = 0; i < passlength; i++){
            password = password + value.charAt(Math.floor(Math.random() * Math.floor(value.length)));
        }

        document.getElementById("display").value = password;

}


//set default length display of 25
document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

//function to copy password to clipboard

function copyPassword(){

    document.getElementById("display").select();
    

    document.execCommand("Copy");

}

