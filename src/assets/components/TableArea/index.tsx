import * as C from "./style"
import { TableItem } from "../TableItem"
import { Item } from "../../types/type"

interface Props{
    list: Item[]
    onRemove: (id: number) => void
}


export const TableArea = ({ list, onRemove }: Props) => {

    const HandleRemoveItem = (index: number) =>{
        onRemove(index);
    }

    return (
        <C.Table>

            <thead>
                <tr>
                    <C.TableHeadCollumn width={100}>Data</C.TableHeadCollumn>
                    <C.TableHeadCollumn width={130}>Categoria</C.TableHeadCollumn>
                    <C.TableHeadCollumn>Título</C.TableHeadCollumn>
                    <C.TableHeadCollumn width={150}>Valor</C.TableHeadCollumn>
                </tr>
            </thead>

            <tbody>
                {list.map((item, index)=>(
                    <TableItem item={item} key={index} index={index} onRemove={()=>HandleRemoveItem(index)}/>
                ))}
                
            </tbody>
        </C.Table>
       )
}