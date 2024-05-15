document.addEventListener('DOMContentLoaded', () => {
    fetchProvinces();
});

function fetchProvinces() {
    const apiKey = 'ff656a21-3bf4-5928-081b-fb16c8c7';
    const apiUrl = `https://api.goapi.io/regional/provinsi?api_key=ff656a21-3bf4-5928-081b-fb16c8c7`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const provinceSelect = document.getElementById('listProvinsi');
            data.data.forEach(province => {
                const option = document.createElement('option');
                option.value = province.id;
                option.textContent = province.name;
                provinceSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
