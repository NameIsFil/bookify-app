import {styled} from "@mui/material/styles";
import {SearchField} from "../SearchField";


export const TopFrontPage = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 800px;
  margin-top: 56px;
  background-image: url("src/assets/venue.png");
  background-repeat: no-repeat;
  background-position: 8% 100%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.08);
  @media only screen and (max-width: 576px) {
    background-size: 100%;
  }
  \`;
  //&:hover {
  //  width: 380px;
  //  outline: purple;
  //  border:purple;
  //}
`;

export const SearchBar = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  flex-flow: row wrap;
  @media only screen and (max-width: 1580px) {
    
  }
  
  @media only screen and (max-width: 576px) {
    justify-content: center;
  }
  \`;
`;

export const SearchFieldInput = styled(SearchField)`
   margin-top: 400px;
`;

export const HeadText = styled('div')`
  color: rgba(0, 0, 0, 0.75);
  font-family: "Montserrat SemiBold";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const QuoteText = styled('div')`
  font-family: "Montserrat SemiBold";
  color: #67AA92;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.48px;
  margin-top: 15px;
  margin-bottom: 44px;
`;

export const TopPart = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 300px;
  width: 100%;
  padding: 0px 160px;
  @media only screen and (max-width: 576px) {
    justify-content: center;
    padding: 0 100px;
`;

export const BottomPart = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  padding: 0px 160px;
  @media only screen and (max-width: 1580px) {
    padding: 0 100px;
  }
`;