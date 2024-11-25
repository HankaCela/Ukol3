const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
  
  // Pomocná funkce pro výpis do stránky
  function printResult(title, result) {
    const outputDiv = document.getElementById("output");
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
    const resultElement = document.createElement("p");
    resultElement.textContent = result.join(", ");
    outputDiv.appendChild(titleElement);
    outputDiv.appendChild(resultElement);
  }
  
  // 1. Vypište všechna čísla
  printResult("Všechna čísla:", numbers);
  
  // 2. Vypište druhé mocniny všech čísel
  const squares = numbers.map(num => num ** 2);
  printResult("Druhé mocniny všech čísel:", squares);
  
  // 3. Vypište pouze záporná čísla
  const negativeNumbers = numbers.filter(num => num < 0);
  printResult("Pouze záporná čísla:", negativeNumbers);
  
  // 4. Vypište absolutní hodnoty všech čísel
  const absoluteValues = numbers.map(num => Math.abs(num));
  printResult("Absolutní hodnoty všech čísel:", absoluteValues);
  
  // 5. Vypište pouze sudá čísla
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  printResult("Pouze sudá čísla:", evenNumbers);
  
  // 6. Vypište čísla, jejíchž absolutní hodnota je dělitelná třemi
  const divisibleByThree = numbers.filter(num => Math.abs(num) % 3 === 0);
  printResult("Čísla, jejichž absolutní hodnota je dělitelná třemi:", divisibleByThree);
  
  // 7. Vypište vzdálenost každého čísla od čísla 5
  const distancesFromFive = numbers.map(num => Math.abs(num - 5));
  printResult("Vzdálenost každého čísla od 5:", distancesFromFive);
  
  // 8. Vypište druhé mocniny vzdáleností od čísla 5
  const distanceSquares = distancesFromFive.map(dist => dist ** 2);
  printResult("Druhé mocniny vzdáleností od 5:", distanceSquares);
  
  // 9. Spočítejte počet záporných čísel
  const negativeCount = negativeNumbers.length;
  printResult("Počet záporných čísel:", [negativeCount]);
  
  // 10. Spočítejte součet všech čísel
  const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
  printResult("Součet všech čísel:", [sumOfNumbers]);
  
  // 11. Spočítejte průměr všech čísel
  const average = sumOfNumbers / numbers.length;
  printResult("Průměr všech čísel:", [average.toFixed(2)]);
  
  // 12. Spočítejte součet všech kladných čísel
  const sumOfPositiveNumbers = numbers.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  printResult("Součet všech kladných čísel:", [sumOfPositiveNumbers]);