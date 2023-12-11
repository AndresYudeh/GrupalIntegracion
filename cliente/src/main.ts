import './style.css';
import { io } from 'socket.io-client';
import axios, { AxiosError } from 'axios';

// Importar estilos y scripts de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// Variable para controlar si el usuario ha iniciado sesión
let usuarioAutenticado = false;



// const socket = io('http://localhost:3000/'); // Replace localhost with your actual server address

// socket.on('connect', () => {
//   console.log('Conectado al servidor WebSocket.');
// });

// socket.on('nuevoReporte', (nuevoReporte) => {
//   console.log('Nuevo reporte recibido:');
//   console.log('   ID del reporte:', nuevoReporte.REPORTE_ID);
//   console.log('   Fecha:', nuevoReporte.FECHA);
//   console.log('   Descripción:', nuevoReporte.DESCRIPCION);
//   console.log('');
// });



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
              console.log("Inicio de sesión con exito, su token es:", token);
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

const newLocal = document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<html lang="en">
<head>
  <meta charset="UTF-8">

</head>
<body ">
<div class="col-8 mx-auto">
  <form id="loginForm">
    <h1 class="card-title text-center">Bienvenido a ManKar</h1> <br>
    <label for="username">Usuario:</label>
    <div>
      <input class="form-control" type="text" id="username" name="username" required><br><br>
    </div>
    
    <label for="password">Contraseña:</label>
    <div>
      <input class="form-control" type="password" id="password" name="password" required><br><br>
    </div>
    <div id="message" style="color: red; margin-top: 10px;"></div>  <br>


    <button type="submit" id="loginButton" class="btn btn-primary btn-block">Iniciar sesión</button>
  </form>

</div>
  
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
