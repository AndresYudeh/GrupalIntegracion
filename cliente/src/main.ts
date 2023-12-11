import './style.css';
import { io } from 'socket.io-client';
import axios, { AxiosError } from 'axios';

// Variable para controlar si el usuario ha iniciado sesión
let usuarioAutenticado = false;

// Establish a connection to the WebSocket server
const socket = io('http://localhost:3000/'); // Replace localhost with your actual server address

// Add event listeners for socket events
socket.on('connect', () => {
  console.log('Conectado al servidor WebSocket.');
});

socket.on('nuevoReporte', (nuevoReporte) => {
  console.log('Nuevo reporte recibido:');
  console.log('   ID del reporte:', nuevoReporte.REPORTE_ID);
  console.log('   Fecha:', nuevoReporte.FECHA);
  console.log('   Descripción:', nuevoReporte.DESCRIPCION);
  console.log('');
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
  const loginForm = document.getElementById('loginForm');
  const messageDiv = document.getElementById('message');
  const navbar = document.querySelector('nav');
  const dashboardContent = document.getElementById('dash'); // Agregamos el elemento del dashboard

  if (loginForm && messageDiv && navbar && dashboardContent) {
    // Función para ocultar/mostrar formularios y el navbar
    const toggleForms = (loginVisible: boolean, navbarVisible: boolean, dashboardVisible: boolean) => {
      loginForm.style.display = loginVisible ? 'block' : 'none';
      navbar.style.display = navbarVisible ? 'block' : 'none';
      dashboardContent.style.display = dashboardVisible ? 'block' : 'none';
    };

    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const usernameInput = document.getElementById('username') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;

      if (usernameInput && passwordInput) {
        const username = usernameInput.value;
        const password = passwordInput.value;

        try {
          console.log("Submitting login form...");

          const response = await axios.post('http://localhost:3001/auth/login', {
            username,
            password
          });

          const { data } = response;

          console.log("Response from server:", data);
          console.log("Response from response:", response.status);

          if (data.statusCode === 200) {
            const { token } = data;
            // Autenticación exitosa
            usuarioAutenticado = true;
            dashboardContent.classList.add('active');
            // Mostrar navbar y contenido del dashboard después del inicio de sesión
            toggleForms(false, true, true);

            if (messageDiv) {
              messageDiv.textContent = `Token: ${token}`;
              console.log("Login successful. Token:", token);
            }
          } else {
            if (messageDiv) {
              const { message } = data;
              messageDiv.textContent = message;
              console.log("Login failed. Message:", message);
            }
          }
        } catch (error: unknown) {
          const typedError = error as AxiosError;
          console.error('Error:', typedError.response);
          if (messageDiv) {
            messageDiv.textContent = 'Hubo un error al procesar la solicitud';
            console.log("Error processing request:", typedError.response);
          }
        }
      } else {
        console.error('Username or password input is null');
      }
    });
  } else {
    console.error('LoginForm, MessageDiv, or Navbar element not found');
  }
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body>

  <form id="loginForm">
    <h1>Login</h1>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br><br>
    <button type="submit" >Login</button>
  </form>

  <script type="module" src="/main.js"></script>
</body>
</html>
`;
declare global {
  interface Window {
    showDiv2: () => void;
  }
}
// Función para mostrar la interfaz de Dashboard
window.showDiv2 = function() {
  console.log('showDiv2 called');
  // No se implementa la funcionalidad para commentForm y commentForm2
};
