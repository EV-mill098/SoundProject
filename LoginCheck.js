function checkUser() {
    //Set up the first and last name along with the user badge number
    // Last variable print the full name of the user
    var firstName = document.getElementById("UserFname").value;
    var lastName = document.getElementById("UserLname").value;
    var badgeNumber = document.getElementById("UserBadge").value;
    var fullName = firstName + " " + lastName;

    if (fullName.length > 24 || fullName.length < 5) {
        document.getElementById("LoginShowcase").innerHTML = "Full name has a invalid number of character. Please check your first and last name again.";
    } else if (badgeNumber > 999 || badgeNumber < 100) {
        document.getElementById("LoginShowcase").innerHTML = "Badge ID number is invalid. Please check your Badge ID again.";
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("UATCountDown.html");
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}

function revvingCar() {
    mySound = new sound("muscle car exhaust.mp3");
    mySound.play();
}

function labBackground() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
