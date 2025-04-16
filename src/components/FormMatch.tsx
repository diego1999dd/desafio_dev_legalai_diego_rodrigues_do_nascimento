import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MatchForm() {
  const navigate = useNavigate();
  const [interesse, setInteresse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/resultados", { state: { interesse } });
  };

  return (
    <div className="text-center">
      <h1>Doida</h1>
      <div className="h-auto min-h-screen flex justify-center text-left">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              name="nome"
              required
              className=""
            />
          </div>
          <div>
            <label htmlFor="interesse">Área de interesse:</label>
            <select
              id="interesse"
              name="interesse"
              onChange={(e) =>
                setInteresse((e.target as HTMLSelectElement).value)
              }
              required
            >
              <option value="Internet">Internet 5G para empresas</option>
              <option value="IoT">IoT</option>
              <option value="Drones">Drones para mapeamento</option>
              <option value="Aluguel">
                Aluguel de gadgets (Smartphones, TVs, Tablets)
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="localizacao">Localização:</label>
            <input
              type="text"
              id="localizacao"
              placeholder="Exemplo: São Paulo - SP"
              name="localizacao"
              required
              className=""
            />
          </div>

          <div>
            <button type="submit">Buscar Conexões</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MatchForm;
