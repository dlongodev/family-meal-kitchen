import React from 'react'
import { Wrapper } from '../styles/Utils.styled'
import ServiceCard from './ServiceCard'


const HomeServices = () => {
    const services = [
        {
            title: "Catering",
            image: "/img/catering.jpg",
            href: "/services"
        },
        {
            title: "Chef's Table",
            image: "/img/catering.jpg",
            href: "/services"
        },
        {
            title: "Meal Planning",
            image: "/img/catering.jpg",
            href: "/services"
        }
    ]

    return (
        <Wrapper bg="var(--brand-main)" w="100%" p="2rem 0" >
            {services.map((service, i) => (
                <div key={i}>
                    < ServiceCard title={service.title} href={service.href} image={service.image} />
                </div>
            ))}
        </Wrapper>
    )
}

export default HomeServices