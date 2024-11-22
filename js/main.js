//functie 1

// Functie om inputwaarden te loggen en de velden te resetten
function voorstellen() {
    // Haal de waarden op van de inputvelden
    const naam = document.getElementById("naamInput").value;
    const leeftijd = document.getElementById("leeftijdInput").value;
    const hobby = document.getElementById("hobbyInput").value;

    // Controleer of alle velden zijn ingevuld
    if (naam && leeftijd && hobby) {
        console.log(`Hallo, ik ben ${naam}, ${leeftijd} jaar en mijn favoriete hobby is ${hobby}`);
        
        // Clear de inputvelden na succesvolle invoer
        document.getElementById("naamInput").value = '';
        document.getElementById("leeftijdInput").value = '';
        document.getElementById("hobbyInput").value = '';
    } else {
        console.log("Vul alstublieft alle velden in.");
    }
}

// functie 2

// Event listener voor de klik op de invoerknop
document.getElementById("submitBtn").onclick = function() {
    voorstellen();
};

// Functie om een string om te zetten naar een array van karakters
function stringToArray(string) {
    return string.split('');
}

// Event listener voor de klik op de 'Converteer naar Array' knop
document.getElementById("convertBtn").onclick = function() {
    const inputString = document.getElementById("stringInput").value;
    const result = stringToArray(inputString);
    console.log(result); // Hier kan je de array bijvoorbeeld weergeven of in een HTML-element zetten

    document.getElementById("stringInput").value = '';
};

// functie 3

// Functie om te checken of een string een palindroom is
function checkIfPalindrome(string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
}

// Event listener voor de klik op de 'Check Palindroom' knop
document.getElementById("palindromeBtn").onclick = function() {
    const inputString = document.getElementById("palindromeInput").value;
    const isPalindrome = checkIfPalindrome(inputString);
    console.log(isPalindrome); // Hier kan je het resultaat bijvoorbeeld weergeven in een HTML-element
    
    // Maak het invoerveld leeg
    document.getElementById("palindromeInput").value = '';
};