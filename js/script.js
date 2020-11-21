const   $hour      = document.querySelector('.h'),
        $minute      = document.querySelector('.m'),
        $second      = document.querySelector('.s'),
        $hoursNum    = document.querySelector('.hours'),
        $minutesNum  = document.querySelector('.minutes')
    
function clock() {
    const time = new Date(),
        hour    = time.getHours() * 30,
        minute  = time.getMinutes() * 6,
        second  = time.getSeconds() * 6;
        
    $hour.style =   `transform: rotate(${hour}deg); transition:1s linear;`
    $minute.style = `transform: rotate(${minute}deg); transition:1s linear;`
    $second.style = `transform: rotate(${second}deg); transition:1s linear;`
    
    $hoursNum.innerHTML = time.getHours() > 9 ? time.getHours() : '0' + time.getHours() 
    $minutesNum.innerHTML = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes() 
    
    setTimeout(() => {
        clock()
    }, 1000);
}

clock()

const tabsItems = document.querySelectorAll('.tabsItem'),
tabsContentItems = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItems.length; i++) {
    const item = tabsItems[i];
    
    item.addEventListener('click', ()=>{
        
        tabsItems.forEach(item => item.classList.remove('active'))
        tabsContentItems.forEach(item => item.classList.remove('active'))
        
        tabsItems[i].classList.add('active')
        tabsContentItems[i].classList.add('active')
        
    })
    
}
const btn = document.querySelector('.stopwatch__btn'),
stopwatcHours = document.querySelector('.stopwatch__hours'),
stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
btnColor = document.querySelector('.tabsLink__span');
let interval;
btn.addEventListener('click', (e)=>{
    if (e.target.innerHTML === 'start') {
        btn.innerHTML = 'stop',
        btnColor.style.display = 'flex',
        btnColor.style.background = 'green'
        interval = setInterval(() => {
            if (stopwatchSeconds.innerHTML < 60) {
                stopwatchSeconds.innerHTML = ++stopwatchSeconds.innerHTML
                if (stopwatchSeconds.innerHTML > 59) {
                    stopwatchSeconds.innerHTML = 1,
                    stopwatchMinutes.innerHTML = ++stopwatchMinutes.innerHTML
                    if (stopwatchMinutes.innerHTML > 59) {
                        stopwatchMinutes.innerHTML = 1,
                        stopwatcHours.innerHTML = ++stopwatcHours.innerHTML
                    }    
                }
                
        }
        }, 1000);
        
    } else if(e.target.innerHTML === 'stop') {
        btn.innerHTML = 'clear',
        btnColor.style.display = 'flex',
        btnColor.style.background = 'red'
        function stop() {
            clearInterval(interval)   
        }
        stop()
        
    } else if(e.target.innerHTML === 'clear') {
        btn.innerHTML = 'start',
        btnColor.style.display = 'none'
        function clear() {
            clearInterval(stopwatchSeconds.innerHTML = 0,
                          stopwatchMinutes.innerHTML = 0,
                          stopwatcHours.innerHTML = 0
                          )
        }
        clear()
    }
})










