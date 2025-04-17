import { IdentificationCard, Lightbulb, MapPinLine } from "phosphor-react";
import { useState } from "react";
import MatchResultados from "../resultadoscards/MatchResultados";

function MatchForm() {
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [localizacao, setLocalizacao] = useState("");
  const [interesse, setInteresse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMostrarResultados(true);
  };

  return (
    <div className=" text-center h-full">
      <div className="flex flex-col items-center justify-center p-10">
        <img
          src="https://ik.imagekit.io/s53kowf549/Logo.png?updatedAt=1744851159029"
          alt="Logo da empresa Legal"
          className="w-48"
        />
        <h1 className="mt-5 px-5 p-2 font-bold bg-gray-900 text-[26px] text-white  rounded-2xl">
          Encontre suas afinidades!
        </h1>
      </div>
      <div className=" flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[95%] max-w-120 space-y-3 text-left bg-slate-100 h-90 p-5 my-5 rounded-3xl border-r-7 border-b-6 border-slate-700"
        >
          <div className="space-y-2">
            <label htmlFor="nome" className="flex items-center font-medium">
              <IdentificationCard size={32} className="mr-1" /> Nome:
            </label>
            <input
              type="text"
              id="nome"
              placeholder=" Digite seu nome"
              name="nome"
              required
              className="p-1 w-full border-2 border-gray-700 rounded"
            />
          </div>
          <div>
            <label
              htmlFor="interesse"
              className="flex items-center font-medium"
            >
              <Lightbulb size={32} className="mr-1" />
              Área de interesse:
            </label>
            <select
              className="p-1 mt-2 border-2 rounded w-full"
              id="interesse"
              name="interesse"
              onChange={(e) =>
                setInteresse((e.target as HTMLSelectElement).value)
              }
              required
            >
              <option value="" disabled selected>
                Selecione uma área de interesse
              </option>
              <option value="Internet">🌐 Internet 5G para empresas</option>
              <option value="IoT">📡 IoT</option>
              <option value="Drones">🛸 Drones para mapeamento</option>
              <option value="Aluguel">
                📱 Aluguel de gadgets (Smartphones, TVs, Tablets)
              </option>
            </select>
          </div>
          <div>
            <label
              htmlFor="localizacao"
              className="flex items-center font-medium"
            >
              <MapPinLine size={32} className="mr-1" /> Localização:
            </label>
            <select
              className="p-1 mt-2 border-2 rounded w-full"
              id="interesse"
              name="interesse"
              onChange={(e) => setLocalizacao(e.target.value)}
              required
            >
              <option value="" disabled selected>
                Selecione uma localização
              </option>
              <option value="SP">São Paulo</option>
              <option value="PR">Paraná</option>
              <option value="CE">Ceará</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="DF">Distrito Federal</option>
              <option value="BA">Bahia</option>
              <option value="MG">Minas Gerais</option>
              <option value="MA">Maranhão</option>
              <option value="SC">Santa Catarina</option>
            </select>
          </div>

          <div className="text-center m-6">
            <button
              type="submit"
              className="border px-3 p-2 rounded-xl bg-gray-800 hover:bg-[#51A3FF] text-white font-medium cursor-pointer transition delay-170 duration-170 ease-in-out"
            >
              Buscar Conexões
            </button>
          </div>
        </form>
        <div>
          {mostrarResultados && (
            <MatchResultados interesse={interesse} localizacao={localizacao} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MatchForm;
