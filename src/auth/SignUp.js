import React from "react";
import styled from "styled-components";
import { colors } from "../resources/Colors";
import LogoImage from "../resources/logos/devchallenges.svg"
import EmailIcon from "../resources/icons/email.svg";
import PasswordIcon from "../resources/icons/lock.svg";
import Google from "../resources/logos/Google.svg";
import Twitter from "../resources/logos/Twitter.svg";
import Facebook from "../resources/logos/Facebook.svg";
import Github from "../resources/logos/Gihub.svg";

const IconsArr = [
    {
        icon: Google,
        alt: "google"
    },
    {
        icon: Facebook,
        alt: "facebook"
    },
    {
        icon: Twitter,
        alt: "twitter"
    },
    {
        icon: Github,
        alt: "github"
    }
]

function SignUp() {
  return (
    <MainDiv>
      <MainCard>
        <Logo src={LogoImage} alt="logo"></Logo>
        <CardTitle>Join thousands of learners from around the world</CardTitle>
        <CardTagline>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </CardTagline>
        <InputDiv>
        <Input><img src={EmailIcon} alt="email"></img><input placeholder="Email"></input></Input>
          <Input><img src={PasswordIcon} alt="password" password></img><input placeholder="Password"></input></Input>
          
          <Button>Start coding now</Button>
        </InputDiv>
        <AltText>or continue with these social profile</AltText>
        <IconsDiv>{
            IconsArr.map(i => {
                return <SocialIcon src={i.icon} alt={`${i.alt}`}></SocialIcon>
            })}</IconsDiv>
        <RegisterText>
          Already a member? <a href="/signin">Login</a>
        </RegisterText>
      </MainCard>
      <BottomTextDiv>
        <p>
          created by <u>username</u>
        </p>
        <p>devChallenges.io</p>
      </BottomTextDiv>
    </MainDiv>
  );
}

export default SignUp;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
`

const MainCard = styled.div`
  height: 634.3px;
  width: 473.83px;
  left: 483.08px;
  top: 253.64px;
  border-radius: 24px;
  border: 1px solid ${colors.grey};
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 58px;
`;

const CardTitle = styled.h2`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.035em;
  color: #333333;
  margin-top: 27.5px;
  width: 75%;
  text-align: left;
`;

const CardTagline = styled.h3`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #333333;
  margin-top: 14.5px;
  width: 90%;
  text-align: left;
`;

const InputDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const Input = styled.div`
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${colors.grey};
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  > img {
      align-self: left;
      margin-left: 14px;
      height: ${props => props.password ? "21px" : "16px"}
      width: ${props => props.password ? "16px" : "20px"}
      color: #828282;
  }

  > input {
    padding: 0px 12px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.035em;
    color: #828282;
    border: none;

    :focus {
        border: none;
        outline: none;
    }

  }
`;

const Button = styled.button`
  height: 38px;
  width: 100%;
  background: #2f80ed;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  line-height: 22px;
  font-size: 16px;
`;

const AltText = styled.h4`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.035em;
  color: #828282;
  align-self: center;
  margin-top: 32px;
`;

const IconsDiv = styled.div`
  height: auto;
  width: 65%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin-top: 22px;
`;

const SocialIcon = styled.img`
height: 42px;
width: 42px;
`

const RegisterText = styled.h3`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #828282;
  align-self: center;
  margin-top: 33.5px;

  > a {
    color: ${colors.blue};
  }
`;

const BottomTextDiv = styled.div`
  width: 473.83px;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 12.25px;

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    color: #828282;
  }
`;