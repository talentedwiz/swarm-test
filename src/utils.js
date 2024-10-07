export function getCurrentDateAndTime() {
  const currentTime = new Date();

  return `${currentTime.getFullYear()}/${
    currentTime.getMonth() + 1
  }/${currentTime.getDate()} ${currentTime.getHours()}:${currentTime.getMinutes()}`;
}

export function convertToTimestamp(datestr) {
  const dateObj = new Date(datestr);
  const timeStamp = dateObj.getTime();

  return timeStamp;
}
