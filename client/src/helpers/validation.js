export const validation = (errorsFilter, setErrors, name, value) => {
    let errorArray = []
    for (let element of errorsFilter[name]) {
        if (!element.filter.test(String(value))) {
            errorArray = [...errorArray, element.error]
        }
    }
    setErrors({[name]: errorArray})
}
