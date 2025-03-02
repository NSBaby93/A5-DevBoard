// Change body background

const colors = ["#81ecec", "#ADBBDA", "#8697C4", "#7091E6", "#3D52A0"];

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

// Complete Button work
const completeButtons = document.querySelectorAll('.complete-btn');
const taskNumber = document.getElementById('task-number');
const pointNumber = document.getElementById('point-number');
const logMessage = document.getElementById('log-message');
const logContainer = document.getElementById('log-container');

let taskCount = parseInt(taskNumber.innerText, 10);
let pointCount = parseInt(pointNumber.innerText, 10);

// pick up time
function currentTime() {
      const now = new Date();
      return now.toLocaleTimeString('en-US', { hour12: true });
    }

  completeButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        const parentCard = event.target.closest('.single-card');
        const taskTitle = parentCard.querySelector('.card-title').innerText;

        // Disable button
        button.disabled = true;
        button.classList.add('cursor-not-allowed', 'bg-gray-300');

        alert('Board updated successfully!');

        if (taskCount > 0) {
          taskCount--;
          taskNumber.innerText = taskCount;
          pointCount++;
          pointNumber.innerText = pointCount;
        }

        const logEntry = document.createElement('div');
        logEntry.classList.add('bg-[#F4F7FF]', 'p-4', 'my-4', 'rounded-lg', 'shadow');
      

        logEntry.innerHTML = `
        <p class="text-base text-gray-600">
        You completed the task <span class="text-blue-500 font-semibold">${taskTitle}</span> at
        <span class="font-bold text-blue-500">${currentTime()}</span>
      </p> `;

        logContainer.prepend(logEntry);


        if (taskCount === 0) {
          alert('Congrats!! You have completed all the current tasks.');
        }
      });
  });
    

// Clear History
  
document.getElementById('clear-history').addEventListener('click', function () {
  logContainer.innerHTML = '';
})
