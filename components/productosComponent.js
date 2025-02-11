import './navMenu.js'
export class ProductosComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
      <style rel="stylesheet">
      @import "./css/bootstrap/bootstrap.min.css";
      </style>
      <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link mnuproducto" aria-current="page" href="#" data-verocultar='[["#crearComponent"],["#editarComponent,"#eliminarComponent","#listarComponent"]]'>Crear</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mnuproducto" href="#" data-verocultar='[["#editarComponent"],["#crearComponent","#eliminarComponent","#listarComponent"]]'>Editar</a>
      </li>
      <li class="nav-item">
      <a class="nav-link mnuproducto" href="#" data-verocultar='[["#eliminarComponent"],["#crearComponent", #editarComponent,"#listarComponent"]]'>Eliminar</a>
      </li>
      <li class="nav-item">
      <a class="nav-link mnuproducto" href="#" data-verocultar='[["#listarComponent"],["#crearComponent",#editarComponent, "#eliminarComponent"]]'>Listar</a>
      </li>
    </ul>
    <div class="container" id="crearComponent" style="display:block;">
        <crear-component></crear-component>
    </div>
    <div class="container" id="editarComponent" style="display:none;">
        <editar-component></editar-component>
    </div>    
    <div class="container" id="eliminarComponent" style="display:none;">
        <eliminar-component></eliminar-component>
    </div> 
    <div class="container" id="listarComponent" style="display:none;">
        <listar-component></listar-component>
    </div> 
    `;
        this.querySelectorAll(".mnuproducto").forEach((val, id) => {
            val.addEventListener("click", (e) => {
                let data = JSON.parse(e.target.dataset.verocultar);
                let cardVer = document.querySelector(data[0]);
                cardVer.style.display = 'block';
                data[1].forEach(card => {
                    let cardActual = document.querySelector(card);
                    cardActual.style.display = 'none';
                });
                e.stopImmediatePropagation();
                e.preventDefault();
            })
        });
    }
}

customElements.define("productos-component", ProductosComponent);