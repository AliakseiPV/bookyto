import { useState } from "react";
import {Input, Error} from "../ui-kit";

const FormItem = ({
    htmlFor,
    labelText,
    nameInput,
    typeInput,
    requiredBool,
    onChangeHandler,
    errors,
    setErrors,
    item,
    setItem
    }) => {
    const [onFocus, setOnFocus] = useState(false);

    return (
        <>
            <Input 
                htmlFor={htmlFor} 
                labelText= {labelText}
                valueInput={item}
                typeInput={typeInput}
                nameInput={nameInput}
                requiredBool={requiredBool}
                onChange={(event) => {
                    setErrors(onChangeHandler(event))
                    setItem(event.target.value)
                }}
                onFocusInput={() => setOnFocus(true)}
                onBlurInput={() => setOnFocus(false)}                
            />
            {(onFocus && errors.length) ? <Error errors={errors}/> : <></>}
        </>
    );
};

export default FormItem;