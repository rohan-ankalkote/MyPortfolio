import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardBodyComponent } from "../card-body/card-body.component";

@Component({
  selector: 'education',
  imports: [CardComponent, CardTitleComponent, CardBodyComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

}
