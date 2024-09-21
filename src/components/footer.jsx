import React from "react";

const FooterPage = () => {

    return (
        <>
            <footer className="py-[15px] relative" style={{ color:'rgb(50 131 54 )' } }>
                <div className="ocean">
                    <div className="wave"></div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-[40%]">
                        <p className="text-center text-white text-[20px]" style={{ fontFamily: 'Mansalva' }}>© 2024 $BEN10 All Rights Reserved</p>
                        <p className=" text-center text-white"> Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
                    </div>
                    <div className="w-[15%] text-center" style={{color:'white'}}>
                        <img src="/images/images.png" style={{width:'150px',height:'60px',margin:'auto'}} />
                        <p>Contact@sponge.vip</p>
                    </div>
                    <div className="w-[15%] text-center" style={{color:'white'}}>
                        <p>Sponge V2 Ltd.</p>
                        <p>BVI: 2124828</p>
                    </div>
                    <div className="w-[15%] text-center" style={{color:'white'}}>
                        <p>40A Sponge Street</p>
                        <p>Spongeland, 9876</p>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default FooterPage
