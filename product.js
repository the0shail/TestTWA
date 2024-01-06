const tg = window.Telegram.WebApp;

tg.getKeys((e) => {
    console.log(e)
})

console.log(window.Telegram.WebApp.getKeys())
