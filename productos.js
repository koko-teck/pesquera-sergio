/* ================================================================
   PESQUERA SERGIO — JAVASCRIPT
   ----------------------------------------------------------------
   Los PRODUCTOS son los mismos que ya tenía la web.
   Para agregar uno nuevo, copiá un objeto al final de la lista.
   ================================================================ */

(() => {
  "use strict";

  // ==============================================================
  // 1. CONFIGURACIÓN GENERAL
  // ==============================================================
  const WHATSAPP_NUMBER = "5492236174870";
  const PRODUCT_GRID_ID = "product-grid";

  // ==============================================================
  // 2. IMÁGENES DEL CATÁLOGO
  // ==============================================================

  const IMAGENES = {
    filet: "WhatsApp%20Image%202026-10-01%20at%2016.05.09.jpeg",
    caja: "WhatsApp%20Image%202026-10-01%20at%2016.05.10%20%281%29.jpeg",
    pescado: "WhatsApp%20Image%202026-10-01%20at%2016.05.10.jpeg",
    abadejo: "abadejo.jpg",
    corvina: "corvina.jpg",
    hg: "hg.jpg",
    pezGallo: "pez-gallo.jpg",
    salmon: "salmon.jpg",
    merluzaDeCola: "merluza-de-cola.jpg",
    langostinoPelado: "langostino-pelado.jpg"
  };

  // ==============================================================
  // 3. PRODUCTOS
  //    IMPORTANTE: no modificar los nombres de esta lista.
  // ==============================================================

  const PRODUCTOS = [
    {
      id: "filet",
      nombre: "Filet de merluza",
      descripcion: "Filet listo para disfrutar en casa o sumar a tu negocio. Venta minorista y mayorista.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.filet
    },
    {
      id: "caja",
      nombre: "Filet de merluza por caja",
      descripcion: "Presentación en caja para tu hogar, comercio o emprendimiento. Venta minorista y mayorista.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.caja
    },
    {
      id: "pescado",
      nombre: "Pescado entero",
      descripcion: "Consultanos por opciones para compra minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.pescado
    },
    {
      id: "abadejo",
      nombre: "abadejo entero",
      descripcion: "Consultanos por opciones para compra minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.abadejo
    },
    {
      id: "corvina",
      nombre: "corvina entera",
      descripcion: "Consultanos por opciones para compra minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.corvina
    },
    {
      id: "hg-de-merluza",
      nombre: "hg de merluza",
      descripcion: "Consultanos por opciones para compra minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.hg
    },
    {
      id: "pez-gallo",
      nombre: "pez gallo entero",
      descripcion: "consulta por opciones para minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.pezGallo
    },
    {
      id: "salmon",
      nombre: "salmon entero",
      descripcion: "consulta por opciones para minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.salmon
    },
    {
      id: "merluza de cola",
      nombre: "Robalo",
      descripcion: "consulta por opciones para minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.merluzaDeCola
    },
    {
      id: "langostino pelado",
      nombre: "langostino pelado",
      descripcion: "consulta por opciones para minorista y mayorista y la disponibilidad del día.",
      etiqueta: "Menor y mayor",
      imagen: IMAGENES.langostinoPelado
    }
  ];

  // ==============================================================
  // 4. WHATSAPP
  // ==============================================================

  function crearEnlaceWhatsApp(mensaje) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  }

  function configurarEnlacesWhatsApp() {
    const enlaces = document.querySelectorAll("[data-whatsapp-link]");

    enlaces.forEach((enlace) => {
      enlace.href = crearEnlaceWhatsApp(
        "Hola, quiero consultar por los productos disponibles."
      );
    });
  }

  // ==============================================================
  // 5. ICONO DE FLECHA
  // ==============================================================

  function crearFlecha() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 12h14m-6-6 6 6-6 6");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.8");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    svg.append(path);
    return svg;
  }

  // ==============================================================
  // 6. CREAR TARJETA DE PRODUCTO
  // ==============================================================

  function crearTarjetaProducto(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "product-card";

    const contenedorImagen = document.createElement("div");
    contenedorImagen.className = "product-image-wrap";

    const imagen = document.createElement("img");
    imagen.className = "product-image";
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.loading = "lazy";
    imagen.decoding = "async";

    const etiqueta = document.createElement("span");
    etiqueta.className = "product-tag";
    etiqueta.textContent = producto.etiqueta;

    contenedorImagen.append(imagen, etiqueta);

    const informacion = document.createElement("div");
    informacion.className = "product-info";

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const enlace = document.createElement("a");
    enlace.className = "product-link";
    enlace.href = crearEnlaceWhatsApp(
      `Hola, quiero consultar por ${producto.nombre}.`
    );
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.append(
      document.createTextNode("Consultar por WhatsApp"),
      crearFlecha()
    );

    informacion.append(titulo, descripcion, enlace);
    tarjeta.append(contenedorImagen, informacion);

    return tarjeta;
  }

  // ==============================================================
  // 7. MOSTRAR CATÁLOGO
  // ==============================================================

  function mostrarProductos() {
    const grilla = document.getElementById(PRODUCT_GRID_ID);

    if (!grilla) {
      console.error(`No se encontró #${PRODUCT_GRID_ID}.`);
      return;
    }

    const tarjetas = PRODUCTOS.map(crearTarjetaProducto);
    grilla.replaceChildren(...tarjetas);
  }

  // ==============================================================
  // 8. MENÚ MÓVIL
  // ==============================================================

  function configurarMenuMovil() {
    const boton = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    if (!boton || !menu) return;

    boton.addEventListener("click", () => {
      const abierto = boton.getAttribute("aria-expanded") === "true";

      boton.setAttribute("aria-expanded", String(!abierto));
      boton.setAttribute(
        "aria-label",
        abierto ? "Abrir menú" : "Cerrar menú"
      );
      menu.classList.toggle("is-open", !abierto);
    });

    menu.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        boton.setAttribute("aria-expanded", "false");
        boton.setAttribute("aria-label", "Abrir menú");
        menu.classList.remove("is-open");
      });
    });
  }

  // ==============================================================
  // 9. INICIALIZACIÓN
  // ==============================================================

  mostrarProductos();
  configurarEnlacesWhatsApp();
  configurarMenuMovil();
})();
