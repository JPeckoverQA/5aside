function verificationRequest(requestType, extension, body) {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 299) {
                    resolve(request);
                    console.log("Successful data request")
                } else {
                    if (request.status == 404) {
                        console.log("Email not found on server");
                        window.alert("Sorry, that email isn't recognised");
                        reject("Email not found on server");
                    } else {
                        console.log(request.status);
                        reject("Data request failed");
                    }
                }
            }
        };

            ;

        request.open(requestType, "http://35.246.42.33:8080/5aside-1.0/api" + extension);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(body);
    })
}