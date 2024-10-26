
import {Flex} from '@acrool/react-grid';
import clsx from 'clsx';
import React, {ForwardedRef,useCallback} from 'react';
import styled from 'styled-components';
import CSS from 'csstype';




interface IProps<T>{
    className?: string
    style?: CSS.Properties
    type?: 'text' | 'number' | 'password' | 'tel'
    placeholder?: string
    value?: T
    isAutoFocus?: boolean
    name?: string
    readOnly?: boolean
    disabled?: boolean
    maxLength?: number
    onChange?: (value: T) => void
    onClick?: (event: React.MouseEvent) => void
    onFocus?: () => void
    onBlur?: () => void
    onKeyDown?: (e: React.KeyboardEvent) => void
    autoComplete?: string
    step?: number
    required?: boolean
}

/**
 * Input Component
 *
 * @param props
 * @returns {*}
 * @param ref
 */
export const TextField = <V extends string>({
    className,
    style,
    type = 'text',
    name,
    value,
    isAutoFocus = false,
    placeholder = '',
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    readOnly = false,
    disabled = false,
    autoComplete,
    maxLength,
    onChange,
    step,
    required,
}: IProps<V>, ref?: ForwardedRef<HTMLInputElement>) => {


    /**
     * 處理值改變
     */
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue: V = (e.target.value) as V;
        if(type=== 'number'){
            const num = parseFloat(e.target.value);
            newValue = (Number.isNaN(num) ? 0: num) as V;
        }


        if (onChange) {
            onChange(newValue as V);
        }
    }, [onChange]);


    return (
        <TextFieldRoot className={clsx(className)} onClick={onClick}>

            <Flex col="column" className="w-100">
                <Input
                    ref={ref}
                    style={style}
                    type={type}
                    name={name}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    autoFocus={isAutoFocus}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    tabIndex={disabled ? -1: undefined}
                    autoComplete={autoComplete}
                    autoCorrect="off" // for webview
                    autoCapitalize="off" // for webview
                    spellCheck="false" // for webview
                    maxLength={maxLength}
                    step={step}
                    required={required}
                    value={value !== null ? value: ''}
                />

            </Flex>



        </TextFieldRoot>

    );
};


export default React.forwardRef(TextField);


const Input = styled.input`
    position: relative;
    display: block;
    width: 100%;
    font-size: var(--form-font-size);
    padding: 6px 12px;
    font-weight: 400;
    line-height: 21px;
    height: var(--form-height);
    color: var(--form-color);

    background-color: var(--form-comp-bg-color);
    background-clip: padding-box;

    border: 1px solid #444;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    flex: 1;
    margin-bottom: 0;

    :focus{
        outline: 0;
        box-shadow: var(--form-focus-shadow);
    }

    ::-webkit-input-placeholder, :read-only, :disabled {
      color: var(--form-placeholder-color);
    }

      /* chrome 自動填入 */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0px 1000px #2b3035 inset;
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #c8cfd6;
    }

     ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
       //color: transparent;
       opacity: .6; /* Firefox */
     }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: transparent;
     }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: transparent;
    }
`;



const TextFieldRoot = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    height: var(--form-height);
`;
