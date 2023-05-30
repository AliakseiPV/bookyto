export const validation = (
    name, value, values, validationParams
) => {     
    let errorsArray = []

    validationParams[name]?.forEach(params => {
        if (typeof params.filter === 'function') {
            if(params.filter(values)) {
                errorsArray = [...errorsArray, params.filter(values)]
            }
        }
        if (params.filter instanceof RegExp) {
            if (!params.filter.test(String(value))) {
                errorsArray = [...errorsArray, params.error]
            }
        }
    })
    return errorsArray
}