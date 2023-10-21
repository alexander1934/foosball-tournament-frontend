import {BaseButton} from "../../shared/ui";
import React, {FC} from "react";
import {Header} from "../../entities/header";
import {Footer} from "../../entities/footer";
import {Wrapper} from "../../shared/ui";
import {useParams} from "react-router-dom";

const TournamentPage: FC = () => {
    const {id} = useParams()
    return (
        <Wrapper>
            <div className='p-[40px]'>
                <section className='flex w-full md:mt-[93px] justify-center items-center text-center flex-col'>
                    <h1 className='font-bold text-[#242424] text-2xl md:text-5xl'>Hui size {id}</h1>
                    <p className='text-xl md:text-2xl max-w-[1000px] my-8'>Присоединяйтесь миллионам пользователей, которые уже доверяют FootLeague для управления своими турнирами
                    </p>
                    <BaseButton title='Создать турнир' className={'py-5'} action={() => {}}/>
                    <div className='hidden my-14 lg:block bg-amber-200 w-[1000px] h-[500px]'></div>
                </section>
            </div>
        </Wrapper>
    )
}

export { TournamentPage };
