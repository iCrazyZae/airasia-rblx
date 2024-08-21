document.addEventListener('DOMContentLoaded', () => {
    const flightNumbers = JSON.parse(localStorage.getItem('flightNumbers')) || ['AA123', 'AA456', 'AA789'];
    const flightSelect = document.getElementById('flightNumber');
    const flightList = document.getElementById('flightList');
    const addFlightButton = document.getElementById('addFlightButton');
    const newFlightNumberInput = document.getElementById('newFlightNumber');

    // Load flight numbers into the dropdown
    updateFlightDropdown();

    // Display flight numbers in the list
    updateFlightList();

    // Handle form submission
    document.getElementById('bookingForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Flight booked successfully!');
    });

    // Handle adding a new flight number
    addFlightButton.addEventListener('click', () => {
        const newFlightNumber = newFlightNumberInput.value.trim();
        if (newFlightNumber && !flightNumbers.includes(newFlightNumber)) {
            flightNumbers.push(newFlightNumber);
            localStorage.setItem('flightNumbers', JSON.stringify(flightNumbers));
            updateFlightDropdown();
            updateFlightList();
            newFlightNumberInput.value = '';
        }
    });

    // Update flight number dropdown
    function updateFlightDropdown() {
        flightSelect.innerHTML = '';
        flightNumbers.forEach(flight => {
            const option = document.createElement('option');
            option.value = flight;
            option.textContent = flight;
            flightSelect.appendChild(option);
        });
    }

    // Update flight numbers list
    function updateFlightList() {
        flightList.innerHTML = '';
        flightNumbers.forEach(flight => {
            const listItem = document.createElement('li');
            listItem.textContent = flight;
            flightList.appendChild(listItem);
        });
    }
});
