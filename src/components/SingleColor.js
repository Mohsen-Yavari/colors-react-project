import React,{useState,useEffect} from 'react';

import rgbToHex from './RgbColors';

//style
import "./color.css";

function SingleColor({rgb,weight,index,hexColor}) {
    const [alert,setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        },3000)
        return () => clearTimeout(timeout)
    },[alert]);
    
        return (
            <article className={`color ${index > 10 && " "}`}
             style={{ background: `rgb(${bcg})`}}
             onclick={() => {setAlert(true)
            navigator.clipboard.writeText(hexValue)
            }}
             >
              <p className="presantage-value">{weight}%</p> 
              <p className="color-value">{hexValue}</p>
              {alert && <p className="alert">coppid to clipboard</p>}  
            </article>
        );
    }
 

export default SingleColor;