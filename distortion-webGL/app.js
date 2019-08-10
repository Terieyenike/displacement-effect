// Date format
function formatDate(date) {
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ' ' + year;
}

let appendTime = (document.querySelector('.date').innerHTML = formatDate(
  new Date()
));

// Current time format
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

document.querySelector('.time').innerHTML += ' ' + formatAMPM(new Date());

// Distortion effect using WebGL
new hoverEffect({
  parent: document.querySelector('.ticket'),
  intensity1: 0.1,
  intensity2: 0.1,
  angle: Math.PI / 2,
  image1: './img/football-lover.jpg',
  image2: './img/abuja-landmark.jpg',
  displacementImage: './img/stripe1mul.png'
});
