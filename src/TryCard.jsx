

const TryCard = (props) => {
    const {setTitle, setCaption, setTimeStart, setTimeEnd, 
        calcDuration, setDate, changeColor, setDisplayimg, } = props
    return (
        <>
            <label>TiTle</label>
            <input type="text" placeholder="type anything" onChange={(e) => setTitle(e.target.value) } ></input>
            <br />
            <label>Caption</label>
            <br />
            <textarea placeholder="caption" onChange={(e) => setCaption(e.target.value)} />
            {/* <br />
            <input type="radio" value="1" name="test"></input>
            <label htmlFor="1">1</label>
            <input type="radio" value="2" name="test"></input>
            <label htmlFor="2">2</label>
            <input type="radio" value="3" name="test"></input>
            <label htmlFor="3">3</label> */}
            <br />
            <p>Duration</p>
            <label htmlFor="time_start">Time-Start: </label>
            <input type="time" name="time_start" onChange={(e) => setTimeStart(e.target.value)} ></input>
            <label htmlFor="time_end">Time-End: </label>
            <input type="time" name="time_end" onChange={(e) => setTimeEnd(e.target.value)}></input>
            <button onClick={calcDuration}>duration</button>
            <br />
            <p>Date</p>
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" onChange={(e) => setDate(e.target.value)}></input>
            <br />
            <input type="radio" name="test" onClick={()=>changeColor('red')} ></input>
            <label htmlFor="red">red</label>
            <input type="radio" name="test" onClick={()=>changeColor('yellow')} ></input>
            <label htmlFor="yellow">yellow</label>
            <input type="radio" name="test" onClick={()=>changeColor('green')} ></input>
            <label htmlFor="green">green</label>
            <br />
            <input type="radio" value="1" name="icon" onClick={()=>setDisplayimg({cardio:true })} ></input>
            <label htmlFor="1">1</label>
            <input type="radio" value="2" name="icon" onClick={()=>setDisplayimg({walking:true })} ></input>
            <label htmlFor="2">2</label>
            <input type="radio" value="3" name="icon" onClick={()=>setDisplayimg({swim:true })} ></input>
            <label htmlFor="3">3</label>
        </>
    )
}

export default TryCard;