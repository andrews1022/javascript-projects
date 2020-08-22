// ---------- UI Variables ----------
const formChecks = document.querySelectorAll('.form__check');
const classInput = document.getElementById('classInput');
const bothInput = document.getElementById('bothInput');
const generateBtns = document.querySelectorAll('.btn--generate');
const classEntry = document.getElementById('classEntry');
const bothClassEntry = document.getElementById('bothClassEntry');
const bothElementEntry = document.getElementById('bothElementEntry');
const classOutput = document.getElementById('classOutput');
const bothOutput = document.getElementById('bothOutput');

// Function to display/hide inputs
const displayInput = (el) => {
  el.classList.toggle('show');
  el.classList.toggle('hide');
};

// Handle which check box is clicked
formChecks.forEach((check) => {
  check.addEventListener('click', () => {
    if (check.id === 'classOnlyCheck') {
      displayInput(classInput);
    } else if (check.id === 'bothCheck') {
      displayInput(bothInput);
    }
  });
});

// Handle output
generateBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (btn.id === 'classGenBtn') {
      if (classEntry.value === '') {
        alert('Please check your input.');
      } else {
        // Otherwise, split each value into array separated by (', ') and save into an array
        const classArray = classEntry.value.split(', ');

        // For element in this array, create an element
        classArray.forEach((cls) => {
          const listItem = document.createElement('li');

          listItem.innerHTML = `
            <li class="form__list-item">
              <code class="form__code">class="${cls}"</code>
              <div class="form__list-item__inner">
                <button class="btn btn--copy">Copy</button>
                <button class="btn btn--del">Delete</button>
              </div>
            </li> 
          `;

          // Then append the elements to the ul output
          classOutput.appendChild(listItem);
        });
      }
    } else if (btn.id === 'bothGenBtn') {
      // If either field is empty
      if (bothClassEntry.value === '' || bothElementEntry.value === '') {
        alert('Please check your input.');
      } else {
        // Split values from both inputs into arrays
        const bothClassArray = bothClassEntry.value.split(', ');
        const bothElementArray = bothElementEntry.value.split(', ');

        // Combined the above two arrays into a mapped array like so:
        // Starts with each element, followed by an array of all the class names entered
        const combined = bothElementArray.map((el) => {
          return [el, bothClassArray];
        });

        // For each combined array...
        combined.forEach((arr) => {
          const classesArray = arr[0]; // Assign all class names entered
          const elementsArray = arr[1]; // Assign all elements entered

          // Create a results array, taking each element, and creating an array with it with each class name
          const results = elementsArray.map((el) => [el, classesArray]);

          // For each pair...
          results.forEach((res) => {
            // Create a list item
            const listItem = document.createElement('li');

            // Insert html with the pair array values
            listItem.innerHTML = `
              <li class="form__list-item">
                <code class="form__code">&lt;${res[1]} class="${res[0]}"&gt;&lt;/${res[1]}&gt;</code>
                <div class="form__list-item__inner">
                  <button class="btn btn--copy">Copy</button>
                  <button class="btn btn--del">Delete</button>
                </div>
              </li>
            `;

            // Then append the elements to the ul output
            bothOutput.appendChild(listItem);
          });
        });
      }
    }
  });
});

// Copy text & delete list item function
async function copyAndDelete(e) {
  if (e.target.classList.contains('btn--copy')) {
    if (navigator.clipboard) {
      e.preventDefault();

      const classText = e.target.parentElement.parentElement.children[0].textContent;

      try {
        await navigator.clipboard.writeText(classText);

        e.target.textContent = 'Copied!';

        setTimeout(() => {
          e.target.textContent = 'Copy';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    }
  } else if (e.target.classList.contains('btn--del')) {
    e.preventDefault();

    e.target.parentElement.parentElement.remove();
  } else {
    console.log('Something went wrong here...');
  }
}

// Listen for click on edit
classOutput.addEventListener('click', copyAndDelete);
bothOutput.addEventListener('click', copyAndDelete);
