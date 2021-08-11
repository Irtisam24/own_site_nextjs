import React from "react";
import Image from "next/image";
import Link from "next/link";
import mainLogo from "../../public/images/mainLogo.png";
import alternateLogo from "../../public/images/iilogo2.png";
import CustomOutlinedButton from "./customOutlinedButton";
import { Tween } from "react-gsap";
const Header = ({ darkBrown }) => {
  return (
    <div className={darkBrown ? "myheader-section-cream" : "myheader-section"}>
      <div className="d-flex align-items-baseline forHoverEffect">
        <Tween from={{ x: -50, opacity: 0 }}>
          <div>
            <Link href="/contactUs">
              <CustomOutlinedButton
                buttonText="Apply Now"
                smallButton={true}
                buttonType={darkBrown ? "darkRed" : ""}
              />
            </Link>
          </div>
        </Tween>
        <Tween from={{ x: -100, opacity: 0 }} delay={0.2}>
          <div>
            <Link href="/aboutUs">
              <p className={darkBrown ? "silverTextBrown" : "silverText"}>
                About
              </p>
            </Link>
          </div>
        </Tween>
      </div>
      <Tween from={{ y: -50, opacity: 0 }} delay={0.4}>
        <div style={{ cursor: "pointer" }}>
          <Link href="/">
            <Image
              src={mainLogo}
              alt="mainLogo.png"
              layout="intrinsic"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </Tween>
      <Tween from={{ x: 100, opacity: 0 }} delay={0.6}>
        <div>
          <Image
            src={alternateLogo}
            alt="alternateLogo.png"
            width={60}
            height={60}
            layout="intrinsic"
          />
        </div>
      </Tween>
    </div>
  );
};

export default Header;
