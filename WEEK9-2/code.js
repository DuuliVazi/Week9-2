function checkCreds () {
    //first the fName input into firstname var
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    //name validation
    if (fullName.length > 19) {
        document.getElementById("loginStatus").innerHTML = "Name String has too many characters!";
    } else if (fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Name String does not have any characters!";
    }

    //badge numb validation
    if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge number not applicable!";  
    }

    if (fullName.length < 20 && badgeNumb < 1000 && badgeNumb >= 0 && fullName.length > 1) {
        alert("Access Granted, welcome " + fullName);
        location.replace("UAT Space Program.html.html");

    }
}

//This starts a countdown timer at 50 sec
function countdownTimer() {
    var timer = 50;

    //start at 50 sec
    setTimeout(function () {
        document.geElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 0000);


    //change to 45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 5000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 10000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 15000);

    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 20000);

    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 25000);

    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 30000);

    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 35000);

    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 40000);

    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 45000);

    //At 50 sec, the timer will read "Blastoff!"
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = "Blastoff!";
        timer = timer - 5;
    }, 50000);

    //Also at 50 sec, my image of a rocketship will pop up
    setTimeout(function() {
        document.getElementById('myimage').style.display = 'block';
    }, 50000);
}

//This generates random numbers for die1 and die2
function ranNumGen() {
    var numb = Math.ceil(Math.random()*7);
    document.getElementById("RndNum").innerHTML = numb;

}

//play craps function from Building Blocks Assignment
function play() {
    //create a die1 variable and assigns 1-6
    var die1 = Math.ceil(Math.random() * 6);

    //create a die2 variable and assigns 1-6
    var die2 = Math.ceil(Math.random() * 6);


    //this adds up the dice values of each one 
    var sum = die1 + die2
    //printing out die1 results
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + die1;
    //printing out die2 results
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
    //printing out die1 results
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;
    
    //sum of dice not equal to 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "Craps you lose!";
    }
    //dice 1 is equal to dice2 and they're even
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    }
    //neither equal to 7 or 11
    else {
        document.getElementById("finalRes").innerHTML = "push, please try again";
    }
    

}

function betterCtdnTimer() {
    //build countdown timer using for loop, i am going from 50-0 by 2's
    var countDn = 50;
    for(var i = 0; i <= 25; i++) {
       setTimeout(function() {
        if(countDn == 0) {
            document.getElementById("ctdnTimer").innerHTML = "Blastoff!";

           } else if(countDn < 25) {
                document.getElementById("ctdnTimer").innerHTML = "Warning Less than 1/2 way to launch, time left = " + countDn;
           } else {
                document.getElementById("ctdnTimer").innerHTML = countDn;
           }
               
        countDn = countDn - 2;   
       }, i * 5000);
     }
}

function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}