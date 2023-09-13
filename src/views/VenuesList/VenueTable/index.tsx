import { FunctionComponent, useEffect, useState } from "react";
import { VenueContainer } from "./VenueContainer";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import {
    StyledVenueTable,
} from './VenueTable.styled.tsx';

type features = string[]

type sleepingDetails = {
    maxCapacity: number,
    amountOfBeds: number,
}

type contactDetails = {
    phone: string,
    email: string,
}

export type Venue = {
    id: string,
    location: Location,
    pricePerNightInEUR: number,
    rating: number,
    capacity: number,
    name: string,
    albumId: number,
}

export type VenueDetails = {
    id: string,
    venueId: string,
    location: Location,
    pricePerNightInEUR: number,
    rating: number,
    numberOfReviews: number,
    capacity: number,
    name: string,
    albumId: number,
    description: string,
    features: features,
    sleepingDetails: sleepingDetails,
    checkInHour: string,
    checkOutHour: string,
    distanceFromCityCenterInKM: string,
    contactDetails: contactDetails,
}

export type VenueDetailsArray = VenueDetails[]

export type VenuesArray = Venue[]

export type VenueCombined = {
    venue: Venue,
    venueDetails: VenueDetails,
}

export type VenuesList = VenueCombined[]

export type VenuesListObject = {[key: string]: {
        venue: Venue,
        venueDetails: VenueDetails,
    }}

export type VenuesDetailsList = {[key: string]: {
        venueDetails: VenueDetails,
    }}

export const VenueTable: FunctionComponent = () => {
    const [venuesList, setVenuesList] = useState<VenuesList | null>(null)

    useEffect(() => {
        void createVenuesList();
    }, [])

    async function createVenuesList() {
        const venueDetailsResponse = await axios.get<VenueDetailsArray>("http://localhost:3000/venuesDetails");
        const venuesResponse = await axios.get<VenuesArray>("http://localhost:3000/venues");

        const venuesListObject: VenuesListObject = {};

        const venuesDetailsList: VenuesDetailsList = {};

        venueDetailsResponse.data.forEach((venueDetails) => {
            const venueId = venueDetails.venueId;
            venuesDetailsList[venueId] = {
                venueDetails: venueDetails
            };
        })

        venuesResponse.data.forEach((venue) => {
            const venueId = venue.id;
            venuesListObject[venueId] = {
                venue: venue,
                venueDetails: venuesDetailsList[venueId].venueDetails,
            };
        })

        const venuesListArray = Object.values(venuesListObject);
        setVenuesList(venuesListArray);
        console.log(venuesListArray)
    }

    if(!venuesList) {
        return <CircularProgress />
    }

    return (
        <StyledVenueTable>
            {
                venuesList.map((venue:VenueCombined) => {
                    return <VenueContainer venue={venue.venue} venueDetails={venue.venueDetails}/>
                })
            }
        </StyledVenueTable>
    );
};