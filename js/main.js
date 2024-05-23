        function updateTime() {
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes();
          const seconds = now.getSeconds();
          const day = now.getDay();
          // Pad single digit minutes and seconds with a leading zero
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
          const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
          // Format the time as HH:MM:SS
          const timeString = `${hours}:${formattedMinutes}:${formattedSeconds}`;
          const dayName = daysOfWeek[day];
          // Update the time display
          document.getElementById('clock').textContent = timeString;
          document.getElementById('day').textContent = dayName;
        }
        // Call the updateTime function immediately to display the time
        updateTime();
        // Update the time every second
        setInterval(updateTime, 1000);
        const music = document.getElementById("playmusic");
        var audio = document.getElementById('myAudio');
        music.addEventListener("click", () => {
          if (audio.paused) {
            audio.play();
          }
          else {
            audio.pause();
          }
        });
        console.log(au)