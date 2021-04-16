class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    // let secLeadingZero = '';
    // let minLeadingZero = '';
    // let hrLeadingZero = '';
    // if (this.seconds < 10){
    //   let secLeadingZero = '0';
    // }
    // if (this.minutes < 10){
    //   let minLeadingZero = '0';
    // }
    // if (this.hours < 10){
    //   let hrLeadingZero = '0';
    // }
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    // let time = `${hrLeadingZero}${this.hours}:${minLeadingZero}${this.minutes}:${secLeadingZero}${this.seconds}`;
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // console.log(this.seconds);
    this.seconds= this.seconds + 1;
    if (this.seconds === 60){
      this.seconds = 0;
      this.minutes+=1;
    }
    if (this.minutes === 60){
      this.minutes = 0;
      this.hours+=1;
    }
    if (this.hour === 24){
      this.hour = 0;
    }
    // this.setSeconds(newSec);
    // console.log(this.seconds)
    // 2. Call printTime. 
    this.printTime();
    // console.log('flag')
  }
}

const clock = new Clock();
// setInterval(function(){ console.log("Hello"); },1000);
