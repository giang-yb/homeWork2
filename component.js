const stopWatchContainer = document.querySelector("#stopWatch");

const btnAddstopWatch = document.querySelector("#addStopWatch");

const btnStartAll = document.querySelector("#startAll");

const btnPauseAll = document.querySelector("#pauseAll");

const btnRestartAll = document.querySelector("#restartAll");

const listWatch = [];

const convertSecondToTime = (seconds) => {
    let s = seconds % 60;
    let m = Math.floor(seconds / 60);

    if(s<10) s= "0" + s;
    if(m<10) m = "0" + m;

    return m + ":" + s;
}

btnAddstopWatch.addEventListener("click", () => {
    const addStopWatch = new StopWatch();
    listWatch.push(addStopWatch);
    stopWatchContainer.appendChild(addStopWatch.container);
})

btnStartAll.addEventListener("click", () => {
    listWatch.forEach(addStopWatch => {
        addStopWatch.handleStart();
    })
})

btnPauseAll.addEventListener("click", () => {
    listWatch.forEach(addStopWatch => {
        addStopWatch.handlePause();
    })
})

btnRestartAll.addEventListener("click", () => {
    listWatch.forEach(addStopWatch => {
        addStopWatch.handleRestart();
    })
})


class StopWatch {
    count = 0; //để đếm
    interval = null; //để chạy

    container;
    txtTime;
    btnStart;

    isStarted = false;

    constructor(){
        this.container = document.createElement("div");

        this.txtTime = document.createElement("span");
        this.txtTime.classList.add('btn');
        this.txtTime.innerHTML = "00:00";
        
        this.btnStart = document.createElement("button");
        this.btnPause = document.createElement("button");
        this.btnRestart = document.createElement("button");

        this.btnStart.innerHTML = "Start";
        this.btnStart.classList.add('btn', 'btn_start');

        //document.createStyleSheet().addRule('#btn:hover', 'background-color: #eb4d4b;');

        this.btnPause.innerHTML = "Pause";
        this.btnPause.classList.add('btn', 'btn_pause');
        this.btnRestart.innerHTML = "Restart";
        this.btnRestart.classList.add('btn', 'btn_restart');

        this.btnStart.addEventListener("click", this.handleStart);
        this.btnPause.addEventListener("click", this.handlePause);
        this.btnRestart.addEventListener("click", this.handleRestart);

        

        this.container.appendChild(this.txtTime);
        this.container.appendChild(this.btnStart);
        this.container.appendChild(this.btnPause);
        this.container.appendChild(this.btnRestart);

    }

    handleStart = () => {
        if(!this.isStarted){
            this.interval = setInterval(()=>{
            //run code
            this.count++;
            this.txtTime.innerHTML = convertSecondToTime(this.count);
            },1000)
            this.isStarted = true;
        }else{
            alert("Started!");
            return;
        }
        
        //this.btnStart.disabled = true;
    }

    handlePause = () => {
        clearInterval(this.interval);
        //this.btnStart.disabled = false;
        this.isStarted = false;
    }

    handleRestart = () =>{
        clearInterval(this.interval);
        this.count = -1;
        this.txtTime.innerHTML = "00:00";
    }
}