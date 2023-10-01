import {SearchField} from "../SearchField";
import {SearchButton} from "../SearchButton";
import {
    BottomPart,
    HeadText, QuoteText,
    SearchBar,
    TopFrontPage,
    TopPart
} from "./FrontPage.styled.tsx";


export const FrontPage = () => {
    return (
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
                <SearchButton/>
            </BottomPart>
        </TopFrontPage>
    )
}