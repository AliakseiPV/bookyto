import { useState } from "react";
import {Input} from "../ui-kit";
import FormError from "./FormError";

const FormItem = ({ 
    validate, 
    htmlFor,
    labelText,
    nameInput,
    typeInput,
    requiredBool,
    onChangeHandler,
    }) => {
    const [item, setItem] = useState(''); 
    const [error, setError] = useState([validate]);
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
                    onChangeHandler ? setError(onChangeHandler(event)) : setError([])
                    setItem(event.target.value)
                }}
                onFocusInput={() => setOnFocus(true)}
                onBlurInput={() => setOnFocus(false)}                
            />
            {(validate && onFocus && error.length) ? <FormError errors={error}/> : <></>}
        </>
    );
};

export default FormItem;