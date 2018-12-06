 {
	"games": [{
			"host": "U1",
			"guest": "U4",
			"Date": "01",
			"Month": "September",
			"Location": "Aj Katzenmaier",
			"Time": "9:30 a.m.",
   },

		{
			"host": "U3",
			"guest": "U2",
			"Date": "01",
			"Month": "September",
			"Location": "Greenbay",
			"Time": "1:00 a.m."
   },

		{
			"host": "U5",
			"guest": "U6",
			"Date": "08",
			"Month": "September",
			"Location": "Howard A Yeager",
			"Time": "9:30 a.m."
   },

		{
			"host": "U6",
			"guest": "U1",
			"Date": "08",
			"Month": "September",
			"Location": "Marjorie P Hart",
			"Time": "1:00 a.m."
   },

		{
			"host": "U2",
			"guest": "U4",
			"Date": "15",
			"Month": "September",
			"Location": "North",
			"Time": "9:30 a.m."
   },

		{
			"host": "U3",
			"guest": "U5",
			"Date": "15",
			"Month": "September",
			"Location": "Aj Katzenmaier",
			"Time": "1:00 a.m."
   },

		{
			"host": "U1",
			"guest": "U3",
			"Date": "22",
			"Month": "September",
			"Location": "South",
			"Time": "9:30 a.m."
   },

		{
			"host": "U2",
			"guest": "U6",
			"Date": "29",
			"Month": "September",
			"Location": "Howard A Yeager",
			"Time": "1:00 a.m."
   },

		{
			"host": "U4",
			"guest": "U5",
			"Date": "29",
			"Month": "September",
			"Location": "Greenbay",
			"Time": "9:30 a.m."
   },

		{
			"host": "U2",
			"guest": "U5",
			"Date": "06",
			"Month": "October",
			"Location": "Marjorie P Hart",
			"Time": "9:30 a.m."
   },
		{
			"host": "U1",
			"guest": "U6",
			"Date": "06",
			"Month": "October",
			"Location": "South",
			"Time": "01:00 a.m."
   },

		{
			"host": "U3",
			"guest": "U4",
			"Date": "08",
			"Month": "October",
			"Location": "Howard A Yeager",
			"Time": "01:00 a.m."
   },

		{
			"host": "U5",
			"guest": "U1",
			"Date": "08",
			"Month": "October",
			"Location": "Greenbay",
			"Time": "01:00 a.m."
   },
		{
			"host": "U6",
			"guest": "U3",
			"Date": "20",
			"Month": "October",
			"Location": "North",
			"Time": "09.30 a.m."
   },
		{
			"host": "U2",
			"guest": "U4",
			"Date": "20",
			"Month": "October",
			"Location": "Marjorie P Hart",
			"Time": "01:00 a.m."
   },
		{
			"host": "U3",
			"guest": "U1",
			"Date": "27",
			"Month": "October",
			"Location": "Aj Katzenmaier",
			"Time": "9:30 a.m."
   },

		{
			"host": "U5",
			"guest": "U6",
			"Date": "27",
			"Month": "October",
			"Location": "Howard A Yeager",
			"Time": "01:00 a.m."
   },
      ],
		
	"teams":{
		
		"U1":{
			"name":"U1",
			"url" :"logos/aek.png",
		},
		"U2":{
			"name":"U2",
			"url" :"logos/aris.png",
		},
		"U3":{
			 "name":"U3",
             "url" :"logos/pao.jpg",
		},
	   "U4":{
		    "name":"U4",
			"url" :"logos/ofi.jpg",
		},
		"U5":{
			"name":"U5",
			"url" :"logos/apollon.jpg",
		},
		"U6":{
			"name":"U6",
			"url" :"logos/ntropitisprsfygias.jpg",
		}
		},


	
	"locations":[
		
		"Aj Katzenmaier",
		"Greenbay",
		"Howard A Yeager",
		"Marjorie P Hart",
		"North",
		"South",
		
		],
	
    "maps":{
		
		"Aj Katzenmaier":{
			
		   "iframe":"https://goo.gl/maps/jarxwgA9dgQ2",	
			
		},
	
	   "Greenbay":{
		   
		   "iframe":"https://goo.gl/maps/8sFdbHFSbQv",
	   },
	   
	   "Howard A Yeager":{
		   
		   "iframe":"https://goo.gl/maps/X9v5aLG974P2",
	   },
	
	 "Marjorie P Hart":{
		   
		   "iframe":"https://goo.gl/maps/iZMP48vpKSk",
	   },
		 
      "North":{
		   
		   "iframe":"https://goo.gl/maps/YJnnR3KbRCr",
	   },
	
      "South":{
		   
		   "iframe":"https://goo.gl/maps/DycLvHiFnoP2",
	   },
		   
	  
	  
	  
	  },
	
	"icons":{
		"logo":"icons/nysl_logo.png",
		"calendar":"icons/calendar.png",
		"chat":"icons/chat.png",
		"team":"icons/team.png",
	    "home":"icons/home.png",
		"info":"icons/info.png",
		"map":"icons/map.png",
		"return":"icons/left-arrow.png"
		}
	}
	
	
	
	//https://api.myjson.com/bins/1amdy2
         
         
         
         
         
         
         <!--
		<div class="schedule" id="main_page" v-if="data_loaded">




         
			
	<div v-for="game in games">
		{{game.host}}
	</div>


          
		

<div class="header">
<div class="logo">
<img :src="data.icons.logo" alt="">	
</div>
</div>


			<div v-for="(value,index) in games" class="games_schedule">
				<div class="outer-game">
					<div class="game-name">
						<div class="outer-against">
							<div class="against">
								{{value.host}} vs {{value.guest}}
							</div>
						</div>
					</div>
				</div>



				<div class="outer-date">
					<div class="game-date">
						<div class="outer-dates-show">
							<div class="dates">
								{{value.Date}} {{value.Month}} {{value.Time}}
							</div>
						</div>
					</div>
				</div>


				<div class="outer-date">
					<div class="game-date">
						<div class="outer-dates-show">
							<div class="dates">
								{{value.Location}}
							</div>
						</div>
					</div>
				</div>


				<div class="game1">
					<div class="inner-game">
						<img v-bind:src="teams[value.host].url" class="book_cover row">
					</div>
					<div class="inner-guest">
						<img v-bind:src="teams[value.guest].url" class="book_cover row">
					</div>
				</div>



			</div>
-->



       
			
<!--
 <div class="footer">
 <div class="footer_icons">
 <div class="chat-outer">
 <div class="chat">
 <img :src="data.icons.chat" alt="">	
 </div>	
 </div>	
 <div class="info-outer">
 <div class="info">
 <img :src="data.icons.info" alt="">	
 </div>	
 </div>
 </div>	
 </div>
-->

        
<!--        </div>-->
   