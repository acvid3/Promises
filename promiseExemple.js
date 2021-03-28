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


