const form = document.getElementById("passengerForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("passengerName").value.trim();

    const age =
        document.getElementById("age").value;

    const gender =
        document.getElementById("gender").value;

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();


    /* PHONE VALIDATION */

    if (!/^[6-9]\d{9}$/.test(phone)) {

        alert("Please enter a valid 10-digit Indian mobile number.");

        return;
    }


    /* AGE VALIDATION */

    if (age < 1 || age > 100) {

        alert("Please enter a valid age.");

        return;
    }


    /* CREATE BOOKING ID */

    const bookingId =
        "CP" +
        Date.now().toString().slice(-8);


    /* GET SELECTED SEAT */

    const selectedSeat =
        document.getElementById("displaySeat").innerText;


    /* BOOKING DATA */

    const bookingData = {

        bookingId: bookingId,

        passengerName: name,

        age: age,

        gender: gender,

        phone: phone,

        email: email,

        seat: selectedSeat,

        bus: "CloudPass Express",

        busNumber: "BUS 101",

        from: "Chennai",

        to: "Villupuram",

        departure: "08:30 AM",

        fare: "₹180"

    };


    /* SAVE BOOKING */

    localStorage.setItem(
        "cloudPassBooking",
        JSON.stringify(bookingData)
    );


    /* SUCCESS MESSAGE */

    alert(
        "Passenger details verified successfully!\n\n" +
        "Booking ID: " +
        bookingId
    );


    /* NEXT PAGE */

    window.location.href = "pass.html";

});

