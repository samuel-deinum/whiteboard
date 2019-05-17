import React from 'react';

import "./OpenCloseButton.css";

const opencloseButton = (props) => {
    return ( <div className="OpenCloseButton" onClick={props.ocButton}>^</div> );
}
 
export default opencloseButton;