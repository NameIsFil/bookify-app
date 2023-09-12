import { Venue, VenueDetails } from "../index.tsx";
import { FunctionComponent } from "react";
import { StyledVenueContainer } from "./VenueContainer.styled.tsx";
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
        <StyledVenueContainer>
            <p>{props.venue.name}</p>
            <p>{props.venueDetails.id}</p>
            <Link to={``}>
                <AddIcon sx={{ color: grey[100] }} />
            </Link>
        </StyledVenueContainer>
    )
}