import {FC} from "react";

type ITableItem = {
    id: number,
    name: string,
    time: string,
    result: string,
}

export function Table() {
    return (
        <div className='flex md:w-full w-[1000px] justify-center'>
            <div className='p-3 w-[1000px] bg-gray-300 rounded-2xl'>
                <div className='flex justify-between border-b border-gray-700'>
                    <p>ID команды</p>
                    <p>Имя команды</p>
                    <p>Время</p>
                    <p>Результаты</p>
                </div>
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
                <TableItem id={1} name={"bebrus"} time={"14:00"} result={"Win"} />
            </div>
        </div>
    );
}

const TableItem:FC<ITableItem> = ({id, name, time, result}) => {
    return <div className='flex justify-between border-b border-gray-700'>
        <div className='w-30 flex items-center justify-center'>{id}</div>
        <p>{name}</p>
        <p>{time}</p>
        <p>{result}</p>
    </div>
}