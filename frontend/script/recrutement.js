document.querySelector("#newOffer>img").addEventListener("click", () => {
    document.querySelector("#newOffer>form").style.right = "0%";
    console.log("in");
})

document.querySelector("#exit-offer").addEventListener("click", () => {
    document.querySelector("#newOffer>form").style.right = "-200%";
    console.log("out");
})