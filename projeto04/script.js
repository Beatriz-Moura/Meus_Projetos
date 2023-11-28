let elementoTitulo = document.createElement("h1");
elementoTitulo.innerText = "Sasageyo Shop"
elementoTitulo.id = "titulo"

let corpoSite = document.querySelector("body");
corpoSite.appendChild(elementoTitulo);

let elementoProduto = document.createElement("div");
elementoProduto.innerHTML = `
<h2>Jaqueta Tropa Exploração</h2>
<img src="./produto.jpg" alt="jaqueta tropa exploração">
<h3><strong>R$120,00</strong></h3>
<p>Jaqueta de couro com o simbolo da tropa de exploração, perfeito para completar o seu cosplay!</p>
`
corpoSite.appendChild(elementoProduto);

