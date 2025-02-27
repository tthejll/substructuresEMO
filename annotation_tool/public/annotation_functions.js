// This script provides help functions for our annotation system

// get all the video links
// import { vidLinks } from "./video_names";

// video names and locations

const listVideos = [
  "AutoCombined-04212015_CRAWoZ1.0_352_Neg1.mp4",
  "AutoCombined-04212015_CRAWoZ1.0_352_Neg2.mp4",
  "AutoCombined-04292015_CRAWoZ1.0_364_Neg1.mp4",
  "AutoCombined-04292015_CRAWoZ1.0_364_Neg2.mp4",
  "AutoCombined-04302015_CRAWoZ1.0_368_Neg1.mp4",
  "AutoCombined-04302015_CRAWoZ1.0_368_Neg2.mp4",
  "AutoCombined-150331_CRAWoZ1.0_301_Neg1.mp4",
  "AutoCombined-150331_CRAWoZ1.0_301_Neg2.mp4",
  'AutoCombined-150331_CRAWoZ1.0_302_Neg1.mp4',
  'AutoCombined-150331_CRAWoZ1.0_302_Neg2.mp4',
  'AutoCombined-150331_CRAWoZ1.0_303_Neg1.mp4',
  'AutoCombined-150331_CRAWoZ1.0_303_Neg2.mp4',
  'AutoCombined-150331_CRAWoZ1.0_304_Neg1.mp4',
  'AutoCombined-150331_CRAWoZ1.0_304_Neg2.mp4',
  'AutoCombined-150401_CRAWoZ1.0_305_Neg1.mp4',
  'AutoCombined-150401_CRAWoZ1.0_305_Neg2.mp4',
  'AutoCombined-150401_CRAWoZ1.0_306_Neg1.mp4',
  'AutoCombined-150401_CRAWoZ1.0_306_Neg2.mp4',
  'AutoCombined-150401_CRAWoZ1.0_307_Neg1.mp4',
  'AutoCombined-150401_CRAWoZ1.0_307_Neg2.mp4',
  'AutoCombined-150401_CRAWoZ1.0_308_Neg1.mp4',
  'AutoCombined-150401_CRAWoZ1.0_308_Neg2.mp4',
  'AutoCombined-150401_CRAWoZ1.0_309_Neg1.mp4',
  'AutoCombined-150401_CRAWoZ1.0_309_Neg2.mp4',
  'AutoCombined-150402_CRAWoZ0.1_311_Neg1.mp4',
  'AutoCombined-150402_CRAWoZ0.1_311_Neg2.mp4',
  'AutoCombined-150402_CRAWoZ1.0_310_Neg1.mp4',
  'AutoCombined-150402_CRAWoZ1.0_312_Neg1.mp4',
  'AutoCombined-150402_CRAWoZ1.0_312_Neg2.mp4',
  'AutoCombined-150402_CRAWoZ1.0_313_Neg1.mp4',
  'AutoCombined-150402_CRAWoZ1.0_313_Neg2.mp4',
  'AutoCombined-150403_CRAWoZ1.0_316_Neg1.mp4',
  'AutoCombined-150403_CRAWoZ1.0_316_Neg2.mp4',
  'AutoCombined-150406_CRAWoZ1.0_317_Neg1.mp4',
  'AutoCombined-150406_CRAWoZ1.0_317_Neg2.mp4',
  'AutoCombined-150406_CRAWoZ1.0_318_Neg1.mp4',
  'AutoCombined-150406_CRAWoZ1.0_318_Neg2.mp4',
  'AutoCombined-150406_CRAWoZ1.0_319_Neg1.mp4',
  'AutoCombined-150406_CRAWoZ1.0_319_Neg2.mp4',
  'AutoCombined-150407_CRAWoZ1.0_321_Neg1.mp4',
  'AutoCombined-150407_CRAWoZ1.0_321_Neg2.mp4',
  'AutoCombined-150407_CRAWoZ1.0_322_Neg1.mp4',
  'AutoCombined-150407_CRAWoZ1.0_322_Neg2.mp4',
  'AutoCombined-150407_CRAWoZ1.0_323_Neg1.mp4',
  'AutoCombined-150407_CRAWoZ1.0_323_Neg2.mp4',
  'AutoCombined-150407_CRAWoZ1.0_324_Neg1.mp4',
  'AutoCombined-150407_CRAWoZ1.0_324_Neg2.mp4',
  'AutoCombined-150408_CRAWoZ1.0_327_Neg1.mp4',
  'AutoCombined-150408_CRAWoZ1.0_327_Neg2.mp4',
  'AutoCombined-150408_CRAWoZ1.0_329_Neg1.mp4',
  'AutoCombined-150408_CRAWoZ1.0_329_Neg2.mp4',
  'AutoCombined-150408_CRAWoZ1.0_Neg1_326.mp4',
  'AutoCombined-150408_CRAWoZ1.0_Neg2_326.mp4',
  'AutoCombined-150408_CRAWoZ_328_Neg1.mp4',
  'AutoCombined-150408_CRAWoZ_328_Neg2.mp4',
  'AutoCombined-150413_CRAWoZ1.0_332_Neg1.mp4',
  'AutoCombined-150413_CRAWoZ1.0_332_Neg2.mp4',
  'AutoCombined-150413_CRAWoZ_1.0_330_Neg1.mp4',
  'AutoCombined-150413_CRAWoZ_1.0_330_Neg2.mp4',
  'AutoCombined-150414_CRAWoZ1.0_333_Neg1.mp4',
  'AutoCombined-150414_CRAWoZ1.0_333_Neg2.mp4',
  'AutoCombined-150414_CRAWoZ1.0_334_Neg1.mp4',
  'AutoCombined-150414_CRAWoZ1.0_334_Neg2.mp4',
  'AutoCombined-150414_CRAWoZ1.0_335_Neg1.mp4',
  'AutoCombined-150414_CRAWoZ1.0_335_Neg2.mp4',
  'AutoCombined-150414_CRAWoZ1.0_336_Neg1.mp4',
  'AutoCombined-150414_CRAWoZ1.0_336_Neg2.mp4',
  'AutoCombined-150415_CRAWoZ1.0_337_Neg1.mp4',
  'AutoCombined-150415_CRAWoZ1.0_337_Neg2.mp4',
  'AutoCombined-150415_CRAWoZ1.0_338_Neg1.mp4',
  'AutoCombined-150415_CRAWoZ1.0_338_Neg2.mp4',
  'AutoCombined-150415_CRAWoZ_339_Neg1.mp4',
  'AutoCombined-150415_CRAWoZ_339_Neg2.mp4',
  'AutoCombined-150416_CRAWoZ1.0_341_Neg1.mp4',
  'AutoCombined-150416_CRAWoZ1.0_341_Neg2.mp4',
  'AutoCombined-150416_CRAWoZ1.0_342_Neg1.mp4',
  'AutoCombined-150416_CRAWoZ1.0_342_Neg2.mp4',
  'AutoCombined-150420_CRAWoZ1.0_347_Neg1.mp4',
  'AutoCombined-150420_CRAWoZ1.0_347_Neg2.mp4',
  'AutoCombined-150420_CRAWoZ1.0_348_Neg1.mp4',
  'AutoCombined-150420_CRAWoZ1.0_349_Neg1.mp4',
  'AutoCombined-150420_CRAWoZ1.0_349_Neg2.mp4',
  'AutoCombined-150421_CRAWoZ1.0_350_Neg1.mp4',
  'AutoCombined-150421_CRAWoZ1.0_350_Neg2.mp4',
  'AutoCombined-150421_CRAWoZ1.0_351_Neg1.mp4',
  'AutoCombined-150421_CRAWoZ1.0_351_Neg2.mp4',
  'AutoCombined-150422_CRAWoZ1.0_354_Neg1.mp4',
  'AutoCombined-150422_CRAWoZ1.0_354_Neg2.mp4',
  'AutoCombined-150422_CRAWoZ1.0_355_Neg1.mp4',
  'AutoCombined-150422_CRAWoZ1.0_355_Neg2.mp4',
  'AutoCombined-150423_CRAWoZ1.0_357_Neg1.mp4',
  'AutoCombined-150423_CRAWoZ1.0_357_Neg2.mp4',
  'AutoCombined-150423_CRAWoZ1.0_358_Neg1.mp4',
  'AutoCombined-150423_CRAWoZ1.0_358_Neg2.mp4',
  'AutoCombined-150428_CRAWoZ1.0_360_Neg1.mp4',
  'AutoCombined-150428_CRAWoZ1.0_360_Neg2.mp4',
  'AutoCombined-150428_CRAWoZ1.0_361_Neg1.mp4',
  'AutoCombined-150428_CRAWoZ1.0_361_Neg2.mp4',
  'AutoCombined-150428_CRAWoZ1.0_362_Neg1.mp4',
  'AutoCombined-150428_CRAWoZ1.0_362_Neg2.mp4',
  'AutoCombined-150429_CRAWoZ1.0_363_Neg1.mp4',
  'AutoCombined-150429_CRAWoZ1.0_363_Neg2.mp4',
  'AutoCombined-150429_CRAWoZ1.0_365_Neg1.mp4',
  'AutoCombined-150429_CRAWoZ1.0_365_Neg2.mp4',
  'AutoCombined-150429_CRAWoZ1.0_366_Neg1.mp4',
  'AutoCombined-150429_CRAWoZ1.0_366_Neg2.mp4',
  'AutoCombined-150430_CRAWoZ1.0_369_Neg1.mp4',
  'AutoCombined-150430_CRAWoZ1.0_369_Neg2.mp4',
  'AutoCombined-150501_CRAWoZ1.0_370_Neg1.mp4',
  'AutoCombined-150501_CRAWoZ1.0_370_Neg2.mp4',
  'AutoCombined-150501_CRAWoZ1.0_371_Neg1.mp4',
  'AutoCombined-150501_CRAWoZ1.0_371_Neg2.mp4',
  'AutoCombined-150501_CRAWoZ1.0_372_Neg1.mp4',
  'AutoCombined-150501_CRAWoZ1.0_372_Neg2.mp4',
  'AutoCombined-150501_CRAWoZ1.0_373_Neg1.mp4',
  'AutoCombined-150501_CRAWoZ1.0_373_Neg2.mp4',
  'AutoCombined-150504_CRAWoZ1.0_374_Neg1.mp4',
  'AutoCombined-150504_CRAWoZ1.0_374_Neg2.mp4',
  'AutoCombined-150504_CRAWoZ1.0_375_Neg1.mp4',
  'AutoCombined-150504_CRAWoZ1.0_375_Neg2.mp4',
  'AutoCombined-150504_CRAWoZ1.0_376_Neg1.mp4',
  'AutoCombined-150504_CRAWoZ1.0_376_Neg2.mp4',
  'AutoCombined-150505_CRAWoZ1.0_378_Neg1.mp4',
  'AutoCombined-150505_CRAWoZ1.0_378_Neg2.mp4',
  'AutoCombined-150505_CRAWoZ1.0_380_Neg1.mp4',
  'AutoCombined-150505_CRAWoZ1.0_380_Neg2.mp4',
  'AutoCombined-150505_CRAWoZ1.0_381_Neg1.mp4',
  'AutoCombined-150505_CRAWoZ1.0_381_Neg2.mp4',
  'AutoCombined-150506_CRAWoZ1.0_382_Neg1.mp4',
  'AutoCombined-150506_CRAWoZ1.0_382_Neg2.mp4',
  'AutoCombined-150506_CRAWoZ1.0_384_Neg1.mp4',
  'AutoCombined-150506_CRAWoZ1.0_384_Neg2.mp4',
  'AutoCombined-150506_CRAWoZ1.0_385_Neg1.mp4',
  'AutoCombined-150506_CRAWoZ1.0_385_Neg2.mp4',
  'AutoCombined-150506_CRAWoZ1.0_386_Neg1.mp4',
  'AutoCombined-150506_CRAWoZ1.0_386_Neg2.mp4',
  'AutoCombined-150506_CRAWoZ1.0_387_Neg1.mp4',
  'AutoCombined-150506_CRAWoZ1.0_387_Neg2.mp4',
  'AutoCombined-150507_CRAWoZ1.0_389_Neg1.mp4',
  'AutoCombined-150507_CRAWoZ1.0_389_Neg2.mp4',
  'AutoCombined-150507_CRAWoZ1.0_390_Neg1.mp4',
  'AutoCombined-150507_CRAWoZ1.0_390_Neg2.mp4',
  'AutoCombined-150507_CRAWoZ1.0_391_Neg1.mp4',
  'AutoCombined-150507_CRAWoZ1.0_391_Neg2.mp4',
  'AutoCombined-150508_CRAWoZ1.0_392_Neg1.mp4',
  'AutoCombined-150508_CRAWoZ1.0_392_Neg2.mp4',
  'CRAWoZCombined341.mp4',
  'CRAWoZCombined362mp4.mp4'
];


