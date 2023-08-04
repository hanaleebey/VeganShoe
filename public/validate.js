// Form validation onFocusOut for all forms

function addValidationClassOnBlur(inputElement) {
    inputElement.addEventListener("blur", function () {
      if (!inputElement.checkValidity()) {
        inputElement.classList.remove("is-valid");
        inputElement.classList.add("is-invalid");
      } else {
        inputElement.classList.remove("is-invalid");
        inputElement.classList.add("is-valid");
      }
    });
  }
  
function setupFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) {
    console.error(`Form with ID "${formId}" not found.`);
    return;
  }

  const formInputs = form.querySelectorAll("input, select, textarea");
  formInputs.forEach((input) => {
    addValidationClassOnBlur(input);
  });

  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault(); // Prevent form submission if validation fails
      if (form.checkValidity() === false) {
        event.stopPropagation(); // Stop the event from propagating further
      }
      form.classList.add("was-validated"); // Add 'was-validated' class to enable Bootstrap's styling
    },
    false
  );
}