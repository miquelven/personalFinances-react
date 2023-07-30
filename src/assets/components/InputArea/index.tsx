import { Items } from '../../data/items';
import { formatAddDate } from '../../helpers/FilterMonth';
import { Item } from '../../types/type';
import * as C from './style'
import { useState} from 'react' 

interface Props {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) =>{

    const [date, setDate] = useState('')
    const [title, setTitle] = useState('');
    const [itemValue, setItemValue] = useState(0)
    const [category, setCategory] = useState('salary');
    const HandleInputDate = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setDate(e.target.value);
    }

    const HandleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value)
    }

    const HandleItemValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setItemValue(parseInt(e.target.value))
    }

    const HandleAddItem = () =>{
       
        if(date && title && itemValue){
            onAdd({
                    date: formatAddDate(date),
                    title,
                    category,
                    price: itemValue,
                    id: Items.length
                })
        }else{
            alert("Preencha todos os campos!")
        }        
        
    }

    const HandleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        if(e.target.value == 'salary' || e.target.value == 'rent' || e.target.value == 'food') setCategory(e.target.value);
    }

    return(
        <C.Container>

            <C.LabelDate>
                <p>Selecione a data:</p>
                <input 
                type="date"
                value={date}
                onChange={HandleInputDate}
                />
            </C.LabelDate>
            
            <C.LabelCategory>
                <p>Selecione a categoria:</p>
                <select
                onChange={HandleSelectCategory}
                value={category}
                >
                    <option value="salary">Salário</option>
                    <option value="rent">Aluguel</option>
                    <option value="food">Comida</option>
                </select>
            </C.LabelCategory>

            <C.LabelTitle>
                <p>Digite o titulo:</p>
                <input 
                type="text"
                value={title}
                onChange={HandleInputTitle}
                />
            </C.LabelTitle>

            <C.LabelValue>
                <p>Digite o valor:</p>
                <input 
                type="text"
                value={!itemValue ? '0' : itemValue}
                onChange={HandleItemValue}
                />
            </C.LabelValue>

            <button onClick={HandleAddItem}>Adicionar</button>
        

        </C.Container>
    )
}