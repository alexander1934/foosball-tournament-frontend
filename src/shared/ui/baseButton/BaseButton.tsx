import React, { FC } from 'react';

type TBaseButton = {
    title: string;
    action: () => void;
    className?: string;
};

const BaseButton: FC<TBaseButton> = ({ title, action, className }) => {
    return (
        <button className={'bg-[#FCC521] rounded-[10px] px-6 md:px-9 ' + className} onClick={action}>
            {title}
        </button>
    )
}

export {BaseButton};
