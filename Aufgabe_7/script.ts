
var DE2008: number=82000000;
var DE2022: number=83200000;

let resDE04=(DE2022-DE2008) / DE2008 * 100.0;
console.log("Die Einwohnerzahl in Deutschland betrug 2008 ca. 82 Millionen und sie beträgt jetzt in etwa 83,2 Millionen.")
console.log("Die Wachstumsrate seit 2008 in Deutschland beträgt " + resDE04 + "%" );

var FRA2008: number=62140000;
var FRA2022: number=65480000;

let resFRA04= (FRA2022-FRA2008) / FRA2008 * 100.0;

console.log("Die Einwohnerzahl in Frankreich betrug 2008 ca. 62,1 Millionen und sie beträgt jetzt in etwa 65,48 Millionen.")
console.log("Die Wachstumsrate seit 2008 in Frankreich beträgt " + resFRA04 + "%" );

var ITA2008: number=59000000 ;
var ITA2022: number=59580000 ;

let resITA04=(ITA2022-ITA2008) / ITA2008 * 100.0;

console.log("Die Einwohnerzahl in Italien betrug 2008 ca. 59 Millionen und sie beträgt jetzt in etwa 59,58 Millionen.")
console.log("Die Wachstumsrate seit 2008 in Italien beträgt " + resITA04 + "%" );

var ESP2008: number=45980000;
var ESP2022: number=47360000;

let resESP04=(ESP2022-ESP2008) / ESP2008 * 100.0;

console.log("Die Einwohnerzahl in Spanien betrug 2008 ca. 45,98 Millionen und sie beträgt jetzt in etwa 47,36 Millionen.")
console.log("Die Wachstumsrate seit 2008 in Spanien beträgt " + resESP04 + "%" );

window.addEventListener('load', function () {
    document.querySelector('.europe').addEventListener('click', function () { emissions(); });
    document.querySelector('.northamerica').addEventListener('click', function () { emissions(continentNorthamerica, northamerica2018, northamerica2008); });
    document.querySelector('.southamerica').addEventListener('click', function () { emissions(continentSouthamerica, southamerica2018, southamerica2008); });
    document.querySelector('.africa').addEventListener('click', function () { emissions(continentAfrica, africa2018, africa2008); });
    document.querySelector('.asia').addEventListener('click', function () { emissions(continentAsia, asia2018, asia2008); });
    document.querySelector('.australia').addEventListener('click', function () { emissions(continentAustralia, australia2018, australia2008); });
    function emissions(continent, continent2018, continent2008) {
        document.querySelector("#Region").innerHTML = continent;
        document.querySelector("#RegionUnten").innerHTML = continent;
        document.querySelector("#Continent2018").innerHTML = continent2018.toString();
        document.querySelector("#RelativZuWelt").innerHTML = Math.round(continent2018 / world2018 * 100 * 100) / 100 + "%";
        document.querySelector("#Wachstumsrate").innerHTML = Math.round((continent2018 - continent2008) / continent2008 * 100 * 100) / 100 + "%";
        document.querySelector("#WachstumsrateAbs").innerHTML = (Math.round((continent2018 - continent2008) * 100) / 100).toString();
        document.querySelector(".chart").setAttribute("style", "height:" + (continent2018 / world2018) * 100 + "%");
    }
});