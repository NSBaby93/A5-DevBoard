// Change body background

const colors = ["#EDE8F5", "#ADBBDA", "#8697C4", "#7091E6", "#3D52A0"];

    let currentIndex = 0;

    document.getElementById("color-btn").addEventListener("click", function () {
      
      document.body.style.backgroundColor = colors[currentIndex];

      currentIndex = (currentIndex + 1) % colors.length;
    });

// Dynamic date set
const today = new Date();

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

const currentDay = days[today.getDay()];
const currentDate = today.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

document.getElementById('day').innerText = currentDay + ',';
document.getElementById('date').innerText = currentDate;

// Go to Blogs page set up

document.getElementById('discover-btn').addEventListener('click', function () {
  window.location = 'blog.html';
});

