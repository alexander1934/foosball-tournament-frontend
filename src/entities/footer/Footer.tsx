import React, { FC } from 'react';

import { Logo } from '../../shared/ui';

import TelegramIcon from '../../assets/icons/telegram.svg';
import VKIcon from '../../assets/icons/vk.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';

const Footer: FC = () => {
    return (
        <div className='bg-white py-8 px-5 md:px-[100px]'>
            <div className='flex justify-between'>
                <Logo />
                <div className='text-right'>
                    <p className='text-2xl font-bold'>8 (938) 888 88 88</p>
                    <p>Для звонков по России</p>
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <p>© 2023 FootTour</p>
                <div className='flex gap-3'>
                    <img className='w-5' src={TelegramIcon} alt=""/>
                    <img className='w-5' src={VKIcon} alt=""/>
                    <img className='w-5' src={TwitterIcon} alt=""/>
                </div>
            </div>
        </div>
    );
};

export { Footer };
