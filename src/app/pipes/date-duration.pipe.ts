import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateDuration'
})
export class DateDurationPipe implements PipeTransform {

    transform(startDate: Date, endDate: Date | null): unknown {
        var startYear = startDate.getFullYear();
        var startMonth = startDate.getMonth() + 1;

        if (endDate === null) endDate = new Date();

        var endYear = endDate.getFullYear();
        var endMonth = endDate.getMonth() + 1;

        if (startYear < endYear) {
            var totalYears = endYear - startYear;
            var totalMonths = Math.abs(endMonth - startMonth + 1);

            if(startMonth > endMonth) {
                totalYears--;
                totalMonths = 12 - totalMonths;
            }

            var value = "";
            if (totalYears === 0){
                value = totalMonths + " Months"
                if(totalMonths == 12) {
                    value = "1 Year";
                }
            }
            else {
                value = totalYears + " Years " + totalMonths + " Months";
            }

            if(totalYears == 1) {
                value = value.replace('Years', 'Year')
            }

            if(totalMonths == 1){
                value = value.replace("Months", "Month")
            }

            return value;
        }

        if (startYear === endYear) {
            var totalMonths = Math.abs(endMonth - startMonth + 1);
            var value = "";
            
            if(totalMonths == 12) {
                value = "1 Year";
            }
            else {
                value = totalMonths + " Months"
            }

            return value;
        }

        return "";
    }

}
