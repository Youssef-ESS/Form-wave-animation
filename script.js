const labels = document.querySelectorAll(".form-control label")

labels.forEach((label) => {
  label.innerHTML = label.innerText
    //we are looping through a label and we habe the innerText (e m a i l)
    .split("")
    ///we are splitting it into an array which will put each letter in its own in the array
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    ///then we're mapping it to create an array of letter with a span around it
    .join("")
  ///then we're turning it back into a string
})