var listSrc = [];
for (i = 0; i<listVideos.length; i++){
  tmpSrc = "REDACTED_FOR_PUBLIC_USE" + listVideos[i];
  listSrc.push(tmpSrc);
}




// Options for different drop down menus 
// whenever it is needed to update a drop down - these are the only elements that need to 
// to updated, the rest happens automatically
const listActor = [
  "Participant",
  "Virtual Agent"
]

const listModality = [
  "Verbal",
  "Physical",
  "Both"
]

const listDemand = [
  "Partial offer as statement",
  "Partial offer as suggestion",
  "Full offer as statement",
  "Full offer as suggestion",
  "Partial counteroffer as statement",
  "Partial counteroffer as suggestion",
  "Full counteroffer as statement",
  "Full counteroffer as suggestion"
]

const listDurations = [
  "Instant",
  "~3 seconds",
  "~5 seconds",
  "~8 seconds",
  "~10 seconds",
  "~15 seconds",
  "~20 seconds",
  "~30 seconds",
  "~60 seconds"
]

const listGenAnnotations = [
  "Greeting",
  "Statement of intent",
  "Request preference",
   "Provide preference",
  "Request offer",
  "Reject offer",
  "Agree to partial offer",
  "Agree to full offer",
  "Request feedback",
  "Persuasive argument",
  "Coercive demand",
  "Threat of negotiation failure",
  "Eliciting fairness",
  "Criticising partner's offer",
  "Uncertainty",
  "Ignores",
  "Repetition of partner",
  "Interruption",
  "Thinking out loud",
  "Display of scepticism"
]

