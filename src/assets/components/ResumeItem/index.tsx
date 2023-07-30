import * as C from './style'

interface Props{
    title: string
    value: number
}

export const ResumeItem = ({ title, value }: Props) =>{ 
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value color={value >= 0 && title !== 'Despezas' ? '#2E8B57' : '#DC143C'}>R$ {value}</C.Value>
        </C.Container>
    )
}
