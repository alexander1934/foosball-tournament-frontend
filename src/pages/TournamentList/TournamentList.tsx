import {BaseButton} from "../../shared/ui";
import React, {FC} from "react";
import {Wrapper} from "../../shared/ui";
import {BasicSelect} from "../../shared/ui/Select";
import {TournamentCard} from "../../widgets/tournamentCard";
import {useNavigate} from "react-router-dom";

const TournamentList: FC = () => {
    const navigate = useNavigate();

    const handleCreateTour = () => {
        navigate('/createTour');
    };

        return (
            <Wrapper>
                <section className='w-full'>
                    <div className='flex flex-col lg:flex-row items-center justify-between mb-20'>
                        <h1 className='font-bold lg:mb-0 mb-4 text-[#242424] text-2xl lg:text-5xl'>Список турниров</h1>
                        <div className='flex items-center gap-5'>
                            <BasicSelect />
                            <BaseButton
                                title='Создать турнир'
                                className={'py-3 md:py-5'}
                                action={handleCreateTour}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-start flex-wrap gap-11'>
                        <TournamentCard id={1} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={2} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={3} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={4} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={5} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={6} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={7} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={8} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={9} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                        <TournamentCard id={10} tournamentName={'бобр'} date={'2004.09.02'} status={'Активно'} teamsCount={32} time={"10:00"}/>
                    </div>
                </section>
            </Wrapper>
        )
    }

    export { TournamentList };
