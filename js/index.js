function calculateBMI() {
    let berat = parseFloat(document.getElementById("berat").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);
    let bmi = berat / Math.pow(tinggi / 100, 2);
    document.getElementById("bmi").innerHTML = bmi.toFixed(1);
    if (bmi < 18.5) {
      document.getElementById("status").innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("status").innerHTML = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.getElementById("status").innerHTML = "Overweight";
    } else {
      document.getElementById("status").innerHTML = "Obesity";
    }
  }