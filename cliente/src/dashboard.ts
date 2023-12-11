console.log('Dashboard script loaded');
import './style.css';
import { io } from 'socket.io-client'; // Import socket.io-client
import axios, { AxiosError } from 'axios';
// Importar estilos y scripts de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Establish a connection to the WebSocket server
const socket = io('http://localhost:3000/'); // Replace localhost with your actual server address

// Function to render a new report in the dashboard
function renderReport(report: { REPORTE_ID: any; FECHA: any; DESCRIPCION: any; }) {
  const tableBody = document.getElementById('reportTableBody') as HTMLTableSectionElement; // Uso de type assertion

  if (tableBody) {
    const newRow = tableBody.insertRow();
    const idCell = newRow.insertCell(0);
    const fechaCell = newRow.insertCell(1);
    const descripcionCell = newRow.insertCell(2);

    idCell.textContent = report.REPORTE_ID;
    fechaCell.textContent = report.FECHA;
    descripcionCell.textContent = report.DESCRIPCION;
  }
}

// Add event listeners for socket events
socket.on('connect', () => {
  console.log('Conectado al servidor WebSocket.');
});

socket.on('nuevoReporte', (nuevoReporte) => {
  console.log('Nuevo reporte recibido:');
  renderReport(nuevoReporte);
});

// async function obtenerDatosDesdeBackend() {
//   try {
//     const response = await axios.get('http://localhost:3000/repostaje/1'); // Reemplaza con la URL de tu backend
//     console.log('Datos desde el backend:', response.data);
//   } catch (error) {
//     console.error('Error en la solicitud al backend:', error);
//   }
// }
// obtenerDatosDesdeBackend();

document.addEventListener('DOMContentLoaded', () => {
  // No es necesario agregar contenido en este evento
});
document.addEventListener('DOMContentLoaded', () => {
  try {
    const button = document.querySelector('#accesoBtn');
    if (button) {
      button.addEventListener('click', () => {
        console.log('Clic en el botón');
        window.location.href = 'menu.html';
      });
    } else {
      console.error('No se encontró el botón con ID accesoBtn');
    }
  } catch (error) {
    console.error('Error al agregar el event listener:', error);
  }
});


// Asegúrate de que el elemento con el id 'dash' existe en tu HTML
document.querySelector<HTMLDivElement>('#dash')!.innerHTML = `
<body  >

<button id="accesoBtn" class="btn btn-primary btn-lg mt-4">ACCESO A SISTEMA</button>

 

  <div class="dashboard-container" style="display: flex; flex-direction: column; height: 50%; margin: 10%;">

  <div class="container col-8">
      <div class="mx-auto text-center">
        <h3 class="section-heading logo">Dashboard</h3>
      </div>
  </div>
  
  <table class="content-table mx-12">
    <thead>
      <tr>
        <th>ID del reporte</th>
        <th>Fecha</th>
        <th>Descripción</th>
      </tr>
    </thead>


    <tbody class="dashboard-table-body" id="reportTableBody">
    </tbody>
  </table>


  <div class="dashboard" id="commentForm" style="display: none; width: 80%; margin-bottom: 10px;">
   
    
     <div id="message" class="dashboard-message" style="margin-top: 10px;"></div>

  </div>
  </div>


</body>

`;


