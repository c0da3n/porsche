"use client";
import Header from "@/_components/header";
import Image from "next/image";
import styled from "styled-components";
import koMsg from "@/public/locales/ko.json";
import enMsg from "@/public/locales/en.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<"KO" | "EN">("EN");
  const [messages, setMessages] = useState(enMsg);

  useEffect(() => {
    if (selectedLanguage === "KO") {
      setMessages(koMsg);
    } else {
      setMessages(enMsg);
    }
  }, [selectedLanguage]);
  return (
    <>
      <Header
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <Container>
        <ImageWrapper>
          <BackgroundImage
            src={`/api/images/background.svg`}
            alt="background image"
            width={1920}
            height={1000}
            priority
          />
          <TitleWrapper>
            <Title>{messages.title}</Title>
            <SubTitle>{messages.subTitle}</SubTitle>
          </TitleWrapper>
        </ImageWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100%;
  margin-top: 80px;
`;

const ImageWrapper = styled.div`
  display: flex;

  width: 100vw;
  height: calc(100vh - 80px);

  max-width: 100vw;
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: auto;
  height: auto;

  margin-left: 60px;
  margin-top: 190px;
  position: absolute;

  @media (max-width: 430px) {
    margin-top: 90px;
    margin-left: 20px;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-family: Pretendard;
  font-size: 80px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -2px;

  @media (max-width: 690px) {
    font-size: 60px;
  }
`;

const SubTitle = styled.h3`
  color: #fff;
  font-family: Pretendard;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.25px;

  @media (max-width: 690px) {
    font-size: 30px;
  }
`;
