import React, { FC } from 'react'

import { BaseButton, Wrapper } from '../../shared/ui';

const Main: FC = () => {
    return (
      <Wrapper>
        <div className='p-[40px]'>
            <section className='flex w-full mt-[93px] justify-center items-center text-center flex-col'>
                <h1 className='font-bold text-[#242424] text-5xl'>Упростите управление турнирами</h1>
                <p className='text-2xl max-w-[1000px] my-8'>Присоединяйтесь миллионам пользователей, которые уже доверяют FootLeague для управления своими турнирами
                </p>
                <BaseButton title='Создать турнир'  action={() => {}}/>
                <div className='hidden md:block bg-amber-200 w-[1000px] h-[500px]'></div>
            </section>
        </div>
      </Wrapper>
    )
}

export { Main };
