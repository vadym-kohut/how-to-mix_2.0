import { SidebarComponent } from "./sidebar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";

describe("SidebarComponent", () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SidebarComponent],
            providers: [provideRouter([{ path: "", component: SidebarComponent }])]
        }).compileComponents();

        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should render links with correct routerLinks and text", () => {
        const links = fixture.debugElement.queryAll(By.css("a"));
        const routerLinks: string[] = ["cocktails", "ingredients", "favourite-cocktails", "favourite-ingredients", "stop-list"];
        const linkTexts: string[] = ["Cocktails", "Ingredients", "Fav cocktails", "Fav ingredients", "Stop list"];
        links.forEach((link, index) => {
            expect(link.attributes["routerLink"]).toEqual(routerLinks[index]);
            expect(link.nativeElement.textContent).toContain(linkTexts[index]);
        });
    });

    it("should render images with correct src and alt", () => {
        const images = fixture.debugElement.queryAll(By.css("img"));
        const imgSrcs: string[] = ["assets/img/cocktails.png", "assets/img/ingredients.png", "assets/img/fav-cocktails.png", "assets/img/fav-ingredients.png", "assets/img/stop-list.png"];
        const imgAlts: string[] = ["cocktails", "ingredients", "favourite cocktails", "favourite ingredients", "stop list"];
        images.forEach((img, index) => {
            expect(img.attributes["src"]).toContain(imgSrcs[index]);
            expect(img.attributes["alt"]).toContain(imgAlts[index]);
        });
    });
});
