import React from 'react';
import {Button} from '../../ui-kit'


const SellerOptions = ({text, btn1, btn2, userName}) => {

    return (
        <>
            <p>
              {`${text} ${userName}:`}
            </p>
            <Button
                buttonType='button'
                buttonText={btn1.text}
                onClickHandler={btn1.navigate}
                className={btn1.className}
            />
            <Button
                buttonType='button'
                buttonText={btn2.text}
                onClickHandler={btn2.navigate}
                className={btn2.className}
            />
        </>
    );
};

export default SellerOptions;