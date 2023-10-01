import { DropDownItem } from "../../shared/components/Layout/DropDownItem";
import { VenueTable } from "./VenueTable";
import { FrontPage } from "../../shared/components/Layout/FrontPage";
import {
    StyledFrontPageContainer,
    BottomFrontPage,
    MainContainer,
    FilterContainer,
    VenueListContainer,
    FilterTitle,
    VenueTableNavBar,
    FilterNumber,
    SortNumber
} from './VenuesList.styled.tsx';

export const VenuesList = () => {
    return (
        <StyledFrontPageContainer>
            <FrontPage />
            <BottomFrontPage>
                <MainContainer>
                    <FilterContainer>
                        <FilterTitle>
                            FILTERS
                        </ FilterTitle>
                        <DropDownItem name={"location"}/>
                        <DropDownItem name={"price range"}/>
                        <DropDownItem name={"tags"}/>
                        <DropDownItem name={"add tag"}/>
                        <DropDownItem name={"location"}/>
                    </FilterContainer>
                    <VenueListContainer>
                        <VenueTableNavBar>
                            <FilterNumber>Show 18 on the page</FilterNumber>
                            <SortNumber>sort</SortNumber>
                        </VenueTableNavBar >
                        <VenueTable />
                    </VenueListContainer>
                </MainContainer>
            </BottomFrontPage>
        </StyledFrontPageContainer>
    );
};