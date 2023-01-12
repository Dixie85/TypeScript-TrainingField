import React from 'react'
import './Button.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onButtonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, 
    value: string,
    type?: 'submit' 
}

const Button = ({ onButtonClick, value, type }: IButtonProps, ) => {
    return (
        <button
            onClick={onButtonClick}
            value={value}
            className={value}
            type={type || 'button'}
            >
            {value}
            </button>
    )
}

export default Button