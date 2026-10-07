function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

function startRegistration() {
    const registerSection = document.getElementById("register");

    registerSection.scrollIntoView({
        behavior: "smooth"
    });
}

const registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert(
        "Registration yawe yakiriwe neza! " +
        "Turagushimira kwiyandikisha muri Urujeni Culture Troupe. ❤️"
    );

    registrationForm.reset();

    showVideoField();
});

function showVideoField() {
    const danceLevel =
        document.getElementById("danceLevel");

    const videoField =
        document.getElementById("videoField");

    const danceVideo =
        document.getElementById("danceVideo");

    if (danceLevel.value === "yes") {

        videoField.style.display = "block";

        danceVideo.required = true;

    } else {

        videoField.style.display = "none";

        danceVideo.required = false;

        danceVideo.value = "";
    }
}
