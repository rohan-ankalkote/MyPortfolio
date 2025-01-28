import { Component } from '@angular/core';
import { Company } from '../../models/models';
import { DateRangePipe } from '../../pipes/date-range.pipe';
import { DateDurationPipe } from '../../pipes/date-duration.pipe';
import { CardComponent } from "../card/card.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardBodyComponent } from "../card-body/card-body.component";

@Component({
    selector: 'work',
    imports: [DateRangePipe, DateDurationPipe, CardComponent, CardTitleComponent, CardBodyComponent],
    templateUrl: './work.component.html',
    styleUrl: './work.component.scss'
})
export class WorkComponent {
    companies: Company[] = [
        {
            name: "FIS Global",
            startDate: new Date(2021, 7, 30),
            endDate: null,
            positions: [
                {
                    name: "Software Engineer 2",
                    startDate: new Date(2024, 6, 1),
                    endDate: null,
                    summary: [
                        "Working on <span class='hld'>ASP.NET Core Web API</span> application to migrate old SOAP based application to new <span class='hld'>REST</span> based Web API. ",
                        "Engaged in lot of <span class='hld'>research work</span> on REST APIs and analysed the existing project deeply and finally came up with working solution which will keep existing SOAP APIs as it is and still able to create new REST APIs ",
                        "Create new ASP.NET Core Web API solution using <span class='hld'>Clean architecture and CQRS pattern</span> to implement new client requirements. ",
                        "Researched about <span class='hld'>integration tests</span>, and created new solution which will execute test using data from database and then rollback the changes immediately, so that real world scenarios can be tested."
                    ]
                },
                {
                    name: "Software Engineer 1",
                    startDate: new Date(2023, 6, 1),
                    endDate: new Date(2024, 5, 30),
                    summary: [
                        "Worked on core features of a big financial application (VPM) used to manage hedge fund portfolios having millions of dollars.",
                        "This application is developed using <span class='hld'>WPF</span> technology as UI and <span class='hld'>ASP.NET Core Web API</span> as backend.",
                        "Continued working on a Angular application where small part of WPF application need to be migrated. Used <span class='hld'>Pipes, Directives</span> and other features on <span class='hld'>Angular</span>.",
                        "Worked on <span class='hld'>SQL Server</span> database to use transactions in order to commit or rollback all changes at a time. Used <span class='hld'>Entity framework core</span> as an ORM as well as <span class='hld'>Dapper</span>.",
                        "Written Unit tests as well as Integration tests using <span class='hld'>XUnit / MSTest</span> framework."
                    ]
                },
                {
                    name: "IT Trainee",
                    startDate: new Date(2021, 7, 30),
                    endDate: new Date(2023, 5, 30),
                    summary: [
                        "Initially got training on angular and dotnet technologies.",
                        "Collaborated in a team on a project and developed an <span class='hld'>angular + dotnet</span> application from scratch.",
                        "This application which was developed is called “Scheduler” which will automatically run the processes which previously needed to be ran manually thus reducing the manual effort."
                    ]
                }
            ]
        }
    ];
}