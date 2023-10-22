import {BaseButton} from "../../shared/ui";
import React, {FC, useState} from "react";
import {Header} from "../../entities/header";
import {Footer} from "../../entities/footer";
import {Wrapper} from "../../shared/ui";
import {useParams} from "react-router-dom";
import Member from "../../assets/icons/Member.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import Clock from "../../assets/icons/Clock.svg";
import {Bracket} from "../../features/bracket";
import {Table} from "../../features/table";

type TInitState = {
    isOpen: boolean;
    isActive: boolean;
    isClose: boolean;
};

const TournamentPage: FC = () => {
    const {id} = useParams();

    const initState: TInitState = {
        isOpen: true,
        isActive: false,
        isClose: false,
    };

    const [isActive, setActive] = useState<TInitState>(initState);

    const [isTable, setTable] = useState(false);

    return (
        <Wrapper>
            <div className='p-[40px]'>
                <section className='flex w-full flex-col'>
                    <div className='flex md:flex-row flex-col justify-between'>
                        <h1 className='font-bold text-[#242424] md:mb-0 mb-10 text-2xl md:text-5xl'>Турнир {id}</h1>
                        {isActive.isOpen && <BaseButton className={'py-5 mb-8 md:mb-0'} title={'Принять участие'} action={()=>{}}/>}

                        {(isActive.isActive || isActive.isClose) &&
                            <div>
                                <BaseButton className={`py-5 mr-5 mb-8 md:mb-0 ${isTable? "bg-white" : "bg-[#FCC521]"}`} title={'Сетка'} action={()=>{setTable(prevState => prevState = false)}}/>
                                <BaseButton className={`py-5 mr-5 mb-8 md:mb-0 ${!isTable? "bg-white" : "bg-[#FCC521]"}`} title={'Таблица'} action={()=>{setTable(prevState => prevState = true)}}/>
                            </div>
                        }
                    </div>
                    <div className='flex items-start md:items-center md:flex-row flex-col gap-1 md:gap-5 w-full'>
                        <p className='bg-red-100 px-2 text-red-700 border border-red-300 rounded-2xl'>{'Активен'}</p>
                        <ul className='flex flex-col md:flex-row gap-3 my-4'>
                            <li className='flex'>
                                <img src={Member} alt=""/>
                                <p className='ml-3'>Команд - {8}</p>
                            </li>
                            <li className='flex'>
                                <img src={Calendar} alt=""/>
                                <p className='ml-3'>{"10.08.2024"}</p>
                            </li>
                            <li className='flex'>
                                <img src={Clock} alt=""/>
                                <p className='ml-3'>{"10:00"}</p>
                            </li>
                        </ul>
                    </div>
                    {/*Сетка*/}
                    <section className='overflow-x-scroll p-0'>

                        {!isTable && <Bracket />}
                        {isTable && <Table />}
                    </section>
                </section>
            </div>
        </Wrapper>
    )
}

export { TournamentPage };
