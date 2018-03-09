(function () {

    function validateForm() {

        var nameField = document.forms["signup-form"]["name"].value;
        var emailField = document.forms["signup-form"]["email"].value;
        var phoneField = document.forms["signup-form"]["phone"].value;

        if (nameField === "") {
            alert("Name must be filled out");
            return false;
        }

        if (emailField === "") {
            alert("Name must be filled out");
            return false;
        }

        if (phoneField === "") {
            alert("Name must be filled out");
            return false;
        }

    }

    document.forms["signup-form"].addEventListener('submit', validateForm);

})();