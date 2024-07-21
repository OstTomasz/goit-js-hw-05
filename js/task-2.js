console.log("Zadanie 2");

// Krótsze rozwiązanie
function calcAverageCalories(days) {
  let sum = 0;
  for (const day of days) {
    sum += day.calories;
  }

  if (sum !== 0) {
    return sum / days.length;
  }
  return 0;
}
// Dłuższe rozwiązanie ;)

// function calcAverageCalories(days) {
//   let cal = [];

//   for (const day of days) {
//     cal.push(day.calories);
//   }

//   let sum = 0;
//   cal.forEach((day) => {
//     sum += day;
//   });

//   let avg = 0;

//   if (sum !== 0) {
//     avg = sum / days.length;
//   }
//   return avg;
// }

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

console.log("---------------------");