const NoChairsRecords = [0, 1, 2, 3]

const NoLampsPlates = [0, 1, 2]

const NoPaintingClock = [0, 1]

//  Populate drop down menus from lists above
// When creating new dropdowns use the approach below

// Videos
var vidSelect = document.getElementById("selectVid"); // choose html
for (var i = 0; i < listVideos.length; i++){ // for each element in list add option
    var opt = listVideos[i];
    var el = document.createElement("option");
    el.textContent = opt; // text element is string from list
    vidSelect.appendChild(el);
}

// var vidSelect = document.getElementById("selectVid"); // choose html
// for (var i = 0; i < listNo2.length; i++){ // for each element in list add option
//     var opt = listNo2[i];
//     var el = document.createElement("option");
//     el.textContent = opt; // text element is string from list
//     vidSelect.appendChild(el);
// }


// Actors
var actorSelect = document.getElementById("VoH");
for (var i = 0; i < listActor.length; i++){
    var opt = listActor[i];
    var el = document.createElement("option");
    el.textContent = opt;
    actorSelect.appendChild(el);
}

// Modality
var modSelect = document.getElementById("modality");
for (var i = 0; i < listModality.length; i++){
    var opt = listModality[i];
    var el = document.createElement("option");
    el.textContent = opt;
    modSelect.appendChild(el);
}

