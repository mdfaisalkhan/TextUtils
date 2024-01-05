import React ,{useState} from "react";
export default function TextForm(props){
    const handleUpClick = ()=>{
        if (text === "") {
            props.showAlert("Please write something in the Textarea", "Warning");
        }
        else{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase", "Success")
        }
      }
    const handleLoClick = ()=>{
        if (text === "") {
            props.showAlert("Please write something in the Textarea", "Warning");
        }
        else{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase", "Success")
        }
    }
    const handleScClick = ()=>{
        if (text === "") {
            props.showAlert("Please write something in the Textarea", "Warning");
        }
        else{
            let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (match) => match.toUpperCase());
            setText(newText);
            props.showAlert("Converted to sentence case", "Success")
        }
    }
   
    const handleTCClick = () => {
        if (text === "") {
            props.showAlert("Please write something in the Textarea", "Warning");
        }
        else{
            let newText = text.toLowerCase().replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
            setText(newText);   
            props.showAlert("Converted to title case", "Success")
        }
    };


    const handleAltCaseClick = () => {
        let newText ='';
        if (text === "") {
            props.showAlert("Please write something in the Textarea", "Warning");
        }
        else{
            for (let i = 0; i < text.length; i++) {
                if (i % 2 === 0) {
                    newText += text.charAt(i).toUpperCase();
                } else {
                    newText += text.charAt(i).toLowerCase();
                }
            }
        setText(newText);   
        props.showAlert("Converted to alternate", "Success")
    }
    };
    const handleInvCaseClick = () => {
        let newText ='';

        if (text === "") {
            props.showAlert("Please write something in the Textarea", "Warning");
        }
        else{

            for (let i = 0; i < text.length; i++) {
                if (i % 2 === 0) {
                    newText += text.charAt(i).toLowerCase();
                } else {
                    newText += text.charAt(i).toUpperCase();
                }
            }
            setText(newText);
            
            props.showAlert("Converted to inverse case", "Success")
        }
    };

      const encryptText = (text, shift) => {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {
                encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            } else {
                encryptedText += text.charAt(i);
            }
        }
        return encryptedText;
    };
    const handleEncryptClick = () => {
       
        if(text === ""){
        props.showAlert("Write something", "Warning")
        }
        else{
            const shift = 3; // You can define your desired shift value here
            let newText = encryptText(text, shift);
            setText(newText);
            props.showAlert("Converted to encrypt case", "Success")
        }
        
    };

    const decryptText = (text, shift) => {
        return encryptText(text, (26 - shift) % 26);
    };

    const handleDecryptClick = () => {
        if (text === "") {
        props.showAlert("Write something", "Warning")
        } 
        else {
            const shift = 3; // Use the same shift value used for encryption
            let newText = decryptText(text, shift);
            setText(newText);
            props.showAlert("Converted to decrypt case", "Success")
            }
        
    };
    const handleCopy=()=>{
        if (text === "") {
            props.showAlert("Please write something in the Textarea", "Warning");
        }
        else{

            navigator.clipboard.writeText(text);
            // document.getSelection().removeAllRanges ();
            props.showAlert("Copied to Clipboard!", "Success");
        }
    }

   
    const textClear = () => {
        if (text === "") {
            props.showAlert("Write something", "Warning");
        } 
        else {
            setText('');
            props.showAlert("Text cleared", "Success");
        }
    
    };
    const handleOnChange = (event)=>{ 
            setText(event.target.value)
    }

    const [text,setText] = useState('');
    // text = "Enter the text 2"; // Wrong way to set the text
    // setText = "Enter the text 2"; // correct way to set the text

    return(
        <>
        <div className='container' >
            <h2 style={{color: props.mode ==='dark'?'white':'rgb(66, 66, 66)'}}>{props.heading}</h2>
            <div className="text">
                <textarea className="textarea" onChange={handleOnChange}value={text} style={{backgroundColor: props.mode ==='dark'?'rgb(36, 36, 36)':'white' , color: props.mode ==='dark'?'white':'black'}}  id='myBox' rows='10' cols=''></textarea>
            </div>
            <div className='all-btn'>

            <button disabled={text.length===0} className="btn-textUtils" onClick={handleUpClick} onChange={handleOnChange}>Convert to Uppercase</button>
            <button className="btn-textUtils" onClick={handleLoClick} onChange={handleOnChange}>Convert to Lowercase</button>
            <button className="btn-textUtils" onClick={handleScClick} onChange={handleOnChange}>Sentence case</button>
            <button className="btn-textUtils" onClick={handleTCClick} onChange={handleOnChange}>Title case</button>
            <button className="btn-textUtils" onClick={handleAltCaseClick} onChange={handleOnChange}>AlTeRnAtE case</button>
            <button className="btn-textUtils" onClick={handleInvCaseClick} onChange={handleOnChange}>iNvErSe case</button>
            <button className="btn-textUtils" onClick={handleEncryptClick} onChange={handleOnChange}>Encrypt case</button>
            <button className="btn-textUtils" onClick={handleDecryptClick} onChange={handleOnChange}>Decrypt case</button>
            <button className="btn-textUtils" onClick={handleCopy} onChange={handleOnChange}>Copy</button>
            <button className="btn-textUtils" onClick={textClear} onChange={handleOnChange}>Clear</button>
            </div>
        </div>
        <div className="container" >
            <h2 style={{color: props.mode ==='dark'?'white':'rgb(66, 66, 66)'}}>Your text summary </h2>
            <p className="wordchar">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p className="readmin" > {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2 className="preview" style={{color: props.mode ==='dark'?'white':'rgb(66, 66, 66)'}}>Preview</h2>
            <p className="preview-text" style={{color: props.mode ==='dark'?'white':'black'}}>{text.length>0?text:"Nothing to preview"}</p>
          


        </div>

        </>

    )

}