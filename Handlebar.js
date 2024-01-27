var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');

ourRequest.onload = function() {
    if(ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        createHTMLForm(data);
    }
    else {
        console.log("We connected to the server, but it return an error.");
    }
}
ourRequest.onerror = function() {
   console.log("Connection is something wrong.") 
}

ourRequest.send();

Handlebars.registerHelper("calculateAge", function(birthYear) {
    var age = new Date().getFullYear() - birthYear;
    if(age > 0){
        return age + " year old";
    }
    else {
        return "less than a year old";
    }
});

function createHTMLForm(petsData) {
    /* console.log("This is HTML form tesing.");
    console.log(petsData); */
    var dataPets = document.getElementById("pets-template").innerHTML;
    var compileHTMLTemplate = Handlebars.compile(dataPets);
    var generateHTMLTemplate = compileHTMLTemplate(petsData);

    var petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = generateHTMLTemplate;
}