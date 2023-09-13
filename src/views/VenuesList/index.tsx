import { SearchField } from "../../shared/components/Layout/SearchField";
import { SearchButton } from "../../shared/components/Layout/SearchButton";
import { DropDownItem } from "../../shared/components/Layout/DropDownItem";
import { VenueTable } from "./VenueTable";
import {
    StyledFrontPageContainer,
    HeadText,
    SearchBar,
    TopPart,
    BottomPart,
    QuoteText,
    TopFrontPage,
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
            <TopFrontPage>
                <TopPart>
                    <HeadText>
                        Find your place and experience it together.
                    </HeadText>
                </TopPart>
                <BottomPart>
                    <SearchBar>
                        <SearchField name={"location"}/>
                        <SearchField name={"venue"}/>
                        <SearchField name={"pdsadlasdsa"}/>
                        <SearchField name={"location"}/>
                        <SearchField name={"location"}/>
                    </SearchBar>
                    <QuoteText>
                        I don’t want to be that specific
                    </QuoteText>
                    <SearchButton />
                </BottomPart>
            </TopFrontPage>
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