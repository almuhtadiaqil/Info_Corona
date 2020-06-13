class ProvItem extends HTMLElement{

    set province (province){
        this._province = province;
        this.render();
    }

    render(){
        this.innerHTML = `
        <table id="provinsi" class="table ">
            
                <tr>
                    <td width="100px">${this._province.attributes.Provinsi}</td>
                    <td width="100px">${this._province.attributes.Kasus_Posi}</td>
                    <td width="100px">${this._province.attributes.Kasus_Semb}</td>
                    <td width="100px">${this._province.attributes.Kasus_Meni}</td>
                </tr>
            
        </table>
        `;
    }
}
customElements.define("prov-item", ProvItem);