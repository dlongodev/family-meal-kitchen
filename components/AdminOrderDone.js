import styled from "styled-components"
import { ImCheckmark } from 'react-icons/im'
import { FaTrashAlt } from "react-icons/fa"
import { useState } from "react"
import axios from "axios"

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

td:first-child{
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
padding: 0.5rem;
background-color: transparent;
color: var(--brand-400);
cursor: pointer;

`

const ButtonDelete = styled.button`
border: none;
padding: 0.675rem 0.5rem 0.5rem 0.5rem;
background-color: var(--warning);
color: white;
cursor: pointer;
border-radius: 0.5rem;
`


const AdminOrder = ({ orders }) => {
    const [orderList, setOrderList] = useState(orders)
    console.log(orderList)

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/orders/${id}`)
            setOrderList(orderList.filter(item => item._id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Pay Method</th>
                        <th>Delivery Date</th>
                        <th>Time</th>
                        <th>Done</th>
                    </tr>
                </thead>
                {orderList?.map(order => (
                    order.done &&
                    <tbody key={order._id} >
                        <tr>
                            <td>{order.customer}</td>
                            <td>{order.address}
                                <br />{order.cityStateZip}</td>
                            <td>${order.total}</td>
                            <td>{order.method}</td>
                            <td>{order.deliveryDate}</td>
                            <td>{order.deliveryTime}</td>
                                <td><ButtonIcon><ImCheckmark /> </ButtonIcon><ButtonDelete onClick={() => handleDelete(order._id)}><FaTrashAlt /></ButtonDelete></td>
                            </tr>
                </tbody>
                ))}
            </Table>
        </>
    )
}

export default AdminOrder