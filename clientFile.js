function addEvent(name, properties){
    _und.event.push({
        "name": name,
        "attributes": properties
    });
    console.log("Hello");
}
var profileSample = {
    "lakshbhutani@gmail.com": {
        "firstName": "laksh",
        "lastName": "Bhutani",
        "gender": "Male",
        "country": "India",
        "city": "Gurgaon",
        "dob": "1996-04-19",
        "email": "lakshbhutani@gmail.com",
        "mobile": "9467999902",
        "fbId": "lakshbhutani@facebook.com",
        "googleId": "lakshbhutani@google.com",
        "address": "4175, Sector-23 A, Gurgaon"
    },
    "kamalpreetsingh@gmail.com": {
        "firstName": "KamalPreet",
        "lastName": "Singh",
        "gender": "Male",
        "country": "India",
        "city": "Gurgaon",
        "dob": "1996-04-18",
        "email": "kamalpreetsingh@gmail.com",
        "mobile": "9910520132",
        "fbId": "kamalpreetsingh@facebook.com",
        "googleId": "kamalpreetsingh@google.com",
        "address": "3257,Handa PG, Sector-23 A, Gurgaon"
    },
    "aditya.khurana@gmail.com": {
        "firstName": "Aditya",
        "lastName": "Khurana",
        "gender": "Male",
        "country": "India",
        "city": "Gurgaon",
        "dob": "1996-04-29",
        "email": "aditya.khurana@gmail.com",
        "mobile": "9802400440",
        "fbId": "aditya.khurana@facebook.com",
        "googleId": "aditya.khurana@google.com",
        "address": "3287,Handa PG, Sector-23 A, Gurgaon"
    },
    "lakshayadhlakha@gmail.com": {
        "firstName": "Lakshay",
        "lastName": "Adhlakha",
        "gender": "Male",
        "country": "India",
        "city": "Gurgaon",
        "dob": "1996-05-26",
        "email": "lakshayadhlakha@gmail.com",
        "mobile": "8930130360",
        "fbId": "lakshayadhlakha@facebook.com",
        "googleId": "lakshayadhlakha@google.com",
        "address": "3540,Sector-23, Gurgaon"
    },
    "aditmakkar@gmail.com": {
        "firstName": "Adit",
        "lastName": "Makkar",
        "gender": "Male",
        "country": "India",
        "city": "Gurgaon",
        "dob": "1996-04-30",
        "email": "aditmakkar@gmail.com",
        "mobile": "9873187637",
        "fbId": "aditmakkar@facebook.com",
        "googleId": "aditmakkar@google.com",
        "address": "4175,Sector-23, Gurgaon",
        "additionalInfo":{
        	"userType":"Gold Package",
        	"subscriptionValidity":"3 Months",
        	"newOrExistingUser": "New User"
        }
    }

};
var select = document.getElementById("emailIdOptions");
var options =  Object.keys(profileSample);
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

function createPushProfile() {
    var e = document.getElementById("emailIdOptions");
    var selectedUser = e.options[e.selectedIndex].text;
    _und.login.push({
    	"login":true
    });
    console.log(profileSample[selectedUser]);
    _und.profile.push(profileSample[selectedUser]);
}