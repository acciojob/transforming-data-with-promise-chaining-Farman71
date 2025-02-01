let start = document.getElementById("btn");
start.addEventListener("click", function(event) {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = document.getElementById("ip").value.trim();
            num = parseInt(num);
            if (isNaN(num)) {
                document.getElementById("output").innerText = "Please enter a valid number.";
                reject("Invalid input");
                return;
            }
            document.getElementById("output").innerHTML = `Initial value: ${num}<br>`;
            resolve(num);
        }, 2000);
    });

    let myPromise2 = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let multi = data * 2;
                document.getElementById("output").innerHTML += `Result: ${multi}<br>`;
                resolve(multi);
            }, 1000);
        });
    };

    let myPromise3 = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sub = data - 3;
                document.getElementById("output").innerHTML += `Result: ${sub}<br>`;
                resolve(sub);
            }, 1000);
        });
    };

    let myPromise4 = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let divi = data / 2;
                document.getElementById("output").innerHTML += `Result: ${divi}<br>`;
                resolve(divi);
            }, 1000);
        });
    };

    let myPromise5 = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let add = data + 10;
                document.getElementById("output").innerHTML += `Result: ${add}<br>`;
                resolve(add);
            }, 1000);
        });
    };

    myPromise
        .then((data) => myPromise2(data))
        .then((data) => myPromise3(data))
        .then((data) => myPromise4(data))
        .then((data) => myPromise5(data))
        .then((data) => {
            document.getElementById("output").innerHTML += `<br>Final Result: ${data}`;
            console.log("Final result:", data);
        })
        .catch((error) => {
            console.error(error);
        });
});