// Demands
var demandSelect = document.getElementById("demand");
for (var i = 0; i < listDemand.length; i++){
    var opt = listDemand[i];
    var el = document.createElement("option");
    el.textContent = opt;
    demandSelect.appendChild(el);
}


// Duration
var durationSelect = document.getElementById("duration");
for (var i = 0; i < listDurations.length; i++){
    var opt = listDurations[i];
    var el = document.createElement("option");
    el.textContent = opt;
    durationSelect.appendChild(el);
}

// Ppt Chairs/Records
var pptChairRecord = document.getElementById("pptChairRecord");
for (var i = 0; i < NoChairsRecords.length; i++){
  var opt = NoChairsRecords[i];
  var el = document.createElement("option");
  el.textContent = opt;
  pptChairRecord.append(el);
}

// Ppt plate lamp
var pptPlateLamp = document.getElementById("pptPlateLamps");
for (var i = 0; i < NoLampsPlates.length; i++){
  var opt = NoLampsPlates[i];
  var el = document.createElement("option");
  el.textContent = opt;
  pptPlateLamp.append(el);
}

// PPT clock paiting
var pptClockPainting = document.getElementById("pptClockPainting");
for (var i = 0; i < NoPaintingClock.length; i++){
  var opt = NoPaintingClock[i];
  var el = document.createElement("option");
  el.textContent = opt;
  pptClockPainting.append(el);
}

