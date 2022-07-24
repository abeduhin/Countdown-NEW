function initCountdown(parent, to) {
    let timer;
    parent && to ? timer = setInterval(countdown, 1000) : null;
    
    function countdown() {

        let decCache = [],
        decCases = [2, 0, 1, 1, 1, 2];
    function decOfNum(number, titles)
     {
        if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
        return titles[decCache[number]];
    }
    
    
        let toCountDate = new Date(to);
        let currentDate = new Date();
                
        let totalSeconds = Math.floor((toCountDate - currentDate) / 1000);
            
        const seconds = totalSeconds % 60;
        const minuts = Math.floor((totalSeconds / 60) % 60);
        const hours = Math.floor((totalSeconds / 3600) % 24);
        const days = Math.floor((totalSeconds / 86400));
            
        const rootElements = document.querySelectorAll(parent);

        rootElements.forEach(root => {
            if (days > 0 && root.querySelector('.days')) {
                root.querySelector('.days .num').textContent = days;
                root.querySelector('.days .name').textContent = decOfNum(days, ['день', 'дня', 'днів']);
             } else {
                root.querySelector('.days').style.display = 'none';
            } 

            if (root.querySelector('.hours')) {
            root.querySelector('.hours .num').textContent = hours;
            root.querySelector('.hours .name').textContent = decOfNum(hours, ['година', 'години', 'годин']);
            }

            if (root.querySelector('.minuts')) {
            root.querySelector('.minuts .num').textContent = minuts;
            root.querySelector('.minuts .name').textContent = decOfNum(minuts, ['хвилина', 'хвилини', 'хвилин']);
            }
            if (root.querySelector('.seconds')) {
            root.querySelector('.seconds .num').textContent = seconds;
            root.querySelector('.seconds .name').textContent = decOfNum(seconds, ['секунда', 'секунди', 'секунд']);
            }

            if (days <= 0 && hours <= 0 && minuts <= 0 && seconds <= 0) {
                clearInterval (timer);
                root.textContent = 'Матч завершено'
            }
                            
        });
    }  
    countdown()
    setInterval(countdown, 1000)   
}

initCountdown('.countdown', '15 Jul 2022 21:00:00')
initCountdown('.countdown-2', '20 Oct 2022 21:00:00')