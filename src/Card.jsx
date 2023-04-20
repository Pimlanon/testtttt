import cardio from '../src/assets/img/cardio.png';
import walking from './assets/img/walking.png'
import swim from './assets/img/swimming.png';
import Uploader from './Uploader'
import { useState } from 'react'
import TryCard from './TryCard';

function Card() {
    const [ inputs, setInputs] = useState ({
        title: '',
        caption: '',
        time_start: '',
        time_end: '',
        duration: '',
        date: '',
        task: '',
        type: ''
    })
    

function calcDuration () {
    let tStart = inputs.time_start;
    let tEnd = inputs.time_end;
    // console.log(tStart, tEnd);

    //convert timeStart and timeEnd to milliseconds
    let milliseconds1 = Number(tStart.split(':')[0]) * 60 * 60 * 1000 + Number(tStart.split(':')[1]) * 60 * 1000;
    let milliseconds2 = Number(tEnd.split(':')[0]) * 60 * 60 * 1000 + Number(tEnd.split(':')[1]) * 60 * 1000;
    // console.log(milliseconds1, milliseconds2);

    //find differences in milliseconds
    let difference = Math.abs(milliseconds2 - milliseconds1);
    if (milliseconds2 < milliseconds1) {
        difference = 86400000 - difference;
    }
    // console.log(difference)

    let msec = difference;
            let hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            // console.log('hh ' + hh);
            // console.log('hh ' + msec);
            let mm = Math.floor(msec / 1000 / 60);
            // console.log('mm1 ' + mm);
            msec -= mm * 1000 * 60;
            console.log('mm2 ' + msec);
            let ss = Math.floor(msec / 1000);
            msec -= ss * 1000;

            console.log(hh + ":" + mm + ":" + ss);

            //prepare to display in preview card
            let displayHour = hh + ' h';
            let displayMin = mm + ' m'
            console.log(displayHour, displayMin)

            let hour;
            let min; 
            if (hh === 0) {
                hour = '';
                min = displayMin;
            } else if (mm === 0) {
                hour = displayHour;
                min = '';
            } else if (hh > 0 && mm > 0) {
                hour = displayHour;
                min = displayMin;
            } else {
                hour = '0 h';
                min = '0 m';
            }
            let calculateDuration = `${hour} : ${min}`
            setInputs({...inputs,duration:calculateDuration})
    }

    let changeColor = (e) => {
        const color = ['red', 'green', 'yellow']
        const { name, value } = e.target
        if (value == 'red') {
            // console.log('you click red')
            setInputs({...inputs,[name]: color[0]})
            
            
        }
        if (value == 'green') {
            // console.log('you click green')
            setInputs({...inputs,[name]: color[1]})
        }
        if (value == 'yellow') {
            // console.log('you click yellow')
            setInputs({...inputs,[name]: color[2]})
        }
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        // console.log({...inputs})
        setInputs({...inputs,[name]: value})
        // console.log({...inputs})
        
    }
    console.log(inputs)

    return (
        
    <div>
            <Uploader />
        <div>
            
            
            {inputs.type === 'cardio' && <img src={cardio} style={{width:"30px", height:"30px"}} />}
            {inputs.type === 'walking' && <img src={walking} style={{width:"30px", height:"30px"}} />}
            {inputs.type === 'swim' && <img src={swim} style={{width:"30px", height:"30px"}} />}
            
            
        </div>
        <p> title {inputs.title}</p>
        <p> caption {inputs.caption} </p>
        <p>duration : {inputs.duration}</p>
        <p>date : {inputs.date}</p>
        <div style={{backgroundColor:inputs.task, height:"50px", width:"50px"}}></div>

        <TryCard  
        calcDuration={calcDuration} changeColor={changeColor} handleChangeInput={handleChangeInput} />
    </div>
    )
}

export default Card