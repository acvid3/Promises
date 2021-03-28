const status = document.querySelector(".status");
const promise = new Promise((resalve, reject) => {
    setTimeout(() => {
        console.log("Preparing data...");
        const data = {
            server : 'api',
            port: 8085,
            status: true
        }
        resalve(data);
    }, 2000);
});

promise.then(data => {
    status.innerText = "Status: " + data.status;
});


