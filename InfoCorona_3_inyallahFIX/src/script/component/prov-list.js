import './prov-item.js';
class ProvList extends HTMLElement {

    set provinces(provinces) {
        this._provinces = provinces;
        this.render();
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render(){
        this.innerHTML = "";
        this.innerHTML = `
        <table id="provinsi" class="table">
            
        <tr>
            <th width="100px">Provinsi</th>
            <th width="100px">Positif</th>
            <th width="100px">Sembuh</th>
            <th width="100px">Meninggal</th>
        </tr>
        `;
        this._provinces.forEach(province => {
            const provItemElement = document.createElement("prov-item");
            provItemElement.province = province
            this.appendChild(provItemElement);
        })
    }
}
customElements.define("prov-list", ProvList);