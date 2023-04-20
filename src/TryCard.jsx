

const TryCard = (props) => {
    const {inputs, setInputs, calcDuration,  changeColor, setDisplayimg, handleChangeInput } = props
    return (
        <>
            <label>TiTle</label>
            <input type="text" placeholder="type anything" name="title" onChange={handleChangeInput} ></input>
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
            <input type="time" name="time_start" onChange={handleChangeInput} ></input>
            <label htmlFor="time_end">Time-End: </label>
            <input type="time" name="time_end" onChange={handleChangeInput}></input>
            <button onClick={calcDuration}>duration</button>
            <br />
            <p>Date</p>
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" onChange={handleChangeInput} ></input>
            <br />


            <input type="radio" name="task" value='red' onClick={(e)=>changeColor(e)} ></input>
            <label htmlFor="red">red</label>
            <input type="radio" name="task" value='yellow' onClick={()=>changeColor(value)}  ></input>
            <label htmlFor="yellow">yellow</label>
            <input type="radio" name="task" value='green' onClick={()=>changeColor(value)}  ></input>
            <label htmlFor="green">green</label>
            <br />




            <input type="radio" value="cardio" name="type" onChange={handleChangeInput} ></input>
            <label htmlFor="1">1</label>
            <input type="radio" value="walk" name="type" onChange={handleChangeInput} ></input>
            <label htmlFor="2">2</label>
            <input type="radio" value="swim" name="type" onChange={handleChangeInput} ></input>
            <label htmlFor="3">3</label>
        </>
    )
}

export default TryCard;