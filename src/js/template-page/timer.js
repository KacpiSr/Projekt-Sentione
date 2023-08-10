const dateString = data;
const dateParts = dateString.split(/[/ :]/);

const day = parseInt(dateParts[0]);
const month = parseInt(dateParts[1]) - 1;
const year = parseInt(dateParts[2]);
let hour = parseInt(dateParts[3]);
const minute = parseInt(dateParts[4]);
const period = dateParts[5].toLowerCase();

if (period === "pm" && hour !== 12) {
  hour += 12;
} else if (period === "am" && hour === 12) {
  hour = 0;
}

const targetDate = new Date(year, month, day, hour, minute);
const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formattedDate = targetDate.toLocaleDateString("en-US", options);
const endDate = document.querySelector(".data__ending--bottom");
endDate.innerText = formattedDate;

function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    document.getElementById("countdown").textContent =
      "Event has already occurred!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");;
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");;
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");;
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
