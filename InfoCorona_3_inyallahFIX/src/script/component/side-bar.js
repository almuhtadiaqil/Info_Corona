class SideBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <button type="button" class="btn btn-danger">
                <div id="ProvinceView">
                    <a class="nav-link " href="#" >Data Provinsi</a>
                </div>
                </button>
        `;
    }
}

customElements.define("side-bar", SideBar);