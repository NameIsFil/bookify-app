import { styled } from "@mui/material/styles";
import {FC} from "react";

type ContainerProps = {
    background: number,
}
export const StyledVenueContainer: FC<ContainerProps> = styled('div')`
  width: 282px;
  height: 228px;
  background-image: url("https://picsum.photos/id/${(props:string) => props.background}/282/228");
  margin: 10px 0px;
`;