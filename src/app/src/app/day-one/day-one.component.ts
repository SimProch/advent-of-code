import { Component, OnInit } from "@angular/core";
import { getDayOneSource } from "./day-one-source";

@Component({
    selector: "app-day-one",
    templateUrl: "./day-one.component.html",
    styleUrls: ["./day-one.component.css"]
})
export class DayOneComponent implements OnInit {
    constructor() {}

    ngOnInit() {
      adventOfCodeDayOne();
    }
}

function adventOfCodeDayOne() {
    const fuel = getDayOneSource();
    const additionalFuel = number => {
        let remainingFuel = number;
        let finalFuel = 0;
        while (remainingFuel > 0) {
            remainingFuel =
                Math.floor(remainingFuel / 3) - 2 > 0
                    ? Math.floor(remainingFuel / 3) - 2
                    : 0;
            finalFuel += remainingFuel;
        }
        return finalFuel;
    };
    const finalFuel = fuel.map(num => additionalFuel(num));

    const sum = finalFuel.reduce((x, y) => x + y);
    console.log("D1");
    console.log(sum);
}
