        var canvas = document.getElementById("canvas");

		const ctx = canvas.getContext("2d");

		var w = canvas.width = window.innerWidth;
		var h = canvas.height = window.innerHeight;

		window.onresize = function(){
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;


		}
		var x = 0 ; var y = 0;
		
		$(function Circle(){
			
			this.x = Math.random()*w;
			this.y = Math.random()*h;

			
			this.vx = Math.random()*20-10; // -10~10
			this.vy = Math.random()*20-10; //-10~10

			
			this.r = Math.random()*20+20;//20~40

			var red = Math.floor(Math.random()*256);
			var green = Math.floor(Math.random()*256);
			var blue = Math.floor(Math.random()*256);

			this.color = "rgba("+red+","+green+","+blue+",0.5)";

		})
		
		var c1 = new Circle();
		var counts = []; 
		for(var i = 0 ; i < 50;i++){
			counts.push(new Circle());
		}

		// console.log(counts)

		$(function draw(){
			// ctx.globalCompositeOperation="source-over";
			ctx.clearRect(0,0,w,h);  
			ctx.fillStyle="rgba(0,0,0,0.3)";
			ctx.fillRect(0,0,w,h);

			// ctx.globalCompositeOperation="lighter";
			
			for(var j = 0 ,l = counts.length; j < l;j++){
				ctx.beginPath();
				ctx.arc(counts[j].x, counts[j].y, counts[j].r, Math.PI*2,false);

				ctx.fillStyle=counts[j].color; 
				ctx.fill(); 
				
				counts[j].x+=counts[j].vx;
				counts[j].y+=counts[j].vy;

				
				if(counts[j].x<0){
					counts[j].x = w;
				}
				if(counts[j].x> (w + counts[j].r) ){
					counts[j].x = 0;
				}

				if(counts[j].y< 0){
					counts[j].y = h;
				}
				if(counts[j].y> (h+ counts[j].r)){
					counts[j].y = 0;
				}

			}
		})

		 setInterval(draw,50);
		