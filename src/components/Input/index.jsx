import { DivInput, InputLogin, TextValidation } from "./style"

export const InputGlobal = ({placeholder, error, ...props}) => {
    return (
        <DivInput>
            <InputLogin {...props} placeholder={placeholder}></InputLogin>
            { error && <TextValidation>{error}</TextValidation>}
        </DivInput>
    )
}