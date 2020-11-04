import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Spinner from 'reactstrap/es/Spinner';

export function DelayedButton({color, type, onClick, label}) {
    const [loader, setLoader] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const checkClick = (target) => {
        setLoader(true);
        setDisabled(true);
        onClick(target)
        setTimeout(() => {
            setLoader(false);
            setDisabled(false);
        }, 1000);
    }

    return <span>

            <Button disabled={disabled} type={type} color={color} onClick={(target) => checkClick(target)}>
                {loader ? <Spinner size="sm" /> : '' } {label}
            </Button>
    </span>
}
