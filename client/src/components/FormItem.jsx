import { useContext, useState } from "react"
import {Input, Error} from "../ui-kit"
import { FormContext } from "./Form/Form"
import '../pages/Styles/SignUp.scss'

const FormItem = ({
    htmlFor,
    labelText,
    nameInput,
    typeInput,
    requiredBool,
    className
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
                className={className}
            />
            {(errors[nameInput]?.length && onFocus)
                ? 
                <Error errors={errors[nameInput]}/>
                : 
                <></>
            }
        </>
    );
};

export default FormItem;