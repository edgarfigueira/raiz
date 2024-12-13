function createSnowflake() {
  // Criar vários flocos de uma vez
  for (let i = 0; i < 5; i++) {
    const snowFlake = document.createElement("div");
    snowFlake.classList.add("snowflake");
    snowFlake.style.left = Math.random() * window.innerWidth + "px";
    snowFlake.style.top = Math.random() * window.innerHeight + "px";
    snowFlake.style.position = "absolute";
    snowFlake.style.opacity = 0; // Começa invisível
    snowFlake.style.fontSize = Math.random() * 10 + 10 + "px"; // Tamanho aleatório
    snowFlake.innerHTML = "❄"; // Símbolo de floco de neve
    document.body.appendChild(snowFlake);

    // Animação de aparecer e desaparecer
    let maxDuration = 5000; // Máximo de visibilidade
    snowFlake.style.transition = `opacity 500ms`;
    setTimeout(() => {
      snowFlake.style.opacity = 1; // Torna visível
    }, 100);

    // Desaparece após um tempo aleatório
    setTimeout(() => {
      snowFlake.style.opacity = 0;
      setTimeout(() => snowFlake.remove(), 500); // Remove depois de desaparecer
    }, Math.random() * maxDuration);
  }
}

// Gera novos flocos mais frequentemente
setInterval(createSnowflake, 400);
