<template>
  <div class="hello">
    <div class="button-row">
      <img class="rock" src="../assets/therock.png" alt="rock" width="25%" @click="rockCounter" />
      <!--
      <button class="rock" @click="rockCounter">Rock</button>
      -->

      <img class="paper" src="../assets/printerpaper.png" alt="paper" width="30%" @click="paperCounter" />
      <!--
      <button class="paper" @click="paperCounter">Paper</button>
      -->
      <img class="scissors" src="../assets/safetyscissors.png" width="40%" @click="scissorsCounter"  />
      <!--
      <button class="scissors" @click="scissorsCounter">Scissors</button>
      -->
    </div>
    <div>
      <h1>{{selection}}</h1>
    </div>
    <div>
      <button type="sumit" @click="onSubmit">PLAY</button>
    </div>
    <div V-if="compSelection">
      <h1>Computer Plays:</h1>
      <h2>{{compSelection}}</h2>
      <h3>{{winner}}</h3>
    </div >
  <div>
  </div>
    <div class="table-div">
    <table class="table">
      <tr colspan="2" class = "thead">And the Winner is:</tr>
      <tr>
        <td>PERSON</td>
        <td>COMPY</td>
      </tr>
      <tr>
        <td>{{pWin}}</td>
        <td>{{cWin}}</td>
      </tr>
    </table>
    </div>
    <button type="submit" @click="onReset">Reset?</button>
  
  <div>
   Games: {{gameCount}}  Ties: {{tieCount}}
  </div>
  </div>
</template>

<script>

//
//let apiKey = 318de766-f86f-4711-b977-1b357ca83442
export default {
  name: "HelloWorld",

  props: {
    msg: String
  },

  data: function() {
    return {
      selection: "Pick One",
      rockCount: 0,
      paperCount: 0,
      scissorsCount: 0,
      rockGreatest: false,
      compSelection: "?",
      pWin: 0,
      cWin: 0,
      gameCount: 0,
      tieCount: 0
    };
  },

  computed: {
    winner: function() {
      if (this.selection == "PAPER" && this.compSelection == "ROCK") {
        return `${this.selection} beats ${this.compSelection} YOU WIN!'`;
      } else if (
        this.selection == "PAPER" &&
        this.compSelection == "SCISSORS"
      ) {
        return `${this.compSelection} beats ${this.selection} COMPY WINS!`;
      } else if (this.selection == this.compSelection) {
        return "TIE!";
      } else if (this.selection == "ROCK" && this.compSelection == "SCISSORS") {
        return `${this.selection} beats ${this.compSelection} YOU WIN!'`;
      } else if (this.selection == "ROCK" && this.compSelection == "PAPER") {
        return `${this.compSelection} beats ${this.selection} COMPY WINS!`;
      } else if (
        this.selection == "SCISSORS" &&
        this.compSelection == "PAPER"
      ) {
        return `${this.selection} beats ${this.compSelection} YOU WIN!'`;
      } else if (this.selection == "SCISSORS" && this.compSelection == "ROCK") {
        return `${this.compSelection} beats ${this.selection} COMPY WINS!`;
      } else {
        return undefined;
      }
    }

    /*  pWin: function(){
      let score = 0;
      if (this.winner == `${this.selection} beats ${this.compSelection} YOU WIN!'` ){
        score++;
      }
      return score;
    },

    cWin: function(){
      let score = 0;
      if (this.winner == `${this.compSelection} beats ${this.selection} COMPY WINS!`){
        score++;
      }
      return score;
    }

    /*
    paperCounter: function(){
      return this.paperCount+1
    },
    scissorsCounter: function(){
      return this.scissorsCount+1
    },
    */
  },

  methods: {
    rockCounter: function() {
      this.compSelection = "?";
      return (this.selection = "ROCK");
    },
    paperCounter: function() {
      this.compSelection = "?";
      return (this.selection = "PAPER");
    },
    scissorsCounter: function() {
      this.compSelection = "?";
      return (this.selection = "SCISSORS");
    },

    onSubmit: function() {
      this.gameCount++
      let pScore=this.pWin
      let cScore=this.cWin    
      let tCount=this.tieCount
      let choice = Math.floor(Math.random() * 100);
      if (choice >= 0 && choice < 33) {
        this.compSelection = "ROCK";
      } else if (choice >= 33 && choice < 66) {
        this.compSelection = "PAPER";
      } else if (choice >= 67 && choice < 101) {
        this.compSelection = "SCISSORS";
      }
      //alert(pScore, cScore)
      if (
        this.winner == `${this.selection} beats ${this.compSelection} YOU WIN!'`
      ) {
        pScore++;
        this.pWin = pScore;
        
      }
      if (
        this.winner ==
        `${this.compSelection} beats ${this.selection} COMPY WINS!`
      ) {
        cScore++;
        this.cWin = cScore;

        if (this.winner == "TIE!"){
          tCount++
          this.tieCount = tCount
        }
        
      }
    },
    onReset: function(){
      this.gameCount=0;
      this.pWin=0;
      this.cWin=0;
      this.compSelection="?"
      this.selection="Pick One"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-row {
  display: inline;
  margin: auto;
  padding: 0px;
}
.rock {
  padding: 0, 6px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.paper {
  padding: 0, 6px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
.scissors {
  padding:none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.table-div{
  text-align: center;
}
.table {
  text-align: center;
  margin: auto;
  border:#42b983;
  color: #42b983;
  
}
  .t-head{
    text-align: center;
    background-color: #42b983;
  }

</style>
