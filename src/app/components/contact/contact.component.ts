import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardBodyComponent } from "../card-body/card-body.component";

@Component({
  selector: 'contact',
  imports: [CardComponent, CardTitleComponent, CardBodyComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
