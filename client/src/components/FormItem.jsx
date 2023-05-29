import { useContext, useState } from "react"
import {Input, Error, Label} from "../ui-kit"
import { FormContext } from "./Form/Form"
import '../pages/Styles/SignUp.scss'

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
    const {values, changeHandler, errors} = formContext

    const [onFocus, setOnFocus] = useState(false);
    
    return (
        <>
            <Input
                valueInput={values[nameInput]}
                typeInput={typeInput}
                nameInput={nameInput}
                requiredBool={requiredBool}
                onChange={changeHandler}
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