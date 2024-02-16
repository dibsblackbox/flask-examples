var xhr = new XMLHttpRequest();
xhr.open("POST", "/api/example", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ value: "Example" }));


var xhr = new XMLHttpRequest();
xhr.open("GET", "/api/example?param1=value1&param2=value2", true);
xhr.send();
