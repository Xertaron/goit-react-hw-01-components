import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px auto;

  max-width: 100%;
  width: 360px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 10px;
  border-bottom: 1px solid #d3d5e3;
  color: rgb(255, 155, 0);
  text-shadow: 1px 1px 20px #fff;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  background-color: rgb(10, 80, 0);
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  width: 100%;
  height: 100%;
  text-shadow: 0 0 1px #000;

  &:first-child {
    border-bottom-left-radius: 0.5rem;
  }

  &:last-child {
    border-bottom-right-radius: 0.5rem;
  }

  background-color: ${() => getRandomHexColor()};
`;

export const Label = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
`;
