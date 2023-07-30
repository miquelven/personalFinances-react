import * as C from './style'
import { Item } from "../../types/type"
import { categories } from '../../data/categories'
import { FormatDate } from '../../helpers/FilterMonth'

interface Props{
    item: Item;
    onRemove: (id: number) => void
    index: number
}

export const TableItem =  ({ item, onRemove, index }: Props) => {

    const HandleRemove = () =>{
        onRemove(index)
    }

    return (
        <C.TableLine>
            <C.TableCollumn>{FormatDate(item.date)}</C.TableCollumn>
            <C.TableCollumn>
                <C.CategoryCollumn color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.CategoryCollumn>
            </C.TableCollumn>
            <C.TableCollumn>{item.title}</C.TableCollumn>
            <C.TableCollumn>
                <C.PriceCollumn expense={(categories[item.category].expense) ? '#DC143C' : "#2E8B57"}>
                    {item.price}
                </C.PriceCollumn>    
            </C.TableCollumn>
            <C.TableCollumn>
                <button onClick={HandleRemove} title='remove'>✘</button>    
            </C.TableCollumn>
        </C.TableLine>
    )
}