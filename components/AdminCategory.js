import styled from "styled-components"
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import { BtnLinkSolid } from "../styles/Button.styled"

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
const ButtonIcon = styled.a`
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


const AdminCategory = ({ categories }) => {
    const [categoryList, setCategoryList] = useState(categories)

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/category/${id}`)
            setCategoryList(categoryList.filter(item => item._id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Link href="/admin/category/add" passHref>
                <BtnLinkSolid>Add Category</BtnLinkSolid>
            </Link>
            <Table>
                <tbody>
                    <tr>
                        <th>Edit</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Order</th>
                        <th>Delete</th>
                    </tr>
                    {categoryList?.map(category => (
                        <tr key={category._id}>
                            <td><Link href={`/admin/category/${category._id}`} passHref>
                                <ButtonIcon><FaEdit /></ButtonIcon>
                            </Link></td>
                            <td>{category.title}</td>
                            <td>{category.slug}</td>
                            <td>{category.order}</td>
                            <td><ButtonDelete onClick={() => handleDelete(category._id)}><FaTrashAlt /></ButtonDelete></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default AdminCategory
