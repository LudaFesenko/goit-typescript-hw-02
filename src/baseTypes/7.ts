/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  MON,
  TUE,
  WEN,
  THR,
  FRI,
  SAT,

  SUN,
}

function isWeekend(weekDay: Week): boolean {
  const dayOff = weekDay === Week.SUN || weekDay === Week.SAT;
  if (dayOff) {
    console.log("вихідний");
  } else {
    console.log("робочий");
  }
  return dayOff;
}

console.log(isWeekend(Week.FRI)); //?
