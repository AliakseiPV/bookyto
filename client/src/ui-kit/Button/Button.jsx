import React from 'react';

function FormButton({buttonType, isDisabled, buttonText, onClickHandler}) {
    return (
        <button
            type={buttonType}
            disabled={isDisabled}
            onClick={onClickHandler}
        >
            {buttonText}
        </button>
    );
}

export default FormButton;