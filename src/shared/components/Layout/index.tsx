import { FC, PropsWithChildren} from 'react';
import {
    LayoutContainer,
} from './Layout.styled';
import {Navbar} from "./Navbar";



export const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <LayoutContainer>
        <Navbar />
        {props.children}
    </LayoutContainer>
  );
};
