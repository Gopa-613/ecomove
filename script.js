const ctx = document.getElementById("emissionChart").getContext("2d");
const emissionChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2020", "2022", "2024", "2026", "2028", "2030"],
    datasets: [
      {
        label: "Average Vehicle Emissions (g/km)",
        data: [140, 130, 115, 100, 85, 70],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Emission Trend Prediction (2020-2030)",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "g CO₂ per km",
        },
      },
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
    },
  },
});
