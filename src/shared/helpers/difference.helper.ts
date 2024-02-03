export class DifferenceHelper {
    static difference(arrayA: string | string[], arrayB: string | string[]) {
        const arrA = Array.isArray(arrayA) ? arrayA.map((x) => x.toString()) : [arrayA.toString()];
        const arrB = Array.isArray(arrayB) ? arrayB.map((x) => x.toString()) : [arrayB.toString()];

        const result = [];
        for (const p of arrA) {
            if (arrB.indexOf(p) === -1) {
                result.push(p);
            }
        }

        return result;
    }
}
