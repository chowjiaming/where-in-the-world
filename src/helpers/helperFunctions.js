export const numToLocale = (number) =>
  String(number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

export const capitalizeWords = (word) =>
  word.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
