import styled from "styled-components";

// export const AdminContainer = styled.section`
// display: grid;
// grid-template-columns: 1fr 1fr;
// gap: 1.3rem;
// `

// export const AdminMenuWrapper = styled.div`
// display: grid;
// grid-template-columns: 2fr 1fr 1.5fr;
// gap: 0.5rem;
// `

export const PanelBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
`

export const TabHead = styled.div`
  border-bottom: 1px solid var(--light-100);
  display: flex;
  background: var(--brand-200);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

export const TabContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  webkit-box-shadow: var(--shadow1);
  -moz-box-shadow: var(--shadow1);
  box-shadow: var(--shadow1);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

export const TabBody = styled(PanelBody)`
  height: 100%;
`

export const Tab = styled.div`
  padding: 1em;
  font-weight: 200;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  background: ${({ selected }) => (selected ? "var(--light-100)" : "var(--brand-200)")};
  font-weight: ${({ selected }) => (selected ? "700" : "200")};
  
`