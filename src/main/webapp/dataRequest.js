function dataRequest(requestType, extension, body) {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 299) {
                    resolve(request);
                    console.log("Successful data request")
                } else {
                    console.log(request.status);
                    reject("Data request failed");
                }
            }
        };

        request.open(requestType, "http://" + window.location.host + "5aside-1.0/api" + extension);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(body);
    })
}