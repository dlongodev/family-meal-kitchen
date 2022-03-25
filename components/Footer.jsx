import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { TitleText, Wrapper } from "../styles/Utils.styled";

const Logo = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  opacity: 0.5;
`;

const FooterList = styled.ul`
  position: relative;
  list-style: none;
  padding-inline-start: 0;
  text-align: center;
  padding-bottom: 1rem;

  li {
    margin: 1rem 0;
    span {
      display: inline-block;
      padding-right: 10px;
      opacity: 0.8;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    opacity: 0.5;
  }

  @media screen and (min-width: 800px) {
    text-align: left;
    padding-bottom: 0;
  }
`;

const CopyText = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  display: inline;
  padding: 0.3rem 1rem;
  color: #fff;
  opacity: 0.5;
`;

const icons = {
  facebook: "/img/icon-facebook.svg",
  instagram: "/img/icon-instagram.svg",
  google: "/img/icon-google.svg",
  location: "/img/icon-location.svg",
  phone: "/img/icon-phone.svg",
  email: "/img/icon-email.svg",
};

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <Wrapper bg="var(--brand-500)" w="100%" m="0" justify="space-around">
        <Logo>
          <Link href="/">
            <a>
              <Image
                src="/img/logo_white.png"
                alt=""
                layout="fill"
                objectFit="scale-down"
              />
            </a>
          </Link>
        </Logo>
        <div>
          <TitleText color="var(--light-200)" fs="1.5rem" mqAlign="left" m="0">
            Contact Us
          </TitleText>
          <FooterList>
            <li>
              <span>
                <Image src={icons.phone} alt="" width="15px" height="15px" />
              </span>
              <a href="tel:+17542646268">754-264-6268</a>
            </li>
            <li>
              <span>
                <Image src={icons.email} alt="" width="15px" height="15px" />
              </span>
              <a href="mailto:chefjoe@familymealkitchen.com">
                chefjoe@familymealkitchen.com
              </a>
            </li>
            <li>
              <span>
                <Image src={icons.location} alt="" width="15px" height="15px" />
              </span>
              <a
                href="https://g.co/kgs/X3z3nb"
                target="_blank"
                rel="noreferrer"
              >
                South Florida & Treasure Coast
              </a>
            </li>
          </FooterList>
        </div>
        <div>
          <TitleText color="var(--light-200)" fs="1.5rem" mqAlign="left" m="0">
            Follow Us
          </TitleText>
          <FooterList>
            <li>
              <span>
                <Image src={icons.facebook} alt="" width="15px" height="15px" />
              </span>
              <a
                href="https://www.facebook.com/familymealkitchen"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <span>
                <Image
                  src={icons.instagram}
                  alt=""
                  width="15px"
                  height="15px"
                />
              </span>
              <a
                href="https://www.instagram.com/familymealkitchen/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <span>
                <Image src={icons.google} alt="" width="15px" height="15px" />
              </span>
              <a
                href="https://g.page/r/CVlsYCjbXK1nEBM/review"
                target="_blank"
                rel="noreferrer"
              >
                Google
              </a>
            </li>
          </FooterList>
        </div>
      </Wrapper>
      <Wrapper bg="var(--brand-dark)" w="100%" m="0">
        <CopyText>Copyright © {copyrightYear}</CopyText>
        <CopyText>Family Meal Kitchen, LLC</CopyText>
        <CopyText>All Rights Reserved.</CopyText>
      </Wrapper>
    </footer>
  );
};

export default Footer;
