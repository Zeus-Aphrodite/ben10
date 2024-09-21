import React from "react";
import { InView } from "react-intersection-observer";
import { Fade, Bounce, Slide } from 'react-reveal';
import { Collapse } from 'antd';
const FaqPage = () => {

    const [show, setShow] = React.useState(false);
    const text1 = `
    Download TrustWallet or MetaMask, register on Binance and purchase ETH (Arbitrum Chain). Click the buy button on this page and you will be redirected to Camelot AMM. Click the V2 tab and purchase the desired amount.
  `;
  const text2 = `The first objective of Ben10 is to become the most decentralized meme-token. We aspire to outnumber $PEPE in terms of active token holders. Our second aim is to mainstream cryptocurrencies by delivering easy-to-use dApps for "normies." We are currently working on a meme-sharing content network with creator tipping features. Once the first objective is completed, this will provide Ben10 tokens utility and assure the project's continued growth.
  `;
  const text3 = `
  The total supply is 100,000,000,000 of which 50% is Added to Liquidity, 10% distributed via airdrops/community rewards, 20% For listing on several Centralized Exchanges, 20% is locked for future use cases.
  `;
  const text4 = `
  The official Arbitrum (ONE) address is 0X00
  `;
  const text5 = `
  The ticker is $BEN10, Decimals: 6
  `;
    const items = [
        {
          key: '1',
          label: 'How can I buy Ben10 tokens?',
          children: <p className=" text-[20px]">{text1}</p>,
        },
        {
          key: '2',
          label: 'What is your roadmap?',
          children: <p className=" text-[20px]">{text2}</p>,
        },
        {
          key: '3',
          label: 'What are the tokenomics of Ben10?',
          children: <p className=" text-[20px]">{text3}</p>,
        },
        {
            key: '4',
            label: 'What is the Ben10 token contract address?',
            children: <p className=" text-[20px]">{text4}</p>,
          },
          {
            key: '5',
            label: 'What is the token ticker for Ben10?',
            children: <p className=" text-[20px]">{text5}</p>,
          },
      ];
      const onChange = (key) => {
        console.log(key);
      };
    return (
        <InView onChange={(inView) => setShow(inView)}>
            <div id="faq" className="pt-[100px] pb-[100px]">
                <div className="max-w-[1200px] mx-auto w-full px-[20px]">
                    <div className="flex flex-col items-center justify-around w-full md:justify-between md:flex-row">
                        <div className="w-full min-w-[300px]">

                            {
                                show && (
                                    <div className=''>
                                        <Bounce duration={1000} delay={300}>
                                            <h1 className="text-white text-[27px] md:text-[56px] text-center mt-4 md:text-center evermore"
                                                style={{
                                                    fontFamily: 'Smack', fontWeight: '600', WebkitTextStroke: '1px black',
                                                    textStroke: '1px black'
                                                }}
                                            >
                                                Common Questions
                                            </h1>
                                        </Bounce>
                                    </div>
                                )

                            }
                            <Fade bottom delay={1 * 300} when={show}>
                                <Collapse items={items}  onChange={onChange} style={{marginTop:'50px', fontSize:'23px'}} />
                            </Fade>
                            
                        </div>

                    </div>
                </div>
            </div>

            {/* <img src="/images/FIRELINE.svg" alt="gapimage" /> */}

        </InView>
    )

}

export default FaqPage;