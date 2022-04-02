import styled from "styled-components";

export const ModalContainer = styled.div`
width: 100vw;
position: absolute;
z-index: 9999;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--brand-main-50);
backdrop-filter: blur(2px);

@media screen and (min-width: 400px){
    height: 100vh;
}
`

export const ModalWrapper = styled.div`
position: relative;
width: min(55rem, 90%);
background-color: white;
border-radius: 0.8rem;
padding: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: var(--shadow0);
`

export const CloseBtn = styled.button`
position: absolute;
top: 1rem;
right:1rem;
border: none;
background-color: transparent;
font-size: 1rem;
cursor: pointer;
`

export const ModalTitle = styled.h1`
text-align: center;
color: var(--brand-main);
font-size: 1.3rem;
font-weight: 300;
margin: 0 0 1rem 0;
`
export const OrderForm = styled.form`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 1rem;
`

export const OrderInput = styled.input`
height: 2.5rem;
font-family: inherit;
padding: 0.5rem;
border-radius: 0.3rem;
border: 1px solid var(--brand-dark);
margin-bottom: 1rem;
background-color: hsla(0, 100%, 100%, 0.5);
::placeholder {
    opacity: 0.7;
}
`
export const OrderTextArea = styled.textarea`
font-family: inherit;
padding: 0.5rem;
border-radius: 0.3rem;
border: 1px solid var(--brand-dark);
margin-bottom: 1rem;
background-color: hsla(0, 100%, 100%, 0.5);;
::placeholder {
    opacity: 0.7;
}
`

export const OrderInputLabel = styled.label`
margin-bottom: 0.5rem;
font-size: 0.9rem;
`

export const FormGroup = styled.div`
display: flex;
flex-direction: column;
fieldset {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
    padding: 0;
}
@media screen and (min-width: 600px){
    flex-direction: row;
}
`
export const RadioChoices = styled.fieldset`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
border-radius: 0.3rem;
border: 1px solid var(--brand-dark);
background-color: hsla(0, 100%, 100%, 0.5);
margin-bottom: 1rem;

div{
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
legend{
    font-size: 0.9rem;
}
label{
    padding: 0 0.5rem;
    margin-top: -5px;
}
`

export const SubmitBtn = styled.input`

`