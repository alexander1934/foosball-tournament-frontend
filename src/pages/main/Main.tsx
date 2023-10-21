import {BaseButton} from "../../shared/ui/baseButton";
import React, {FC} from "react";
import {Header} from "../../entities/header";
import {Footer} from "../../entities/footer";

const Main: FC = () => {
    return (
        <>
            <Header />
            <div className='p-[40px]'>
                <section className='flex w-full md:mt-[93px] justify-center items-center text-center flex-col'>
                    <h1 className='font-bold text-[#242424] text-2xl md:text-5xl'>Упростите управление турнирами</h1>
                    <p className='text-xl md:text-2xl max-w-[1000px] my-8'>Присоединяйтесь миллионам пользователей, которые уже доверяют FootLeague для управления своими турнирами
                    </p>
                    <BaseButton title='Создать турнир'  action={() => {}}/>
                    <div className='hidden my-14 lg:block bg-amber-200 w-[1000px] h-[500px]'></div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export { Main };
