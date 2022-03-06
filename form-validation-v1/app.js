// Validation will trigger on a blur event (input field is clicked out of)
const validateName = () => {
  // Select the name input field
  const name = document.querySelector('#name');
  // Regular Expression variable for name input
  const re = /^[a-zA-Z]{2,10}$/; // This means it should be letters between A-Z, capital or lowercase, and between 2-10 characters long (2-10 is short, but is used just for example)

  // Check input value against regular expression
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
};

const validateZip = () => {
  // Select the zip code input field
  const zip = document.querySelector('#zip');
  // Regular Expression variable for zipcode input
  const re = /^[0-9]{5}(-[0-9]{4})?$/; // This means 5 digit number with an optional - and 4 extra numbers)

  // Check input value against regular expression
  if (!re.test(zip.value)) {
    // Add invalid class to input
    zip.classList.add('is-invalid');
  } else {
    // Remove invalid class to input
    zip.classList.remove('is-invalid');
  }
};

const validatePostal = () => {
  // Select the postal code input field
  const postal = document.querySelector('#postal');
  // Regular Expression variable for postal code input
  const re = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  // The postal code is a six-character code defined and maintained by Canada Post Corporation (CPC) for the purpose of sorting and delivering mail. The characters are arranged in the form ‘ANA NAN’, where ‘A’ represents an alphabetic character and ‘N’ represents a numeric character (e.g., A1A 1A1). The postal code uses 18 alphabetic characters and 10 numeric characters. Postal codes do not include the letters D, F, I, O, Q or U, and the first position also does not make use of the letters W or Z.

  // Check input value against regular expression
  if (!re.test(postal.value)) {
    // Add invalid class to input
    postal.classList.add('is-invalid');
  } else {
    // Remove invalid class to input
    postal.classList.remove('is-invalid');
  }
};

const validateEmail = () => {
  // Select the email input field
  const email = document.querySelector('#email');
  // Regular Expression variable for email input (email shoud be something@something.com)
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  // Group together the following character checks (could contain any of the following):
  // A-Z or a-z
  // A number
  // A - or . symbol
  // Then check for a literal @ symbol outside the first group
  // Then in the second group check for same conditions as above in first group
  // Use escape character for the . symbol
  // Then for the TLD (.com, .net, etc.), check if A-Z or a-z, and only 2-5 letters long
  // All together but spaced out for clarity:
  // ([a-zA-Z0-9_\-\.]+) @ ([a-zA-Z0-9_\-\.]+) \. ([a-zA-Z]{2,5})

  // Check input value against regular expression
  if (!re.test(email.value)) {
    // Add invalid class to input
    email.classList.add('is-invalid');
  } else {
    // Remove invalid class to input
    email.classList.remove('is-invalid');
  }
};

const validatePhone = () => {
  // Select the phone number input field
  const phone = document.querySelector('#phone');
  // Regular Expression variable for phone number input
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  // We want to except any combination of these formats
  // 555-555-5555
  // 555 555 5555
  // 555.555.5555
  // (555) 555 5555
  // 5555555555
  // So our regular expression reads
  // 1) Literal optional opening parentheses: \(?
  // 2) Followed by 3 digits: \d{3}
  // 3) End the group with optional literal closing parentheses \)?
  // 4) Next, space following 3 digits by either a space, dash, or period (also optional): [-. ]?
  // 5) Followed by 3 digits: \d{3}
  // 6) Again, space following 3 digits by either a space, dash, or period (also optional): [-. ]?
  // 7) End with 4 digits: \d{4}
  // 8) All together but spaced out for clarity:   \(?   \d{3}   \)?   [-. ]?   \d{3}   [-. ]?   \d${4}

  // Check input value against regular expression
  if (!re.test(phone.value)) {
    // Add invalid class to input
    phone.classList.add('is-invalid');
  } else {
    // Remove invalid class to input
    phone.classList.remove('is-invalid');
  }
};

// Load event listeners
const loadEventListeners = () => {
  document.querySelector('#name').addEventListener('blur', validateName);
  document.querySelector('#zip').addEventListener('blur', validateZip);
  document.querySelector('#postal').addEventListener('blur', validatePostal);
  document.querySelector('#email').addEventListener('blur', validateEmail);
  document.querySelector('#phone').addEventListener('blur', validatePhone);
};

loadEventListeners();
