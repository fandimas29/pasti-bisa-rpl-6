onEvent("mobil1", "click", function( ) {
	setScreen("screen2");
});

onEvent("motor1", "click", function( ) {
	setScreen("screen3");
});

//screen mobil

//buat tanggal dan jam screen 2
timedLoop(1000, function() {
  var currentDate = new Date ();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();
  var formattedDate = day + "-" + month + "-" + year;
  setText("hari", formattedDate);
  
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  var formattedTime = hour + ":" + minute + ":" + second;
  setText("jam", formattedTime);
  
});

onEvent("back1", "click", function( ) {
	setScreen("screen1");
	
});


//ini buat timernya
var clockInterval;
var stopwatchStartToggle = true;
var stopwatchStartTime = 0;
var swSumElapsedTime = 0;
var swTime = 0;
var swStartTime = 0;

//buat fungsi waktu screen mobil
function setLabelTime(time, label, correct){
  var secondsToday = Math.floor((time % 86400));
  var hours = ((secondsToday / 3600 + (correct ? timeZoneCorrection : 0))+24) % 24;
  var minutes = 60 * (hours - Math.floor(hours));
  var seconds = 60 * (minutes - Math.floor(minutes));
  if(seconds - Math.floor(seconds) > 0.95)
    seconds = Math.ceil(seconds);

  var hoursText = hours < 10 ? "0" + Math.floor(hours) : "" + Math.floor(hours);
  var minutesText = minutes < 10 ? "0" + Math.floor(minutes) : "" + Math.floor(minutes);
  var secondsText = seconds < 10 ? "0" + Math.floor(seconds) : "" + Math.floor(seconds);
  setText(label, hoursText+":"+minutesText+":"+secondsText);
}

function setLabelHour(time, label, correct){
  var secondsToday2 = Math.floor((time % 86400));
  var hours2 = ((secondsToday2 / 3600 + (correct ? timeZoneCorrection : 0))+24) % 24;

  var hoursText2 = hours2 < 10 ? "0" + Math.floor(hours2) : "" + Math.floor(hours2);
  setText(label, hoursText2)
}

function updateStopwatchLabel(){
  setLabelTime(swTime, "stopwatchTimeLabel", false);
}

function updateStopwatchHour(){
  setLabelHour(swTime, "label20", false);
}

//buat mulai waktu screen mobil
onEvent("buttonmulai", "click", function(event) {
  if(stopwatchStartToggle){

    setText("label14", "Selesai Parkir");

    stopwatchStartTime = getTime();
    clockInterval = setInterval(function() {
      swElapsedTime = getTime() - stopwatchStartTime;
      swElapsedTime += swSumElapsedTime;
      swTime = swStartTime + swElapsedTime / 1000;
      updateStopwatchLabel(swTime);
      updateStopwatchHour(swTime);

    }, 100);

    stopwatchStartToggle = false;
  }
  else {
    setText("label14", "Mulai Parkir");
    swElapsedTime = getTime() - stopwatchStartTime;
    swSumElapsedTime += swElapsedTime;
    stopwatchStartToggle = true;
    
    clearInterval(clockInterval);
    
  }
});
onEvent("buttonreset", "click", function(event) {
  setText("label14", "Mulai Parkir");
  swSumElapsedTime = 0;
  stopwatchStartToggle = true;
  clearInterval(clockInterval);
  setText("stopwatchTimeLabel", "00:00:00");
});

//bikin text jadi number
var durasiparkirmob = getText("label20");
parseInt("durasiparkirmob");

//update tarif parkir mobil
function updatetarifparkirmob(){
  readRecords("dbmobil", {Lokasi:getProperty("pilihanmobil","text")}, function(records) {
    var tarifparkirmob = records[0].Tarifdasar + (durasiparkirmob * records[0].Tarifperjam);
    setProperty("tarifparkirmob_lbl", "text", "Rp" + tarifparkirmob);
    });
}

//buat milih lokasi parkir dan munculin tarif dasar parkir
onEvent("pilihanmobil", "change", updatetarifparkirmob);
  
  
//screen motor

