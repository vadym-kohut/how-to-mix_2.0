import { HeaderComponent } from "./header.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";

describe("HeaderComponent", () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HeaderComponent],
            providers: [provideRouter([{ path: "", component: HeaderComponent }])]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should render the logo with the correct src and alt attributes", () => {
        const imgElement = fixture.debugElement.query(By.css(".header-logo")).nativeElement;
        expect(imgElement.src).toContain("assets/img/favicon.png");
        expect(imgElement.alt).toBe("Site Logo");
    });

    it("should render the \"HowToMix\" title with correct routerLink", () => {
        const titleLink = fixture.debugElement.queryAll(By.css("a"))[1];
        expect(titleLink.attributes["routerLink"]).toBe("/");
        expect(titleLink.nativeElement.textContent).toBe("HowToMix");
    });

    it("should render the \"Log In\" button with correct routerLink", () => {
        const loginButton = fixture.debugElement.query(By.css(".log-in"));
        expect(loginButton.attributes["routerLink"]).toBe("log-in");
        expect(loginButton.nativeElement.textContent).toBe("Log In");
    });

    it("should render the \"Sign Up\" button with correct routerLink", () => {
        const signUpButton = fixture.debugElement.query(By.css(".sign-up"));
        expect(signUpButton.attributes["routerLink"]).toBe("sign-up");
        expect(signUpButton.nativeElement.textContent).toBe("Sign Up");
    });
});
