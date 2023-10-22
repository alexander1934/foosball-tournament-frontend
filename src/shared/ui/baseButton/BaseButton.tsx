import React, { FC } from 'react';

type TBaseButton = {
    title: string;
    action?: () => void;
    className?: string;
    type?:  "button" | "submit" | "reset";
};

const BaseButton: FC<TBaseButton> = (
    { title, action, className, type }
) => {
    return (
        <button
            className={`bg-[#FCC521] rounded-[10px] px-6 md:px-9 ${className}`}
            type={type || 'submit'}
            onClick={action}
        >
            {title}
        </button>
    )
}

export {BaseButton};
