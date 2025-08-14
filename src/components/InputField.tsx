import { useController, type FieldValues, type Path, type Control } from "react-hook-form";
import React from 'react'

type TProps<T extends FieldValues> = {
    name: Path<T>
    control?: Control<T>
} & React.InputHTMLAttributes<HTMLInputElement>

const InputField = <T extends FieldValues>(props: TProps<T>) => {
    const { control, name, ...rest } = props
    const { field, fieldState } = useController({ control, name });


    return (
        <div>
            <input {...field} placeholder={props.name} {...rest} />
            <p>{fieldState.error?.message}</p>
        </div>
    );
}

export default InputField

