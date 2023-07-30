import { Item } from "../types/type"

type addAction = {
    type: 'add';
    payload: {
        date: Date;
        title: string;
        category: 'salary' | 'rent' | 'food';
        price: number;
        id?: number
    }
}

type removeAction = {
    type: 'remove';
    payload: {
        id: number
    }
}

type todoActionType = addAction | removeAction

export const itemReducer = (todoList: Item[], action: todoActionType) =>{
    switch(action.type){
        case 'add':
            return [...todoList, {
                date: action.payload.date,
                title: action.payload.title,
                category: action.payload.category,
                price: action.payload.price,
                id: todoList.length
            }];
        case 'remove':
            return todoList.filter(item => item.id !== action.payload.id)

        default:
            return todoList;
    }
}