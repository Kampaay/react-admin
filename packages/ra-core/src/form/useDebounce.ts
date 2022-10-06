import React, { useCallback } from 'react';
import { debounce as debounceFn } from 'lodash';

export const useDebounce = <T>(
    value: T,
    onChange: (eventOrValue: any) => void,
    debounce?: number | undefined
) => {
    const [innerValue, setInnerValue] = React.useState(value);
    const debouncedOnChange = useCallback(debounceFn(onChange, debounce), [
        onChange,
        debounce,
    ]);
    const onChangeDebounced = useCallback(
        e => {
            console.warn('<<<<<<<<<', e);
            setInnerValue(e.target.value);
            debouncedOnChange(e);
        },
        [debouncedOnChange]
    );

    return debounce
        ? { value: innerValue, onChange: onChangeDebounced }
        : { value, onChange };
};
