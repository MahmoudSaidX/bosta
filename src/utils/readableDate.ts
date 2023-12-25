export default function formatReadableDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions
): string {
  const date = new Date(dateString);
  // const options: Intl.DateTimeFormatOptions = {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric",
  // };

  const formattedDate = new Intl.DateTimeFormat("ar-EG", options).format(date);
  return formattedDate;
}
