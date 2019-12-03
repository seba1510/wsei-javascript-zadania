
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ... definicja funkcji
function sortArray() {

    //Twoj komentarz ... tablica points wypełniona danymi
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twoj komentarz ... funkcja .sort porównuje dwie wartośi w tablicy ( a oraz b)
    points.sort(function (a, b) {
        //Twoj komentarz ... a-b (41-3), wartość będzie dodatnia, więc 41 będzie większe od 3
        return a - b;
    });

    //Twoj komentarz ... zwracanie posortowanej tablicy
    return points;
}

//Twoj komentarz ... wywołanie funkcji
sortArray();
