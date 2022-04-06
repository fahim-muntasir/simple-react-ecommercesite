import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

export default function NavbarTop() {
  return (
    <Container className="flex justify-between w-11/12 m-auto border-b border-gray-200 p-2 ">
      {/* design for responsive */}
      <div className="block md:block lg:hidden w-36 z-0">
        <Marquee gradient={false} pauseOnHover={true}>
          <Phone className=" border-r mr-2 pr-2 ">
            <a
              href="@"
              className="last:text-gray-500 first:text-gray-300  hover:text-green-500 duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-1" />
              <span className="  text-xs font-light tracking-widest ">
                +01202020
              </span>
            </a>
          </Phone>
          <Location>
            <a
              href="@"
              className="first:text-gray-300 last:text-gray-500 hover:text-green-500 duration-300"
            >
              <FontAwesomeIcon icon={faLocationDot} className="   mr-1" />
              <span className=" text-sm font-light tracking-widest">
                Rupatoly, Bangladesh
              </span>
            </a>
          </Location>
        </Marquee>
      </div>
      {/* design for responsive */}

      <div className="hidden lg:block md:hidden ">
        <ContucInfo className="flex">
          <Phone className=" border-r mr-2 pr-2 ">
            <a
              href="@"
              className="last:text-gray-500 first:text-gray-300  hover:text-green-500 duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-1" />
              <span className="  text-xs font-light tracking-widest ">
                +01202020
              </span>
            </a>
          </Phone>
          <Location>
            <a
              href="@"
              className="first:text-gray-300 last:text-gray-500 hover:text-green-500 duration-300"
            >
              <FontAwesomeIcon icon={faLocationDot} className="   mr-1" />
              <span className=" text-sm font-light tracking-widest">
                Rupatoly, Bangladesh
              </span>
            </a>
          </Location>
        </ContucInfo>
      </div>
      <Utilitys className="flex">
        <Language className="border-r mr-3 pr-3">
          <div className=" hover:text-green-500 duration-300  last:text-gray-300">
            <span className="text-sm font-normal cursor-pointer">Eng</span>
            <FontAwesomeIcon icon={faArrowDown} className=" ml-1" />
          </div>
        </Language>
        <SocialLink className=" w-24 flex justify-between items-center text-gray-400 text-sm ">
          <a href="@" className="hover:text-green-500 duration-300">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="@" className="hover:text-green-500 duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="@" className="hover:text-green-500 duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </SocialLink>
      </Utilitys>
    </Container>
  );
}

const Container = styled.div`
  /* width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 5px 10px; */
`;
const ContucInfo = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;
const Phone = styled.div``;
const Location = styled.div``;
const Utilitys = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;
const Language = styled.div``;
const SocialLink = styled.div``;
