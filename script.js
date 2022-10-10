const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then( permission => {
        if (permission === "granted"){
            const notification = new Notification("Example notification",{
                body: "This is the body text",
                data: {message: "Hello World"},
                icon: "unnamed.png",
                tag: "Welcome message"//Overwrite notifications, shows just one
            })

            // console.log(notification.data)
            notification.addEventListener("close", e => {
                console.log(e)
            })
        }
    })
})

let comeBack, interval;
document.addEventListener("visibilitychange", () => {
    if(document.visibilityState === "hidden"){

        const leaveDate = new Date();
        interval = setInterval(() => {
            comeBack = new Notification("Come back", {
                // body: "Pleeeeeeaaaseee!",
                body: `You've been gone for ${Math.round(
                    (new Date() - leaveDate) / 1000
                )} seconds!`,
                tag: "Come Back"
            })
        }, 100)
    }else{
        if (interval) clearInterval(interval)
        if(notification) comeBack.close()
    }
})