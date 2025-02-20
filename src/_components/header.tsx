"use client";

import styled from "styled-components";
import Image from "next/image";
import porsche from "@/public/assets/logo/porsche.svg";

interface Props {
  setSelectedLanguage: React.Dispatch<React.SetStateAction<"KO" | "EN">>;
  selectedLanguage: "EN" | "KO";
}

export default function Header({
  selectedLanguage,
  setSelectedLanguage,
}: Props) {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image src={porsche} alt="porsche logo" priority />
        </ImageWrapper>
        <ButtonWrapper>
          <LanguageButton
            $isSelected={selectedLanguage === "KO"}
            onClick={() => setSelectedLanguage("KO")}
          >
            KO
          </LanguageButton>
          /
          <LanguageButton
            $isSelected={selectedLanguage === "EN"}
            onClick={() => setSelectedLanguage("EN")}
          >
            EN
          </LanguageButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  top: 0;

  width: 100vw;
  height: 80px;

  padding: 20px 40px;

  @media (max-width: 460px) {
    padding: 20px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;

  height: 100%;
  width: auto;
`;

const LanguageButton = styled.button<{ $isSelected: boolean }>`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.35px;

  color: ${(props) => (props.$isSelected ? "#0c0c0c" : "#B6B6B6")};

  width: auto;
  height: auto;
`;
