import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckIcon from "@mui/icons-material/Check";
import {Divider} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';



export const FullPage = styled('div')`
  width: 100%;
  marign: 0px;
`;

export const BackIcon = styled(ArrowBackIosIcon)`
  width: 20px;
  color: rgba(0, 0, 0, 0.75);
`;

export const BackButtonText = styled('p')`
  color: rgba(0, 0, 0, 0.75);
  text-decoration: none;
  font-size: 16px;
`;

export const BackButton = styled('div')`
  margin-top: 50px;
  width: 200px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled('h1')`
  color: black;
  font-size: 40px;
  font-weight: 600;
`;

export const TitleBottom = styled('h2')`
  color: black;
  font-size: 25px;
  font-weight: 100;
`;

export const GalleryPhotos = styled('div')`
  width: 692px;
  height: 352px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowLeft = styled(ArrowBackIosIcon)`
  height: 60px;
  width: 100px;
  color: #f2f2f2;
`;

export const ArrowRight = styled(ArrowBackIosIcon)`
  height: 60px;
  width: 100px;
  rotate: 180deg;
  color: #f2f2f2;
`;

export const SecondaryTitle = styled('h3')`
  color: rgba(0, 0, 0, 0.75);
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const TypographyBar = styled('div')`
  background-color: black;
  height: 1px;
`;

export const OptionsBar = styled('div')`
  width: 692px;
  height: 80px;
  box-shadow: 0px 2px 0px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const OptionsButton = styled('p')`
  font-family: "Montserrat SemiBold";
  color: #67AA92;
  font-size: 16px;
`;

export const OptionColumn = styled('div')`
  width: 692px;
  padding: 30px 80px;
  box-shadow: 0px 2px 0px 3px rgba(0, 0, 0, 0.1);
`;

export const VenueText = styled('p')`
  word-spacing: 4px;
  line-height: 30px;
`;

export const FeaturesList = styled('p')`
`;

export const FeatureContainer = styled('div')`
  word-spacing: 4px;
  line-height: 30px;
  display: flex;
  align-items: center;
`;

export const CheckmarkIcon = styled(CheckIcon)`
  margin-right: 15px;
`;

export const FeatureBedIcon = styled(BedIcon)`
  margin-right: 15px;
`;

export const ClockIcon = styled(ScheduleIcon)`
  margin-right: 15px;
`;

export const CityIcon = styled(LocationCityIcon)`
  margin-right: 15px;
`;

export const PhoneIcon = styled(CallIcon)`
  margin-right: 15px;
`;

export const MailIcon = styled(EmailIcon)`
  margin-right: 15px;
`;


export const BottomPage = styled('div')`
  padding: 0px 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled('div')`
  
`;

export const RightSide = styled('div')`
  width: 382px;
  margin-top: 150px
`;

export const MainText = styled('p')`
  word-spacing: 4px;
  line-height: 30px;
  font-size: 16px;
`;

export const ContentDivider = styled(Divider)`
  margin-top: 40px;
  margin-bottom: 40px;
`;


