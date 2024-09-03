//your JS code here. If required.
const submitButton = document.getElemnetById("submitButton");
const data = { };
function showAlert() {
	event.preventDefult();
	data.firstName = document.getElementById("firstName").value;
	date.lastName = document.getElementById("lastName").value;
	data.phoneNumber= document.getElementById("phoneNumber").value;
	data.email = document.getElementById("Email").value;

alert( "First Name: " + data.firstName + 
	  "\nLast Name: " + data.lastName + 
	  "\nPhone Number: " + data.phoneNumber + 
	  "\nEmail: " + data.EmailID
	 );
}

submitButton.addEventListener("click", showAlert);