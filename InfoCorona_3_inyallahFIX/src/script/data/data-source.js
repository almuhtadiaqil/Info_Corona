class DataSource {

    static  showCountry() {
        return fetch(`https://api.kawalcorona.com/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went wrong`);
                }
            })
    }

    static  showProvince(){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi`)
            .then(response => response.json())
            .then(responseJson => {
                if(responseJson){
                    console.log(responseJson);
                    return Promise.resolve(responseJson);
                }
                else{
                    return Promise.reject(`Something went Wrong`);
                }
            })
    }
}
export default DataSource;