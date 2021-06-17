//screen login
onEvent("button2", "click", function( ) {
  setScreen("newuserscreen1");
});

onEvent("button1", "click", function( ) {
  readRecords("user", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((getText("text_input1")==records[i].username && getText("text_input2")==records[i].password)) {
        setScreen("loginscreen2");
        setText("label18", "welcome:" + getText("text_input1") );
        
      } else {
        setText("label19", "Login Gagal!!!");
      }
    }
  });
  
});

//screen new user1
onEvent("okbutton", "click", function( ) {
  setScreen("newuserscreen2");
  createRecord("user", {username:getText("text_input3"), password:getText("text_input4")}, function(record) {
    
  });
  
});

onEvent("buttoncancel", "click", function( ) {
  setScreen("loginscreen1");
  
});

//screen new user 2
onEvent("button7", "click", function( ) {
  setScreen("loginscreen1");
});

//screen login2
onEvent("button8", "click", function( ) {
  setScreen("loginscreen1");
  
});
onEvent("button11", "click", function( ) {
  setScreen("screen1");
  
});

// screen1
onEvent("mobil1", "click", function( ) {
	setScreen("screen2");
});

onEvent("motor1", "click", function( ) {
	setScreen("screen3");
});

onEvent("catatanhome", "click", function( ) {
	setScreen("screen5");
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

onEvent("label20","change",function(event){
  var durasiparkirmob = durasiparkirmob + 1;
});

//update tarif parkir mobil
function updatetarifparkirmob(){
  readRecords("dbmobil", {Lokasi:getProperty("pilihanmobil","text")}, function(records) {
    var tarifparkirmob = records[0].Tarifdasar + (durasiparkirmob * records[0].Tarifperjam);
    setProperty("tarifparkirmob_lbl", "text", "Rp" + tarifparkirmob);
    });
}

//buat milih lokasi parkir dan munculin tarif dasar parkir
onEvent("pilihanmobil", "change", updatetarifparkirmob);
  
onEvent("catatanmobil", "click", function( ) {
	setScreen("screen5");

	});
  
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
  setText("label24", "00:00:00");
});

//bikin text jadi number

var durasiparkirmot = getText("label21");
parseInt("durasiparkirmot");

onEvent("label20","change",function(event){
  var durasiparkirmot = durasiparkirmot + 1;
});

//update tarif parkir motor
function updatetarifparkirmot(){
  readRecords("dbmotor", {Lokasi:getProperty("pilihanmotor","text")}, function(records) {
    var tarifparkirmot = records[0].Tarif_dasar + (durasiparkirmot * records[0].Tarif_perjam);
    setProperty("label26", "text", "Rp" + tarifparkirmot);
    });
}

//buat milih lokasi parkir dan munculin tarif dasar parkir
onEvent("pilihanmotor", "change", updatetarifparkirmot);

		
onEvent("catatanmotor", "click", function( ) {
	setScreen("screen5");
	
});

//screen buka catatan
onEvent("back3", "click", function( ) {
	setScreen("screen1");
	
});

//buat tanggal dan jam screen 5
timedLoop(1000, function() {
  var currentDate = new Date ();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var year = currentDate.getFullYear();
  var formattedDate = day + "-" + month + "-" + year;
  setText("haricatatan", formattedDate);
  
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  var formattedTime = hour + ":" + minute + ":" + second;
  setText("jamcatatan", formattedTime);
  
});

//submit catatan ke database catatanuser
var tanggalctt, lokasictt, durasictt, tarifctt, idctt;

onEvent("submit_button", "click", function( ) {
	tanggalctt = getText ("tanggal_input");
	lokasictt = getText ("lokasicatatan");
	durasictt = getText ("durasi_input");
	tarifctt = getText ("tarif_input");
	createRecord("catatanuser", {Tanggal:tanggalctt, Lokasi:lokasictt, Durasi:durasictt, Tarif:tarifctt}, function(record) {
	  console.log("Catatan:" + record.id);
	});
	
});

onEvent("catatanparkir", "click", function( ) {
	setScreen("screen6");
	var notelabel, posisi_y, viewid, viewtext;
	readRecords("catatanuser", {}, function(records) {
	  for (var i =0; i < records.length; i++) {
	    console.log(records[i].id + ': ' + records[i].Tanggal);
	    notelabel = "cttuser" + i;
	    textLabel(notelabel, records[i].Tanggal);
	    posisi_y = 50 + (i * 30);
	    setPosition(notelabel, 80, posisi_y, 100, 18);
	    viewid = "viewbutton_" + i;
	    setProperty(viewid, "hidden", false);
	    viewtext = "view" + records[i].id;
	    setProperty(viewid, "text", viewtext);
	  }
	});
	
});

//screen liat catatan
onEvent("button4", "click", function( ) {
	setScreen("screen5");
});

//mencet view
onEvent("viewbutton_0", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_0");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_1", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_1");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_2", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_2");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_3", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_3");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_4", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_4");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_5", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_5");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_6", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_6");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_7", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_7");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_8", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_8");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

onEvent("viewbutton_9", "click", function( ) {
	setScreen("screen7");
	idctt = getText("viewbutton_9");
	idctt = idctt.slice(4);
	idctt = parseInt(idctt);
	readRecords("catatanuser", {id:idctt}, function(records) {
	  setText("label36", records[0].Tanggal);
	  setText("label37", records[0].Lokasi);
	  setText("label38", records[0].Durasi);
	  setText("label39", records[0].Tarif);
	});
});

//screen terakhir
onEvent("button5", "click", function( ) {
  setScreen("screen6");
  
});

