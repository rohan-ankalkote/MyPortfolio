import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
    startYear: Date = new Date(2021, 0, 30);

    getTotalYearsOfExperience(): string {
        var today = new Date();
        var totalYears = today.getFullYear() - this.startYear.getFullYear();
        var totalMonths = 12 - this.startYear.getMonth() + (totalYears - 1) * 12 + today.getMonth() + 1;
        return (totalMonths / 12).toFixed(1);
    }
}
