const passwordChecker = (pass, conf_pass) => {
    if (pass === conf_pass) {
        return true;
    } else {
        return false;
    }
}

const validateInputs = () => {

}

const createAccButton = document.querySelector(".submit");
createAccButton.addEventListener("click", () => {
    createAccButton.setAttribute("width", "5000px");
    validateInputs();
    //sendAccountInfo() <-- Would be function to send data elsewhere. 
})