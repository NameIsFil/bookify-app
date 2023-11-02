import {SearchButton} from "../SearchButton";
import {
    BottomPart,
    HeadText, QuoteText,
    SearchBar,
    TopFrontPage,
    TopPart,
    SearchFieldInput,
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
                    <SearchFieldInput name={"location"}/>
                    <SearchFieldInput name={"venue"}/>
                    <SearchFieldInput name={"pdsadlasdsa"}/>
                    <SearchFieldInput name={"location"}/>
                    <SearchFieldInput name={"location"}/>
                </SearchBar>
                <QuoteText>
                    I don’t want to be that specific
                </QuoteText>
                <SearchButton/>
            </BottomPart>
        </TopFrontPage>
    )
}