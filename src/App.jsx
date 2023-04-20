import { useState } from 'react'
import './App.css'
import TryCard from './TryCard';
import cardio from '../src/assets/img/cardio.png';
import walking from './assets/img/walking.png'
import swim from './assets/img/swimming.png';
import Uploader from './Uploader'
import Card from './Card'

function App() {
  // const [ title, setTitle ] = useState('This is TITLE');
  // const [ caption, setCaption ] = useState('here is caption');
  // const [ timeStart, setTimeStart ] = useState('');
  // const [ timeEnd, setTimeEnd ] = useState('');
  // const [ hour, setHour ] = useState('');
  // const [ min, setMin ] = useState('');
  // const [ date, setDate ] = useState('');
  // const [ task, setTask ] = useState('');
  // const [ displayimg, setDisplayimg ] = useState({
  //   cardio: false, walking: false, swim: false
  // });
  

  // function calcDuration () {
  //   let tStart = timeStart;
  //   let tEnd = timeEnd;
  //   console.log(tStart, tEnd);

  //   //convert timeStart and timeEnd to milliseconds
  //   let milliseconds1 = Number(tStart.split(':')[0]) * 60 * 60 * 1000 + Number(tStart.split(':')[1]) * 60 * 1000;
  //   let milliseconds2 = Number(tEnd.split(':')[0]) * 60 * 60 * 1000 + Number(tEnd.split(':')[1]) * 60 * 1000;
  //   console.log(milliseconds1, milliseconds2);

  //   //find differences in milliseconds
  //   let difference = Math.abs(milliseconds2 - milliseconds1);
  //   if (milliseconds2 < milliseconds1) {
  //       difference = 86400000 - difference;
  //   }
  //   console.log(difference)

  //   let msec = difference;
  //           let hh = Math.floor(msec / 1000 / 60 / 60);
  //           msec -= hh * 1000 * 60 * 60;
  //           console.log('hh ' + hh);
  //           console.log('hh ' + msec);
  //           let mm = Math.floor(msec / 1000 / 60);
  //           console.log('mm1 ' + mm);
  //           msec -= mm * 1000 * 60;
  //           console.log('mm2 ' + msec);
  //           let ss = Math.floor(msec / 1000);
  //           msec -= ss * 1000;

  //           console.log(hh + ":" + mm + ":" + ss);

  //           //prepare to display in preview card
  //           let displayHour = hh + ' h';
  //           let displayMin = mm + ' m'
  //           console.log(displayHour, displayMin)

  //           if (hh === 0) {
  //             setHour('');
  //             setMin(displayMin);
  //           } else if (mm === 0) {
  //             setHour(displayHour);
  //             setMin('');
  //           } else if (hh > 0 && mm > 0) {
  //             setHour(displayHour);
  //             setMin(displayMin);
  //           } else {
  //             setHour('0 h');
  //             setMin('0 m');
  //           }
  // }

  // let changeColor = (data) => {
  //   const color = ['#e58e5e', 'green', 'yellow']
  //   if (data == 'red') {
  //     console.log('you click red')
  //     setTask(color[0])
  //   }
  //   if (data == 'green') {
  //     console.log('you click green')
  //     setTask(color[1])
  //   }
  //   if (data == 'yellow') {
  //     console.log('you click yellow')
  //     setTask(color[2])
  //   }
  // }


  return (
    <>
      <h1>test</h1>
      <Card />
      
      {/* <TryCard  setTitle={setTitle} setCaption={setCaption} 
      setTimeStart={setTimeStart} setTimeEnd={setTimeEnd} 
      calcDuration={calcDuration} setDate={setDate}
      changeColor={changeColor} setDisplayimg={setDisplayimg} /> */}

      
    </>
  )
}

export default App
