const seatGrid = document.getElementById("seatGrid");

const bookedSeats = [
    3, 7, 12, 18, 25, 29, 34
];

let selectedSeat = null;

const farePerSeat = 180;


/* CREATE 40 SEATS */

for (let i = 1; i <= 40; i++) {

    const seat = document.createElement("div");

    seat.classList.add("seat");

    seat.innerText = String(i).padStart(2, "0");


    /* AISLE */

    if (i % 4 === 3) {
        seat.style.gridColumn = "3";
    }


    /* BOOKED */

    if (bookedSeats.includes(i)) {

        seat.classList.add("booked");

    } else {

        seat.addEventListener("click", () => {

            selectSeat(i, seat);

        });

    }


    seatGrid.appendChild(seat);
}


/* SELECT SEAT */

function selectSeat(number, element) {

    if (selectedSeat !== null) {

        document
            .querySelectorAll(".seat.selected")
            .forEach(seat => {
                seat.classList.remove("selected");
            });

    }


    selectedSeat = number;

    element.classList.add("selected");


    document.getElementById("selectedSeat").innerText =
        "Seat " + String(number).padStart(2, "0");


    document.getElementById("totalFare").innerText =
        "₹" + farePerSeat;

}


/* CONTINUE */

function continueBooking() {

    if (selectedSeat === null) {

        alert("Please select a seat first.");

        return;
    }
    localStorage.setItem(
        "cloudPassSeat",
String(selectedSeat).padStart(2,
    "0")
);
window.location.href="passenger.html";

    


   
}