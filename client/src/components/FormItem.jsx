import {useContext, useEffect, useState} from "react"
import {Input, Error, Label} from "../ui-kit"
import { FormContext } from "./Form/Form"
import '../pages/Styles/FormItem.scss'
import {validation} from "../helpers/validation";

const FormItem = ({
    htmlFor,
    labelText,
    nameInput,
    typeInput,
    requiredBool,
    classNameInput,
    classNameLabel
    }) => {

    const formContext = useContext(FormContext)
    const {values, setValuesHandler, errors, setErrors, validationParams} = formContext

    const [onFocus, setOnFocus] = useState(false);

    useEffect(()=> {
        setErrors(prev => ({...prev, [nameInput]: validation(nameInput, values[nameInput], values, validationParams)}))
    },[values])
    
    return (
        <>
            <Input
                valueInput={values[nameInput]}
                typeInput={typeInput}
                nameInput={nameInput}
                requiredBool={requiredBool}
                onChange={setValuesHandler}
                onFocusInput={() => setOnFocus(true)}
                onBlurInput={() => setOnFocus(false)}
                className={classNameInput}
            />
            <Label
                htmlFor={htmlFor}
                labelText={labelText}
                className={classNameLabel}
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