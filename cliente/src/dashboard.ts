console.log('Dashboard script loaded');
import './style.css';
import { io } from 'socket.io-client'; // Import socket.io-client
import axios, { AxiosError } from 'axios';

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

// Asegúrate de que el elemento con el id 'dash' existe en tu HTML
document.querySelector<HTMLDivElement>('#dash')!.innerHTML = `
  <div style="display: flex; flex-direction: column; height: 50%; margin: 10%;">
    <h1>Dashboard</h1>
    <table id="reportTable" style="width: 60%; margin-top: 0%; margin-bottom: 10%;">
      <thead>
        <tr>
          <th>ID del reporte</th>
          <th>Fecha</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody id="reportTableBody">
        <!-- Aquí se agregarán dinámicamente las filas de la tabla -->
      </tbody>
    </table>
    <div class="dashboard" id="commentForm" style="display: none; width: 80%; margin-bottom: 10px;">
      <div class="sidebar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/perfil">Perfil</a></li>
        </ul>
      </div>
      <div class="content" style="text-align: center; margin: 10px;">
        <h1>Dashboard</h1>
        <p>Interfaz 1</p>
      </div>
      <button type="submit" onclick="showDiv2()" style="margin-top: 10px;">Login</button>
      <div id="message" style="margin-top: 10px;"></div>
    </div>
  </div>
`;


