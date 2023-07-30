import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 20px;
    display:flex;
    margin-top: 20px;

    & label{
        flex:1
    }
    
`

export const LabelDate = styled.label``

export const LabelTitle = styled.label``

export const LabelCategory = styled.label``

export const LabelValue = styled.label`
    &input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`