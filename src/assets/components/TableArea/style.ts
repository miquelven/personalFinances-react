import styled from 'styled-components'

export const Table = styled.table`
    background-color:#fff;
    width:100%;
    padding:20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius:20px;
    margin-top: 20px;
`

export const TableHeadCollumn = styled.th<{ width?: number }>`
    margin-top:20px;
    text-align:left;
    width: ${props => props.width ? `${props.width}px` : 'auto'}
`