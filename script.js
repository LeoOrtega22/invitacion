// function fetchData() {
//     // URL de la API JSONPlaceholder para obtener datos de usuarios
//     const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//     // Utilizamos fetch para realizar la solicitud GET
//     fetch(apiUrl)
//         .then(response => {
//             // Verificamos si la solicitud fue exitosa (código de estado 200-299)
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} - ${response.statusText}`);
//             }
//             // Parseamos la respuesta como JSON y la devolvemos
//             return response.json();
//         })
//         .then(data => {
//             // Manejamos los datos obtenidos
//             displayData(data);
//         })
//         .catch(error => {
//             // Manejamos cualquier error que ocurra durante la solicitud
//             console.error('Fetch error:', error);
//             displayError('Error al obtener los datos.');
//         });
// }

// // Función para mostrar los datos en la página
// function displayData(data) {
//     // const outputElement = document.getElementById('output');
//     // outputElement.innerHTML = '';

//     // data.forEach(user => {
//     //     const userElement = document.createElement('div');
//     //     userElement.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
//     //     outputElement.appendChild(userElement);
//     // });
//     console.log(data);
// }

// // Función para mostrar errores en la página
// function displayError(message) {
//     const outputElement = document.getElementById('output');
//     outputElement.innerHTML = `<p style="color: red;">${message}</p>`;
// }

// // Llamamos a la función fetchData al cargar la página
// fetchData();
// // Tu código React aquí
// // Ejemplo básico:
// const App = () => {
//     return (
//         <div>
//             <h1>Hello, Baby Shower!</h1>
//             <a href="https://www.google.com/maps/place/18%C2%B043'13.5%22N+98%C2%B026'53.0%22W/@18.720411,-98.4487037,192m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d18.720411!4d-98.44806?entry=ttu" target="_blank">
//                 <button>Ver ubicación en Google Maps</button>
//             </a>
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('app'));

const App = () => {
    const [userData, setUserData] = React.useState([{
        id: 0,
        name: 'Leonardo Ortega',
        email: 'ortegaleo508@gmail.com'
    },{
        id: 1,
        name: 'Jessica Chocolatl',
        email: 'jr4735353@gmail.com'
    }]);
    const [error, setError] = React.useState(null);
    const [tiempo, setTiempo] = React.useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    React.useEffect(() => {
        fetchData();
        contadorDias();
    }, []);

    const fetchData = () => {
        
    };
    const enviarMensajeWhatsApp = () => {
        console.log('voy a enviar un mensaje')
        // Puedes personalizar el mensaje predeterminado
        var mensaje = "¡Hola! Estoy emocionado/a de asistir al Baby Shower. Nos vemos allí. 😊";
        
        // Puedes personalizar el número de teléfono
        var telefono = "522213441359";
        
        // Construir la URL de WhatsApp con el mensaje
        var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);
  
        // Abrir la ventana de WhatsApp en una nueva pestaña
        window.open(url, '_blank');
    };

    const contadorDias = () => {
        const fechaObjetivo = new Date('2024-03-03T15:00:00Z').getTime();

        // Actualizar el contador cada segundo
        const intervalo = setInterval(() => {
        // Obtener la fecha actual
        const fechaActual = new Date().getTime();

        // Calcular la diferencia de tiempo entre la fecha actual y la fecha objetivo
        const diferencia = fechaObjetivo - fechaActual;

        // Calcular días, horas, minutos y segundos restantes
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        const nuevoTiempo = {
            dias: dias,
            horas: horas,
            minutos: minutos,
            segundos: segundos
        };
        setTiempo(nuevoTiempo);

        // Detener el contador cuando llegue a la fecha objetivo
        if (diferencia < 0) {
            clearInterval(intervalo);
            alert('El dia a llegado, te esperamos')
        }
        }, 1000); // Actualizar cada segund
    }

    return (
        <div className="app-container">
            <div className="invitation">
                <div className="header">
                </div>
                <div className="elephant">
                </div>
                <div className="details">
                    <h2 className="section-title">¡LOS ESPERAMOS!</h2>
                    {/* <hr className="line"></hr> */}
                    <p className="date">03 de MARZO de 2024</p>
                    <p className="message">La ocasión será un momento mágico para compartir risas, consejos y buenos deseos mientras celebramos la llegada de nuestra niñita. Únanse a nosotros para disfrutar de una tarde llena de juegos, deliciosos bocadillos y momentos memorables.</p>
                    <br></br>
                    <p className="address">Dirección: C/Iturbide 309-303, Centro, 74390, Tepeojuma, Pue.</p>

                    <div className="contador">
                        <div className="cifras" id="dias">{tiempo.dias}</div>
                        <div className="etiqueta">Días</div>

                        <div className="cifras" id="horas">{tiempo.horas}</div>
                        <div className="etiqueta">Horas</div>

                        <div className="cifras" id="minutos">{tiempo.minutos}</div>
                        <div className="etiqueta">Minutos</div>

                        <div className="cifras" id="segundos">{tiempo.segundos}</div>
                        <div className="etiqueta">Segundos</div>
                    </div>
                </div>
                <div className="button-container">
                    <a href="javascript:void(0);" className="whatsapp-button" onClick={enviarMensajeWhatsApp}>Confirmar Asistencia por WhatsApp</a>
                </div>
                <br></br>
                <br></br>
                <div><a className="whatsapp-button1" href="https://www.google.com/maps/place/18%C2%B043'13.5%22N+98%C2%B026'53.0%22W/@18.720411,-98.4487037,192m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d18.720411!4d-98.44806?entry=ttu" target="_blank">
                Ver ubicación en Google Mapss
                </a></div>

                <div className="user-data">
                    <h2>Papí & Mamí:</h2>
                    {userData.map(user => (
                        <div key={user.id} className="user-card">
                            <strong>{user.name}</strong> - {user.email}
                        </div>
                    ))}
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));


