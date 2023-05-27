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
    const {values, changeHandler, errors} = formContext

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
                onChange={changeHandler}
                onFocusInput={() => setOnFocus(true)}
                onBlurInput={() => setOnFocus(false)}                
            />
            {(errors?.get(nameInput)?.length && onFocus)
                ? 
                <Error errors={errors.get(nameInput)}/>
                : 
                <></>
            }
        </>
    );
};

export default FormItem;