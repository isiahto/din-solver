import { Interval } from './Interfaces';

export class Helper {

    public static intervalToString(i: Interval, unit: string): string {
        if (i == null) {
            return "";
        }

        if (!unit) {
            unit = "";
        }

        if (i.lower && i.upper) {
            return `${i.lower} - ${i.upper} ${unit}`;
        }
        else if (i.upper) {
            return `<= ${i.upper} ${unit}`;
        }
        else if (i.lower) {
            return `>= ${i.lower} ${unit}`;
        } else {
            console.error("Empty interval, stacktrace:");
            console.trace();
            return "ERROR";
        }
    }

}