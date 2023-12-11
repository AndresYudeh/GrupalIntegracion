import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Reemplaza con la URL de tu backend

interface Repostaje {
  REPOSTAJE_ID?: number;
  REPOSTAJE_KMAC?: number;
  REPOSTAJE_COMENTARIO?: string;
  ESTADO?: boolean;
  UNIDADES_PLACA?: string;
  RUTAS_ID?: number;
}

// Función para realizar la solicitud POST para crear un nuevo repostaje
async function crearRepostaje(nuevoRepostaje: Repostaje): Promise<void> {
  try {
    const response = await axios.post(`${API_URL}/repostaje`, nuevoRepostaje);
    console.log('Repostaje creado con éxito:', response.data);
  } catch (error) {
    console.error('Error al crear el repostaje:', error);
  }
}

// Función para realizar la solicitud GET para obtener todos los repostajes
async function obtenerTodosLosRepostajes(): Promise<void> {
  try {
    const response = await axios.get(`${API_URL}/repostaje`);
    console.log('Lista de repostajes:', response.data);
  } catch (error) {
    console.error('Error al obtener los repostajes:', error);
  }
}

// Función para realizar la solicitud PATCH para actualizar un repostaje por ID
async function actualizarRepostaje(repostajeId: number, datosActualizados: Repostaje): Promise<void> {
  try {
    const response = await axios.patch(`${API_URL}/repostaje/${repostajeId}`, datosActualizados);
    console.log('Repostaje actualizado con éxito:', response.data);
  } catch (error) {
    console.error('Error al actualizar el repostaje:', error);
  }
}

// Función para realizar la solicitud DELETE para eliminar un repostaje por ID
async function eliminarRepostaje(repostajeId: number): Promise<void> {
  try {
    const response = await axios.delete(`${API_URL}/repostaje/${repostajeId}`);
    console.log('Repostaje eliminado con éxito:', response.data);
  } catch (error) {
    console.error('Error al eliminar el repostaje:', error);
  }
}

// Ejemplos de uso:

// Crear un nuevo repostaje
const nuevoRepostaje: Repostaje = {
  REPOSTAJE_KMAC: 123,
  REPOSTAJE_COMENTARIO: 'Nuevo repostaje',
  ESTADO: true,
  UNIDADES_PLACA: 'ABC123',
  RUTAS_ID: 1,
};

crearRepostaje(nuevoRepostaje);

// Obtener todos los repostajes
obtenerTodosLosRepostajes();

// Actualizar un repostaje por ID
const repostajeIdActualizar = 1;
const datosActualizados: Repostaje = {
  REPOSTAJE_COMENTARIO: 'Repostaje actualizado',
};

actualizarRepostaje(repostajeIdActualizar, datosActualizados);

// Eliminar un repostaje por ID
const repostajeIdEliminar = 2;
eliminarRepostaje(repostajeIdEliminar);
