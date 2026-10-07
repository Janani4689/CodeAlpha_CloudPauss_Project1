document.addEventListener("DOMContentLoaded", function () {

    const booking =
        JSON.parse(localStorage.getItem("cloudPassBooking"));

    if (!booking) {

        alert("Booking details not found.");

        window.location.href = "index.html";

        return;
    }


    /* DISPLAY PASSENGER */

    document.getElementById("passengerName").innerText =
        booking.passengerName;


    /* DISPLAY SEAT */

    document.getElementById("seatNumber").innerText =
        booking.seat.replace("Seat ", "");


    /* DISPLAY BOOKING ID */

    document.getElementById("bookingId").innerText =
        booking.bookingId;


    /* QR DATA */

    const qrData = `
CloudPass Digital Bus Pass

Booking ID: ${booking.bookingId}
Passenger: ${booking.passengerName}
Seat: ${booking.seat}
Bus: ${booking.busNumber}
Route: ${booking.from} to ${booking.to}
Departure: ${booking.departure}
Fare: ${booking.fare}
`;


    /* GENERATE QR */

    new QRCode(
        document.getElementById("qrcode"),
        {
            text: qrData,
            width: 130,
            height: 130,
            correctLevel: QRCode.CorrectLevel.H
        }
    );

});


/* BACK TO HOME */

function goHome() {

    localStorage.removeItem("cloudPassBooking");

    window.location.href = "index.html";

}