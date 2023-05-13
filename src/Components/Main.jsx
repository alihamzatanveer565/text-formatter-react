import React, {useState} from 'react'

const Main = () => {
    const toUpperCase = () => {
        setText(text.toUpperCase());
    };
    const toLowerCase = () => {
        setText(text.toLowerCase());
    }
    const onTextChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <div className="container mt-5">
        <div className="mb-3">
            <label htmlFor="textFormatter" className="form-label fs-1">Text Formatter</label>
            <textarea className="form-control" value={text} id="textFormatter" rows="8" placeholder='Enter text here' onChange={onTextChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary me-2" onClick={toUpperCase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary" onClick={toLowerCase}>Convert to Lowercase</button>
    </div>
  )
}

export default Main