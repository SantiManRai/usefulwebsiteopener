import React from "react";

const Button = ({name,link})=>
    {
        return <a href= {link} target="_blank"><button className='button'>{name}</button> </a>   
    }

export default Button;