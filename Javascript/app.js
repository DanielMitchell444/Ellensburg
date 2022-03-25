const tabBtn = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
const activities = document.getElementById("Activities");
const venues = document.getElementById("Venues");
const scheduling = document.getElementById("Scheduling");
const contact = document.getElementById("Contact");
const btnContainer = document.querySelector(".btn-container");
const resetBtn = document.querySelector(".reset-btn");
const alertTxt = document.querySelector(".alertTxt");
const photo1 = document.querySelector(".picture1");
const photo3 = document.querySelector(".picture3");
const photo4 = document.querySelector(".picture4");
const soccerBtn = document.querySelector(".btnSoccer");
const racketballBtn = document.querySelectorAll(".racketball-btn");
const photo2 = document.querySelector(".picture2");
const parksPhoto = document.querySelector(".picture");
const parksBtn = document.querySelectorAll(".parks-btn");
const gymBtn = document.querySelector(".Gym-btn");
const arenaBtn = document.querySelector(".Arena-btn");
const courtsBtn = document.querySelector("courts-btn");
const parkPhoto = document.querySelector(".parksPhoto");
const submitBtn = document.querySelector(".submit-btn");
const submitBtn2 = document.querySelector(".sbmit-btn");
const form1 = document.getElementById("#signup");
const usernameField = document.getElementById("#username");
const error = document.querySelector(".errorUsername");
const form = document.querySelector("form");

//This function hides certain article buttons info
function hideArticle(event) {
  //Get the event target
  const id = event.target.dataset.id;

  if (id)
    //Remove active from all buttons
    tabBtn.forEach(function (btn) {
      btn.classList.remove("active");
      event.target.classList.add("active");
    });

  //Hide other articles
  articles.forEach(function (article) {
    article.classList.remove("active");
  });

  //Display the active field on the selected element
  const element = document.getElementById(id);
  element.classList.add("active");
}

const getActivitiesButtonValue = () => {
  //Loop through the Venue buttons //
  let valid = false;

  for (let i = 0; i < racketballBtn.length; i++) {
    racketballBtn[i].addEventListener("click", function () {
      const value = racketballBtn[i];

      const venueValues = racketballBtn[i].textContent;

      alert("Data saved, please move on to the venues tab to select a venue");

      for (let i = 0; i < racketballBtn.length; i++) {
        racketballBtn[i].disabled = true;
      }
    });
  }
};
//This function gets the value of the venues button//
const getVenuesButtonValue = () => {
  //Loop through the Venue buttons //
  let valid = false;

  for (let i = 0; i < parksBtn.length; i++) {
    //Add an event listener to the venue buttons//

    parksBtn[i].addEventListener("click", function (event) {
      //store the parks btn values inside the value attribute//
      const value = parksBtn[i];

      //Check to see if the venue buttons have the data-id attribute //

      if (value.hasAttribute("data-id")) {
        //If it does have a data-id, store the data id inside the parks button value and return valid;

        const parksBtnValue = parksBtn[i].textContent;

        valid = true;

        alert(
          "data saved! Please move on to schedule tab to select a time and date for your reservation"
        );

        for (let i = 0; i < parksBtn.length; i++) {
          parksBtn[i].disabled = true;
        }

        //Send the parks button value to the mySql database//
      } else {
        alert("Please select a venue");
        valid = false;
      }
    });
  }
  return valid;
};

function validateDate() {
  const date = document.querySelector(".date").value;
  var q = new Date();
  var dateValue = new Date(q.getFullYear(), q.getMonth(), q.getDate());
  var mydate = new Date(date);
  let valid = false;

  if (dateValue <= mydate) {
    valid = true;

    date.disabled = true;
  } else {
    alert("please enter a date later todays date");
    valid = false;
  }
  return valid;
}

const validateTime = () => {
  const timeValue = document.querySelector(".time");

  var minTime = timeValue.min;
  var maxTime = timeValue.max;

  var value = timeValue.value + ":00";

  console.log(minTime, maxTime, value);

  if (minTime > value || value > maxTime) {
    alert("Please enter a time between 9am and 9pm");
    valid = false;
    timeValue.disabled = false;
  } else {
    valid = true;
    timeValue.disabled = true;
  }
  return valid;
};

//This function checks the city field on the contact form
const checkCity = () => {
  const cityField = document.querySelector('input[name = "city').value;

  let valid = false;

  if (!cityField) {
    alert("please enter a valid city");
    valid = false;
  } else {
    console.log("success");
    valid = true;
  }
  return valid;
};

//This function checks the names field for the contact form
const checkFirstName = () => {
  //Select the input field
  const firstNameField = document.querySelector('input[name = "name').value;
  const lastNameField = document.querySelector(
    'input[name = "last-namee'
  ).value;
  const errorName = document.querySelector(".ErrorName");
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let valid = false;
  //If statement
  if (!firstNameField) {
    alert("please enter a first name");
    valid = false;
  } else {
    console.log("Success");
    valid = true;
  }

  return valid;
};

//This function checks the last name field of the contact form
const checkLastName = () => {
  let valid = false;
  const lastNameField = document.querySelector(
    'input[name = "last-namee'
  ).value;
  const errorLastName = document.querySelector(".ErrorNamme");

  if (!lastNameField) {
    alert("please enter a last name");
    valid = false;
  } else {
    console.log("Success");
    valid = true;
  }
  return valid;
};

//This function checks the email field for the contact form
const checkEmail = () => {
  //define a variable for special characters
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  const emailAlert = document.querySelector(".ErrorNammeee");

  //test the email input field value
  const isValid = re.test(document.querySelector('input[name = "Email').value);

  //Check to see if special characters are found
  if (!isValid || isValid.length < 5) {
    alert("please enter a  valid email");
    valid = false;
  } else {
    console.log("Success");
    valid = true;
  }
  return valid;
};

//This function checks the phone number field for the contact form
const checkPhoneNumber = () => {
  //Make a variable for the phone number format
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let valid = false;
  const errorPhone = document.querySelector(".ErrorNammee");

  //Test the phone number input field to the phone number variable
  const validate = phoneno.test(
    document.querySelector('input[name = "phone').value
  );

  //Check to see if the phone number matches the format
  if (!validate) {
    alert("please enter a valid phone number");
    valid = false;
  } else {
    console.log("success");
    valid = true;
  }
  return valid;
};

//This function gets the button value of the activities button//

const checkForm = () => {
  let firstName = checkFirstName(),
    lastName = checkLastName(),
    email = checkEmail(),
    phone = checkPhoneNumber(),
    city = checkCity();
  activity = getVenuesButtonValue();

  isFormValid = firstName && lastName && email && phone && city && activity;

  if (isFormValid) {
    alert("Reservation has been saved, returning you to home page");
    window.location.href = "index.html";
  }
};

//Add an event listener to the page to prevent default reset
about.addEventListener("click", function (event) {
  event.preventDefault();
});

//Add an event listener to the about section //
btnContainer.addEventListener("click", hideArticle);

//Select the contact form
const submitBtnn = document.querySelector(".submit-btn");

const submitDate = document.querySelector(".submit-date");

submitDate.addEventListener("click", function (e) {
  e.preventDefault();

  let date = validateDate();
  time = validateTime();

  let valid = date && time;

  if (valid) {
    alert("data saved! Please move on to the contact section to continue");
  }
});

//Add an event listener to the contact form
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  checkForm();
});

getActivitiesButtonValue();
getVenuesButtonValue();

















