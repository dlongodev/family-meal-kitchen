import styled from "styled-components"
import { ImCheckmark } from 'react-icons/im'
import { MdOutlineTimelapse } from 'react-icons/md'


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

const AdminOrder = ({ orders }) => {
    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Pay Method</th>
                        <th>Instructions</th>
                        <th>Delivery Date</th>
                        <th>Time</th>
                        <th>Done</th>
                    </tr>
                    {orders.map(order => (
                        order.done ??
                        <tr key={order._id}>
                            <td>{order.customer}</td>
                            <td>{order.address}
                                <br />{order.cityStateZip}</td>
                            <td>${order.total}</td>
                            <td>{order.method}</td>
                            <td>{order.instructions}</td>
                            <td>{order.deliveryDate}</td>
                            <td>{order.deliveryTime}</td>
                            <td><ButtonIcon><ImCheckmark /></ButtonIcon></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default AdminOrder