// VA Chairs/Records
var vaChairRecord = document.getElementById("vaChairRecord");
for (var i = 0; i < NoChairsRecords.length; i++){
  var opt = NoChairsRecords[i];
  var el = document.createElement("option");
  el.textContent = opt;
  vaChairRecord.append(el);
}

// VA plate lamp
var vaPlateLamp = document.getElementById("vaPlateLamps");
for (var i = 0; i < NoLampsPlates.length; i++){
  var opt = NoLampsPlates[i];
  var el = document.createElement("option");
  el.textContent = opt;
  vaPlateLamp.append(el);
}

// VA clock paiting
var vaClockPainting = document.getElementById("vaClockPainting");
for (var i = 0; i < NoPaintingClock.length; i++){
  var opt = NoPaintingClock[i];
  var el = document.createElement("option");
  el.textContent = opt;
  vaClockPainting.append(el);
}



// Generic annotations
var genSelect = document.getElementById("genAction");
for (var i = 0; i < listGenAnnotations.length; i++){
    var opt = listGenAnnotations[i];
    var el = document.createElement("option");
    el.textContent = opt;
    genSelect.appendChild(el);
}

// Lock and unlock annotator name
function lockAnnotatorName() {
  document.getElementById("annotatorName").disabled = true
}
function unlockAnnotatorName() {
  document.getElementById("annotatorName").disabled = false
}


// Load the correct video
function getVidSelect() {
  var vidSelect = document.getElementById("selectVid");
  var vidIndex = vidSelect.selectedIndex;  // get video index
 
  if (vidIndex == 0){ 
    // if no video is selected pause video, and choose write non-selected
    document.getElementById("vidAnnotation").pause(); // pause vid
    document.getElementById("vidNameHeader").textContent = "Non Selected";
  } else{
    // change header and video src
    document.getElementById("vidNameHeader").textContent = listVideos[vidIndex - 1]; // set header text
    document.getElementById("vidSource").setAttribute("src", listSrc[vidIndex -1]); // change video link
    document.getElementById("vidAnnotation").pause(); // pause vid
    document.getElementById("vidAnnotation").load(); // load new vid
  } 
}

// function getVidSelect() {
//   var vidSelect = document.getElementById("selectVid");
//   var vidIndex = vidSelect.selectedIndex;  // get video index
 
