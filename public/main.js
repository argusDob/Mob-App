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
		tempData: [],
		locations: [],
		loc: [],
		locTemp: [],
		selectedType: '',
		iframe: '',
		value: '',
		myUserName: '',
		seen: false,


	},
	created: function () {
		this.getData();
	},

	computed: {


	},
	methods: {
        //create date
		newDate: function () {
			var d = new Date();
			var n = d.toString();
			return n.substr(3, 18);
		},


      //logout chat 
		logOut: function () {
			firebase.auth().signOut().then(function () {
				alert("You have  Log Out");
			}, function (error) {
				console.error('Sign Out Error', error);
			});
		},

       //login chat
		login: function () {
			var user = firebase.auth().currentUser;
			console.log(user)
			if (user) {
				app.getPost();
			
			} else {
			
				var provider = new firebase.auth.GoogleAuthProvider();

				firebase.auth().signInWithPopup(provider)

					.then(function () {
						{
							var userName = firebase.auth().currentUser.displayName;
							this.myUserName = userName;
							alert("Welcome" + " " + this.myUserName);
							app.getPost();
						}
					})
			}
		},
        //write a new post in the chat
		writeNewPost: function () {
			if (!$("#textInput").val()) {
				return
			}

			var text = document.getElementById("textInput").value;
			var userName = firebase.auth().currentUser.displayName;
			app.myUserName = userName;
			var userPic = firebase.auth().currentUser.photoURL;

			// A post entry.
			var postData = {
				name: userName,
				body: text,
				timestamp: app.newDate(),
				profileImage: userPic,
			};

			// Get a key for a new Post.
			var newPostKey = firebase.database().ref().child('myMatch').push().key;

			var updates = {};
			updates[newPostKey] = postData;

			$("#textInput").val("");


			return firebase.database().ref().child('myMatch').update(updates);
		},
         //get post and show them on the chat board ,per user
		getPost: function () {
			console.log("hi")

			firebase.database().ref('myMatch').on('value', function (data) {

				var logs = document.getElementById("posts");
				logs.innerHTML = "";

				var posts = data.val();

				var template = "";

				for (var key in posts) {
					if (posts[key].name == firebase.auth().currentUser.displayName) {
						template += `
          
          <div class="notification is-info">
           <p>${posts[key].timestamp}</p> 
           <p class="name">${posts[key].name} says:</p>
            <p>${posts[key].body}</p>
			
          </div>
        `;
					} else {
						template += `
          <div class="notification is-primary">
            	<p>${posts[key].timestamp}</p>
            <p class="name">${posts[key].name} says:</p>
            <p>${posts[key].body}</p>
		
          </div>
        `;
					}
				}

				logs.innerHTML = template;

				$(".box").animate({
					scrollTop: $(".box").prop("scrollHeight")
				}, 500);
			});
		},
//fetch data from json file
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
					app.data = json;
					app.games = app.data.games;
					app.teams = app.data.teams;
					app.loc = app.data.maps;
app.locations = app.data.locations
					app.data_loaded = true;
				

				})
				.catch(function (error) {
					console.log(error);
				})
		},
       //set paths for each page
		home: function () {
			app.path = 0;
		},

		switchDiv: function () {


			app.path = 1;
		},

		team: function () {
			app.path = 2;
		},

		filterPage: function () {
			app.path = 3;
		},

		location: function () {
			app.path = 4;
		},

		loginPage: function () {
			app.path = 5;
		},

		chatBox: function () {
			app.path = 6;
		},
		//This function filter my games and takes values from my buttons . When a user click a button with a value trigger this function and for each value (U1 U2 U3 U4) represent a table for each team.
		teamFilter: function (team) {
			app.tempData.length = 0;
			for (var i = 0; i < app.games.length; i++) {
				if (app.games[i].guest === team || app.games[i].host === team) {
					app.tempData.push(app.games[i])
				}
			}
			return app.tempData;
		},
        //@click two function in one click
		handler: function (arg1, arg2) {
			this.teamFilter(arg1);
			this.filterPage();
		},


		handler1: function () {
			this.login();
			this.chatBox();
		},

		handler2: function () {

			this.logOut();
			this.loginPage();
		},

		trigger() {
			this.$refs.sendReply.click()
		},
		//filter locations
		filteredLocs: function () {

			var select = document.getElementById("dropdown");
			var key = select.value;
			//			console.log(key)
			app.iframe = app.loc[key].iframe;
			//			console.log(app.iframe)

		}


	}

})