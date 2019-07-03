const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    PLANNING:  Symbol("planning"),
    DRIVE: Symbol("drive"),
    HAUNTED: Symbol("haunted"),
    WALK: Symbol("walk"),
    VOICE: Symbol("voice"),
    WAIT: Symbol("wait"),
    PLAY: Symbol("play"),
    CONTINUE: Symbol("continue"),
    RESORT: Symbol("resort"),
    TIRED: Symbol("tired")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply ="You and your friends are on vacation in hilly area and enjoying in resort.Your friend decide a midnight long drive.Do you want to go for the drive or stay in the resort?";
                this.stateCur = GameState.PLANNING;
                break;
            case GameState.PLANNING:
                if(sInput.toLowerCase().match("drive")){
                    sReply = "You all are on long drive and unfortunately your car breaks down. your friend decide to have a walk. Do you want to go for walk or go back to the resort?";
                    this.stateCur = GameState.DRIVE
                }else{
                    sReply ="You plan to play a game to go a haunted house.There you all see a old scary watchman.Do you want to play or quit?";
                    this.stateCur = GameState.HAUNTED;
                }
      
                break;
            case GameState.DRIVE:
                if(sInput.toLowerCase().match("walk")){
                    sReply = "You all continue to walk and reach woods.You noticed a shadow behind a tree, suddenly that fades away. Do you want to go ahead or move back?";
                    this.stateCur = GameState.WALK; 
                }else{
                    sReply = "It is better to go to the resort.Do you want to sleep or have fun with friends? ";
                    this.stateCur = GameState.RESORT;

                }
        
                break;
            case GameState.WALK:
                if(sInput.toLowerCase().match("ahead")){
                    sReply = "You and your friends decide to move further and you all hear a sound.Do you still want to go further or run back?";
                    this.stateCur = GameState.VOICE;

                }else{
                    sReply = "It is better to go to the resort.Do you want to sleep or have fun with friends? ";
                    this.stateCur = GameState.RESORT;
    
                }
           
                break;
            case GameState.VOICE:
                if(sInput.toLowerCase().match("further"))
                {
                    sReply = "You all have covered a long distance.You all are having fun together.Suddenly that shadow appears again. Do you want to wait or run back?";
                    this.stateCur = GameState.WAIT;
                }
                else
                {
                    sReply = "It is better to go to the resort.Do you want to sleep or have fun with friends? ";
                    this.stateCur = GameState.RESORT;
                }
        
                break;
            case GameState.WAIT:
                if(sInput.toLowerCase().match("wait"))
                {
                    sReply = "You all see a terrifying wolf coming towards you. The only way to save your life  is to run back but you can't run as fast as wolf. So ,these are your last moments.GOODBYE....";
                }
                else
                {
                    sReply = "It is better to go to the resort.Do you want to sleep or have fun with friends? ";
                    this.stateCur = GameState.RESORT;
                }
         
                break;
            case GameState.HAUNTED:
                if(sInput.toLowerCase().match("play"))
                {
                    sReply = "You all enter in house.Unexpectedly, the power shuts down and fast wind blowing. Do you all still want to play or quit?";
                    this.stateCur = GameState.PLAY;
                }
                else{
                    sReply = "Its good to quit playing.This game gonna kill you.Do you want to go back resort and have sleep or fun with friends?";
                    this.stateCur = GameState.RESORT;
                }
            
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("play"))
                {
                    sReply = "Surprisingly, all the windows and doors locked.Do you want to continue or quit?";
                    this.stateCur = GameState.CONTINUE;
                }
                else{
                    sReply = "Its good to quit playing a game.This game gonna kill you.Do you want to go back resort and have sleep or fun with friends?";
                    this.stateCur = GameState.RESORT;
                }
              
                break;
            case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue"))
                {
                    sReply = "You all are trying to open the door ,and when you all turn back you see a old and scary watchman passing through walls.Suddenly he disappear.You and your friends run towards the back door and the watchman reappears.You don't have any way to get out from the haunted house.You all are going to die.GAME OVER GUYS.....";
                    
                }
                else
                {
                    sReply = "Its good to quit playing a game.This game gonna kill you.Do you want to go back resort and have sleep or fun with friends?";           }
                     this.stateCur = GameState.RESORT;
                break;
           
            case GameState.RESORT:
                if(sInput.toLowerCase().match("sleep"))
                {
                    sReply = "Good night. It was a long night. Sleep well."
                }
                else{
                    sReply = "You all enjoy together. Now you all are tired. Do you want to sleep. Yes or NO?"
                    this.stateCur = GameState.TIRED;
                }
              
                break;
            case GameState.TIRED:
                if(sInput.toLowerCase().match("yes"))
                {
                    sReply = "Good night.Sleep well.";
                    
                }
                else{
                    sReply = "Do you want to sleep. Yes or No?";
                    
                }
              
                break;
        }
        return([sReply]);
    }
}