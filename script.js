const apiKey = 'ff656a21-3bf4-5928-081b-fb16c8c7'; 
const url = "https://api.goapi.io/regional/provinsi?api_key=ff656a21-3bf4-5928-081b-fb16c8c7";

    async function tampilkanProvinsi() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            if (data.status === 'success') {
                displayProvinsi(data.data);
            } else {
                throw new Error(data.message);
            }
        }catch (error) {
            console.error('Error fetching data:', error);
            const provinsiListDiv = document.getElementById('provinsiList');
            if (provinsiListDiv) {
                provinsiListDiv.innerHTML = "Terjadi kesalahan saat mengambil data: " + error.message;
            }
        }
    }

    function displayProvinsi(provinsiList) {
            const provinsiListDiv = document.getElementById('provinsiList');
            if (!provinsiListDiv) {
                console.error('Element with ID "provinsiList" not found in HTML');
                return;
            }

                const select = document.createElement('select');
               
            provinsiList.forEach(provinsi => {
                const option = document.createElement("option");
                option.textContent = provinsi.nama;
                select.appendChild(option);
            });
            
            provinsiListDiv.appendChild(select);
            provinsiListDiv.innerHTML = '';
        }

    tampilkanProvinsi();