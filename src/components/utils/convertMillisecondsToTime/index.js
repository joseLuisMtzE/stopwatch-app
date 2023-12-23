export const convertMillisecondsToTime = (milliseconds) => {
  const date = new Date(milliseconds);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const millisecondsFormatted = date
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");

  return `${hours}:${minutes}:${seconds}:${millisecondsFormatted}`;
};
