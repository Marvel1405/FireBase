import styled from "@emotion/styled";
import { IoIosSearch, IoIosGlobe, IoIosSunny } from "react-icons/io";

function App() {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <LogoImage src="../public/images/Logo.png" />
          <Navs>
            <Nav>Product</Nav>
            <Nav>Solutions</Nav>
            <Nav>Pricing</Nav>
            <Nav>More</Nav>
          </Navs>
          <HeaderInput type="text">
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoIosSearch />
            </span>
            <Input type="text" placeholder="Search" />
          </HeaderInput>
          <HeadeerIcon>
            <span
              style={{
                fontSize: "30px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <IoIosSunny />
            </span>
          </HeadeerIcon>
          <English>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <IoIosGlobe />
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginRight: "8px",
                marginLeft: "6px",
              }}
            >
              English
            </span>
          </English>
          <Console>Console</Console>
          <IconImage>
            <GoogleImage1>IMG</GoogleImage1>
            <GoogleImage src="../public/images/65.jpeg" />
          </IconImage>
        </HeaderContent>
      </Header>
      <Hero>
        <LeftHero>
          <HeroHeadText>Make your app the best it can be</HeroHeadText>
          <HeroSubText>
            Firebase is an app development platform that helps you build and
            grow apps and games users love. Backed by Google and trusted by
            millions of businesses around the world.
          </HeroSubText>
          <HeroButtonText>
            <HeroButton>Get Started</HeroButton>
            <HeroText>Try demo</HeroText>
            <HeroText1>| Watch Video</HeroText1>
          </HeroButtonText>
        </LeftHero>
        <RightHero src="../images/Firebase_Hero_Loopvideo.webm" />
      </Hero>
    </Container>
  );
}
export default App;
const RightHero = styled.video`
  width: 50%;
  height: 100%;
  controls: auto;
  loop: auto;
`;
const HeroText1 = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 21px;
  margin-left: 25px;
`;
const HeroText = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 21px;
  margin-left: 10px;
`;
const HeroButton = styled.button`
  width: 45%;
  height: 90%;
  background-color: white;
  color: #1a73e8;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`;
const HeroButtonText = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeroSubText = styled.div`
  width: 80%;
  height: 150px;
  font-size: 23px;
  font-weight: 700;
  color: white;
`;
const HeroHeadText = styled.div`
  width: 80%;
  height: 100px;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;
const LeftHero = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const Hero = styled.div`
  width: 92%;
  height: 550px;
  margin-top: 50px;
  display: flex;
`;
const GoogleImage1 = styled.div`
  width: 40px;
  height: 80%;
  object-fit: Cover;
  background-color: white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GoogleImage = styled.img`
  width: 40px;
  height: 80%;
  border-radius: 100px;
  object-fit: Cover;
  background-repeat: no-repeat;
  object-position: center;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconImage = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
`;
const Console = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
`;
const English = styled.div`
  width: 100px;
  height: 60%;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  jusify-content: center;
`;
const HeadeerIcon = styled.div`
  width: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 80%;
  height: 60%;
  border: none;
  background-color: #f0f0f0;
  padding-left: 10px;
  padding-right: 10px;
`;
const HeaderInput = styled.div`
  width: 120px;
  height: 60%;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justfy-content: center;
  gap: 5px;
`;
const Nav = styled.nav`
  cursor: pointer;
`;
const Navs = styled.div`
  width: 350px;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.8);
  font-size: 13px;
`;
const LogoImage = styled.img`
  height: 30px;
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
`;
const HeaderContent = styled.div`
  width: 92%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1a73e8;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
