import {styled} from "@mui/material/styles";

export const StyledFrontPageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  background-color: #FDFDFD;
`;

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

export const SearchBar = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
`;

export const TopPart = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 300px;
  width: 100%;
  padding: 0px 160px;
`;
export const BottomPart = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  padding: 0px 160px;
`;

export const BottomFrontPage = styled('div')`
    width: 100%;
`;

export const MainContainer = styled('div')`
  margin-top: 100px;
  padding: 0px 160px;
  display: flex;
  justify-content: space-between;
`;

export const FilterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  border: 0.5px solid rgba(0, 0, 0, 0.10);
`;

export const FilterTitle = styled('div')`
  width: 282px;
  height: 48px;
  flex-shrink: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VenueListContainer = styled('div')`
  width: 100%;
  margin-left: 50px;
`;

export const VenueTableNavBar = styled('div')`
  width: 100%;
  height: 48px;
  flex-shrink: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const SortNumber = styled('div')`
  color: #67AA92;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: 0.48px;
`;

export const FilterNumber = styled('div')`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;