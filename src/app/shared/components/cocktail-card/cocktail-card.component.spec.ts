import { CocktailCardComponent } from "./cocktail-card.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { CocktailDetails, CocktailListItem } from "../../models/cocktail.model";
import { By } from "@angular/platform-browser";
import { first } from "rxjs";

describe("CocktailCardComponent", () => {
    let component: CocktailCardComponent;
    let fixture: ComponentFixture<CocktailCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CocktailCardComponent],
            providers: [provideRouter([{ path: "", component: CocktailCardComponent }])]
        }).compileComponents();

        fixture = TestBed.createComponent(CocktailCardComponent);
        component = fixture.componentInstance;
        component.cocktailDetails = {
            strDrink: "A1",
            strDrinkThumb: "https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/2x8thr1504816928.jpg",
            idDrink: "17222"
        };
        fixture.detectChanges();
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    describe("addFavouriteCocktail", () => {
        it("should add cocktail to favourites", () => {
            const favouriteButton = fixture.debugElement.query(By.css(".favourite_button"));
            let favoriteCocktail: CocktailDetails | CocktailListItem | null | undefined;
            const cocktail: CocktailDetails | CocktailListItem = {
                strDrink: "A1",
                strDrinkThumb: "https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/2x8thr1504816928.jpg",
                idDrink: "17222"
            };
            component.addFavouriteCocktailEvent.pipe(first()).subscribe(c => favoriteCocktail = c);
            favouriteButton.triggerEventHandler("click");
            expect(favoriteCocktail).toEqual(cocktail);
        });
    });

    describe("mapToCocktailListItem", () => {
        it('should map the cocktail', () => {
            const unmappedCocktail: CocktailDetails = {
                dateModified: "2016-04-28 18:59:38",
                idDrink: "14538",
                strAlcoholic: "Alcoholic",
                strCategory: "Shot",
                strCreativeCommonsConfirmed: "No",
                strDrink: "Bumble Bee",
                strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg",
                strGlass: "Shot glass",
                strInstructions: "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
                strInstructionsDE: "Dies ist ein mehrschichtiges Getränk. Zuerst gießt man die Bailey's in das Schnapsglas. Nehmen Sie dann einen umgedrehten Löffel und berühren Sie ihn an der Innenwand des Glases. Füge das Kahlua vorsichtig hinzu. Wiederholen Sie diesen Vorgang für den Sambuca. Bei richtiger Anwendung bleibt der Alkohol getrennt und ähnelt einer Hummel. Genießt es!!!!!!",
                strInstructionsIT: "Questo è uno scatto a strati.\r\nPer prima cosa, versa il Bailey's nel bicchierino.\r\nQuindi prendi un cucchiaio capovolto e toccalo sulla parete interna del vetro.\r\nAggiungi con attenzione il Kahlua.\r\nRipeti questo processo per la Sambuca.\r\nSe fatto correttamente, l'alcol rimarrà separato e assomiglierà a un calabrone",
                strInstructionsZH_HANT: null,
                ingredientList: [],
                strIBA: null,
                strDrinkAlternate: null,
                strImageAttribution: null,
                strImageSource: null,
                strInstructionsES: null,
                strInstructionsFR: null,
                strTags: null,
                strInstructionsZH_HANS: null,
                strVideo: null
            };
            const mappedCocktail = component.mapToCocktailListItem(unmappedCocktail);
            expect(mappedCocktail).toEqual({
                idDrink: "14538",
                strDrink: "Bumble Bee",
                strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uwqpvv1461866378.jpg"
            });
        });
    });
});
