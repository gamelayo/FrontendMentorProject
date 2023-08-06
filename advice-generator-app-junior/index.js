async function getAdvice() {
  let url = "https://api.adviceslip.com/advice";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderAdvice() {
  let respond = await getAdvice();
  let output = "";
  output += `
                <p class="first">Advice #${respond.slip.id}</p>
                <p class="second">"${respond.slip.advice}"</p>
            `;
  let container = document.querySelector(".box");
  container.innerHTML = output;
}

renderAdvice();
