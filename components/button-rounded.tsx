import React from 'react';

interface Props {
    text: string;
    bgColor: string;
    textColor?: string;
    href: string,
    fontSize: string;
}

const ButtonRounded = ({ text, bgColor, textColor,  href, fontSize }: Props) => {
    const buttonStyle = {
        borderRadius: '30px',
        border: 'none',
        backgroundColor: bgColor,
        color: textColor ?? "#fff",
        padding: '.3em .5em',
        fontSize: fontSize,
        cursor: 'pointer',
        fontFamily: 'becker-wood-type'
    };

    return <button style={buttonStyle} >{text}</button>;
};

export default ButtonRounded;
