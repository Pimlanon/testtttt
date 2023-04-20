import "./style.css"
import { useState } from "react"
import upload from "./assets/img/126477.png"

function Uploader() {
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState('no selected file');
    return(
        <main>
            <form 
            onClick={() => document.querySelector(".input-field").click()} >
                <input type="file" accept="image/*" className="input-field" hidden
                onChange={({ target: {files}}) => {
                    files[0] && setFilename(files[0].name)
                    if(files){
                        setImage(URL.createObjectURL(files[0]))
                    }
                }} ></input>
                {/* {image ?
                <img src={image} className="img-upload" alt={filename} />
                :
                <img src={upload} className="icon-upload" />
                } */}

                <img src={image} className="img-upload" />
                <label forhtml="file"><img src={upload} className="icon-upload" /></label>

                
            </form>
        </main>
    )
}

export default Uploader