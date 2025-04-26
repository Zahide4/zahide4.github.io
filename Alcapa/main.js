const textareaEl = document.querySelector('textarea');

// 1. Make sure the enter key does not cause new lines to be entered.
textareaEl.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    event.preventDefault();

    // 2. If this is part of a form, submit it.
    // document.querySelector('form').submit();
  }
});

// 3. auto-expand the textarea to show all lines
// Credit for this solution: https://stackoverflow.com/a/58073583/7696223
const updateHeight = () => {
  textareaEl.style.height = 'auto';
  // You might need to shave off a few px depending on
  // padding and other factors I don't fully understand.
  // Here I'm shaving off 4px.
  textareaEl.style.height = textareaEl.scrollHeight - 4 + 'px';
};
textareaEl.addEventListener('input', updateHeight);
updateHeight();


window.openFullEntry = function(title, content) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-content").textContent = content;
  document.getElementById("full-entry-popup").classList.remove("hidden");
}

document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("full-entry-popup").classList.add("hidden");
});