 const sele=document.querySelectorAll('.btn');
 const body = document.querySelector('body');
    sele.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const color = e.currentTarget.id;
            body.style.backgroundColor=color;
            if(e.currentTarget.id==='lightpink'){
                body.style.color=e.currentTarget.id;  }
                if(e.currentTarget.id!=='lightyellow '){
                    body.style.color=e.currentTarget.id;  }
                    if(e.currentTarget.id!=='lightblue '){
                    body.style.color=e.currentTarget.id;  }
                    if(e.currentTarget.id!=='lightgreen '){
                    body.style.color=e.currentTarget.id;  }
        });

    });

    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const height = parseFloat(document.getElementById('height').value)
        const weight = parseFloat(document.getElementById('weight').value)
        const resultDiv = document.getElementById('result');
        const guidDiv = document.getElementById('guid');
        if(height > 0 && weight > 0){
            const bmi = (weight / ((height * height)/10000)).toFixed(2)
            resultDiv.innerHTML = `<h3>Your BMI is ${bmi}</h3>`;
        } else {
            resultDiv.innerHTML = `<h3>Please enter valid height and weight!</h3>`;
        }

        if(bmi < 18.5){
            guidDiv.innerHTML = `<h3>You are underweight. It's important to eat a balanced diet and consult with a healthcare provider for personalized advice.</h3>`;
        }   else if(bmi >= 18.5 && bmi < 24.9){
            guidDiv.innerHTML = `<h3>You have a normal weight. Maintain your healthy lifestyle with a balanced diet and regular exercise.</h3>`;
        } else if(bmi >= 25 && bmi < 29.9){
            guidDiv.innerHTML = `<h3>You are overweight. Consider adopting a healthier diet and increasing physical activity. Consulting with a healthcare provider can provide personalized guidance.</h3>`;
        } else {
            guidDiv.innerHTML = `<h3>You are obese. It's advisable to seek guidance from a healthcare provider to develop a comprehensive plan for weight management, including diet, exercise, and possibly medical interventions.</h3>`;
        }   
    });

    const clockDiv = document.getElementById('clock');
    setInterval (function() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockDiv.innerHTML = `<h2>${timeString}</h2>`;
    }, 1000);    

    
   const randomnumber = parseInt(Math.random()*100 +1);
   const submit = document.getElementById('#subt');
   const userinput = document.getElementById('#Guessfield');
   const guessbtn = document.getElementById('.guesses');
   const result = document.getElementById('.lastresult');
   const loworhigh = document.getElementById('.loworhi');
  const starover = document.getElementById('.lastparas');

   const p = document.createElement('p');
   let prevguesses = [];
   let numguess = 1;
   let playgame = true;
    if(playgame){   
         submit.addEventListener('click', function(e){
            e.preventDefault();
            const guess = parseInt(userinput.value);
            validateguess(guess);
         });
    }

   function validateguess(guess){
         if(isNaN(guess)){  
            displaymessage('Please enter a valid number');
         } else if(guess < 1){
            displaymessage('Please enter a number between 1 and 100');
         } else if(guess > 100){
            displaymessage('Please enter a number between 1 and 100');
         }
            else{
                prevguesses.push(guess);
                if(numguess === 11){
                    displaymessage(`Game Over! The number was ${randomnumber}`);
                    endgame();
                } else{
                    checkguess(guess);
                }
            }
   }

   function checkguess(guess){
        if(guess === randomnumber){
            displaymessage(`Congratulations! You guessed the number ${randomnumber} correctly!`);
            endgame();
        } else if(guess < randomnumber){
            displaymessage('Too low! Try again.');
            numguess++;
        } else if(guess > randomnumber){
            displaymessage('Too high! Try again.');
            numguess++; 
        }
   }

   function displayguess(guess){
        p.innerHTML += `${guess} `;
        guessbtn.appendChild(p);



   }

   function displaymessage(message){
        result.innerHTML = `<h3>${message}</h3>`;

   }

   function newgame(){
        playgame = false;
        guessbtn.innerHTML = '';
        loworhigh.innerHTML = '';
        starover.innerHTML = `<button id="newgamebtn">Start New Game</button>`;
        const newgamebtn = document.getElementById('newgamebtn');   
   }

    function endgame(){
        userinput.value = '';
        userinput.setAttribute('disabled', '');
        submit.setAttribute('disabled', '');
        newgame();  
    }
