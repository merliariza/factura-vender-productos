export class VenderComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {

        this.innerHTML = /* html */ `
        <style rel="stylesheet">
        @import "./css/bootstrap/bootstrap.min.css";
        </style>
        <div class="container">
        <div class="row justify-content-md-center mt-3">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="card">
              <!--Encabezado-->
              <div class="card-header">Compras</div>
              <div class="card-body">
                <!--Título para la sección facturas-->
                <h5 class="card-title">Factura</h5>
                <!--Formulario para facturas-->
                <form class="row g-3" id="frmDataInvoice">
                  <!--Componente web para facturas-->
                  <invoice-component></invoice-component>
                </form>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <!--Título para la sección productos-->
                    <h5 class="card-title">Productos</h5>
                    <!--Formulario para productos-->
                    <form class="row g-3" id="frmDataProduct">
                      <!--Componente web para productos-->
                      <product-component></product-component>
                    </form>
                  </div>
                  <!--Botón para añadir productos-->
                  <button type="button" class="btn btn-dark" id="addProduct">
                    +
                  </button>
                  <br />
                  <!--Tabla para productos-->
                  <div class="table-responsive">
                    <table class="table table-sm table-bordered table-hover">
                      <thead class="table-dark">
                        <tr>
                          <th scope="col" class="text-nowrap">Cod</th>
                          <th scope="col" class="text-nowrap">Nombre</th>
                          <th scope="col" class="text-nowrap">V/Unit</th>
                          <th scope="col" class="text-nowrap">Cantidad</th>
                          <th scope="col" class="text-nowrap">Subtotal</th>
                          <th scope="col" class="text-nowrap"></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                  <!--Tabla para pagos-->
                  <div class="container mt-4">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th scope="row">Subtotal</th>
                          <td id="subtotal" class="text-end">0.00</td>
                        </tr>
                        <tr>
                          <th scope="row">IVA (19%)</th>
                          <td id="iva" class="text-end">0.00</td>
                        </tr>
                        <tr>
                          <th scope="row">Total</th>
                          <td id="total" class="text-end">0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
  
                  <!--Botón para pagar y almacenar la información de la factura-->
                  <button type="submit" class="btn btn-dark col-12">Pagar</button>
                  <br>
                  <button id="clearInvoicesBtn" class="btn btn-dark col-12">Borrar Facturas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;

    }
}
customElements.define("vender-component", VenderComponent);