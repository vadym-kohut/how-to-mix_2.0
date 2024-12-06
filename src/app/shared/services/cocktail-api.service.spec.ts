import { CocktailApiService } from "./cocktail-api.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

describe("CocktailApiService", () => {
    let cocktailApiService: CocktailApiService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CocktailApiService]
        });

        cocktailApiService = TestBed.inject(CocktailApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it("should create the service", () => {
        expect(cocktailApiService).toBeTruthy();
    });
});
