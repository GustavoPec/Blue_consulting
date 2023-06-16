import { styled } from "styled-components";
import BlueWall from "../../assets/Blue-Wall.png";
import JumpingGuy from "../../assets/Jumping-Guy.png";

export const Main = styled.div`
  width: 100%;
  height: auto;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 767px) {
    height: 1400px;
  }
`;

export const ContinerOutsiteBlue = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  justify-content: end;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerBlue = styled.div`
  height: 100%;
  width: 200px;
  background-image: url(${BlueWall});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerPerson = styled.div`
  width: 700px;
  height: 1200px;
  background-image: url(${JumpingGuy});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 590px;
  background-attachment: fixed;
  z-index: 1;
  position: absolute;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContainerInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 20px;

  .MissionText {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 20px;
    height: 200px;
    width: 430px;

    @media (max-width: 767px) {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }

  .Title {
    width: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
      width: 100%;
    }

    h2 {
      font-size: 40px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(
        to right,
        #0076e2 0%,
        #0076e2 50%,
        white 50%,
        white 53%,
        #101e2b 53%,
        #101e2b 66%,
        white 66%,
        white 69%,
        #0076e2 69%,
        #0076e2 100%
      );
      border-image-slice: 0 0 100% 0;
    }
  }

  .TitleSubText {
    padding-left: 9px;

    @media (max-width: 767px) {
      width: 350px;
      padding: none;
      text-align: center;
    }
  }
`;

export const AchievementsProjs = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
  }

  .TitleAchievement {
    width: auto;
    display: flex;
    h2 {
      font-size: 40px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(
        to right,
        #0076e2 0%,
        #0076e2 50%,
        white 50%,
        white 53%,
        #101e2b 53%,
        #101e2b 100%
      );
      border-image-slice: 0 0 100% 0;
    }
  }
`;

export const AchievementsProjects = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
  align-items: start;
  justify-content: space-evenly;

  @media (max-width: 767px) {
    align-items: center;
  }
`;

export const Costumers = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 50px;

  @media (max-width: 767px) {
    width: 100%;
  }

  .TitleCostumers {
    width: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 40px;
      border-style: solid;
      border-width: 7px;
      border-image: linear-gradient(
        to right,
        #0076e2 0%,
        #0076e2 50%,
        white 50%,
        white 53%,
        #101e2b 53%,
        #101e2b 100%
      );
      border-image-slice: 0 0 100% 0;

      @media (max-width: 767px) {
        display: flex;
        width: 300px;
      }
    }

    @media (max-width: 767px) {
      width: 100%;
      align-items: center;
    }
  }
`;
