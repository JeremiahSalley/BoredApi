var btn = document.getElementById("quoteButton");
const close = document.getElementById("close");
const modalContainer = document.getElementById("modalContainer");

// fetch('https://www.boredapi.com/api/activity')
//     .then(res => res.json())
//     .then(data => console.log(data.activity))

btn.addEventListener("click", () => {
  modalContainer.classList.add("show");
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then(
      (data) =>
        (document.getElementById("quoteDisplay").innerHTML = data.activity)
    );
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
