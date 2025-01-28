import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardBodyComponent } from "../card-body/card-body.component";

@Component({
  selector: 'projects',
  imports: [CardComponent, CardTitleComponent, CardBodyComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
