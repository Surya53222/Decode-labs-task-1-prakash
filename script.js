// Welcome message
console.log("Website Loaded Successfully");

// Contact form validation
document.querySelector("form").addEventListener("submit", function(event) {

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;

    if(name === "" || email === "") {
        alert("Please fill all fields");
        event.preventDefault();
    } else {
        alert("Message Sent Successfully!");
    }

});