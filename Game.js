class Game{
  constructor(){
       
      }
  
  readState(){
      var loc2= db.ref('GameState');
      loc2.on("value", function(data){
        gameState= data.val();
      });
    }
          
  writeState(c){
      db.ref("/").update({GameState: c});
        }
    
  start(){
    if(gameState == 0){
      form= new Form();
      form.display();
      player= new Player();
      player.readCount();
    }
    car1= createSprite(300,300,10,10);
    //car1.addImage("Img1",car1Img);

    car2= createSprite(500,300,10,10);
    //car2.addImage("Img2",car2Img);

    car3= createSprite(700,300,10,10);
    //car3.addImage("Img3",car3Img);

    car4= createSprite(900,300,10,10);
    //car4.addImage("Img4",car4Img);

    cars= [car1,car2,car3,car4];
  }

  play(){
    form.hide();
    /*textSize(25)
    text("Game Start",100,100);*/
    Player.readPlayerInfo();
    player.readRank();

   console.log(car1.x);
    if(allPlayers !== undefined){
      //background("blue");
      //image(trackImg, 0, -displayHeight * 4, displayWidth - 10, displayHeight * 5);

      var x = 100;
      var y;

      var i = 0;

      for(var plr in allPlayers){
        i= i + 1;
        x = x+200;
        y = displayHeight - allPlayers[plr].distance;
       
        cars[i-1].x = x;
        cars[i-1].y = y;
        console.log(car1.x);
        if(i== player.index){
          camera.position.x= displayWidth/2;
          camera.position.y= cars[i-1].y;

        }
      
        /*textSize(15);
        text(allPlayers[plr].Name + ": " + allPlayers[plr].Distance, 100, y);
        y= y+30;*/
      }
    }
    
    if(keyWentDown("UP_ARROW") && player.index !== null){
      console.log(player.distance)
      player.distance= player.distance + 10;
      player.writePlayerInfo();
    }
    
    if(player.distance > 3000){
      gameState = 2;
      player.rank = player.rank + 1;
      player.writeRank(player.rank);
    }

    drawSprites();
  }

  end(){
    console.log("Game Over");
    console.log(player.rank);
  }
    

    display(){
     
      }
  }