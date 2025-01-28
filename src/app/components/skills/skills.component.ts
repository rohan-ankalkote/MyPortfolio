import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardBodyComponent } from "../card-body/card-body.component";

@Component({
  selector: 'skills',
  imports: [CardComponent, CardTitleComponent, CardBodyComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
