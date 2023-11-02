import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";

type InputProps = {
    background: number,
}

export const StyledVenueContainer = styled('div')<InputProps>(({ background }) => `
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 193px;
   width: 282px;
   background-image: url("https://picsum.photos/id/${background}/282/193"); 
`)

export const LinkItem = styled(Link)`
  text-decoration: none;
`;

export const ContainerIcon = styled('div')`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 0px 0px 8px 0px;
  background: rgba(0, 0, 0, 0.50);
`;

export const ContainerTitle = styled('div')`
  max-width: 180px;
  resize: both;
  padding: 8px 5px;
  display: flex;
  justify-content: center;
  border-radius: 0px 0px 0px 18px;
  align-items: center;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.50);
`;

export const ContainerText = styled('p')`
  margin: 0 5px;
  text-align: right;
  color: #FFF;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.60);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const ContainerPrice = styled('div')`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: fit-content;
  height: 70px;
  flex-shrink: 0;
  border-radius: 0px 18px 0px 0px;
  background: rgba(0, 0, 0, 0.60);
`;

export const ContainerPriceInterior = styled('div')`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const LocationContainer = styled('div')`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LocationTextTop = styled('p')`
  margin: 0 0 0 5px;
  text-align: right;
  color: #FFF;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.60);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.48px;
`;

export const LocationTextBot = styled('p')`
  margin: 0;
  flex-shrink: 0;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px;
`;

export const LocationIcon = styled(LocationOnIcon)`
  margin: 0;
  color: white;
`;

export const HeartIcon = styled(FavoriteBorderIcon)`
  margin: 0;
  color: white;
`;

export const TopBox = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingBar = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.20);
  background: #FDFDFD;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.10);
  margin-bottom: 15px;
`;

export const RatingSegment = styled('div')`
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RatingText = styled('p')`
  color: #595959;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.42px;
`;

export const BigStarIcon = styled(StarIcon)`
  margin-right: 5px;
  color: #595959;
`;

export const PeopleIcon = styled(PeopleAltIcon)`
  margin-right: 5px;
  color: #595959;
`;


