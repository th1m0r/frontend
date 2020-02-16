import React, { useState } from 'react';

import ContentHeader from '../../template/contentHeader';
import Content from '../../template/content';

import api from '../../../services/api'


export default function FlashVenda() {
    const [showResumoLoja, setShowResumoLoja] = useState(true);
    const [showResumoCaixa, setShowResumoCaixa] = useState(false);
    const [showResumoSecao, setShowResumoSecao] = useState(false);
    const [flashVendaFilter, setFlashVendaFilter] = useState({
        idLoja: '',
        dataVenda: new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000))
            .toISOString()
            .split("T")[0],
        resumo: "LOJA"
    });
    const [flashVenda, setFlashVenda] = useState({
        vendaBruta: 0,
        cancelados: 0,
        clientesAtendidos: 0,
        recargaCelular: 0,
        correspondenteBancario: 0,
        vendaLiquida: 0,
        ticketMedio: 0,
        resumoLojas: [],
        resumoCaixas: [],
        resumoSecoes: []
    })

    const onResumoChange = (e) => {
        if (e === "LOJA") {
            setShowResumoLoja(true);
            setShowResumoCaixa(false);
            setShowResumoSecao(false);
        }
        if (e === "CAIXA") {
            setShowResumoLoja(false);
            setShowResumoCaixa(true);
            setShowResumoSecao(false);
        }
        if (e === "SECAO") {
            setShowResumoLoja(false);
            setShowResumoCaixa(false);
            setShowResumoSecao(true);
        }
        setFlashVendaFilter({ ...flashVendaFilter, resumo: e });
    }

    async function handleSubmit() {
        const response = await api.get('/flashVendas', { params: flashVendaFilter })
        setFlashVenda(response.data)
        console.log(response.data)
    }


    return (
        <>
            <ContentHeader title="Flash de vendas" small="" />
            <Content>
                <form onSubmit={() => handleSubmit()}>
                    <div className="row">
                        <div className="form-group col-sm-3 col-xs-12">
                            <label htmlFor="idLoja" className="control-label">Loja</label>
                            <select id="idLoja"
                                className="form-control"
                                value={flashVendaFilter.idLoja}
                                onChange={e => setFlashVendaFilter({ ...flashVendaFilter, idLoja: e.target.value })}>
                                <option>Todas as lojas</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-3 col-xs-12">
                            <label className="label-control" htmlFor="dataVenda">Data Venda</label>
                            <input className="form-control"
                                id="dataVenda"
                                type="date"
                                autoComplete="off"
                                value={flashVendaFilter.dataVenda}
                                onChange={e => setFlashVendaFilter({ ...flashVendaFilter, dataVenda: e.target.value })} />
                        </div>
                        <div className="form-group col-sm-3 col-xs-12">
                            <label htmlFor="resumo" className="control-label">Resumo</label>
                            <select id="resumo" className="form-control" onChange={e => onResumoChange(e.target.value)}>
                                <option value="LOJA">LOJA</option>
                                <option value="CAIXA">CAIXA</option>
                                <option value="SECAO">SECAO</option>
                            </select>
                        </div>
                        <div className="form-group  col-sm-2  col-sm-offset-1  col-xs-12">
                            <label className="control-label">&nbsp;</label>
                            <button type="submit" className="btn  btn-primary form-control">Pesquisar</button>
                        </div>
                    </div>
                </form>

                <div className="row">
                    <div className="col-md-3  col-sm-4 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-red">
                                <i className="ion ion-ios-people-outline" />
                            </span>
                            <div className="info-box-content">
                                <span className="info-box-text">Venda bruta</span>
                                <span className="info-box-number">{flashVenda.vendaBruta}</span>
                            </div>
                        </div>

                        <div className="info-box">
                            <span className="info-box-icon bg-blue">
                                <i className="ion ion-checkmark-circled" />
                            </span>
                            <div className="info-box-content">
                                <span className="info-box-text">Cancelamentos</span>
                                <span className="info-box-number">{flashVenda.cancelados}</span>
                            </div>
                        </div>

                        <div className="info-box">
                            <span className="info-box-icon bg-yellow">
                                <i className="ion ion-ios-filing-outline" />
                            </span>
                            <div className="info-box-content">
                                <span className="info-box-text">Venda líquida</span>
                                <span className="info-box-number">{flashVenda.vendaLiquida}</span>
                            </div>
                        </div>
                        <div className="info-box">
                            <span className="info-box-icon bg-info">
                                <i className="ion ion-person-add" />
                            </span>
                            <div className="info-box-content">
                                <span className="info-box-text">Clientes atendidos</span>
                                <span className="info-box-number">{flashVenda.clientesAtendidos}</span>
                            </div>
                        </div>

                        <div className="info-box">
                            <span className="info-box-icon bg-green">
                                <i className="ion ion-birthday-cake" />
                            </span>
                            <div className="info-box-content">
                                <span className="info-box-text">Venda média</span>
                                <span className="info-box-number">{flashVenda.ticketMedio}</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-9 col-sm-8 col-xs-12">
                        <div className="table-responsive">

                            {showResumoLoja && <table className="table  table-striped">
                                <thead>
                                    <tr>
                                        <th>Loja</th>
                                        <th>Hora Inicial</th>
                                        <th>Hora Final</th>
                                        <th>Valor Venda</th>
                                        <th>Clientes</th>
                                        <th>Ticket médio</th>
                                        <th className="text-right">% Part</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {flashVenda.resumoLojas.map(item => (
                                        <tr key={item.idLoja}>
                                            <td>{item.idLoja}</td>
                                            <td>{item.horaInicial}</td>
                                            <td>{item.horaFinal}</td>
                                            <td>{item.clientesAtendidos}</td>
                                            <td>{item.valorVenda}</td>
                                            <td>{item.ticketMedio}</td>
                                            <td>{(item.valorVenda / flashVenda.vendaLiquida) * 100}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}

                            {showResumoCaixa && <table className="table  table-striped">
                                <thead>
                                    <tr>
                                        <th>Loja</th>
                                        <th>Caixa</th>
                                        <th>Hora Inicial</th>
                                        <th>Hora Final</th>
                                        <th>Valor Venda</th>
                                        <th className="text-right" >% Part</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {flashVenda.resumoCaixas.map(item => (
                                        <tr key={item.caixa}>
                                            <td>{item.idLoja}</td>
                                            <td>{item.caixa}</td>
                                            <td>{item.horaInicial}</td>
                                            <td>{item.horaFinal}</td>
                                            <td>{item.valorVenda}</td>
                                            <td>{(item.valorVenda / flashVenda.vendaLiquida) * 100}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}

                            {showResumoSecao && <table className="table  table-striped">
                                <thead>
                                    <tr>
                                        <th>Seção</th>
                                        <th>Valor Venda</th>
                                        <th className="text-right">% Part</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {flashVenda.resumoSecoes.map(item => (
                                        <tr key={item.idSecao}>
                                            <td>{item.secao}</td>                                            
                                            <td>{item.valorVenda}</td>
                                            <td>{(item.valorVenda / flashVenda.vendaLiquida) * 100}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}

                        </div>
                    </div>
                </div>

            </Content >
        </>
    );
}
