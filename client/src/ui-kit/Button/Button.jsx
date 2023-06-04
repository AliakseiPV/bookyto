import React from 'react';
import "./Button.scss"
import classnames from 'classnames';


function Button({buttonType, isDisabled, buttonText, onClickHandler, className}) {
    return (
        <button
            className={classnames('Button', className)}
            type={buttonType}
            disabled={isDisabled}
            onClick={onClickHandler}
        >
            {buttonText}
        </button>
    );
}

export default Button;