//   if (vidIndex == 0){ 
//     // if no video is selected pause video, and choose write non-selected
//     document.getElementById("vidAnnotation").pause(); // pause vid
//     document.getElementById("vidNameHeader").textContent = "Non Selected";
//   } else{
//     // change header and video src
//     document.getElementById("vidNameHeader").textContent = listNo2[vidIndex - 1]; // set header text
//     document.getElementById("vidSource").setAttribute("src", listSrc[vidIndex -1]); // change video link
//     document.getElementById("vidAnnotation").pause(); // pause vid
//     document.getElementById("vidAnnotation").load(); // load new vid
//   } 
// }

// update video whenever the video dropdown menu changes
document.getElementById("selectVid").onchange = getVidSelect;

var videoAnnotation = document.getElementById('vidAnnotation'); // get vid


// Get current time of video element
function getCurTime() {

    var vidTime = videoAnnotation.currentTime;
    var vidTimeMin = Math.floor(vidTime / 60); // create minutes
    var vidTimeSec = Math.floor(vidTime % 60); // remainder 
    var vidTimeMsec = (vidTime % 60 - vidTimeSec).toFixed(3);
// console.log(vidTime, vidTimeMin, vidTimeSec, vidTimeMsec)
  timeObj = { // create time object with min, sec, msec
    min: vidTimeMin,
    sec: vidTimeSec,
    msec: vidTimeMsec
  }
return(timeObj)
}


// Read current values off drop down menus - relies on list used to create dropdowns
// Add new function to get index of newly created dropdowns
function getGenAnnotation(){
  var genAnnotaionIndex = document.getElementById("genAction").selectedIndex
  return(listGenAnnotations[genAnnotaionIndex])
}

function getVoH(){
  var VoHIndex = document.getElementById("VoH").selectedIndex
  return(listActor[VoHIndex])
}

function getModality(){
  var modalityIndex = document.getElementById("modality").selectedIndex
  return(listModality[modalityIndex])
}

function getDemand(){
  var demandIndex = document.getElementById("demand").selectedIndex
  return listDemand[demandIndex]
}

function getDuration(){
  var durationIndex = document.getElementById("duration").selectedIndex
  return listDurations[durationIndex]
}

function getOffer(){
  //chairs records
  pptCR = NoChairsRecords[document.getElementById("pptChairRecord").selectedIndex]
  vaCR = NoChairsRecords[document.getElementById("vaChairRecord").selectedIndex]

  // plate lamps
  pptPL = NoLampsPlates[document.getElementById("pptPlateLamps").selectedIndex]
  vaPL = NoLampsPlates[document.getElementById("vaPlateLamps").selectedIndex]

  // paintings/clocks
  pptPC = NoPaintingClock[document.getElementById("pptClockPainting").selectedIndex]
  vaPC = NoPaintingClock[document.getElementById("vaClockPainting").selectedIndex]

  //create offer object
  var offerObj = {
    pptCR: pptCR,
    pptPL: pptPL,
    pptPC: pptPC,
    vaCR: vaCR,
    vaPL: vaPL,
    vaPC: vaPC,
  }

  return offerObj
}


// Create list of annotations - each annotation is one object in the array
var listAnnotations = []

// function to create annotations relying on swapping items.
function createAnnotation(){
  var tmpTime = getCurTime()
  var offer = getOffer()
  var annotation = { // create annotation object
    "Time: Min": tmpTime.min,
    "Time: Sec": tmpTime.sec,
    "Time: Msec": tmpTime.msec,
    "Actor": getVoH(),
    "Modality": getModality(),
    "Offer type": getDemand(),
    "Duration": getDuration(),
    "PPT Chair/record": offer.pptCR,
    "PPT Plate/lamps": offer.pptPL,
    "PPT Painting/Clock": offer.pptPC,
    "VA Chair/record": offer.vaCR,
    "VA Plate/lamps": offer.vaPL,
    "VA Painting/Clock": offer.vaPC,
    
    // add new key:value pair for each new element
    "Generic annotation": "" // generic annotation is used for the differenet button, here is should be empty
  };
  return annotation;
}

