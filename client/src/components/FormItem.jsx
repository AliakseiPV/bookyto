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
    const {values, onChange, errors} = formContext

    const [onFocus, setOnFocus] = useState(false);
    
    return (
        <>
            <Input 
                htmlFor={htmlFor} 
                labelText= {labelText}
                valueInput={values[nameInput]}
                typeInput={typeInput}
                nameInput={nameInput}
                requiredBool={requiredBool}
                onChange={onChange}
                onFocusInput={() => setOnFocus(true)}
                onBlurInput={() => setOnFocus(false)}                
            />
            {( errors?.get(nameInput)?.length && onFocus)
                ? 
                <Error errors={errors.get(nameInput)}/>
                : 
                <></>
            }
        </>
    );
};

export default FormItem;