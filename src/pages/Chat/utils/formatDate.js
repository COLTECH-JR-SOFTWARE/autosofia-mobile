export default function formatDate(dateISO){
  const date = new Date(dateISO);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateOptions = { 
    month: "numeric", 
    day: "numeric",
    year: "numeric",
    timeZone,
  };

  const hourOptions = { 
    hour: "numeric",
    minute: "numeric",
    timeZone, 
  };

  const fomattedDate = new Intl.DateTimeFormat('pt-br', dateOptions).format(date);
  const formattedHour = new Intl.DateTimeFormat('pt-br', hourOptions).format(date);

  return `${formattedHour} • ${fomattedDate}`;
}