// function for creating one of the generic annotations. Same as above but adding only generic annotations
function createGenAnnotation(){
  var tmpTime = getCurTime()
  var annotation = {
    "Time: Min": tmpTime.min,
    "Time: Sec": tmpTime.sec,
    "Time: Msec": tmpTime.msec,
    "Actor": getVoH(),
    "Modality": "",
    "Offer type": "",
    "Duration": getDuration(),
    "PPT Chair/record": "",
    "PPT Plate/lamps": "",
    "PPT Painting/Clock": "",
    "VA Chair/record": "",
    "VA Plate/lamps": "",
    "VA Painting/Clock": "",
    "Generic annotation": getGenAnnotation(),
  };
  return annotation;
}


// Write table

// table header - need to update header with each key in annotation object
// TODO: as table is only being written after the first object is created the header can be created from object keys
const tableHeader = Object.keys(createAnnotation())

function writeTable(){ // function for writing table
  let table = document.createElement('table'); // create new table
  let headerRow = document.createElement('tr'); // create header r

  tableHeader.forEach( headerText => { // for all column names create a new column and append to header row
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  // Add header for the two buttons
  let btnTitle = document.createElement("th");
  let textNode = document.createTextNode("Go to time");
  btnTitle.appendChild(textNode);
  headerRow.appendChild(btnTitle);
  table.appendChild(headerRow);

  btnTitle = document.createElement("th");
  textNode = document.createTextNode("Delete annotation");
  btnTitle.appendChild(textNode);
  headerRow.appendChild(btnTitle);
  table.appendChild(headerRow);


  // add rows from the objects in annotation array
  listAnnotations.forEach(tmpAnnotation => {
    let row = document.createElement('tr'); // create new row

    Object.values(tmpAnnotation).forEach(text => { // for each object value
      let cell = document.createElement("td");  // create new cell
      let textNode = document.createTextNode(text); // use value as text
      cell.appendChild(textNode);
      row.appendChild(cell);
    });

    // add the buttons
    // add go to time btn
    let btnSpace = document.createElement("td"); // create btn space
    let btn = document.createElement("button"); // create btn
    btn.innerHTML = "Go"; // add name to btn
    btn.addEventListener('click', () => { // create button function
      let curTime = (parseInt(tmpAnnotation["Time: Min"]*60)) + parseInt(tmpAnnotation["Time: Sec"]) + parseFloat(tmpAnnotation["Time: Msec"]);
      document.getElementById("vidAnnotation").currentTime = curTime; // set video play time to time from annotation
    })
    btnSpace.appendChild(btn); // add btn to table row
    row.appendChild(btnSpace);
    table.appendChild(row);

    // add delete annotation btn.
    btnSpace = document.createElement("td"); // create btn space
    btn = document.createElement("button"); // create btn 
    btn.innerHTML = "Delete"; // add name
    btn.addEventListener('click', () => { // function
      if(confirm("Delete annotation?\nPress OK to delete or cancel to keep it.")) { // add confirm alert
        let delIndex = listAnnotations.indexOf(tmpAnnotation); // get index of current annotation
        if (delIndex > -1){ // if index exists (should always)
          listAnnotations.splice(delIndex,1); // delete one object at index space - only specific element
          document.getElementById("autoTable").innerHTML = "" // overwrite - reset table
          writeTable() // write table without deleted object
        }
      }
    }) 
    btnSpace.appendChild(btn); // add btn to table row
    row.appendChild(btnSpace);
    table.appendChild(row);

  });

  document.getElementById("autoTable").appendChild(table) // add table to div in html file
}

// function for adding annotations to annotation array and sorting the order based on time
function addAnnotation(){ 
  listAnnotations.push(createAnnotation()); // create new annotation and push it to array
  listAnnotations.sort((a,b) => { // sort elements based on time
    // create time in seconds for object a and b- then compare and time a and b
    return (parseInt(a["Time: Min"]*60) + parseInt(a["Time: Sec"]) + parseFloat(a["Time: Msec"])) - (parseInt(b["Time: Min"]*60) + parseInt(b["Time: Sec"]) + parseFloat(b["Time: Msec"]));
  });
  document.getElementById("autoTable").innerHTML = "" // reset table - overwrite
  writeTable() // create new table with all sorted objects 
}

// same function but with generic annotation function
function addGenAnnotation(){
  listAnnotations.push(createGenAnnotation());
  listAnnotations.sort((a,b) => {
    return (parseInt(a["Time: Min"]*60) + parseInt(a["Time: Sec"]) + parseFloat(a["Time: Msec"])) - (parseInt(b["Time: Min"]*60) + parseInt(b["Time: Sec"]) + parseFloat(b["Time: Msec"]));
  });
  document.getElementById("autoTable").innerHTML = ""
  writeTable()
}

//Get name of the annotator
function getAnnotatorName() {
  return document.getElementById("annotatorName").value
}

// Get video name
function getVidName(){
  return document.getElementById("selectVid").value
}

// Out jason
function outJson(){
  if (confirm("Do you want to save and submit your annotations?")){
    if (getAnnotatorName() == ""){
      alert("Remember to add your name/initials in the annotator box in the top right. When done - save again!")
      } else {
        const URL = '/public';
        var pptUnderstood = prompt("Did the participant seem to know the reward structure?", "Yes/no")
        var commentsAny = prompt("Any other comments?")
        var output = {
                      date: Date(), // Time
                      vidName: getVidName(), // Name of video
                      annotator: getAnnotatorName(), // name of annotator,
                      understoodReward: pptUnderstood, // whether the ppt understood the reward
                      comments: commentsAny, // comments
                      annotations: listAnnotations} // list of annotations

      var jsonOutput = JSON.stringify(output)
    // console.log(jsonOutput)

    fetch(URL, {
    method: "POST",
    body: jsonOutput,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
 })
 alert("Saved successfully")

}}}

function outJson2(){
  if (confirm("Do you want to save and submit your annotations?")){
    if (getAnnotatorName() == ""){
      alert("Remember to add your name/initials in the annotator box in the top right. When done - save again!")
      } else {
        const URL = '/public';
        var pptUnderstood = prompt("Did the participant seem to know the reward structure?", "Yes/no")
        var commentsAny = prompt("Any other comments?")
        var output = {
                      date: Date(), // Time
                      vidName: getVidName(), // Name of video
                      annotator: getAnnotatorName(), // name of annotator,
                      understoodReward: pptUnderstood, // whether the ppt understood the reward
                      comments: commentsAny, // comments
                      annotations: listAnnotations} // list of annotations

      var jsonOutput = JSON.stringify(output)
    // console.log(jsonOutput)

  
 alert("Saved successfully")

}}}

// // save and write JSON file
// function saveJson(){
//   // test if they have put initials
//   if (getAnnotatorName() == ""){
//     alert("Remember to add your name/initials in the annotator box, when done - save again!")
//   } else {
//   // Create output variable
//     var output = {
//       date: Date(), // Time
//       vidName: getVidName(), // Name of video
//       annotator: getAnnotatorName(), // name of annotator
//       annotations: listAnnotations} // list of annotations

//       // create stringified output
//       var jsonOutput = JSON.stringify(output)
//       console.log(jsonOutput)
//     }
// }







// // Redundant code

// // open dropdown menu when clicked
// // function dropFun(){
// //     document.getElementById("vidDropdown").classList.toggle("show");
// // }

// // // Close the dropdown menu if the user clicks outside of it
// // window.onclick = function(event) {
// //   if (!event.target.matches('.dropbtn')) {
// //     var dropdowns = document.getElementsByClassName("dropdown-content");
// //     var i;
// //     for (i = 0; i < dropdowns.length; i++) {
// //       var openDropdown = dropdowns[i];
// //       if (openDropdown.classList.contains('show')) {
// //         openDropdown.classList.remove('show');
// //       }
// //     }
// //   }
// // } 


// // function addAnnotation2(){
// //   listAnnotations.push(createAnnotation());
// //   document.getElementById("annotationTable").innerHTML = ""
// //   writeTable()
// // }

// // populate table