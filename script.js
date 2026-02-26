// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("change", function(){
  document.body.classList.toggle("dark");
});

// Mood Chart
const ctx = document.getElementById('moodChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [{
      label: "Mood Level",
      data: [3,4,2,5,4,3,5],
      borderColor: "#8b5cf6",
      backgroundColor: "rgba(139,92,246,0.2)",
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { min: 0, max: 5 }
    }
  }
});
