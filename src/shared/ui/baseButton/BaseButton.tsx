import React, { FC } from 'react';

type TBaseButton = {
    title: string;
    action: () => void;
};

const BaseButton: FC<TBaseButton> = ({ title, action }) => {
    return (
        <button className='bg-[#FCC521] rounded-[10px] py-4 md:py-5 px-6 md:px-9' onClick={action}>
            {title}
        </button>
    )
}

export {BaseButton};
