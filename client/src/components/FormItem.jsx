import { useContext, useState } from "react";
import {Input, Error} from "../ui-kit";
import { FormContext } from "./Form";

const FormItem = ({
    htmlFor,
    labelText,
    nameInput,
    typeInput,
    requiredBool,
    }) => {

    const formContext = useContext(FormContext)
    const {form, handleChange, inputErrors} = formContext

    const [onFocus, setOnFocus] = useState(false);
    
    return (
        <>
            <Input 
                htmlFor={htmlFor} 
                labelText= {labelText}
                valueInput={form[nameInput]}
                typeInput={typeInput}
                nameInput={nameInput}
                requiredBool={requiredBool}
                onChange={handleChange}
                onFocusInput={() => setOnFocus(true)}
                onBlurInput={() => setOnFocus(false)}                
            />
            {( inputErrors?.get(nameInput)?.length && onFocus)
                ? 
                <Error errors={inputErrors.get(nameInput)}/>
                : 
                <></>
            }
        </>
    );
};

export default FormItem;