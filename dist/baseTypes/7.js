/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Days;
(function (Days) {
    Days["Monday"] = "Monday";
    Days["Tuesday"] = "Tuesday";
    Days["Wednesday"] = "Wednesday";
    Days["Thursday"] = "Thursday";
    Days["Friday"] = "Friday";
    Days["Saturday"] = "Saturday";
    Days["Sunday"] = "Sunday";
})(Days || (Days = {}));
const isWeekend = (day) => {
    if (day === Days.Sunday || day === Days.Saturday) {
        return true;
    }
    return false;
};
const a = isWeekend(Days.Saturday);
console.log(a);
//# sourceMappingURL=7.js.map