function byThree(num1: number, word: string) : string
{
    let result = num1%3;
    if (result == 0)
    {
        word = "Fizz"
    }
    console.log("[0]", word)
    return word;
}

function byFive(num1: number, word: string): string 
{
    let result = num1%5;
    if (result == 0)
    {
        word = "Buzz";
    }
    console.log("[0]", word)
    return word;
}

function byThreeAndFive(num1: number, word: string) : string
{
    let result = num1%3;
    let result2 = num1%5;
    if (result == 0 && result2 == 0)
    {
        word = "Fizz-buzz"
    }
    console.log("[0]", word);
    return word;
}

byThree(45, "");
byFive(45, "")
byThreeAndFive(45, "")