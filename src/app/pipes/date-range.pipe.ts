import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

    transform(startDate: Date, endDate: Date | null): string {
        if(endDate === null) {
            return `(${this.GetMonthName(startDate.getMonth())}-${startDate.getFullYear()} to Present)`;
        }
        else {
            var start = `${this.GetMonthName(startDate.getMonth())}-${startDate.getFullYear()}`;
            var end = `${this.GetMonthName(endDate.getMonth())}-${endDate.getFullYear()}`;

            return "(" + start + " to " + end + ")";
        }
    }

    private GetMonthName(monthIndex: number): string {
        var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        return names[monthIndex];
    }
}
