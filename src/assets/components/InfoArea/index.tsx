import * as C from './style'
import { Item } from '../../types/type';
import { FormatCurrentMonth } from '../../helpers/FilterMonth';
import { ResumeItem } from '../ResumeItem';

interface Props{
    onChangeMonth: (newMonth: string) => void;
    currentMonth: string
    income: number;
    expense: number
}

export const InfoArea = ({ onChangeMonth, currentMonth, income, expense }: Props) => {

    const HandlePrevMonth = () =>{
        const [year, month] = currentMonth.split('-');
        const newdate = new Date(parseInt(year), parseInt(month)-1, 1);
        newdate.setMonth(newdate.getMonth() - 1);
        onChangeMonth(`${newdate.getFullYear()}-${newdate.getMonth()+1}`)
    }

    const HandleNextMonth = () =>{
        const [year, month] = currentMonth.split('-');
        const newdate = new Date(parseInt(year), parseInt(month)-1, 1);
        newdate.setMonth(newdate.getMonth() + 1);
        onChangeMonth(`${newdate.getFullYear()}-${newdate.getMonth()+1}`)
    }

    return (
            <C.Container>
                <C.DateArea>
                    <C.ArrowLeft onClick={HandlePrevMonth}>⬅️</C.ArrowLeft>
                    <C.DateInfo>{FormatCurrentMonth(currentMonth)}</C.DateInfo>
                    <C.ArrowRight onClick={HandleNextMonth}>➡️</C.ArrowRight>
                </C.DateArea>
                <C.ResumeArea>
                    <ResumeItem title='Receitas' value={income}/>  
                    <ResumeItem title='Despezas' value={expense}/>  
                    <ResumeItem title='Balanço' value={income - expense}/>  
                </C.ResumeArea>
            </C.Container>
    )
}
