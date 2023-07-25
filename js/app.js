if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("./sw.js")
        .then(() => console.log("reg"))
        .catch(() => console.log("Error"));
}