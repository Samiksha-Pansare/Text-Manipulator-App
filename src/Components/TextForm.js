import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = (event)=> {
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase","success")
    }
    const handleLoClick = (event)=> {
        event.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase","success")
    }
    const handleclrClick = (event)=> {
        event.preventDefault();
        let newText = "";
        setText(newText);
        props.showAlert(" Cleared the text","success")
    }
    const handlecopy = (event)=> {
        event.preventDefault();
        var textcopy = document.getElementById("myBox");
        textcopy.select();
        navigator.clipboard.writeText(textcopy.value);
        props.showAlert(" Copied to Clipboard","success")
    }
    const handlesearchClick = (event)=> {
        event.preventDefault();
        setans(text.split(searchstr).length - 1);
    }
    const handleOnChange = (event)=> {
        event.preventDefault();
        setText(event.target.value);
    }
    const handleOnChangesearch = (event)=> {
        event.preventDefault();
        setsearchstr(event.target.value);
    }
    const [text, setText] = useState('');
    const [searchstr, setsearchstr] = useState('');
    const [ans, setans] = useState('');
    
    //   text = "new text "//wrong way to set text
    //   setText("nnew Text")//Correct way
    return (
        <>
        <div className='container'  style={{color: props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" style={{backgroundColor: props.mode==='light'?'white':'#00111a',color: props.mode==='light'?'black':'white'}} rows="8" placeholder='Enter text here'></textarea>
            </div>
            
            <form className="d-flex justify-content-center">
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleclrClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy</button>
            <input className="form-control my-2" type="search" value={searchstr} onChange={handleOnChangesearch} placeholder="Search occurence of a specific word in your text" aria-label="Search" />
            <button className="btn btn-primary my-2 mx-2" type="submit"  onClick={handlesearchClick}>Search</button>
            <span>{ans}</span>
          </form>
        </div>
        
        <div className="container my-3"   style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>
                {text.split(" ").length}  Words,{text.length} characters
            </p>
            <p>
                {0.008*(text.split(" ").length)}  Minutes Read
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
        
  )
}
