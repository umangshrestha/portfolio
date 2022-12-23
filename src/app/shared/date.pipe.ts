import { Pipe, PipeTransform } from "@angular/core";


const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

@Pipe({ name: 'DateToString' })
export class DateToString implements PipeTransform {
    transform(value: Date | string): string {
        if (typeof value === 'string') {
            value = new Date(value);
        }
        const month = MONTHS[value.getMonth()];
        const year = value.getFullYear();
        return `${month}, ${year}`;
    }
}


