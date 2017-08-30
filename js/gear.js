				function tek() {
					if (localStorage.historyStackbitAuthData) {
						var fin = localStorage.historyStackbitAuthData;
						var histws = fin.split(" ");
						var clow = histws.length;
						var limit = document.getElementById("savegate").value;
						document.getElementById("reshist").innerHTML = "";
						if(clow >= 5) {
							if(limit == "5") {
								var fin = localStorage.historyStackbitAuthData;
								var histws = fin.split(" ");
								var tekta;
								tekta = clow - 1;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 2;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 3;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 4;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 5;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
							}
							if (limit == "10") {
								var fin = localStorage.historyStackbitAuthData;
								var histws = fin.split(" ");
								var tekta;
								tekta = clow - 1;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 2;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 3;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 4;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 5;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 6;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 7;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 8;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 9;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 10;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
							}
							if (limit == "15") {
								var fin = localStorage.historyStackbitAuthData;
								var histws = fin.split(" ");
								var tekta;
								tekta = clow - 1;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 2;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 3;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 4;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 5;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 6;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 7;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 8;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 9;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 10;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 11;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 12;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 13;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 14;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
								tekta = clow - 15;
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[tekta] + "</div><br>";
							}
						} else {
							for (i = 0; i < clow; i++) {
								document.getElementById("reshist").innerHTML += "<div class='histcloud'>" + histws[clow - i] + "</div><br>";
							}
						}
					}
				}
				function cihou() {
					document.getElementById("history").style.display = "block";
					document.getElementById("proport").style.display = "none";
				}
				function mens() {
					var stat = document.getElementById("menstat").innerHTML;
					if(stat == "0") {
						document.getElementById("pentaside").style.display = "block";
						document.getElementById("menstat").innerHTML = "1";
					} else {
						document.getElementById("pentaside").style.display = "none";
						document.getElementById("menstat").innerHTML = "0";
					}
				}
				function dshmdn() {
					location.replace("https://stackmemo-tomocode.c9users.io");
				}
				function updonecur() {
					chk();
				}
				function updtwocur() {
					document.getElementById("disext").innerHTML = document.getElementById("seccrcy").value;
					chk();
				}
				function getRate(first, second) {
					var demo = function(data) {
						fx.rates = data.rates
						var rate = fx(1).from(first).to(second)
						var fort = document.getElementById("curnet").value;
						document.getElementById("dispan").innerHTML = (rate.toFixed(2)*fort);
						if (localStorage.historyStackbitAuthData) {
							document.getElementById("reshist").innerHTML = "";
							var woa = document.getElementById("curnet").value;
							var wod = document.getElementById("frscrcy").value;
							var wok = document.getElementById("seccrcy").value;
							var fok = document.getElementById("dispan").innerHTML;
							var str = localStorage.historyStackbitAuthData.split(" ");
							str.push(woa+wod+"から"+fok+wok);
							var fin = str.join(" ");
							console.log(str);
							console.log(fin);
							localStorage.historyStackbitAuthData = fin;
							setTimeout( function () {
								tek();
							}, 500)
						} else {
							var woa = document.getElementById("curnet").value;
							var wod = document.getElementById("frscrcy").value;
							var wok = document.getElementById("seccrcy").value;
							var fok = document.getElementById("dispan").innerHTML;
							var hist = [];
							hist.push(woa+wod+"から"+fok+wok);
							var stats = hist.join();
							localStorage.historyStackbitAuthData = stats;
							document.getElementById("reshist").innerHTML = "";
							document.getElementById("reshist").innerHTML = "<div class='histcloud'>"+stats+"</div><br>";
						}
					}
					$.getJSON("dat/latest", demo)
					
				}
				function chk() {
					var frs = document.getElementById("frscrcy").value;
					var sec = document.getElementById("seccrcy").value;
					getRate(frs, sec);
				}
				function upd() {
					var one = document.getElementById("fsone").value;
					var two = document.getElementById("fstwo").value;
					getRate(one, two);	
				}
				function opnset() {
					document.getElementById("history").style.opacity = "0";
					document.getElementById("proport").style.opacity = "0";
					document.getElementById("settings").style.display = "block";
					document.getElementById("historylau").style.padding = "10px 10px 10px 10px";
					document.getElementById("settinglau").style.padding = "20px 20px 20px 20px";
					document.getElementById("proportlau").style.padding = "10px 10px 10px 10px";
					document.getElementById("historylau").disabled = true;
					document.getElementById("proportlau").disabled = true;
					document.getElementById("settinglau").disabled = true;
					setTimeout( function () {
						document.getElementById("history").style.display = "none";
						document.getElementById("proport").style.display = "none";
						document.getElementById("settings").style.opacity = "1";
						document.getElementById("historylau").disabled = false;
						document.getElementById("proportlau").disabled = false;
						document.getElementById("settinglau").disabled = false;
					}, 500);
				}
				function ock() {
					var stvr = document.getElementById("curnet").value;
					if(stvr == "0") {
						document.getElementById("curnet").value = "";
					}
				}
				function clsset() {
					document.getElementById("settings").style.display = "none";
					document.getElementById("proport").style.display = "block";
				}
				function ockd() {
					var stvr = document.getElementById("turnet").value;
					if(stvr == "0") {
						document.getElementById("turnet").value = "";
					}
				}
				function clshis() {
					document.getElementById("history").style.opacity = "0";
					document.getElementById("settings").style.opacity = "0";
					document.getElementById("proport").style.display = "block";
					document.getElementById("historylau").style.padding = "10px 10px 10px 10px";
					document.getElementById("proportlau").style.padding = "20px 20px 20px 20px";
					document.getElementById("settinglau").style.padding = "10px 10px 10px 10px";
					document.getElementById("historylau").disabled = true;
					document.getElementById("proportlau").disabled = true;
					document.getElementById("settinglau").disabled = true;
					setTimeout( function () {
						document.getElementById("history").style.display = "none";
						document.getElementById("settings").style.display = "none";
						document.getElementById("proport").style.opacity = "1";
						document.getElementById("historylau").disabled = false;
						document.getElementById("proportlau").disabled = false;
						document.getElementById("settinglau").disabled = false;
					}, 500);
				}
				function clrhist() {
					localStorage.clear();
					setTimeout( function () {
						document.getElementById("statr").innerHTML = "削除できました！";
						document.getElementById("clsbtnclshs").disabled = false;
						navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
						if (navigator.vibrate) {
							navigator.vibrate([400, 200, 400]);
						}
					}, 10000)
					document.getElementById("reshist").innerHTML = '<div class="histcloud"><span style="font-weight: lighter; color: #737373;">履歴がありません</span></div>';
				}
				function chkbck() {
					var stat = document.getElementById("curnet").value;
					if(stat == "") {
						document.getElementById("curnet").value = "0";
					}
				}
				function clsstatr() {
					setTimeout( function () {
						document.getElementById("statr").innerHTML = "履歴を削除しています";
						document.getElementById("clsbtnclshs").disabled = true;
					}, 500);
				}
				function opnhist() {
					document.getElementById("settings").style.opacity = "0";
					document.getElementById("proport").style.opacity = "0";
					document.getElementById("history").style.display = "block";
					document.getElementById("historylau").style.padding = "20px 20px 20px 20px";
					document.getElementById("settinglau").style.padding = "10px 10px 10px 10px";
					document.getElementById("proportlau").style.padding = "10px 10px 10px 10px";
					document.getElementById("historylau").disabled = true;
					document.getElementById("proportlau").disabled = true;
					document.getElementById("settinglau").disabled = true;
					setTimeout( function () {
						document.getElementById("settings").style.display = "none";
						document.getElementById("proport").style.display = "none";
						document.getElementById("history").style.opacity = "1";
						document.getElementById("historylau").disabled = false;
						document.getElementById("proportlau").disabled = false;
						document.getElementById("settinglau").disabled = false;
					}, 500);
				}
