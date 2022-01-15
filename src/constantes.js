// Environnement de travail
const prodUrl = "";
const devUrl = "..//data/lodgingList.json";
// eslint-disable-next-line no-unused-vars
const PROD = "production";
const DEV = "development";
const ENV = DEV;
export const url = ENV === DEV ? devUrl : prodUrl;
