import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VenueCombined, VenueDetailsArray, VenuesArray, VenuesDetailsList, VenuesListObject} from "../index.tsx";
import { CircularProgress } from "@mui/material";
import axios from "axios";



export function VenueDetails() {
    const [ currentVenue, setCurrentVenue] = useState<VenueCombined | null>(null)
    const { thisVenueId } = useParams();

    useEffect(() => {
        void createVenuesList();
    }, )

    async function createVenuesList() {
        if (!thisVenueId) {
            return null
        }

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

        const thisVenue = venuesListObject[thisVenueId]

        setCurrentVenue(thisVenue);
        console.log(thisVenue)
    }

    if (currentVenue === null) {
        return <CircularProgress />
    }

    return (
        <div>
            <h1>All Good</h1>
            <p>Hello There</p>
            <p>{currentVenue.venue.name}</p>
            <p>{currentVenue.venueDetails.id}</p>
        </div>
    )
}