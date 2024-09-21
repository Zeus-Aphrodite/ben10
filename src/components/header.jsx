import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Input, Modal, Button } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";
import * as antdModel from "../utils/antdmodal.css";
const Header = () => {
  const [isShowAirDropModalOpen, setIsShowAirDropModalOpen] =
    React.useState(false);
  const [isShowConnectWalletModalOpen, setIsShowConnectWalletModalOpen] =
    React.useState(false);
  React.useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  const [selectedCurrency, setSelectedCurrency] = React.useState(null);

  const [mobileMenuVisible, setMobileMenuVisible] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleBuyButton = () => {
    setSelectedCurrency();
  };
  const staking = "https://arbpanda.ai/";
  const docs = "";
  const handleAirDropModalShow = () => {
    setIsShowAirDropModalOpen(true);
  };
  const handleAirDropModalShowCancel = () => {
    setIsShowAirDropModalOpen(false);
  };

  const handleConnectWalletModalShow = () => {
    setIsShowConnectWalletModalOpen(true);
  };

  const handleConnectWalletModalShowCancel = () => {
    setIsShowConnectWalletModalOpen(false);
  };

  return (
    <div className="relative bg-[#328336] py-3 sm:py-4 md:py-5 flex items-center justify-between shadow-md">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto sm:px-6 md:px-8">
        <div className="flex-shrink-0">
          <a>
            <img
              src="/images/ben10/logo.png"
              alt="Logo"
              className="h-[80px] sm:h-12 md:h-16"
              style={{ border: "1px solid #328336", borderRadius: "0.5rem" }}
            />
          </a>
        </div>
        <nav className="flex-wrap items-center hidden space-x-4 pc-menu md:flex">
          <a
            href={"#home"}
            className="text-white text-sm sm:text-base md:text-[18px] evermore opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            Home
          </a>
          <a
            href={"#about"}
            className="text-white text-sm sm:text-base md:text-[18px] Exorcist hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            About
          </a>
          <a
            href={"#how-to-buy"}
            className="text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            How to Buy
          </a>
          {/* <Link to="https://bridge.pepe.vip/" target="_blank"
                        className="text-white text-sm sm:text-base md:text-[12px] evermore hover:opacity-[0.7]" style={{ fontFamily: 'Evermore' }}>Bridge</Link> */}
          <a
            href={"#tokenomics"}
            className="text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            Tokenomics
          </a>
          <a
            href={"#roadmap"}
            className="text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            Roadmap
          </a>
          <a
            href={"#faq"}
            className="text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            FAQ
          </a>
          <a
            href={staking}
            className="text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            Join Staking
          </a>
          <a
            href={docs}
            className="text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
          >
            Docs
          </a>
          <a
            className=" cursor-pointer text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] no-underline"
            style={{ fontFamily: "Smack" }}
            onClick={handleAirDropModalShow}
          >
            Airdrop
          </a>
          <div
            style={{ display: "flex", gap: 12 }}
            className="flex flex-col items-center justify-center"
          >
            <a
              onClick={handleConnectWalletModalShow}
              className=" cursor-pointer text-white text-sm sm:text-base md:text-[18px] evermore hover:opacity-[0.7] px-3 py-2 bg-[#328336] border border-white no-underline rounded-full hover:bg-[#ffffffa4] hover:text-[#328336]"
              style={{ fontFamily: "Smack" }}
            >
              Buy Now
            </a>
          </div>
        </nav>

        <div className="md:hidden sp-menu">
          <button
            id="mobile-menu-button"
            className="p-2 text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            id="mobile-menu"
            className={mobileMenuVisible ? "block" : "hidden"}
          >
            <div className="flex justify-center w-full">
              <a
                href={"#home"}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                Home
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={"#about"}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                About
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={"#how-to-buy"}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                How to Buy
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={"#tokenomics"}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                Tokenomics
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={"#roadmap"}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                Roadmap
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={"#faq"}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                FAQ
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={staking}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                Join Staking
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                href={docs}
                className="block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                Documentation
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                onClick={handleAirDropModalShow}
                className="cursor-pointer block py-2 text-sm text-white no-underline sm:text-base md:text-lg"
              >
                Airdrop
              </a>
            </div>
            <div className="flex justify-center w-full">
              <a
                onClick={handleConnectWalletModalShow}
                className=" cursor-pointer text-white no-underline l jk hj curtext-sm cu cupy-2 cublock sm:text-base md:text-lg"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
      {isShowAirDropModalOpen && (
        <Modal
          title=""
          open={isShowAirDropModalOpen}
          style={{ marginTop: "120px" }}
          onCancel={handleAirDropModalShowCancel}
          closeIcon={null}
          footer={null}
        >
          <div className="flex items-center justify-center w-full ">
            <div class=" w-[80%]">
              <div class=" mt-4">
                <h4 class=" text-center text-[30px] text-white">
                  Hey there Little Cat!
                </h4>
              </div>
              <hr className=" w-full text-white"></hr>
              <div class=" pl-4 pr-4">
                <div class="">
                  <p class=" text-center text-[16px] text-white">
                    Missed out on JUP? Dont worry! Complete these tasks and
                    submit your wallet
                  </p>
                  <div class=" flex justify-center items-center gap-4">
                    <a target="_blank" href="https://twitter.com/Arbpanda">
                      <img
                        src="/images/twitter.webp"
                        alt="twitter"
                        className="w-[40px] h-auto transition-transform transform hover:scale-110"
                      />
                    </a>
                    <a target="_blank" href="https://t.me/arbpandatoken">
                      <img
                        src="/images/telegram.webp"
                        alt="telegram"
                        className="w-[40px] h-auto transition-transform transform hover:scale-110"
                      />
                    </a>
                  </div>
                  <p class=" mt-1 text-center text-[16px] text-white">
                    Join the Telegram &amp; Discord, Follow the twitter and
                    retweet, Submit your wallet and invite your friends.
                  </p>
                  <div class="">
                    <form>
                      <div class="form-input">
                        <Input
                          type="text"
                          name="refurl"
                          placeholder="Enter your SOL address"
                          class=""
                          style={{ height: "50px" }}
                        />
                      </div>
                    </form>
                  </div>
                  <div class="pt-3 mt-4 mb-4" align="center">
                    <div className=" bg-[#3ea5da] w-[80%] rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white hover:text-white font-sans font-semibold justify-center px-2 py-2 hover:border-blue-300 hover:border-2 hover:border-solid cursor-pointer">
                      SUBMIT YOUR WALLET
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {isShowConnectWalletModalOpen && (
        <Modal
          title=""
          className={{ antdModel }}
          open={isShowConnectWalletModalOpen}
          style={{ marginTop: "150px" }}
          width={"450px"}
          closeIcon={null}
          onCancel={handleConnectWalletModalShowCancel}
          footer={null}
        >
          <div
            className="flex items-center justify-center w-full"
            style={{ backgroundColor: "#328336" }}
          >
            <div className=" w-[80%]">
              <div className=" w-full mt-6">
                <span className=" text-center text-[25px] text-white">
                  CHOOSE WALLET
                </span>
              </div>
              <hr className=" mt-[20px] text-white" />
              <div className="w-[90%] m-auto flex justify-center items-center flex-col">
                <a
                  className=" p-3 w-full h-auto mt-1 no-underline flex justify-center items-center gap-2"
                  style={{ border: "1px solid white" }}
                >
                  <img
                    src="https://kndonsolana.com/assets/wallets/phantom.png"
                    width="30px;"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <b className="text-[17px] w-auto text-white hover:text-[#64cc4f]">
                    PHANTOM
                  </b>
                  &nbsp;&nbsp;&nbsp;
                </a>
                <br />
                <a
                  className=" mt-2 p-3 w-full h-auto no-underline flex justify-center items-center gap-2"
                  style={{ border: "1px solid white" }}
                >
                  <img
                    src="https://kndonsolana.com/assets/wallets/solflare.png"
                    width="30px;"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <b className=" text-[17px] w-auto text-white hover:text-[#64cc4f]">
                    SOLFLARE
                  </b>
                  &nbsp;&nbsp;&nbsp;
                </a>
                <hr className=" mt-[30px] w-full text-white" />
                <div
                  align="center"
                  className=" mb-3 text-[16px]  text-gray-300"
                >
                  Dont have a wallet?{" "}
                  <a
                    target="_blank"
                    className=" no-underline text-[#2327ff]"
                    href="https://phantom.app/download"
                  >
                    Create one.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
