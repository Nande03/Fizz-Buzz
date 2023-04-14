function buzzFizz (num1: number, word: string): string
{
    let result = num1%3;
    let result2 = num1%5;
    if (result == 0)
    {
        word = "Fizz"
    }
    if (result2 == 0)
    {
        word = "Buzz"
    }
    if (result == 0 && result2 == 0)
    {
        word = "Fizz-Buzz"
    }
    console.log("[0]", word)
    return word;
}
 
buzzFizz(25, "")