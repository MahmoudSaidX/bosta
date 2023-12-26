export default function formatReadableDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions,
  locales: "ar-EG" | "en-US"
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

  const formattedDate = new Intl.DateTimeFormat(locales, options).format(date);
  return formattedDate;
}
