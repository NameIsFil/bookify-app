import { FunctionComponent } from "react";
import { StyledFeatureContainer } from "./FeatureContainer.styled.tsx";
import CheckIcon from "@mui/icons-material/Check";

type FeatureContainerProps = string

export const FeatureContainer: FunctionComponent<FeatureContainerProps> = (props) => {

    if (props === undefined) {
        return null
    }

    return (
        <StyledFeatureContainer key={props} >
            <CheckIcon />
            <p>{props}</p>
        </StyledFeatureContainer>
    )
}