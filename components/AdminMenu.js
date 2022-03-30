import styled from "styled-components"
import { FaEdit, FaTrashAlt } from "react-icons/fa"

const Table = styled.table`
width: 100%;
border-spacing: 0;
text-align: left;
font-size: 0.8rem;

th{
    /* background-color: var(--light-200); */
    border-bottom: 2px solid var(--brand-300);
    padding: 1rem;
}
td{
    text-align: left;
    padding: 1rem;
    border-bottom: 1px dotted var(--brand-300);
}

td:nth-child(2){
    font-weight: 700;
    color: var(--brand-dark);
}
td:last-child{
    text-align: center;
}
@media screen and (max-width: 800px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    tr:first-child{
        display: none;
    }
    tr{
        display: flex;
        flex-direction: column;
    }
    th:first-child::before{
        content: "Order ID: ";
        font-weight: 700;
    }

}
`
const ButtonIcon = styled.button`
border: none;
padding: 0.675rem 0.5rem 0.5rem 0.675rem;
background-color: var(--brand-400);
color: white;
cursor: pointer;
border-radius: 0.5rem;
`
const ButtonDelete = styled.button`
border: none;
padding: 0.675rem 0.5rem 0.5rem 0.5rem;
background-color: var(--warning);
color: white;
cursor: pointer;
border-radius: 0.5rem;
`


const AdminMenu = ({ menu }) => {
    const handleDelete = () => { }

    const handleEdit = () => { }

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <th>Edit</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Delete</th>
                    </tr>
                    {menu?.map(item => (
                        <tr key={item._id}>
                            <td><ButtonIcon onClick={handleEdit}><FaEdit /></ButtonIcon></td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>${item.price}</td>
                            <td>{item.category}</td>
                            <td><ButtonDelete onClick={handleDelete}><FaTrashAlt /></ButtonDelete></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default AdminMenu