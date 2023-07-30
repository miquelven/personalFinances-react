import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    text-align:center
`

export const Title = styled.p`
    font-weight:bold
`

export const Value = styled.p<{ color: string }>`
    font-weight: bold;
    margin-top:5px;
    color: ${props => props.color}
`