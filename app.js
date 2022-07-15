// big function for the whole game scoping everything inside 
//the game funtion rules out the b=need for global variables
const game = () => {
    //variable for maintaining scores
    let pScore = 0;
    let cScore = 0;

    //function to start game. Basically fading in the match and out the intro
    
    const startGame = () => {
        //collect all elements needed in variables
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn')
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hands=> {
            hands.addEventListener('animationend',function() {
                this.style.animation = '';
            })
        })

        //computersOptions

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=> {
            option.addEventListener('click', function() {
                //computer's choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(()=>{
                    //we call compare hands here
                    compareHands(this.textContent,computerChoice);
                    //updating images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                },2000)
                //animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
        
    };
    //update score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //function for comparing score and deciding winner
    const compareHands = (playerChoice,computerChoice) => {

        //updating winner
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoice == computerChoice) {
            winner.textContent = "It's a tie"
            return;
        }

        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors')
            {
                //player wins
                winner.textContent = "You Win!! :)";
                pScore++;
                updateScore();
                return;
            }
            else {
                //computer wins
                winner.textContent = " You Lose! :(";
                cScore++;
                updateScore();
                return;
            }
           
        }

        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors')
            {
                //computer wins
                winner.textContent = " You Lose! :(";
                cScore++;
                updateScore();
                return;
            }
            else
            {
                //player wins
                winner.textContent = "You Win!! :)";
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock')
            {
                //computer wins
                winner.textContent = " You Lose! :(";
                cScore++;
                updateScore();
                return;
            }
            else {
                //player wins
                winner.textContent = "You Win!! :)";
                pScore++;
                updateScore();
                return;
            }
        }
    }
    //call all the inner functions
    startGame();
    playMatch();
};

game();