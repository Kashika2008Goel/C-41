class Form{
  constructor(){
    this.input= createInput("Please enter your name");
    this.button= createButton("Play");
    this.text1= createElement("h1");
    this.text2= createElement('h3');
    this.resetButton= createButton("Reset");
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.text1.hide();
    this.text2.hide();
  }

  display(){
    this.input.position(displayWidth/2-50,200);
    this.button.position(displayWidth/2+50,250);

    this.resetButton.position(displayWidth-50, 20);

    this.text1.html("Car Racing Game");
    this.text1.position(displayWidth/2-90, 10);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.n= this.input.value();
        this.text2.html("Hello "+ player.n)
        this.text2.position(displayWidth/2-90,250);
        playerCount = playerCount + 1;
        player.writeCount(playerCount);
        player.index = playerCount;
        player.writePlayerInfo();
       });

    this.resetButton.mousePressed(()=>{
      game.writeState(0);
      player.writeCount(0);
      
    });
  }
} 