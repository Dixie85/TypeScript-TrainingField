import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  value: string,
  type?: 'submit',
  isEdit?: boolean
}

const Button = ({ onButtonClick, value, type, isEdit }: IButtonProps) => {
  const isGoBack = value !== "Go Back ⇐"
  return (
    <>
      {isGoBack ?
        <button
          onClick={onButtonClick}
          value={value}
          className={`${value} ${isEdit ? '' : 'selected'}`}
          type={type || 'button'}
        >
          {value}
        </button>
        :
        <Link to={'/catalog'}>
          <button
            onClick={onButtonClick}
            value={value}
            className={`${value} ${isEdit ? '' : 'selected'}`}
            type={type || 'button'}
          >
            {value}
          </button>
        </Link>
      }

    </>
  )
}

export default Button