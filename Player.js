class Player{
  constructor(){
    this.n= null;
    this.distance = 0;
    this.index = null
    this.rank = null;
    }

  readCount(){
    var loc= db.ref('PlayerCount');
    loc.on("value", function(data){
      playerCount= data.val();
    });
  }
        
  writeCount(c){
    db.ref("/").update({PlayerCount: c});
      }

  writePlayerInfo(){
    var playerIndex= "Players/Player" + this.index;
    db.ref(playerIndex).update({Name: this.n, Distance: this.distance});

  }

  static readPlayerInfo(){
    var player_loc= db.ref('Players');
    player_loc.on("value", function(data){
      allPlayers= data.val();
    });
  }
  
  readRank(){
    var loc= db.ref('Rank');
    loc.on("value", function(data){
      this.rank = data.val();
    });
  }
        
  writeRank(rank){
    db.ref("/").update({Rank: rank});
      }

  display(){
   
    }
}