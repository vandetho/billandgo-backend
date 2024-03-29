export class StringHelper {
    static camelCaseToSneakCase = (str: string) => {
        return str.replace(/[A-Z]/g, (letter, index) => {
            return index == 0
                ? letter.toLowerCase()
                : '_' + letter.toLowerCase();
        });
    };
}
