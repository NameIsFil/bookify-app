import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const StyledNavbarContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100%;
  height: 56px;
  background-color: #FDFDFD;
  z-index: 2222;
  margin: 0px;
  padding: 0px 160px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.08);
  position: fixed;
`;

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  height: 56px;
  background-color: #FDFDFD;
  z-index: 2222;
  margin: 0px;
  padding: 0px;
`;

export const Title = styled('div')`
  color: #000;
  font-family: Poppins;
  font-size: 37.278px;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
`;

export const NavButton = styled(MuiButton)`
  color: rgba(0, 0, 0, 0.75);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.48px;
  white-space:nowrap;
`;

export const LoginButton = styled(MuiButton)`
  color: #67AA92;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.48px;
  text-decoration: none;
`;

