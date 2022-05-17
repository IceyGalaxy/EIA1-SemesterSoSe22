var DE2008 = 82000000;
var DE2022 = 83200000;
let resDE03 = DE2022 - DE2008;
let resDE04 = (DE2022 - DE2008) / DE2008 * 100.0;
console.log("Die Einwohnerzahl in Deutschland betrug 2008 ca. 82 Millionen und sie beträgt jetzt in etwa 83,2 Millionen.");
console.log("Die Wachstumsrate seit 2008 in Deutschland beträgt " + resDE04 + "%");
var FRA2008 = 62140000;
var FRA2022 = 65480000;
let resFRA03 = FRA2022 - FRA2008;
let resFRA04 = (FRA2022 - FRA2008) / FRA2008 * 100.0;
console.log("Die Einwohnerzahl in Frankreich betrug 2008 ca. 62,1 Millionen und sie beträgt jetzt in etwa 65,48 Millionen.");
console.log("Die Wachstumsrate seit 2008 in Frankreich beträgt " + resFRA04 + "%");
var ITA2008 = 59000000;
var ITA2022 = 59580000;
let resITA03 = ITA2022 - ITA2022;
let resITA04 = (ITA2022 - ITA2008) / ITA2008 * 100.0;
console.log("Die Einwohnerzahl in Italien betrug 2008 ca. 59 Millionen und sie beträgt jetzt in etwa 59,58 Millionen.");
console.log("Die Wachstumsrate seit 2008 in Italien beträgt " + resITA04 + "%");
var ESP2008 = 45980000;
var ESP2022 = 47360000;
let resESP03 = ESP2022 - ESP2008;
let resESP04 = (ESP2022 - ESP2008) / ESP2008 * 100.0;
console.log("Die Einwohnerzahl in Spanien betrug 2008 ca. 45,98 Millionen und sie beträgt jetzt in etwa 47,36 Millionen.");
console.log("Die Wachstumsrate seit 2008 in Spanien beträgt " + resESP04 + "%");
var EU2008 = 734000000;
var EU2022 = 751000000;
let resEU03 = (EU2022 - FRA2008) / EU2008 * 100.0;
let resEU04 = (EU2022 - EU2008);
console.log("Die Wachstumsrate seit 2008 in Europa beträgt " + resEU03.toFixed + "%");
let resGER01 = (DE2022 / EU2022) * 100.0;
let resFRA01 = (FRA2022 / EU2022) * 100.0;
let resESP01 = (ESP2022 / EU2022) * 100.0;
let resITA01 = (ITA2022 / EU2022) * 100.0;
window.addEventListener("load", function () {
    document.querySelector(".germany").addEventListener("click", function () { ger(DE2022, DE2008, resDE04, resDE03, resGER01); });
    document.querySelector(".france").addEventListener("click", function () { fra(FRA2022, FRA2008, resFRA04, resFRA03, resFRA01); });
    document.querySelector(".spain").addEventListener("click", function () { esp(ESP2022, ESP2008, resESP04, resESP03, resESP01); });
    document.querySelector(".italy").addEventListener("click", function () { ita(ITA2022, ITA2008, resITA04, resITA03, resITA01); });
    function ger(DE2022, DE2008, resDE04, resDE03, resGER01) {
        document.querySelector(".a").innerHTML = DE2022;
        document.querySelector(".b").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022";
        document.querySelector(".c").innerHTML = resGER01;
        document.querySelector(".d").innerHTML = resDE04;
        document.querySelector(".e").innerHTML = resDE03;
    }
    ;
    function fra(FRA2022, FRA2008, resFRA04, resFRA03, resFRA01) {
        document.querySelector(".a").innerHTML = FRA2022;
        document.querySelector(".b").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
        document.querySelector(".c").innerHTML = resFRA01;
        document.querySelector(".d").innerHTML = resFRA04;
        document.querySelector(".e").innerHTML = resFRA03;
    }
    ;
    function esp(ESP2022, ESP2008, resESP04, resESP03, resESP01) {
        document.querySelector(".a").innerHTML = ESP2022;
        document.querySelector(".b").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Spanien in 2022";
        document.querySelector(".c").innerHTML = resESP01;
        document.querySelector(".d").innerHTML = resESP04;
        document.querySelector(".e").innerHTML = resESP03;
    }
    ;
    function ita(ITA2022, ITA2008, resITA04, resITA03, resITA01) {
        document.querySelector(".a").innerHTML = ITA2022;
        document.querySelector(".b").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
        document.querySelector(".c").innerHTML = resITA01;
        document.querySelector(".d").innerHTML = resITA04;
        document.querySelector(".e").innerHTML = resITA03;
    }
    ;
});
//# sourceMappingURL=script2.js.map