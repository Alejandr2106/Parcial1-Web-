## Configuración Inicial

Para abrir y ejecutar la aplicación correctamente, siga los siguientes pasos:

### Prerrequisitos

1. Asegúrese de tener instalado Node.js en su sistema.
2. Clona este repositorio y navega al directorio raíz del proyecto:
3. Instalar las dependencias
4. Modificación Necesaria
Debido a un error en el envío del proyecto, es necesario realizar un cambio en el archivo App.css antes de ejecutar la aplicación. Por favor, modifique la línea 5 del archivo App.css:
5. Una vez realizados los pasos anteriores, puedes iniciar la aplicación con npm start

Componentes Utilizados
React Router (react-router-dom): Utilicé BrowserRouter, Routes y Route para crear la navegación entre las distintas páginas (Login y Home). La función useNavigate() también se empleó para redirigir al usuario a la página de inicio después de un inicio de sesión exitoso.
React Intl (react-intl): Para la internacionalización de la aplicación, utilicé FormattedMessage y useIntl para mostrar mensajes traducidos. Esto permite que el texto mostrado se adapte a los diferentes idiomas según las preferencias del usuario.
Hooks de React: Se utilizaron los hooks useState y useNavigate para manejar el estado del componente y la navegación dentro de la aplicación. El hook useState se utilizó para gestionar el estado de los inputs de correo electrónico y contraseña, así como el mensaje de error, mientras que useNavigate permitió la redirección condicional después del inicio de sesión.

### Proceso de Desarrollo
Creación del Componente de Login:

Se creó un formulario de inicio de sesión (Login) con campos para el correo electrónico y la contraseña. Se incluyeron validaciones para asegurarse de que el usuario proporciona información correcta (correo electrónico en un formato válido y contraseña de al menos 8 caracteres).
Utilicé el hook useState para controlar los inputs del formulario y para manejar los mensajes de error.
Navegación y Autenticación:

Utilicé react-router-dom para permitir la navegación de la pantalla de Login a la pantalla de Home después de un inicio de sesión exitoso. Esto lo hice con la ayuda de useNavigate().
Internacionalización:

Con el objetivo de hacer la aplicación más accesible, se integró react-intl para manejar múltiples idiomas. Utilicé FormattedMessage para mostrar los textos traducidos en los componentes y useIntl para gestionar los mensajes de error personalizados.
Estilo de la Aplicación:

Se aplicó un estilo simple al formulario de inicio de sesión (login-container) para mejorar la experiencia del usuario. La imagen de fondo se agregó mediante CSS, y debido a un error en la ruta del archivo, se realizó la modificación mencionada anteriormente.

### Elementos del Entorno de Desarrollo de React
Durante el desarrollo de la aplicación se utilizaron varios elementos del ecosistema de React, incluyendo:

React Components: Los componentes funcionales (App y Home) se crearon para estructurar la aplicación y mantener la lógica y el UI separados.

React Router (react-router-dom): Utilizado para definir las rutas dentro de la aplicación y facilitar la navegación.

Hooks de React: Utilicé useState para el manejo de estado y useNavigate para la navegación programática.

React Intl (react-intl): Para la internacionalización y manejo de idiomas.

Archivos CSS: Se utilizaron archivos CSS para proporcionar estilos a los componentes, creando una experiencia de usuario agradable y atractiva.
