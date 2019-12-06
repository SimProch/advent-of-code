import { Component, OnInit } from "@angular/core";
import { getDayTwoSource } from "./day-two-source";

const OP_CODE_ADD = 1;
const OP_CODE_MULTIPLY = 2;
const OP_CODE_TERMINATE = 99;
const DESIRED_RESULT = 19690720;

@Component({
    selector: "app-day-two",
    templateUrl: "./day-two.component.html",
    styleUrls: ["./day-two.component.css"]
})
export class DayTwoComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        adventOfCodeDayTwo();
    }
}

function adventOfCodeDayTwo() {
    let numbers = getDayTwoSource();
    numbers[1] = 12;
    numbers[2] = 2;
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            numbers = getDayTwoSource();
            numbers[1] = i;
            numbers[2] = j;
            mutateArray(numbers);
            if (numbers[0] === DESIRED_RESULT) break;
        }
        if (numbers[0] === DESIRED_RESULT) break;
    }

    console.log("D2");
    console.log(numbers);
    console.log(numbers[0]);
}

function mutateArray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const firstTarget = numbers[numbers[i + 1]];
        const secondTarget = numbers[numbers[i + 2]];
        const outputIndex = numbers[i + 3];
        if (current === OP_CODE_ADD) {
            numbers[outputIndex] = firstTarget + secondTarget;
            i += 3;
        } else if (current === OP_CODE_MULTIPLY) {
            numbers[outputIndex] = firstTarget * secondTarget;
            i += 3;
        } else if (current === OP_CODE_TERMINATE) break;
    }
}
