function countingDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const extraDate = date.getDate();
  const mili = date.getTime();

  const x = "50%";

  console.log("First date");
  var first_date = new Date();
  var sec_date = new Date("2023-05-22T16:11:04.868Z");
  console.log(first_date);
  console.log("Second date");

  console.log(sec_date);
  var dif = Math.abs(sec_date - first_date);
  const d = dif / (1000 * 3600);
  console.log("Subtracting days");
  console.log("d = " + d);
  const rip = 100 - d;

  console.log(text, date, year, month, typeof date, extraDate, rip);
}
