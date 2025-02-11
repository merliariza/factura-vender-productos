export class CrearComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }
    connectedCallback() {

    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
        <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
        <div class="row g-3">
            <div class="col-12">
                <label for="cod" class="form-label">Cod</label>
                <input type="text" class="form-control" name="cod" id="cod">
            </div>
            <div class="col-md-6">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" name="name" id="name">
            </div>
            <div class="col-md-6">
                <label for="stock" class="form-label">Stock</label>
                <input type="number" class="form-control" name="stock" id="stock">
            </div>
            <div class="col-12">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" name="price" id="price">
            </div>
            <div class="col-12">
                <label for="urlImage" class="form-label">Image</label>
                <input type="url" class="form-control" name="urlImage" id="urlImage">
            </div>
        </div>
        `;
    }
}

customElements.define("crear-component", CrearComponent);