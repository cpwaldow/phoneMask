
const mascaraTelefone = (telefone) => {
  const ddd = 11 || 12 || 13 || 14 || 15 || 16 || 17 || 18 || 19 || 21 || 22 || 24 || 27 || 28 || 31 || 32 || 33 || 34 || 35 || 37 || 38 || 41 || 42 || 43 || 44 || 45 || 46 || 47 || 48 || 49 || 51 || 53 || 54 || 55 || 61 || 62 || 63 || 64 || 65 || 66 || 67 || 68 || 69 || 71 || 73 || 74 || 75 || 77 || 79 || 81 || 82 || 83 || 84 || 85 || 86 || 87 || 88 || 89 || 91 || 92 || 93 || 94 || 95 || 96 || 97 || 98 || 99;
  const textoAtual = telefone.value;
  const isCelular = textoAtual.startsWith(ddd) && textoAtual.length === 11;
  const is0800 =  textoAtual.startsWith('0800') || textoAtual.startsWith('0300') || textoAtual.startsWith('0500') || textoAtual.startsWith('0900');
  const is4004 = textoAtual.startsWith('4004') || textoAtual.startsWith('4007') || textoAtual.startsWith('4003') || textoAtual.startsWith('3003');
  
  let textoAjustado;
  if (isCelular) {
    const part1 = textoAtual.slice(0,2);
    const part2 = textoAtual.slice(2,7);
    const part3 = textoAtual.slice(7,11);
    textoAjustado = `(${part1}) ${part2}-${part3}`;
  } else if (is0800) {
    if (textoAtual.length === 12) {
      const part1 = textoAtual.slice(0,4);
      const part2 = textoAtual.slice(4,8);
      const part3 = textoAtual.slice(8,12);
      textoAjustado = `${part1} ${part2}-${part3}`;
    } else {
      const part1 = textoAtual.slice(0,4);
      const part2 = textoAtual.slice(4,7);
      const part3 = textoAtual.slice(7,11);
      textoAjustado = `${part1} ${part2}-${part3}`;
    }
  } else if (is4004 && textoAtual.length === 8) {
    const part1 = textoAtual.slice(0,4);
    const part2 = textoAtual.slice(4,8);
    textoAjustado = `${part1}-${part2}`;
  }else {
    const part1 = textoAtual.slice(0,2);
    const part2 = textoAtual.slice(2,6);
    const part3 = textoAtual.slice(6,10);
    textoAjustado = `(${part1}) ${part2}-${part3}`;
  }
  return telefone.value = textoAjustado
}