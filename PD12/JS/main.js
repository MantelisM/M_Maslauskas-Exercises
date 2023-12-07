
const pirmadieni = 5;
const antradieni = 6;
const treciadieni = 4;
const ketvirtadieni = 5;
const penktadieni = 4;
const PaskaitosLaikas = 45;

const PaskaituSkaicius = pirmadieni + antradieni + treciadieni + ketvirtadieni + penktadieni;

const TrukmeMinutemis = PaskaituSkaicius * PaskaitosLaikas;

console.log("Paskaitu skaicius per savaite - " + PaskaituSkaicius + ". Tai sudaro " + TrukmeMinutemis + " minuciu.");