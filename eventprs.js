const randomEvents = function() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];  
        }
        return color;
    };
    let intervalId;
    const startchangingcolor = function() {
      intervalId = setInterval(changebgcolor, 1000);
     function changebgcolor() {
         document.body.style.backgroundColor = randomEvents();
     }
    };
    const stopchangingcolor = function() {
        clearInterval(intervalId);
        intervalId = null;
    };
    
    document.getElementById('startButton').addEventListener('click', startchangingcolor);
    document.getElementById('stopButton').addEventListener('click', stopchangingcolor);
        
