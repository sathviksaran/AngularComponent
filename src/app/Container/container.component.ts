import { Component } from "@angular/core";
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";
import { NotificationComponent } from "../notification/notification.component";
import { SearchComponent } from "../search/search.component";
import { ProductsComponent } from "../products/products.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent]
})
export class ContainerComponent{

} 