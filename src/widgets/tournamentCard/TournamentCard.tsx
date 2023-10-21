import Member from '../../assets/icons/Member.svg';
import Clock from '../../assets/icons/Clock.svg';
import Calendar from '../../assets/icons/Calendar.svg';
import Football from '../../assets/Football.jpeg';
import {BaseButton} from "../../shared/ui";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

type TTournamentCard = {
    id: number,
    tournamentName: string,
    status: string,
    teamsCount: number,
    date: string,
    time: string,
}


export const TournamentCard:FC<TTournamentCard> = ({tournamentName, date, time, status, teamsCount, id}) => {

    const navigate = useNavigate();

    return (
        <div className='bg-white rounded-[10px] p-5 h-80 w-[400px]'>
            <img className="w-full object-cover h-20 bg-amber-200" src={Football} alt=""/>
            <div className='flex justify-between mt-3'>
                <h3>{tournamentName}</h3>
                <p className='bg-red-100 px-2 text-red-700 border border-red-300 rounded-2xl'>{status}</p>
            </div>
            <ul className='flex flex-col gap-3 my-4'>
                <li className='flex'>
                    <img src={Member} alt=""/>
                    <p className='ml-3'>Команд - {teamsCount}</p>
                </li>
                <li className='flex'>
                    <img src={Calendar} alt=""/>
                    <p className='ml-3'>{date}</p>
                </li>
                <li className='flex'>
                    <img src={Clock} alt=""/>
                    <p className='ml-3'>{time}</p>
                </li>
            </ul>
                <BaseButton className={'w-full py-2'} title={"Посмотреть"} action={()=>navigate(`/tournament/${id}`)} />
        </div>
    )
}