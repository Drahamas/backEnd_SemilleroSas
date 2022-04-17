const infoMarca =document.getElementById('infoMarca');
const infoLinea =document.getElementById('infoLinea');

//Marca
const urlMarca = 'http://localhost:8804/api/marcas';
document.addEventListener("DOMContentLoaded",()=>{
    
    fetch(urlMarca)
        .then(response => response.json())
        .then(data =>{
            infoMarca.innerHTML = ''
            data.forEach(marca => {
                const {id, nombre, descripcion, marca_activa} = marca;
                infoMarca.innerHTML += `
                    <tr>
                        <td>${id}</td>
                        <td>${nombre}</td>
                        <td>${descripcion}</td>
                        <td>${marca_activa}</td>
                    </tr>
                `
            })
        });
})

//Lineas
const urlLineas = 'http://localhost:8804/api/lineas';

fetch(urlLineas)
    .then(response => response.json())
    .then(data =>{
        infoLinea.innerHTML = ''
        data.forEach(linea => {
            const {id, nombre, descripcion, linea_activa, id_marca} = linea;
            infoLinea.innerHTML += `
                <tr>
                    <td>${id}</td>
                    <td>${nombre}</td>
                    <td>${descripcion}</td>
                    <td>${linea_activa}</td>
                    <td>${id_marca}</td>
                </tr>
            `
        })
    });