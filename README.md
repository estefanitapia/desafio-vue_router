# Desafío - Vue Router
Este proyecto es una aplicación Vue.js que muestra una página de inicio con un Navbar, una vista de enrutador (router-view), una sección de métodos de pago (medios-pago) y un Footer. Además, hay una sección para mostrar productos con sus detalles.


## Estructura del Proyecto
La aplicación consta de varios componentes principales:
* `HomeView.vue`
 Este es el componente principal que organiza la página de inicio: [HomeView](./src/App.vue)
* `Productos.vue`
  Este componente muestra una lista de productos en tarjetas (cards). Cada tarjeta contiene una imagen, nombre, descripción, precio y cantidad disponible del producto. [ProductosView](./src/views/ProductosView.vue)

* `Navbar.vue`
Este componente proporciona la barra de navegación de la aplicación, permitiendo al usuario navegar entre diferentes rutas. [Navbar](./src/components/Navbar.vue)


### Requerimientos


1. Modificar el código del menú de navegación en sus ítems e integrar <router-link>.
2. Generar las rutas que se requieran según los ítems ya establecidos en el menú de
navegación. Estas rutas van a cargar los componentes a través de carga controlada o
lazy load. 
3. Generar las vistas en su respectivo directorio para que las rutas definidas tengan
funcionalidad y muestren información.
4. En la vista Productos y Contacto deberá haber un enlace de redirección al inicio del
sitio.
5. En la vista de Productos.vue se recibirán props enviados desde la definición de la ruta logrando la visualización de una card.





