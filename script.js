function searchBuses() {

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value;

    if (!from || !to || !date) {
        alert("Please enter From, To and Travel Date.");
        return;
    }

    const resultsSection = document.getElementById("busResults");
    const busList = document.getElementById("busList");
    const routeText = document.getElementById("routeText");

    routeText.innerText =
        `${from} → ${to} • ${date}`;

    busList.innerHTML = `
    
        <div class="bus-result-card">

            <div class="bus-company">
                <div class="bus-logo">CP</div>

                <div>
                    <h3>CloudPass Express</h3>
                    <span>BUS 101 • AC SEATER</span>
                </div>
            </div>

            <div class="time-info">
                <strong>08:30 AM</strong>
                <span>Chennai</span>
            </div>

            <div class="journey-line">
                <span>3h 15m</span>
                <div></div>
                <span>DIRECT</span>
            </div>

            <div class="time-info">
                <strong>11:45 AM</strong>
                <span>Villupuram</span>
            </div>

            <div class="seat-info">
                <span>AVAILABLE</span>
                <strong>18 seats</strong>
            </div>

            <div class="price">
                <small>FARE</small>
                <strong>₹180</strong>
            </div>

            <button class="select-bus"
                onclick="selectBus('CloudPass Express', 'BUS 101', '₹180')">
                Select Bus →
            </button>

        </div>


        <div class="bus-result-card">

            <div class="bus-company">
                <div class="bus-logo purple">CP</div>

                <div>
                    <h3>CloudPass Metro</h3>
                    <span>BUS 205 • NON AC</span>
                </div>
            </div>

            <div class="time-info">
                <strong>09:15 AM</strong>
                <span>Chennai</span>
            </div>

            <div class="journey-line">
                <span>3h 30m</span>
                <div></div>
                <span>DIRECT</span>
            </div>

            <div class="time-info">
                <strong>12:45 PM</strong>
                <span>Villupuram</span>
            </div>

            <div class="seat-info">
                <span>AVAILABLE</span>
                <strong>26 seats</strong>
            </div>

            <div class="price">
                <small>FARE</small>
                <strong>₹140</strong>
            </div>

            <button class="select-bus"
                onclick="selectBus('CloudPass Metro', 'BUS 205', '₹140')">
                Select Bus →
            </button>

        </div>


        <div class="bus-result-card">

            <div class="bus-company">
                <div class="bus-logo green">CP</div>

                <div>
                    <h3>CloudPass Premium</h3>
                    <span>BUS 309 • AC SLEEPER</span>
                </div>
            </div>

            <div class="time-info">
                <strong>10:00 AM</strong>
                <span>Chennai</span>
            </div>

            <div class="journey-line">
                <span>3h 05m</span>
                <div></div>
                <span>DIRECT</span>
            </div>

            <div class="time-info">
                <strong>01:05 PM</strong>
                <span>Villupuram</span>
            </div>

            <div class="seat-info">
                <span>AVAILABLE</span>
                <strong>12 seats</strong>
            </div>

            <div class="price">
                <small>FARE</small>
                <strong>₹240</strong>
            </div>

            <button class="select-bus"
                onclick="selectBus('CloudPass Premium', 'BUS 309', '₹240')">
                Select Bus →
            </button>

        </div>

    `;

    resultsSection.classList.add("show");

    resultsSection.scrollIntoView({
        behavior: "smooth"
    });
}


function selectBus(busName, busNumber, price) {

    window.location.href="seats.html";

}