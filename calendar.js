const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const context = {
  daysOfWeek,
  month: months[new Date().getMonth()],
  year: new Date().getFullYear(),
  weeks: generateWeeks(new Date()),
};

function generateWeeks(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks = [];
  let currentDay = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfMonth) || currentDay > daysInMonth) {
        week.push({ day: null, today: false });
      } else {
        week.push({
          day: currentDay,
          today:
            currentDay === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        });
        currentDay++;
      }
    }
    weeks.push(week);
  }
  return weeks;
}
