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
    const clearText = () => {
        setText('');
    }
    const [text, setText] = useState('');
    const wordCount = text.trim().split(' ').filter(Boolean).length;
  return (
    <>
        <div className="container mt-5">
            <h1>Text Formatter</h1>
            <div className="row mb-3 px-2 px-sm-0">
                <textarea className="form-control " value={text} rows="8" placeholder='Enter text here' onChange={onTextChange}></textarea>
            </div>
            <div className="d-flex flex-sm-row flex-column">
                <button type="button" className="btn btn-primary me-sm-2 mb-2" onClick={toUpperCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary me-sm-2 mb-2" onClick={toLowerCase}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary me-sm-2 mb-2" onClick={clearText}>Clear Text</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{wordCount} {wordCount < 2 ? 'Word' : 'Words' } and {text.length} {text.length < 2 ? 'Character' : 'Characters'}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}

export default Main