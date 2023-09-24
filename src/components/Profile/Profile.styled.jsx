import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 5px auto;
  padding: 7px;
  max-width: 100%;
  width: 360px;
  background-color: rgb(240, 240, 240);
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const Info = styled.p`
  color: rgb(0, 100, 100);
  text-shadow: 1px 1px 1px white;
`;

export const Name = styled(Info)`
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled(Info)`
  color: rgb(100, 50, 0);
`;

export const Location = styled(Info)`
  color: rgb(150, 25, 200);
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-inline-start: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 2px 0;

  &:hover {
    border-radius: 15px;
    background: rgb(200, 200, 200);
    transition: 250ms;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
  color: rgb(150, 100, 100);
`;

export const Quantity = styled(StatsInfo)`
  color: rgb(50, 0, 200);
  text-shadow: 1px 1px 1px #fff;
`;
