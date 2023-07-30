import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #ccc;
    margin-top: -40px;
    background-color:#fff;
    display:flex    
`

export const DateArea = styled.div`
    display: flex;
    align-items:center;
    flex: 1;
    justify-content:space-between
`

export const ArrowLeft = styled.div`
    font-size:  30px;
    cursor:pointer;

    &:hover{
        opacity:.6
    }
`

export const DateInfo = styled.div`
    font-weight:bold
`

export const ArrowRight = styled.div`
    font-size:  30px;
    cursor:pointer;

    &:hover{
        opacity:.6
    }
`;

export const ResumeArea = styled.div`
    flex: 2;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
