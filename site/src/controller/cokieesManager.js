import nookies from "nookies";

export class CookieManager {
  // Adiciona um pedido à lista de pedidos no cookie
  addPedido(data) {
    const listaPedidos = this.getListaPedidos();
    listaPedidos.push({
      id: data.id,
      nome: data.nome,
      valor: data.valor,
      images_link2: data.images_link2,
    });
    this.setListaPedidos(listaPedidos);
  }

  // Apaga um pedido específico da lista de pedidos no cookie
  deletePedido(id) {
    const listaPedidos = this.getListaPedidos();
    const index = listaPedidos.findIndex((pedido) => pedido.id === id);
    if (index !== -1) {
      listaPedidos.splice(index, 1);
      this.setListaPedidos(listaPedidos);
    }
  }

  // Resgata a lista de pedidos do cookie
  getListaPedidos() {
    const cookies = nookies.get();
    const cookieValue = cookies["listaPedidos"];
    return cookieValue ? JSON.parse(cookieValue) : [];
  }

  // Define a lista de pedidos no cookie
  setListaPedidos(listaPedidos) {
    const cookieValue = JSON.stringify(listaPedidos);
    nookies.set({}, "listaPedidos", cookieValue, { path: "/" });
  }

  getPedidoById(id) {
    const listaPedidos = this.getListaPedidos();
    return listaPedidos.find((pedido) => pedido.id === id) || null;
  }

  limparListaPedidos() {
    nookies.destroy({}, "listaPedidos", { path: "/" });
  }
}

// // Exemplo de uso
// const cookieManager = new CookieManager();
// const pedido1 = {
//   id: 1,
//   nome: "Pizza",
//   desc: "Deliciosa pizza",
//   desc_short: "Pizza Margherita",
//   valor: 12.99,
// };
// const pedido2 = {
//   id: 2,
//   nome: "Bebida",
//   desc: "Refrigerante gelado",
//   desc_short: "Coca-Cola",
//   valor: 3.99,
// };

// cookieManager.addPedido(pedido1);
// cookieManager.addPedido(pedido2);
// console.log(cookieManager.getListaPedidos());

// // Saída:
// // [
// //   { id: 1, nome: 'Pizza', desc: 'Deliciosa pizza', desc_short: 'Pizza Margherita', valor: 12.99 },
// //   { id: 2, nome: 'Bebida', desc: 'Refrigerante gelado', desc_short: 'Coca-Cola', valor: 3.99 }
// // ]

// cookieManager.deletePedido(1);
// console.log(cookieManager.getListaPedidos());

// // Saída:
// // [
// //   { id: 2, nome: 'Bebida', desc: 'Refrigerante gelado', desc_short: 'Coca-Cola', valor: 3.99 }
// // ]
