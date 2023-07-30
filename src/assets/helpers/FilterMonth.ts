import { Item } from "../types/type";

export const getCurrentMonth = () =>{
    const now = new Date();

    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filtererListByMonth = (list: Item[], date: string): Item[] =>{
    const newList: Item[] = []

    const [year, month] = date.split('-');

    for(const i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() === parseInt(month)
        ){
            newList.push(list[i])
        }
    }
    return newList;
}

export const FormatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    return `${formatNumberDate(day)}/${formatNumberDate(month)}/${year}`
}

export const FormatCurrentMonth = (actualMonth: string): string => {

    const [year, month] = actualMonth.split('-');

    const dataMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${dataMonth[parseInt(month)-1]} de ${year}`
}

const formatNumberDate = (n: number): string => (n < 10) ? `0${n}` : `${n}`

export const formatAddDate = (n: string) => {
    const [year, month, day] = n.split('-');

    return new Date(`${year},${parseInt(month)+1},${day}`)
}