import '../component/prov-list.js';
import DataSource from '../data/data-source.js';
const main = () => {
    const provinceViewElement = document.querySelector("#ProvinceView");
    const provinceListElement = document.querySelector("prov-list");

    const onProvinceViewClicked = async () => {
        try{
            const result = await DataSource.showProvince(provinceViewElement);
            renderProvince(result);
        }
        catch(message){
            fallbackProvince(message)
        }
    }
    const renderProvince = results => {
        provinceListElement.provinces = results;
    }
    const fallbackProvince = message => {
        provinceListElement.renderError(message);
    }

    provinceViewElement.addEventListener("click", onProvinceViewClicked);
}
export default main;