import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { Fragment } from "react";
import Carousel from "@/components/Carousel";
import ReserveButton from "@/components/ReserveButton";
import EventCard1 from "@/components/EventCard1";
import EventCard2 from "@/components/EventCard2";
import About from "@/components/About";
import OurFleet from "@/components/OurFleet";
import Contact from "@/components/Contact";
import Reserve from "@/components/Reserve";

/**
 * Layout of the main page
 */

const HomePage: React.FC = () => {
    return (
        <Fragment>
            <Header/>

            <Carousel/>
            <ReserveButton/>
            <EventCard1/>
            <EventCard2/>
            <About/>
            <OurFleet/>
            <Reserve/>
            <Contact/>

            <Footer/>
        </Fragment>
    );
}

export default HomePage;