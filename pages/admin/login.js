import axios from "axios"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useState } from "react"
import { ButtonSolid } from "../../styles/Button.styled"
import { OrderForm, OrderInput, OrderInputLabel } from "../../styles/OrderDetail.styled"
import { TitleText, Wrapper } from "../../styles/Utils.styled"

const ErrorMessage = styled.span`
font-size: 0.7rem;
color: var(--warning);
text-align: center;
`

const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.BASE_URL}/api/login`, {
                username,
                password,
            })
            router.push("/admin")
        } catch (err) {
            setError(true)
        }
    }

    return (
        <Wrapper w="30rem" p="3rem 1rem 5rem 1rem" mqFlex="column">
            <TitleText>Admin Dashboard</TitleText>
            <OrderForm onSubmit={handleSubmit} >
                <OrderInputLabel htmlFor='username'>Username:</OrderInputLabel>
                <OrderInput required id='username' name='username' type="text" onChange={(e) => setUsername(e.target.value)} />
                <OrderInputLabel htmlFor='password'>Password:</OrderInputLabel>
                <OrderInput required id='password' name='password' type="password" onChange={(e) => setPassword(e.target.value)} />
                <ButtonSolid m="2rem 0" type='submit'>Login</ButtonSolid>
                {error && <ErrorMessage>Wrong Credentials!</ErrorMessage>}
            </OrderForm>
        </Wrapper>
    )
}

export default Login