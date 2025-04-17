type Usuario = {
  nome: string;
  descricao: string;
  interesse: string;
  localizacao: string;
  localizacao_peso: number;
};

type Similaridade = {
  usuario: string;
  descricao: string;
  similaridade: string;
};

export function simularAfinidade(
  usuario: Usuario,
  usuarios: Usuario[]
): Similaridade[] {
  const similaridades: Similaridade[] = [];

  for (const outroUsuario of usuarios) {
    if (usuario.nome === outroUsuario.nome) continue;

    const distanciaMax = Math.max(...usuarios.map((u) => u.localizacao_peso));
    const distancia = Math.abs(
      usuario.localizacao_peso - outroUsuario.localizacao_peso
    );
    const porcentagemLocalizacao = 1 - distancia / distanciaMax;

    const mesmaAreaInteresse = usuario.interesse === outroUsuario.interesse;
    const porcentagemInteresse = mesmaAreaInteresse ? 1 : 0;

    const similaridadeTotal =
      (porcentagemLocalizacao * 0.8 + porcentagemInteresse * 0.2) * 100;

    similaridades.push({
      usuario: outroUsuario.nome,
      descricao: outroUsuario.descricao,
      similaridade: similaridadeTotal.toFixed(2),
    });
  }

  return similaridades.sort(
    (a, b) => parseFloat(b.similaridade) - parseFloat(a.similaridade)
  );
}
