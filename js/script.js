$(document).ready(function(){
    var  n=1;
    	
  	
    document.getElementById("div1").onmousedown = function () {
    	console.log("User moused down");
    	
    	
		if (n%6==1){
    		
    		$("#div2").fadeOut(function() {
 					 $(this).html('<h3>A little about me</h3><p>I was born in New York City, but I grew up in Palo Alto, California. My prospective major is Computer Science. My hobbies include playing the violin and also playing various sports, such as badminton, volleyball, and tennis. At school, I \'m part of various organizations such as YHack and Danceworks. Growing up, I played a lot of games, much to my mom\'s annoyance, so I\'m glad I\'min this class this semester to prove to her that playing games can be beneficial in some ways. </p>').fadeIn();
			});	
			$("#prof").fadeOut();
			n+=1;
		}
		else if (n%6==2){
			$("#div2").fadeOut(function() {
 					 $(this).html("<h3>Me and Gaming</h3><p>I love games that have great graphics and fun, addicting gameplay. In my free time, I like playing games like Hearthstone, Plants vs. Zombies, Puzzle and Dragons, and Postknight. I'm more of a strategy game player than a FPS person. Growing up, Miniclip and Armorgames were my go to sources of entertainment, and I think that those games were a defining part of my childhood. I also loved to play Wii games like Super Smash Bros and Mario Kart, and MMOs like Runescape. </p>").fadeIn();
 			});
 			n+=1;
 		}
 		else if (n%6==3){
			$("#div2").fadeOut(function() {
 					 $(this).html("<h3>Goals this Semester</h3><p> I want to be an author who provides great graphics to my game's players. This semester, I'd like to learn how to develop an interesting storyline for my game that keeps the player engaged and improve my art skills while I'm at it. 	</p>").fadeIn();
 			});
 			n+=1;
 		}
		else if(n%6==4){
			$("#div2").fadeOut(function(){
					$(this).html("<h3>Past Experience</h3>	 <p>In the past, I made an iPhone game called BloopScoops that I shipped to the Apple App Store. 	I really enjoyed making the graphics for the game and seeing the end result. 	This semester, I want to make a game with more of a storyline and hopefully incorporate my original art into the game as well.</p>").fadeIn();
			});
			n+=1;
			console.log(n);
		}
		
		else if(n%6==5){
			
			$("#div2").fadeOut(function(){
				$(this).html("<h1>Thanks for reading!</h1>").fadeIn();
			});
			$("#underneath-paragraph").html("<img id='photo' alt='smiley' src='img/smiley.png'>");
			$("#underneath-paragraph").delay(1000).animate({"opacity": "1"}, 700);
			
// 			fadeOut();
			
// 			$("#prof").fadeOut(function(){
// 				$(this).html("<img id='prof' alt='smiley' src='background.jpg'>");
// 			});
// 			("#underneath-paragraph").fadeIn();
		}
		
		
    			
    	
    	
    	
    	
    	
    	
    	

    return true; // Not needed, as long as you don't return false
	};
});