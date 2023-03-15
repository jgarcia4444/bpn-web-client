
import React, {useEffect} from 'react'

const AdsComponent = (props) => {

    const {dataAdSlot} = props;

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }
    }, [])

    return (
        <ins className="adsbygoogle"
        style={{display: 'block', width: "25%", height: "55vh"}}
            data-ad-client="ca-pub-8586092304062696"
            data-ad-slot={dataAdSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-adtest="on"
     ></ins>
    )
}

export default AdsComponent;