// Constantes
const BASE_ENDPOINT = 'https://api.github.com';
const USERS_ENDPOINT = `${BASE_ENDPOINT}/users`;

// Utilidad
const getElement = (selector) => document.querySelector(selector)

// Servicio
const getUserData = async (username) => {
  const response = await fetch(`${USERS_ENDPOINT}/${username}`)
  return await response.json()
};

// Visual Handlers
const showLoading = (element) => element.textContent = 'cargando...';
const handleError = (element, err) => element.textContent = `Algo salió mal: ${err}`

// Main
const nameElement = getElement('.name');
const blogElement = getElement('.blog');
const locationElement = getElement('.location');

const displayUser = async (username) => {
  try {
    showLoading(nameElement)
    const data = await getUserData(username)
    nameElement.textContent = `${data.name}`;
    blogElement.textContent = `${data.blog}`;
    locationElement.textContent = `${data.location}`;
  } catch (error) {
    throw error
  }
}

// Ejecucion
displayUser('stolinski')
  .catch(err => handleError(nameElement, err.message));