import React from 'react'
import Ser_main1 from './ser_main1/Ser_main1'
import Ser_main2 from './ser_main2/Ser_main2'
import Sermain2_bottom from './ser_main2_bottom/Sermain2_bottom'
import Ser_main3 from './ser_main3/Ser_main3'
import Ser_mian4 from './ser_main4/Ser_mian4'
import Ser_main4_bottom from './ser_main4_bottom/Ser_main4_bottom'
import Ser_map from './ser_map/Ser_map'
import Footer from "../../components/footer/Footer"

function Service() {
    return (
        <div>
            <Ser_main1 />
            <Ser_main2 />
            <Sermain2_bottom />
            <Ser_main3 />
            <Ser_mian4 />
            <Ser_main4_bottom />
            <Ser_map />
            <Footer />
        </div>
    )
}

export default Service