import { AiOutlineClose } from 'react-icons/ai'

interface ProjectModalProps {
    open: boolean;
    onClose: () => void;
}

export function ProjectModal({open, onClose}: ProjectModalProps){
    if (!open) return null;

    const tecnologias = ['Python','Streamlit','Pandas','Plotly','NumPy','scikit-learn','SQLAlchemy','PostgreSQL'];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-900 p-6 text-slate-100 shadow-2xl ring-1 ring-400/30"
                 onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}
                        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors hover:text-400"
                        aria-label="Fechar detalhes">
                    <AiOutlineClose className="h-5 w-5" />
                </button>

                <h2 className="text-2xl font-semibold text-400">Smart Order Dashboard</h2>
                <p className="mt-1 text-sm text-slate-400">Projeto Integrador II — UNIVESP · 2025</p>

                <div className="mt-5 space-y-5">
                    <section>
                        <h3 className="mb-1 text-lg font-semibold text-slate-50">Objetivo</h3>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Dashboard interativo para análise do desempenho de um restaurante, integrado a um sistema de
                            comanda digital. Converte dados de pedidos e pagamentos em indicadores que apoiam a tomada de decisão.
                        </p>
                    </section>

                    <section>
                        <h3 className="mb-1 text-lg font-semibold text-slate-50">Dados</h3>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Registros reais do estabelecimento, exportados de um banco PostgreSQL:
                        </p>
                        <ul className="mt-2 grid grid-cols-1 gap-1 text-sm text-slate-300 sm:grid-cols-2">
                            <li>• Pagamentos</li>
                            <li>• Itens dos pedidos</li>
                            <li>• Produtos</li>
                            <li>• Garçons</li>
                            <li>• Pedidos</li>
                            <li>• Pesquisa de satisfação</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-1 text-lg font-semibold text-slate-50">Tecnologias</h3>
                        <div className="flex flex-wrap gap-2">
                            {tecnologias.map(t => (
                                <span key={t} className="rounded bg-1000 px-2 py-1 text-xs text-400">{t}</span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-1 text-lg font-semibold text-slate-50">O que foi desenvolvido</h3>
                        <ul className="space-y-1 text-sm leading-relaxed text-slate-300">
                            <li>• Linha do tempo da movimentação financeira diária (valor total, pagamentos, ticket médio);</li>
                            <li>• Projeção da receita para os próximos 30 dias, com gráfico histórico vs. projeção e exportação em CSV;</li>
                            <li>• Top 10 pratos mais vendidos e quantidade por categoria;</li>
                            <li>• Ranking de garçons por atendimentos;</li>
                            <li>• Distribuição da pesquisa de satisfação (Péssimo a Excelente);</li>
                            <li>• Tipos de pagamento: distribuição, valor total e ticket médio por forma.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="mb-1 text-lg font-semibold text-slate-50">Resultado</h3>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Aplicação web publicada em Streamlit com gráficos interativos e métricas consolidadas,
                            reunindo os principais indicadores do negócio em um único painel.
                        </p>
                    </section>
                </div>

                <div className="mt-6 flex gap-3">
                    <a href="https://pj-smart-order-dashboard.streamlit.app/" target="_blank" rel="noreferrer"
                       className="rounded bg-400 px-4 py-2 text-sm font-semibold text-slate-50 transition-colors hover:bg-[#09afe6be]">
                        Ver aplicação
                    </a>
                    <a href="https://github.com/anselmojsantos/pj-smart-order-dashboard" target="_blank" rel="noreferrer"
                       className="rounded border-2 border-400 px-4 py-2 text-sm font-semibold text-slate-50 transition-colors hover:bg-bg-blue-900">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
