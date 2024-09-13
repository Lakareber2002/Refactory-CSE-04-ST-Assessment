document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      let isValid = true;
  
      // Full name validation
      const fullname = document.getElementById("fullname");
      if (fullname.value.trim() === "") {
        alert("Full Name is required.");
        isValid = false;
      }
  
      // Gender validation
      const gender = document.getElementById("gender");
      if (gender.value === "") {
        alert("Please select your gender.");
        isValid = false;
      }
  
      // Date of Birth validation
      const dob = document.getElementById("dob");
      if (dob.value === "") {
        alert("Date of Birth is required.");
        isValid = false;
      }
  
      // Nationality validation
      const nationality = document.getElementById("nationality");
      if (nationality.value.trim() === "") {
        alert("Nationality is required.");
        isValid = false;
      }
  
      // Phone number validation
      const phone = document.getElementById("phone");
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone.value)) {
        alert("Phone number must be 10 digits.");
        isValid = false;
      }
  
      // Email validation
      const email = document.getElementById("email");
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        isValid = false;
      }
  
      // P.O. Box validation
      const poBox = document.getElementById("po-box");
      if (poBox.value.trim() === "") {
        alert("P.O. Box Number is required.");
        isValid = false;
      }
  
      // Emergency Number validation
      const emergency = document.getElementById("emergency");
      if (!phoneRegex.test(emergency.value)) {
        alert("Emergency number must be 10 digits.");
        isValid = false;
      }
  
      // Passport validation
      const passport = document.getElementById("passport");
      if (passport.value.trim() === "") {
        alert("Passport Number is required.");
        isValid = false;
      }
  
      // Visa validation (file type check)
      const visa = document.getElementById("visa");
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
      if (visa.files.length === 0 || !allowedExtensions.exec(visa.value)) {
        alert("Please upload a valid Visa document (.jpg, .jpeg, .png, .pdf).");
        isValid = false;
      }
  
      // Departure City validation
      const departureCity = document.getElementById("departure-city");
      if (departureCity.value.trim() === "") {
        alert("Departure City is required.");
        isValid = false;
      }
  
      // Destination City validation
      const destinationCity = document.getElementById("destination-city");
      if (destinationCity.value.trim() === "") {
        alert("Destination City is required.");
        isValid = false;
      }
  
      // Prevent form submission if there are validation errors
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  