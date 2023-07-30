import styled from 'styled-components'

export const TableLine = styled.tr``

export const TableCollumn = styled.td`
    padding: 10px 0; 

    & button{
        background-color:#000;
        color:#fff;
        border:1px solid #444;
        border-radius:10px;
        padding:10px;
        cursor:pointer;
    }
    & button:hover{
        background: rgba(0,0,0,.6)
    }
`

export const CategoryCollumn = styled.div<{ color: string }>`
    display:inline-block;
    padding: 10px 5px;
    border-radius: 5px;
    color:#fff;
    background-color: ${props => props.color}
`

export const PriceCollumn = styled.div<{expense: string}>`
    display:inline-block;
    padding: 10px 5px;
    color: #fff;
    border-radius: 5px;
    background-color: ${props => props.expense}
`