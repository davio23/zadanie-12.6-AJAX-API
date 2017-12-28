var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,

        complete: function (xhr) { // po skonczeniu zapytania
            if (xhr.status == 404) { //jesli status to 404 

                alert('Brak wynikow'); //to alert brak wynikow
                countriesList.empty(); // i wyczysc liste
            }
        }
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        $('<li>').text(item.name).appendTo(countriesList);
    });
}

$("#search").click(searchCountries);
