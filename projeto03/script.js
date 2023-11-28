let titulo = document.getElementById("titulo");
let listaNaoOrdenada = document.querySelector("ul");
let link = document.querySelector("a");
let listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "Pagina inicial";
link.innerText = "Site Proz";
listaNaoOrdenada.innerHTML = `
<li>Canal de Atendimento</li>
<li>Minha Conta</li>
<li>Projetos</li>
`
listaOrdenada.innerHTML = `
<li><a href="https://www.facebook.com/?locale=pt_BR">Facebook</a></li>
<li><a href="https://www.instagram.com/">Instagram</a></li>
<li><a href="https://web.whatsapp.com/">Whatsapp</a></li>
`