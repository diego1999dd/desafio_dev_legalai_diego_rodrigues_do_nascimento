import { useLocation } from "react-router-dom";
import matchesMock from "../data/matchesMock.json";

function MatchResults() {
  const localizacao = useLocation();
  const interesse = localizacao.state?.interesse;

  if (!interesse) {
    return <p>Nenhuma área de interesse selecionada.</p>;
  }

  const resultadosFiltrados = matchesMock.filter(
    (match) => match.interesse === interesse
  );

  const resultadosParaExibir = resultadosFiltrados.slice(0, 3);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Conexões encontradas:</h2>
      {resultadosParaExibir.map((resultado, index) => (
        <div key={index} className="mb-4 border p-3 rounded bg-gray-100">
          <p>
            <strong>Nome:</strong> {resultado.nome}
          </p>
          <p>
            <strong>Descrição:</strong> {resultado.descricao}
          </p>
          <p>
            <strong>Nível de Afinidade:</strong> {resultado.afinidade}%
          </p>
        </div>
      ))}

      {resultadosParaExibir.length === 0 && (
        <p>Nenhuma conexão encontrada para essa área de interesse.</p>
      )}
    </div>
  );
}

export default MatchResults;
