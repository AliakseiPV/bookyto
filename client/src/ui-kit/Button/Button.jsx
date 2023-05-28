import React from 'react';
import "./Button.scss"

function Button({buttonType, isDisabled, buttonText, onClickHandler, className}) {
    return (
        <button
            className={className}
            type={buttonType}
            disabled={isDisabled}
            onClick={onClickHandler}
        >
            {buttonText}
        </button>
    );
}

export default Button;