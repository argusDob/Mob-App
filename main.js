var app = new Vue({
			el: "#app",
			data: {

				data: [],
				buttons: [],
				data_loaded: false,
				games: {},
				teams: {},
				path: 0,
				filteredArray: [],
				message: "",
				tempData : [],
				locations: [],
				loc: [],
				locTemp:[],
				selectedType: '',
				iframe: '',
				value:''
				
			
			},
			created: function () {
				this.getData();
			},
	
			computed: {

				
			},
			methods: {
				getData: function () {
					var fetchConfig =
						fetch("https://api.myjson.com/bins/qstr2", {
							method: "GET",
							headers: new Headers({})
						}).then(function (response) {
							if (response.ok) {
								return response.json();
							}
						}).then(function (json) {
							console.log("My json", json)

							app.data = json;
							app.games = app.data.games;
							app.teams = app.data.teams; 
//							app.locationLink();
							app.loc=app.data.maps;
							console.log(app.loc);
//                            app.selectLoc();
							//store the teams in an object in a new object
							//					console.log(app.teams);
							app.locations=app.data.locations
							console.log(app.locations);
							app.data_loaded = true;
						    console.log(app.data);
//							app.teamFilter();
							console.log(app.games);

							//				      app.iterate();
							// console.log(app.data.icons);
							//						app.pushIcons();

						})
						.catch(function (error) {
							console.log(error);
						})
				},

				home: function(){
					app.path = 0;
				},
				
				switchDiv: function () {
				
							  
					app.path = 1;
				},
				
				team: function(){
					app.path = 2;
				},
				
				filterPage: function(){
					app.path=3;
				},
				
				location: function(){
					app.path= 4;
				},

                 //This function filter my games and takes values from my buttons . When a user click a button with a value trigger this function and for each value (U1 U2 U3 U4) represent a table for each team.
				teamFilter: function (team) {
//               var tempData = [];
					for (var i=0; i<app.games.length; i++) {
						if (app.games[i].guest === team || app.games[i].host === team) {
							app.tempData.push(app.games[i])
						}
					}
					console.log(app.tempData);
				},
                 			
				    handler: function(arg1,arg2){
                    this.teamFilter(arg1);
                    this.filterPage();
                },
				
				
				filteredLocs: function () {
					
					var select = document.getElementById("dropdown");
				    var key = select.value;
					console.log(key)
					app.iframe = app.loc[key].iframe;
					console.log(app.iframe)

				}
				
				
			}

			})


//	var key = select.value;
//			console.log(key)
//			if (key != "null") {
//				app.validMap = true;
//				app.iframe = app.loc[key].iframe;
//			} else {
//				app.validMap = false;
//				console.log("monoekre");
//			}
//
//			console.log(app.iframe)
//
//		}
//
//
//	}
