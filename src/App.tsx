import { Item } from './assets/types/type';
import { categories } from './assets/data/categories';
import { Items } from './assets/data/items';
import { filtererListByMonth, getCurrentMonth } from './assets/helpers/FilterMonth';
import { useState, useEffect } from 'react'
import { TableArea } from './assets/components/TableArea';
import './App.css'
import { InfoArea } from './assets/components/InfoArea';
import { InputArea } from './assets/components/InputArea';

const App = () => {

  const [list, setList] = useState(Items)

  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const HandleAddList = (item: Item) =>{
    const newList = [...list];
    newList.push(item);
    SortIndexList(newList);
    setList(newList)
  }

  const HandleRemoveItemList = (index: number) =>{
    
    let newList = [...list];
    const newCurrentMonth = currentMonth.split('-')[1]
    newList.filter(i => {
      const monthItem = i.date.getMonth();
      if(monthItem.toString() == newCurrentMonth){
        newList = newList.filter((item)=> item.id !== index)
      }
    })
    SortIndexList(newList);  
    setList(newList)
  }

  const SortIndexList = (list: Item[]) => {
    const newList = [...list];

    const newCurrentMonth = currentMonth.split('-')[1]

    let indexItem = 0;
    let difIndex = 0;

    newList.filter((item, index, arrayList)=> {
      const monthItem = item.date.getMonth();
      let restItem = 0
      if(monthItem.toString() == newCurrentMonth){
        difIndex = index - arrayList.length;
        indexItem = Math.abs(difIndex) - 1
        item.id = arrayList.length > 1 ? Math.abs(indexItem - arrayList.length + 1) : 0;

      }else if(monthItem.toString() !== newCurrentMonth){
        
        restItem = index - arrayList.length -3;
        restItem < 0 ? Math.abs(restItem) : restItem;
        
        for(let i=0; i<arrayList.length; i++){
          item.id = (restItem +  i)
        }
      }
    })
  }

  useEffect(()=>SortIndexList(list))

  useEffect(()=>{
    setFilteredList(filtererListByMonth(list, currentMonth));
  }, [list, currentMonth])


  useEffect(()=>{
    let income= 0;
    let expense = 0;

    for(let i in filteredList ){
      if(categories[filteredList[i].category].expense){
        expense += filteredList[i].price
      }else{
        income += filteredList[i].price;
      }
    }

    setIncome(income);
    setExpense(expense)
  }, [filteredList, list])

  const HandleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth)
  }

  return(
    <>
      <header>
        <p>App de Finanças</p>
      </header>

      <main>

        <InfoArea
        currentMonth={currentMonth}
        onChangeMonth={HandleMonthChange}
        income={income}
        expense={expense}
        />

        <InputArea onAdd={HandleAddList}/>

        <TableArea onRemove={HandleRemoveItemList} list={filteredList}/>


      </main>
    </>
  )
}

export default App;