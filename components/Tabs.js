import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { PanelBody, Tab, TabBody, TabContainer, TabHead } from "../styles/Admin.styled"
import AdminOrder from "./AdminOrder.js"
import AdminOrderDone from "./AdminOrderDone"

// tutorial: https://medium.com/backticks-tildes/creating-a-tabs-component-with-next-js-9c88bdc0e29e

const Tabs = ({ router, orders, menu, handleOrderDone }) => {
    const {
        query: { tab }
    } = router

    const isTabOne = tab === "1" || tab == null
    const isTabTwo = tab === "2"
    const isTabThree = tab === "3"
    return (
        <PanelBody>
            <TabContainer>
                <TabHead>
                    <Tab selected={isTabOne}>
                        <Link href={{ pathname: "/admin", query: { tab: "1" } }}>
                            <a>Orders</a>
                        </Link>
                    </Tab>
                    <Tab selected={isTabTwo}>
                        <Link href={{ pathname: "/admin", query: { tab: "2" } }}>
                            <a>Completed</a>
                        </Link>
                    </Tab>
                    <Tab selected={isTabThree}>
                        <Link href={{ pathname: "/admin", query: { tab: "3" } }}>
                            <a>Menu Items</a>
                        </Link>
                    </Tab>
                </TabHead>
                <TabBody>
                    {isTabOne && <AdminOrder orders={orders} handleOrderDone={handleOrderDone} />}
                    {isTabTwo && <AdminOrderDone orders={orders} />}
                    {isTabThree &&
                        <React.Fragment>
                            {/* {menu.map(item => (
                                item.title
                            ))} */}
                            tab 3
                        </React.Fragment>}
                </TabBody>
            </TabContainer>
        </PanelBody>
    )
}

export default withRouter(Tabs)