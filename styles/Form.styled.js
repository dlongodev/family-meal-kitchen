import styled from "styled-components";

export const FormTitle = styled.h1`
text-align: center;
color: var(--brand-main);
font-size: 1.3rem;
font-weight: 300;
margin: 0 0 1rem 0;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
margin: 1rem 0;
`

export const Input = styled.input`
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
export const TextArea = styled.textarea`
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

export const InputLabel = styled.label`
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
