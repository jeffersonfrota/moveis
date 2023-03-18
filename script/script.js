var banners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];

var banner_atual = 0

function trocar_banner()
{
    banner_atual = (banner_atual + 1) % 2;
    document.querySelector("h2#mensagem").textContent = banners[banner_atual];
}

setInterval(trocar_banner, 1500);

