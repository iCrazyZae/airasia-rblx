document.addEventListener('DOMContentLoaded', () => {
    // Initial flight data
    const flightData = [
        { number: 'AK 6285', date: '24 August 2024', time: '17:30', route: 'MKZ > PEN' },
        { number: 'AK 6231', date: '25 August 2024', time: '14:30', route: 'KUA > KUL' }
    ];

    // Get flightList element
    const flightList = document.getElementById('flightList');

    // Display available flights
    updateFlightList();

    // Update flight numbers list
    function updateFlightList() {
        flightList.innerHTML = '';
        flightData.forEach(flight => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${flight.number}</strong><br>
                                  Date: ${flight.date}<br>
                                  Time: ${flight.time}<br>
                                  Route: ${flight.route}<br>
                                  <button class="bookFlightButton" data-flight="${flight.number}">Book Flight</button>`;
            flightList.appendChild(listItem);
        });

        // Add event listener to buttons
        document.querySelectorAll('.bookFlightButton').forEach(button => {
            button.addEventListener('click', (e) => {
                const flightNumber = e.target.getAttribute('data-flight');
                window.location.href = `book.html?flight=${encodeURIComponent(flightNumber)}`;
            });
        });
    }
});
