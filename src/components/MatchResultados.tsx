import usuariosJson from "../data/usuarios.json";
import cidadesJson from "../data/cidades.json";
import { simularAfinidade } from "../utils/simular";
import { Equals } from "phosphor-react";

type MatchResultadosProps = {
  interesse: string;
  localizacao: string;
};

type UsuarioProps = {
  nome: string;
  interesse: string;
  descricao: string;
  localizacao: string;
  localizacao_peso: number;
};

function MatchResultados({ interesse, localizacao }: MatchResultadosProps) {
  if (!interesse || !localizacao) {
    return <p>Nenhuma área de interesse selecionada.</p>;
  }

  const cidadeAtual = cidadesJson.filter(
    (cidade) => cidade.localizacao == localizacao
  );

  const cidadePeso = cidadeAtual?.[0].peso;

  const usuarioAtual = {
    nome: "",
    localizacao: "",
    descricao: "",
    interesse: interesse,
    localizacao_peso: cidadePeso,
  };

  const usuarios: UsuarioProps[] = usuariosJson.map((usuario: any) => {
    return {
      nome: usuario.nome,
      interesse: usuario.interesse,
      descricao: usuario.descricao,
      localizacao: usuario.localizacao,
      localizacao_peso: usuario.localizacao_peso,
    };
  });

  const similares = simularAfinidade(usuarioAtual, usuarios);
  const similaresFiltrados = similares.slice(0, 3);

  return (
    <div className="p-4 max-w-[1440px] w-full">
      <h2 className="text-[27px] text-white [text-shadow:_2px_2px_2px_#314158] font-bold  mt-10 mb-5">
        Conexões encontradas:
      </h2>
      <div className="flex flex-col gap-4 xl:flex-row justify-center">
        {similaresFiltrados.length > 0 ? (
          similaresFiltrados.map((resultado, index) => (
            <div
              key={index}
              className="p-3 rounded-2xl border-r-7 border-b-7 border-slate-700 bg-gray-100 "
            >
              <div className="gap-1 lg:w-100 flex flex-col justify-center items-center">
                <Equals size={32} />
                <p>
                  <strong className="pr-1">Nome:</strong>
                  {resultado.usuario}
                </p>
                <p className="max-w-[80%]">
                  <strong>Descrição:</strong> {resultado.descricao}
                </p>
                <p>
                  <strong className="pr-1">Nível de Afinidade:</strong>
                  {resultado.similaridade}%
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma conexão encontrada para essa área de interesse.</p>
        )}
      </div>
    </div>
  );
}

export default MatchResultados;
