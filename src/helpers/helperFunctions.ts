export const numToLocale = (num: string): string =>
  String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

export const capitalizeWords = (word: string): string =>
  word.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) =>
    letter.toUpperCase(),
  );

export const findNativeName = (nativeNamesObj: object): string => {
  const nativeKeys: string[] = Object.keys(
    nativeNamesObj,
  ) as (keyof typeof nativeNamesObj)[];
  nativeKeys.push(nativeKeys.splice(nativeKeys.indexOf('eng'), 1)[0]);

  const nativeName: { official: string; common: string } =
    nativeNamesObj[nativeKeys[0] as keyof typeof nativeNamesObj];

  return nativeName.official;
};

export const findCurrency = (currencyObj: object): string => {
  const currencyKey: string[] = Object.keys(
    currencyObj,
  ) as (keyof typeof currencyObj)[];

  const currency: { name: string; symbol: string } =
    currencyObj[currencyKey[0] as keyof typeof currencyObj];

  return currency.name;
};
