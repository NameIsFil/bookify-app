import { styled } from "@mui/material/styles";

type InputProps = {
    background: number,
}

export const StyledVenueContainer = styled('div')<InputProps>(({ background }) => ({
    background-image: url("https://picsum.photos/id/${background}/282/228")
}));

// export const StyledVenueContainer: FC<ContainerProps> = styled('div')`
//   width: 282px;
//   height: 228px;
//   background-image: url("https://picsum.photos/id/${(props:string) => props.background}/282/228");
//   margin: 10px 0px;
// `;