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