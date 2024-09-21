import React from "react";
import { InView } from "react-intersection-observer";
import { Slide, Fade } from 'react-reveal';

const NftCollectiblesPage = () => {

    const [show, setShow] = React.useState(false);

    return (
        <InView onChange={(inView) => inView ? setShow(true) : setShow(false)}>
            <div className="pt-[83px] pb-[80px]" >
                <div className="max-w-[1200px] mx-auto px-[20px]">

                    {
                        show && (
                            <Fade right cascade>
                                <h2 className="evermore text-white text-[27px] md:text-[56px] text-left md:text-center"
                                    style={{
                                        fontFamily: 'Smack', fontWeight: '600', WebkitTextStroke: '1px black',
                                        textStroke: '1px black'
                                    }}
                                >
                                    NFT Collectibles
                                </h2>
                            </Fade>
                        )
                    }

                    <div className="flex flex-col items-center justify-between mt-12 md:flex-row">
                        
                        <Fade left cascade>
                            <img src="./images/ben10/pngwing9.png" className="hidden md:block mt-[-30px] max-w-[520px] max-h-[480px]" alt="" />
                        </Fade>

                        <Fade right cascade>
                            <img src="./images/ben10/pngwing.com.png" className="md:mt-[-30px] max-w-[440px] max-h-[400px]" alt="" />
                        </Fade>

                    </div>

                </div>
            </div>

            {/* <img src="/images/FIRELINE.svg" alt="gapimage" /> */}

        </InView>
    )

}

export default NftCollectiblesPage;
