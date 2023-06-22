export default function mathSymbols(s: string, curr: number, total: number) {
    switch(s){
        case "+":
            return total + curr;
        case "-":
            return total - curr;
        case "x":
            return total * curr;
        case "÷":
            return total / curr;
        default:
            return total / 100;
    }
}