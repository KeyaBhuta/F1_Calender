const races = [
    {
        name: "Australian Grand Prix",
        date: "March 16, 2025",
        time: "09:30",
        location: "Melbourne, Australia",
        image: "images/australia.png"
    },
    {
        name: "Chinese Grand Prix",
        date: "March 23, 2025",
        time: "12:30",
        location: "Shanghai, China",
        image: "images/china.png"
    },
    {
        name: "Japanese Grand Prix",
        date: "April 6, 2025",
        time: "10:30",
        location: "Suzuka, Japan",
        image: "images/japan.png"
    },
    {
        name: "Bahrain Grand Prix",
        date: "April 13, 2025",
        time: "20:30",
        location: "Sakhir, Bahrain",
        image: "images/bahrain.png"
    },
    {
        name: "Saudi Arabian Grand Prix",
        date: "April 20, 2025",
        time: "22:30",
        location: "Jeddah, Saudi Arabia",
        image: "images/saudi.png"
    },
    {
        name: "Miami Grand Prix",
        date: "May 5, 2025",
        time: "01:30",
        location: "Miami, USA",
        image: "images/miami.png"
    },
    {
        name: "Emilia Romagna Grand Prix",
        date: "May 18, 2025",
        time: "18:30",
        location: "Imola, Italy",
        image: "images/imola.png"
    },
    {
        name: "Monaco Grand Prix",
        date: "May 25, 2025",
        time: "18:30",
        location: "Monte Carlo, Monaco",
        image: "images/monaco.png"
    },
    {
        name: "Spanish Grand Prix",
        date: "June 1, 2025",
        time: "18:30",
        location: "Barcelona, Spain",
        image: "images/spain.png"
    },
    {
        name: "Canadian Grand Prix",
        date: "June 16, 2025",
        time: "00:30",
        location: "Montreal, Canada",
        image: "images/canada.png"
    },
    {
        name: "Austrian Grand Prix",
        date: "June 29, 2025",
        time: "18:30",
        location: "Spielberg, Austria",
        image: "images/austria.png"
    },
    {
        name: "British Grand Prix",
        date: "July 6, 2025",
        time: "19:30",
        location: "Silverstone, UK",
        image: "images/silverstone.png"
    },
    {
        name: "Belgian Grand Prix",
        date: "July 27, 2025",
        time: "18:30",
        location: "Spa, Belgium",
        image: "images/belgian.png"
    },
    {
        name: "Hungarian Grand Prix",
        date: "August 3, 2025",
        time: "18:30",
        location: "Budapest, Hungary",
        image: "images/hungary.png"
    },
    {
        name: "Dutch Grand Prix",
        date: "August 31, 2025",
        time: "18:30",
        location: "Zandvoort, Netherlands",
        image: "images/dutch.png"
    },
    {
        name: "Italian Grand Prix",
        date: "September 7, 2025",
        time: "18:30",
        location: "Monza, Italy",
        image: "images/monza.png"
    },
    {
        name: "Azerbaijan Grand Prix",
        date: "September 21, 2025",
        time: "16:30",
        location: "Baku, Azerbaijan",
        image: "images/azarbaijan.png"
    },
    {
        name: "Singapore Grand Prix",
        date: "October 5, 2025",
        time: "17:30",
        location: "Singapore",
        image: "images/singapore.png"
    },
    {
        name: "United States Grand Prix",
        date: "October 20, 2025",
        time: "00:30",
        location: "Austin, USA",
        image: "images/austin.png"
    },
    {
        name: "Mexican Grand Prix",
        date: "October 27, 2025",
        time: "01:30",
        location: "Mexico City, Mexico",
        image: "images/mexico.png"
    },
    {
        name: "Brazilian Grand Prix",
        date: "November 9, 2025",
        time: "22:30",
        location: "São Paulo, Brazil",
        image: "images/brazil.png"
    },
    {
        name: "Las Vegas Grand Prix",
        date: "November 23, 2025",
        time: "09:30",
        location: "Las Vegas, USA",
        image: "images/las vegas.png"
    },
    {
        name: "Qatar Grand Prix",
        date: "November 30, 2025",
        time: "21:30",
        location: "Lusail, Qatar",
        image: "images/qatar.png"
    },
    {
        name: "Abu Dhabi Grand Prix",
        date: "December 7, 2025",
        time: "18:30",
        location: "Yas Marina, Abu Dhabi",
        image: "images/abu dhabi.png"
    }
];

const racesContainer = document.getElementById("races");

function getCurrentISTTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    return new Date(now.toLocaleString('en-IN', options));
}
function calculateCountdown(raceDateTime) {
    const now = new Date();
    // Manually set the time zone to IST (Indian Standard Time)
    const raceTime = new Date(raceDateTime + ' GMT+0530');
    const timeDiff = raceTime - now;

    if (timeDiff <= 0) {
        return "Race has already passed!";
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


races.forEach((race) => {
    const raceElement = document.createElement("div");
    raceElement.classList.add("race");

    // Combine race date and time to create the race dateTime string
    const raceDateTime = `${race.date} ${race.time}`;

    raceElement.innerHTML = `
      <div class="race-container">
        <img src="${race.image}" alt="${race.name} Circuit" class="race-image">
        <div class="race-details">
          <h3>${race.name}</h3>
          <p><strong>Date:</strong> ${race.date}</p>
          <p><strong>Time:</strong> ${race.time}</p>
          <p><strong>Location:</strong> ${race.location}</p>
          <p><strong>Countdown:</strong> <span class="countdown">${calculateCountdown(raceDateTime)}</span></p>
        </div>
      </div>
    `;

    racesContainer.appendChild(raceElement);
});

// Update the countdown every second
setInterval(() => {
    const countdownElements = document.querySelectorAll(".countdown");
    races.forEach((race, index) => {
        const raceDateTime = `${race.date} ${race.time}`;
        countdownElements[index].innerText = calculateCountdown(raceDateTime);
    });
}, 1000);

