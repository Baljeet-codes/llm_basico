Servidor Local Funcional-> http://127.0.0.1:8000/

RF->
    -El sistema debe proveer una interfaz con un campo de texto que permita al usuario escribir su pregunta o instrucción.
    -El sistema debe informar al usuario sobre el estado de su petición (ej. mostrando "Enviando…", "Respuesta recibida" o deshabilitando el botón de envío temporalmente).
    -El servidor backend debe recibir el prompt y enviarlo a la API de Google Gemini (modelo gemini-3-flash-preview).
    -El sistema debe procesar la respuesta JSON del servidor y mostrar el texto generado por la IA en la interfaz del usuario.
    -Si la petición al servidor falla (ej. error 500, sin conexión), el sistema debe mostrar un mensaje de error claro en la interfaz.
RNF->
    -El servidor debe estar diseñado para ejecutarse y consumirse en un entorno de red local (localhost).
    -La clave de la API del LLM (GEMINI_API_KEY) no debe exponerse en el código del cliente web; debe gestionarse de forma segura en el backend mediante variables de entorno (.env).
    -El código debe mantener una separación clara de responsabilidades: HTML para estructura, CSS para estilos , y JS para interactividad.

