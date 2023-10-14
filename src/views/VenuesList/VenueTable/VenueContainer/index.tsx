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
        <StyledVenueContainer background={props.venue.albumId} >
            <p>{props.venue.name}</p>
            <p>{props.venue.id}</p>
            <Link to={`/details/${props.venue.id}`}>
                <AddIcon sx={{ color: grey[100] }} />
            </Link>
        </StyledVenueContainer>
    )
}