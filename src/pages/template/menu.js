import React from 'react'
import MenuItem from './menuItem.js'
import MenuTree from './menuTree'

export default function menu() {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <MenuItem path="/" label='Dashboard' icon="tachometer-alt" />
                <MenuTree label="Cadastros" icon="database">
                    <MenuItem path="/produto" label="Produto" icon="luggage-cart" marginLeft={20}/>
                    <MenuItem path="/cliente" label="Cliente" icon="address-book" marginLeft={20}/>
                </MenuTree>
                <MenuTree label="Produtos" icon="barcode">
                    <MenuItem path="/produtos/validacaoPreco" label="Validação de preco" icon="hand-holding-usd" marginLeft={20} />
                    <MenuItem path="/produtos/alteraPreco" label="Altera preço" icon="tag" marginLeft={20} />
                </MenuTree>
                <MenuTree label="Caixas" icon="cash-register">
                    <MenuItem path="/caixas/flashVendas" label="Flash de vendas" icon="dollar-sign" marginLeft={20}/>
                </MenuTree>
            </ul>
        </nav>
    )
}