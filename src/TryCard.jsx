

const TryCard = (props) => {
    const { calcDuration,  changeColor, handleChangeInput } = props
    return (
        <>
            <label>TiTle</label>
            <input type="text" placeholder="type anything" name="title" onChange={handleChangeInput} ></input>
            <br />




            <label>Caption</label>
            <br />
            <textarea placeholder="caption" name="caption" onChange={handleChangeInput} />
            
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


            <input type="radio" name="task" value="red" onClick={(e)=>changeColor(e)} onChange={handleChangeInput}></input>
            <label htmlFor="red">red</label>
            <input type="radio" name="task" value="yellow" onClick={(e)=>changeColor(e)} onChange={handleChangeInput}  ></input>
            <label htmlFor="yellow">yellow</label>
            <input type="radio" name="task" value="green" onClick={(e)=>changeColor(e)} onChange={handleChangeInput}  ></input>
            <label htmlFor="green">green</label>
            <br />




            <input type="radio" value="cardio" name="type" onChange={handleChangeInput} ></input>
            <label htmlFor="1">1</label>
            <input type="radio" value="walking" name="type" onChange={handleChangeInput} ></input>
            <label htmlFor="2">2</label>
            <input type="radio" value="swim" name="type" onChange={handleChangeInput} ></input>
            <label htmlFor="3">3</label>
        </>
    )
}

export default TryCard;