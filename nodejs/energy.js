// Get specified amount of data from specified dataset
fetch('https://api.energidataservice.dk/dataset/RegulatingBalancePowerdata?limit=5') 
    .then(response => response.json())
    .then(data=> {
        console.log(`retrieved ${data.limit} of ${data.total}`);
        console.group("Data retrieved:");
        data.records.forEach(record => console.log(record));
        console.groupEnd();
    });