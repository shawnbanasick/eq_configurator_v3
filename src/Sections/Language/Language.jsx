import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import GeneralButton from "../../Utils/GeneralButton";
import exportToXml from "../../Utils/exportToXml";
import UserTextInput from "../../Utils/UserTextInput";
import UserTextAreaInput from "../../Utils/UserTextAreaInput";
import appState from "../../GlobalState/appState";
import generateLanguageXml from "../Language/generateLanguageXml";

const handleClick = () => {
  const data = generateLanguageXml();
  exportToXml("language.xml", data, "xml");
};

const Language = () => {
  let displayMode = appState.displayMode;
  if (displayMode === "beginner") {
    displayMode = true;
  } else {
    displayMode = false;
  }

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Language Settings</Title>
      {displayMode && (
        <DisplayModeText>
          {`Language formatting is available here by using tags before and after the text to be modified. Options include bold <b> </b>, italics <i> </i>, and underline <u> </u>.`}{" "}
          <br />
          <br />
          {`A new line can be inserted using a single break tag <br/>, and an open line between text can be created by using two break tags <br/> <br/>.`}
          <br />
          <br />
          {`A web link can be inserted by using this pattern:`}
          <br />
          {`<a href="https://qmethod.org/" target="_blank"> <u>qmethod.org</u> </a>.`}
          <br />
          <br />
          {`See the default text below for more examples.`}
        </DisplayModeText>
      )}

      <SectionContainer>
        {/* +++++++++++++  MULTI-PURPOSE MODALS ++++++++++ */}

        <h3>Multi-Purpose Modals</h3>
        <UserTextAreaInput
          label="Step Completed Message"
          stateId="langStepCompleted"
          sectionName="lang"
          width={35}
          height={100}
          left={0}
        />

        <UserTextInput
          label="Log in first"
          stateId="langLoginFirst"
          sectionName="lang"
          width={25}
          left={0}
        />

        {/* +++++++++++++  FOOTER INFO ++++++++++ */}
        <ColorContainer>
          <h3>Footer Text</h3>
          <UserTextInput
            label="Text Size"
            stateId="langFooterTextSize"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Card Height"
            stateId="langFooterCardHeight"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Help me!"
            stateId="langBtnHelp"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Continue"
            stateId="langBtnNext"
            sectionName="lang"
            width={25}
            left={0}
          />
        </ColorContainer>

        {/* +++++++++++++  LANDING SCREEN ++++++++++ */}
        <h3>Landing Screen</h3>

        <UserTextInput
          label="Landing Page Title Bar"
          stateId="langLandingHead"
          sectionName="lang"
          width={25}
          left={0}
        />

        <UserTextAreaInput
          label="Welcome Message"
          stateId="langWelcomeMessage"
          sectionName="lang"
          width={35}
          height={300}
          left={0}
        />
        {/* +++++++++++++  ACCESS CONTROL ++++++++++ */}
        <ColorContainer>
          <h3>Access Control</h3>
          <UserTextInput
            label="Access Code"
            stateId="langAccessCodeText"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Access Input Text"
            stateId="langAccessInputText"
            sectionName="lang"
            width={40}
            height={50}
            left={0}
          />

          <UserTextInput
            label="Participant name or Id number"
            stateId="langPartIdText"
            sectionName="lang"
            width={25}
            left={0}
          />

          <UserTextInput
            label="Access code invalid"
            stateId="langAccessCodeWarning"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Invalid name or ID"
            stateId="langPartIdWarning"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Log-in modal header text"
            stateId="langLoginHeaderText"
            sectionName="lang"
            width={38}
            left={0}
          />
          <UserTextAreaInput
            label="Log-in modal main text"
            stateId="langLoginWelcomeText"
            sectionName="lang"
            width={40}
            height={100}
            left={0}
          />
        </ColorContainer>

        {/* +++++++++++++  OLD STUFF ++++++++++ */}
        <h3>Old Stuff</h3>

        <UserTextInput
          label="Agree"
          stateId="langBtnAgree"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Neutral"
          stateId="langBtnNeutral"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Disagree"
          stateId="langBtnDisagree"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Submit data"
          stateId="langBtnSubmit"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Please select..."
          stateId="langBtnSelect"
          sectionName="lang"
          width={25}
          left={0}
        />
        <ColorContainer>
          {/* +++++++++++++  MISC ++++++++++ */}
          <h3>Navigation and Error Language</h3>
          <UserTextInput
            label="Your answers will be lost."
            stateId="langExitWarning"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Back"
            stateId="langBack"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Please fill in all required fields"
            stateId="langReqFields"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextInput
            label="Error"
            stateId="langError"
            sectionName="lang"
            width={25}
            left={0}
          />
        </ColorContainer>
        <h3>Welcome Screen</h3>
        <UserTextInput
          label="Welcome!"
          stateId="langWelcome"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Welcome Text"
          stateId="langWelcomeText"
          sectionName="lang"
          width={45}
          height={130}
          left={0}
        />
        <ColorContainer>
          <h3>User Login Screen</h3>

          <UserTextInput
            label="Connection to server failed. Please try again."
            stateId="langServerConnectFail"
            sectionName="lang"
            width={25}
            left={0}
          />
        </ColorContainer>
        <h3>Introduction</h3>
        <UserTextInput
          label="Introduction"
          stateId="langIntroduction"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Intro Text"
          stateId="langIntroText"
          sectionName="lang"
          width={55}
          height={130}
          left={0}
        />
        <ColorContainer>
          <h3>Step 1</h3>
          <UserTextInput
            label="Step 1 of 5"
            stateId="langStep1"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Step 1 Text"
            stateId="langStep1Text"
            sectionName="lang"
            width={55}
            height={160}
            left={0}
          />
        </ColorContainer>
        <h3>Step 2</h3>
        <UserTextInput
          label="Step 2 of 5"
          stateId="langStep2"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Step 2 Text"
          stateId="langStep2Text"
          sectionName="lang"
          width={55}
          height={160}
          left={0}
        />
        <UserTextInput
          label="Step 2 Cond. of Instruction"
          stateId="langStep2CondOfInstruc"
          sectionName="lang"
          width={43}
          left={0}
        />
        <ColorContainer>
          <h3>Step 3</h3>
          <UserTextInput
            label="Step 3 of 5"
            stateId="langStep3"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Step 3 Text"
            stateId="langStep3Text"
            sectionName="lang"
            width={55}
            height={150}
            left={0}
          />
          <UserTextInput
            label="Step 3 Cond. of Instruction"
            stateId="langStep3CondOfInstruc"
            sectionName="lang"
            width={43}
            left={0}
          />
        </ColorContainer>
        <h3>Step 4</h3>
        <UserTextInput
          label="Step 4 of 5"
          stateId="langStep4"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextAreaInput
          label="Step 4 Text"
          stateId="langStep4Text"
          sectionName="lang"
          width={55}
          height={150}
          left={0}
        />
        <ColorContainer>
          <h3>
            Step 5 (only displayed if "Show Step 5" is true in the Config file)
          </h3>
          <UserTextInput
            label="Step 5 of 5"
            stateId="langStep5"
            sectionName="lang"
            width={25}
            left={0}
          />
          <UserTextAreaInput
            label="Step 5 Text"
            stateId="langStep5Text"
            sectionName="lang"
            width={55}
            height={150}
            left={0}
          />
        </ColorContainer>
        <h3>Data Transfer</h3>
        <UserTextInput
          label="Submit Data"
          stateId="langTransferHead"
          sectionName="lang"
          width={25}
          left={0}
        />
        <UserTextInput
          label="Data transfer text"
          stateId="langTransferText"
          sectionName="lang"
          width={45}
          left={0}
        />
        <UserTextInput
          label="Data transfer failed"
          stateId="langTransferFailed"
          sectionName="lang"
          width={45}
          left={0}
        />
        <UserTextAreaInput
          label="Data transfer OK"
          stateId="langTransferOk"
          sectionName="lang"
          width={50}
          height={100}
          left={0}
        />
        <TenPxSpacer></TenPxSpacer>
        <TenPxSpacer></TenPxSpacer>
      </SectionContainer>
      <DownloadMapButton onClick={() => handleClick()}>
        Click here to save to the <b>SETTINGS</b> folder and replace the
        "language.xml" file
      </DownloadMapButton>
    </MainContent>
  );
};

export default view(Language);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-size: 18px;
  padding-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 5vw;
  align-self: center;
`;

const ColorContainer = styled.div`
  background-color: #ededed;
  padding-left: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const DownloadMapButton = styled(GeneralButton)`
  width: 70%;
  max-width: 300px;
  align-self: center;
  margin-top: 50px;
  background-color: #eb8100;
  border: 1px solid black;
`;

// const SubTitles = styled.p`
//   font-size: 20px;
//   font-weight: bold;
//   padding-left: 15px;
//   margin-top: 30px;
// `;

const DisplayModeText = styled.div`
  align-self: left;
  margin-left: 10px;
  margin-bottom: 50px;
  width: 75vw;
  max-width: 1000px;
  font-size: 20px;
  padding: 10px;
  border: 2px solid black;
  background: whitesmoke;
  border-radius: 5px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid black;
  width: 92%;
  max-width: 1000px;
  /* border-radius: 3px; */
`;

const TenPxSpacer = styled.div`
  height: 10px;
`;