onEvent("back2", "click", function( ) {
	setScreen("screen1");
});

//buat tanggal dan jam screen 3
timedLoop(1000, function() {
  var currentDate = new Date ();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();
  var formattedDate = day + "-" + month + "-" + year;
  setText("harimotor", formattedDate);
  
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  var formattedTime = hour + ":" + minute + ":" + second;
  setText("jammotor", formattedTime);
  
});

//buat fungsi waktu screen motor
function setLabelTime3(time, label, correct){
  var secondsToday3 = Math.floor((time % 86400));
  var hours3 = ((secondsToday3 / 3600 + (correct ? timeZoneCorrection : 0))+24) % 24;
  var minutes3 = 60 * (hours3 - Math.floor(hours3));
  var seconds3 = 60 * (minutes3 - Math.floor(minutes3));
  if(seconds3 - Math.floor(seconds3) > 0.95)
    seconds3 = Math.ceil(seconds3);

  var hoursText3 = hours3 < 10 ? "0" + Math.floor(hours3) : "" + Math.floor(hours3);
  var minutesText3 = minutes3 < 10 ? "0" + Math.floor(minutes3) : "" + Math.floor(minutes3);
  var secondsText3 = seconds3 < 10 ? "0" + Math.floor(seconds3) : "" + Math.floor(seconds3);
  setText(label, hoursText3+":"+minutesText3+":"+secondsText3);
}

function setLabelHour4(time, label, correct){
  var secondsToday4 = Math.floor((time % 86400));
  var hours4 = ((secondsToday4 / 3600 + (correct ? timeZoneCorrection : 0))+24) % 24;

  var hoursText4 = hours4 < 10 ? "0" + Math.floor(hours4) : "" + Math.floor(hours4);
  setText(label, hoursText4)
}

function updateStopwatchLabel3(){
  setLabelTime(swTime, "label24", false);
}

function updateStopwatchHour3(){
  setLabelHour(swTime, "label21", false);
}


//buat mulai waktu screen motor
onEvent("button9", "click", function(event) {
  if(stopwatchStartToggle){

    setText("label22", "Selesai Parkir");

    stopwatchStartTime = getTime();
    clockInterval = setInterval(function() {
      swElapsedTime = getTime() - stopwatchStartTime;
      swElapsedTime += swSumElapsedTime;
      swTime = swStartTime + swElapsedTime / 1000;
      updateStopwatchLabel3(swTime);
      updateStopwatchHour3(swTime);

    }, 100);

    stopwatchStartToggle = false;
  }
  else {
    setText("label22", "Mulai Parkir");
    swElapsedTime = getTime() - stopwatchStartTime;
    swSumElapsedTime += swElapsedTime;
    stopwatchStartToggle = true;
    
    clearInterval(clockInterval);
    
  }
});
onEvent("button10", "click", function(event) {
  setText("label22", "Mulai Parkir");
  swSumElapsedTime = 0;
  stopwatchStartToggle = true;
  clearInterval(clockInterval);
  setText("stopwatchTimeLabel", "00:00:00");
});

//bikin text jadi number
var durasiparkirmot = getText("label21");
parseInt("durasiparkirmot");

//update tarif parkir mobil
function updatetarifparkirmot(){
  readRecords("dbmotor", {Lokasi:getProperty("pilihanmotor","text")}, function(records) {
    var tarifparkirmot = records[0].Tarif_dasar + (durasiparkirmot * records[0].Tarif_perjam);
    setProperty("label26", "text", "Rp" + tarifparkirmot);
    });
}

//buat milih lokasi parkir dan munculin tarif dasar parkir
onEvent("pilihanmotor", "change", updatetarifparkirmot);


//screen catatan
onEvent("catatanmobil", "click", function( ) {
	setScreen("screen5");

	});
		
onEvent("catatanmotor", "click", function( ) {
	setScreen("screen5");
	
});
onEvent("back3", "click", function( ) {
	setScreen("screen1");
	
});