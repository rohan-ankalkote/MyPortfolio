import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';


@Component({
    selector: 'app-root',
    imports: [BannerComponent, ContactComponent, SkillsComponent, WorkComponent, EducationComponent, ProjectsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    host: {
        '[class.pc]': 'isPc'
    }
})
export class AppComponent implements OnInit {
    title = 'Rohan Ankalkote';
    isPc: boolean = false;

    constructor(private breakPointObserver: BreakpointObserver) { }

    ngOnInit(): void {
        this.breakPointObserver.observe([Breakpoints.WebLandscape]).subscribe({
            next: result => this.isPc = result.matches
        })
    }
}
