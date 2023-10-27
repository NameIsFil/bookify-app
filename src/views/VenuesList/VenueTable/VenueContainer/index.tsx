import { Venue, VenueDetails } from "../index.tsx";
import { FunctionComponent } from "react";
import {
    StyledVenueContainer,
    RatingBar,
    ContainerIcon,
    ContainerTitle,
    ContainerPrice,
    ContainerPriceInterior,
    ContainerText,
    LocationText,
    TopBox,
    HeartIcon,
    RatingText,
    BigStarIcon, PeopleIcon,
    RatingSegment,
    LocationContainer,
    LocationIcon,
} from "./VenueContainer.styled.tsx";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';


type VenueContainerProps = {
    venue: Venue,
    venueDetails: VenueDetails | undefined,
}

export const VenueContainer: FunctionComponent<VenueContainerProps> = (props) => {

    if (props.venueDetails === undefined) {
        return null
    }

    return (
        <div>
            <StyledVenueContainer background={props.venue.albumId} >
                <TopBox>
                    <ContainerIcon>
                        <HeartIcon />
                    </ContainerIcon>
                    <ContainerTitle>
                        <ContainerText>{props.venue.name}</ContainerText>
                    </ContainerTitle>
                </TopBox>
                <ContainerPrice>
                    <ContainerPriceInterior>
                        <ContainerText>{props.venue.pricePerNightInEUR}zł / doba</ContainerText>
                        <LocationContainer>
                            <LocationIcon />
                            <LocationText> {props.venue.location.city}</LocationText>
                        </LocationContainer>
                    </ContainerPriceInterior>
                </ContainerPrice>
            </StyledVenueContainer>
            <RatingBar>
                <RatingSegment>
                    <BigStarIcon />
                    <RatingText>rating  {props.venue.rating}</RatingText>
                </RatingSegment>
                <RatingSegment>
                    <PeopleIcon />
                    <RatingText>capacity  {props.venue.capacity}</RatingText>
                </RatingSegment>
                <Link to={`/details/${props.venue.id}`}>
                    <AddIcon sx={{ color: grey[100] }} />
                </Link>
            </RatingBar>
        </div>
    )
}