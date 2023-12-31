import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 4px;

  max-width: 90%;
  width: 90%;
  border-radius: 4px;
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const Thead = styled.thead`
  border-radius: 4px;
  background-color: rgb(200, 120, 50);
  color: rgb(0, 120, 50);
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(115, 120, 175);
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
           color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;
`;

export const ExtendedTr = styled(Tr)`
  background-color: rgb(100, 150, 100);
`;

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: 4px;
  text-align: left;

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
  }
`;

export const Tb = styled.tbody`
  background-color: white;
`;

export const Td = styled.td`
  padding-left: 4px;
  border-right: 0.125rem solid #e9edff;

  :hover {
    background-color: rgb(100, 50, 100);
    color: #400075;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
    font-weight: 500;

    box-shadow: rgb(115, 120, 175) -1px 1px, rgb(115, 120, 175) -2px 2px,
      rgb(115, 120, 175) -3px 3px, rgb(115, 120, 175) -4px 4px,
      rgb(115, 120, 175) -5px 5px, rgb(115, 120, 175) -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
