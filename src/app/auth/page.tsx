'use client';
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Para acessar parâmetros da URL
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function Auth() {
    const searchParams = useSearchParams(); // Hook para acessar query params
    const tabParam = searchParams.get('tab'); // Captura o valor do param 'tab'
    const [activeTab, setActiveTab] = useState("login");

    // Usa o valor do parâmetro para definir a aba ativa ao carregar a página
    useEffect(() => {
        if (tabParam === "register") {
            setActiveTab("register");
        } else {
            setActiveTab("login");
        }
    }, [tabParam]);

    return (
        <div className="relative items-center">
            {/* Botão de voltar no canto esquerdo */}
            <button onClick={() => window.history.back()} className="absolute top left-2">
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Logo centralizado */}
            <div className="flex justify-center">
                <Image
                    src="/logo.png"
                    alt="777g.com"
                    width={100}
                    height={40}
                    className="max-h-10 w-auto"
                />
            </div>

            {/* Abas para Login e Register */}
            <div className="flex justify-center mt-8">
                <div className="flex gap-8">
                    <button
                        className={`text-white border-b-2 ${activeTab === "login" ? "border-white" : "border-transparent"}`}
                        onClick={() => setActiveTab("login")}
                    >
                        Acessar sua conta
                    </button>
                    <button
                        className={`text-white border-b-2 ${activeTab === "register" ? "border-white" : "border-transparent"}`}
                        onClick={() => setActiveTab("register")}
                    >
                        Registrar
                    </button>
                </div>
            </div>

            {/* Conteúdo dinâmico baseado na aba selecionada */}
            <div className="mt-8">
                {activeTab === "login" ? (
                    <div>
                        {/* Formulário de login */}
                        <form className="flex flex-col items-center mt-4">
                            <input type="text" placeholder="Número de celular" className="mb-2 p-2 border text-[14px] bg-[#752b9c39] border-slate-700 rounded w-full" />
                            <input type="password" placeholder="Senha" className="mb-4 p-2 border text-[14px] bg-[#752b9c39] border-slate-700 rounded w-full" />
                            <button className="bg-orange-500 text-white py-2 px-6 rounded-xl text-[12px]">Entrar</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        {/* Formulário de registro */}
                        <form className="flex flex-col items-center mt-4">
                            <input type="text" placeholder="Número de celular" className="mb-2 p-2 border text-[14px] bg-[#752b9c39] border-slate-700 rounded w-full" />
                            <input type="password" placeholder="Senha" className="mb-2 p-2 border text-[14px] bg-[#752b9c39] border-slate-700 rounded w-full" />
                            <input type="password" placeholder="Confirme sua senha" className="mb-4 p-2 border text-[14px] bg-[#752b9c39] border-slate-700 rounded w-full" />
                            <button className="bg-orange-500 text-white py-2 px-6 rounded-xl text-[12px]">Registrar</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
