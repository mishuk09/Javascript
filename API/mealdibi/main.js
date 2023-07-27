const btn = () => {
    const inputEle = document.getElementById('search-feild');
    const result1 = inputEle.value;
    // console.log(result1);
    result1.value = ''; 
    const url=`http://www.themealdb.com/api/json/v1/1/search.php?s=${result1}`;

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}