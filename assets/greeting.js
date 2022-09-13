const today = new Date()
const hour = today.getHours()

const gree1 = "Go to Sleep!"
const gree2 = "Good morning!"
const gree3 = "Good afternoon!"
const gree4 = "Good evening!"

if (hour >= 23 || hour < 5) {
	document.getElementById('greeting').innerText = gree1;
} else if (hour >= 6 && hour < 12) {
	document.getElementById('greeting').innerText = gree2;
} else if (hour >= 12 && hour < 17) {
	document.getElementById('greeting').innerText = gree3;
} else {
	document.getElementById('greeting').innerText = gree4;
}
