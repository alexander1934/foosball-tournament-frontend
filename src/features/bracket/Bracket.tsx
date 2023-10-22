import { useState } from 'react';
import {
    SingleEliminationBracket,
    Match,
} from '@g-loot/react-tournament-brackets';

export function Bracket() {
    const [bracket, setBracket] = useState(simpleSmallBracket);

    return (
        <SingleEliminationBracket
            matches={bracket}
            matchComponent={Match}
            onPartyClick={(match) => {
                console.log(match)
                match.resultText = "Won";
            }}
        />
    );
}

export const simpleSmallBracket = [
    {
        id: 1,
        nextMatchId: null,
        participants: [],
        startTime: '2021-05-30',
        state: 'SCHEDULED',
        tournamentRoundText: '3'
    },
    {
        id: 2,
        nextMatchId: 1,
        participants: [
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '1',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            }
        ],
        startTime: '2021-05-30',
        state: 'SCHEDULED',
        tournamentRoundText: '2'
    },
    {
        id: 3,
        nextMatchId: 1,
        participants: [
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '6',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            },
        ],
        startTime: '2021-05-30',
        state: 'SCORE_DONE',
        tournamentRoundText: '2'
    },
    {
        id: 4,
        nextMatchId: 2,
        participants: [
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '1',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            }
        ],
        startTime: '2021-05-30',
        state: 'SCHEDULED',
        tournamentRoundText: '1'
    },
    {
        id: 5,
        nextMatchId: 3,
        participants: [
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '6',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            }
        ],
        startTime: '2021-05-30',
        state: 'SCHEDULED',
        tournamentRoundText: '1'
    },
    {
        id: 6,
        nextMatchId: 2,
        participants: [
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '2',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            },
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '3',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            },
        ],
        startTime: '2021-05-30',
        state: 'SCHEDULED',
        tournamentRoundText: '1'
    },
    {
        id: 7,
        nextMatchId: 3,
        participants: [
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '4',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            },
            {
                id: '9397971f-4b2f-44eb-a094-722eb286c59b',
                isWinner: false,
                name: '5',
                picture: 'teamlogos/client_team_default_logo',
                resultText: '',
                status: null
            },
        ],
        startTime: '2021-05-30',
        state: 'SCHEDULED',
        tournamentRoundText: '1'
    },
]
