import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VenueCombined, VenueDetailsArray, VenuesArray, VenuesDetailsList, VenuesListObject} from "../index.tsx";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { FrontPage } from "../../../../shared/components/Layout/FrontPage";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
    BackIcon,
    BackButton,
    BackButtonText,
    BottomPage,
    Title,
    TitleBottom,
    GalleryPhotos,
    LeftSide,
    RightSide,
    SecondaryTitle,
    ArrowLeft,
    ArrowRight,
    TypographyBar,
    OptionsBar,
    OptionsButton,
    OptionColumn,
    VenueText,
    FeaturesList,
    FeatureContainer,
    CheckmarkIcon,
    MainText,
    ContentDivider,
    FeatureBedIcon, ClockIcon, CityIcon, PhoneIcon, MailIcon,
    FullPage
} from "./VenueDetails.styled.tsx";
import BasicDateCalendar from "./BookingCalendar";

export function VenueDetails() {
    const [ currentVenue, setCurrentVenue] = useState<VenueCombined | null>(null)
    const { venueId } = useParams();

    useEffect(() => {
        async function createVenuesList() {
            if (!venueId) {
                return null
            }
            const venueDetailsResponse = await axios.get<VenueDetailsArray>('http://localhost:3000/venuesDetails?venueId='+venueId);
            const venuesResponse = await axios.get<VenuesArray>('http://localhost:3000/venues?id='+venueId);
            const venuesListObject: VenuesListObject = {};
            const venuesDetailsList: VenuesDetailsList = {};
            venueDetailsResponse.data.forEach((venueDetails) => {
                const thisVenueId = venueDetails.venueId;
                venuesDetailsList[thisVenueId] = {
                    venueDetails: venueDetails
                };
            })
            venuesResponse.data.forEach((venue) => {
                const thisVenueId = venue.id;
                venuesListObject[thisVenueId] = {
                    venue: venue,
                    venueDetails: venuesDetailsList[thisVenueId].venueDetails,
                };
            })
            // skorzystać z pierwszych elementów tablicy
            const thisVenue = venuesListObject[venueId]
            setCurrentVenue(thisVenue);
            console.log(thisVenue)
        }
        void createVenuesList();
    }, [
        setCurrentVenue,
        venueId
    ])

    if (currentVenue === null) {
        return <CircularProgress />
    }

    return (
        <FullPage>
            <FrontPage />
            <BottomPage>
                <LeftSide>
                    <Link to={`/`}>
                        <BackButton>
                            <BackIcon />
                            <BackButtonText>back to results</BackButtonText>
                        </BackButton>
                    </Link>
                    <Title>{currentVenue.venue.name}</Title>
                    <TitleBottom>{currentVenue.venueDetails.location.postalCode}, {currentVenue.venueDetails.location.city}</TitleBottom>
                    <GalleryPhotos>
                        <ArrowLeft />
                        <ArrowRight />
                    </GalleryPhotos>
                    <OptionsBar>
                        <OptionsButton>description</OptionsButton>
                        <OptionsButton>gallery</OptionsButton>
                        <OptionsButton>map</OptionsButton>
                    </OptionsBar>
                    <OptionColumn>
                        <VenueText>
                            {currentVenue.venueDetails.description}
                        </VenueText>
                        <ContentDivider />
                        <FeaturesList>
                            {
                                currentVenue.venueDetails.features.map((feature) => (
                                        <FeatureContainer>
                                            <CheckmarkIcon />
                                            <MainText>{feature}</MainText>
                                        </ FeatureContainer>
                                    )
                                )
                            }
                        </FeaturesList>
                        <ContentDivider />
                        <FeaturesList>
                            <FeatureContainer>
                                <FeatureBedIcon />
                                <MainText>
                                    {currentVenue.venueDetails.sleepingDetails.maxCapacity} sleeping places - {currentVenue.venueDetails.sleepingDetails.amountOfBeds} beds
                                </MainText>
                            </FeatureContainer>
                            <FeatureContainer>
                                <ClockIcon />
                                <MainText>
                                    check-in {currentVenue.venueDetails.checkInHour} / check-out {currentVenue.venueDetails.checkOutHour}
                                </MainText>
                            </FeatureContainer>
                            <FeatureContainer>
                                <CityIcon />
                                <MainText>
                                    {currentVenue.venueDetails.distanceFromCityCenterInKM} to the city
                                </MainText>
                            </FeatureContainer>
                        </FeaturesList>
                    </OptionColumn>
                </LeftSide>
                <RightSide>
                    <BasicDateCalendar />
                    <SecondaryTitle>Contact this venue</SecondaryTitle>
                    <TypographyBar />
                    <FeaturesList>
                        <FeatureContainer>
                            <PhoneIcon />
                            <MainText>
                                {currentVenue.venueDetails.contactDetails.phone}
                            </MainText>
                        </FeatureContainer>
                        <FeatureContainer>
                            <MailIcon />
                            <MainText>
                                {currentVenue.venueDetails.contactDetails.email}
                            </MainText>
                        </FeatureContainer>
                    </FeaturesList>
                    <SecondaryTitle>Check out social media</SecondaryTitle>
                    <TypographyBar />
                    <FeaturesList>
                        <TwitterIcon />
                        <FacebookIcon />
                    </FeaturesList>
                </RightSide>
            </BottomPage>
        </FullPage>
    )
}