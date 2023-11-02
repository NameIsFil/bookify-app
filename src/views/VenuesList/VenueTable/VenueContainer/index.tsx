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
    TopBox,
    HeartIcon,
    RatingText,
    BigStarIcon, PeopleIcon,
    RatingSegment,
    LocationContainer,
    LocationIcon, LocationTextBot, LocationTextTop,
    LinkItem,
} from "./VenueContainer.styled.tsx";

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
            <LinkItem to={`/details/${props.venue.id}`}>
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
                            <LocationTextTop>{props.venue.pricePerNightInEUR}zł / doba</LocationTextTop>
                            <LocationContainer>
                                <LocationIcon />
                                <LocationTextBot> {props.venue.location.city}</LocationTextBot>
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
                </RatingBar>
            </LinkItem>
        </div>
    )
}