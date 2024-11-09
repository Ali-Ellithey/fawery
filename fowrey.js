let inputs = document.getElementById("inputs");
let mybtn = document.getElementById("mybtn");
let myimg = document.getElementById("myimg");

console.log(inputs, mybtn, myimg);

mybtn.addEventListener("click", () => {
    var password = mybtn.value;
    if (password == 12345) {
        myimg.style.filter = "none";
    }
    else {
        // alert('password worng passed')
        myimg.style.filter = "blur(20px)";
    }
})
