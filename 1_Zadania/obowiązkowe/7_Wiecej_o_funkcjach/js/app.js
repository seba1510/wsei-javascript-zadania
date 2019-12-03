/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ... Deklaracja funkcji jeden()
function jeden() {

    //Twoj komentarz ... zmienna1 będzie widoczna w ciele funkcji w której została utworzona + w zagnieżdżonych
    var zmienna1 = 1;

    //Twoj komentarz ... deklaracja funkcji zagnieżdżonej dwa()
    function dwa() {

        //Twoj komentarz ... użycie zmiennej w drugiej funkcji mimo że została  zadeklarowwana w pierwszej
        console.log(zmienna1);

        //Twoj komentarz ... zmienna2 jest zadeklarowania w ciele funkcji dwa(), dlatego tylko tam jest widoczna
        var zmienna2 = 3;
    }

    //Twoj komentarz ... wykonanie funkcji dwa()
    dwa();

    //Twoj komentarz ... zmienna 2 nie będzie widoczna w tym miejscu
    console.log(zmienna2)
}

//Twoj komentarz ... wykonanie funkcji jeden()
jeden()
