const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCOuntries(data))
}
loadCountries();

const displayCOuntries = value1 => {
    // for( const i of value1){
    //     console.log(i);

    // }
    const addInner = document.getElementById('countries');
    value1.forEach(country => {
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // addInner.appendChild(h3)
        console.log(country.name);

    });


}