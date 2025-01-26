import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';


@Component({
    selector: 'app-root',
    imports: [BannerComponent, ContactComponent],
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
