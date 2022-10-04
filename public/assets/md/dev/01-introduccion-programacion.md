[TOC]

# Introducción a la Programación 

## 1. Datos

Partamos de que disponemos de un ordenador. Como habrás podido experimentar podemos **introducir y guardar información**: nuestros apuntes, descargar una imagen o hacer nuestros gameplays para subirlos a Youtube. Esta información tan amigable el ordenador lo entiende de forma distinta. Este en su nivel más básico solo entiende el **0 y 1**. ¿Por qué lo hace así? no es el proposito aquí hablar en profundidad de la entrañas de un ordenador, pero digamos que en su circuiteria, chips y demás elementos solo entienden 2 estados, 2 diferencias de voltaje representados por 0 y 1. Las unidades de almacenamiento ya sean la memoria RAM o un disco duro también guardan, pero a su manera, estos 0 y 1. Por ejemplo un disco duro mecánico deja en sus discos zonas con magnetismo o sin ellas.

📖 **Datos**

> Unidad mínima de información con significado. Por ejemplo el resultado de una suma.

📖 **Información**

> Conjunto de datos. Normalmente aporta un significado. Por ejemplo la letra de una canción.

En algunos casos no es claro la unidad mínima para considerar dato. Podríamos decir que un texto es información y que un dato sería una palabra. Pero en la práctica se considerarían a los caracteres como unidad mínima. Dependiendo del autor el umbral no está claro.

## 2. Codificación

Hemos dicho que podemos coger un texto y traducirlo en un montón de 0 y 1. Lo que se hace es coger los caracteres del texto y siguiendo un sistema **transformarlo** a una representación binaria. Este proceso se llama codificación, en este caso lo transformamos a código binario. "Bi" significa 2 (¡oh! que sorpresa!) porque como vemos solo usan 2 dígitos. Existen muchos más codificaciones que las veremos a continuación.

**📖 Codificación** 

> Sistema para transformar un dato de una representación a otra utilizando un código y un método.

### 2.1. Codificación de Números Decimales

| sistema     | cifras | dÍgitos                         |
| ----------- | ------ | ------------------------------- |
| decimal     | 10     | 0-1-2-3-4-5-6-7-8-9             |
| binario     | 2      | 0-1                             |
| octal       | 8      | 0-1-2-3-4-5-6-7                 |
| hexadecimal | 16     | 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F |

| decimal | binario | octal | hexadecimal |
| ------- | ------- | ----- | ----------- |
| 0       | 0       | 0     | 0           |
| 1       | 1       | 1     | 1           |
| 2       | 10      | 2     | 2           |
| 3       | 11      | 3     | 3           |
| 4       | 100     | 4     | 4           |
| 5       | 101     | 5     | 5           |
| 6       | 110     | 6     | 6           |
| 7       | 111     | 7     | 7           |
| 8       | 1000    | 10    | 8           |
| 9       | 1001    | 11    | 9           |
| 10      | 1010    | 12    | A           |
| 11      | 1011    | 13    | B           |
| 12      | 1100    | 14    | C           |
| 13      | 1101    | 15    | D           |
| 14      | 1111    | 16    | E           |
| 15      | 10000   | 17    | F           |
| 16      | 10010   | 20    | 10          |
| 17      | 10011   | 21    | 11          |

- En ultima instancia se codifica en binario para que lo entienda el ordenador
- Normalmente la forma octal y hexadecimal se usa como codificación intermedia. Hay casos que queremos inspeccionar codigo binario y con estas representaciones lo hacemos más fácilmente

### 2.2. Código ASCII

Usa 7 dígitos binarios. Las distintas combinaciones permite crear un listado con 128 elementos.

![ascii-mod](/home/ladysun/graphic/pics/mycollection/ascii-mod.png)

Debido a que existen tantos lenguajes, abecedarios y símbolos, se han creado otras versiones llamadas "ASCII extendido" para cubrir estas necesidades.

Es importante familiarizarse con él ya que se emplea en la programación cuando tratamos información textual. No se lo aprenda de memoria, simplemente tenga la tabla a mano 😉

### 2.3. Imágenes Bitmap

Este es a modo de curiosidad, un ejemplo de como guardariamos información más compleja. Normalmente cuando ya eres muy pro abordaras el tratamiento de este tipo de información. Las imágenes están compuestas por píxeles, un conjunto de cuadraditos que tienen un color determinado. En el ordenador guardamos el color y la posición de esos píxeles. El color será la saturación de rojo, verde y azul (RGB), formado por un número de 8 bits, dando lugar a que se guarde un valor del 0 al 255. El valor 0 es ausencia de saturación, mientras que el 255 es saturación total. 

![bitmap](/home/ladysun/notes/uned/programacion-base-datos/01/pics/bitmap.png)

🎲 **Ejercicios**

> - Test sobre codificación
> - Encontrar elementos en una tabla ASCII



## 3. Programas

Los ordenadores son máquinas que permiten el tratamiento automático de la información, para ello necesitamos los programas. Son una colección de instrucciones ordenadas, las cuales normalmente trabajan con unos datos de entrada y lo tranforma en un resultado o salida. Decimos "normalmente" ya que en ocasiones a ejemplo didáctico se hacen programas dummy para ver como funciona distintos aspectos de un lenguaje de programación. Pero en realidad absolutamente todo programa de éxito usan datos de entrada y generan un resultado.

📖 **Programa** 

> Conjunto de instrucciones secuenciales para realizar un cometido. Normalmente se usan unos datos de entrada y genera una salida o resultado.



### 3.1. Clasificación según Plataforma

Dependiendo de que plataforma o dispositivo donde se use

- **Desktop**: Se ejecutan en un ordenador de sobremesa o portatil. Funcionan sobre un sistema operativo que puede ser Windows, Linux o Mac. Pueden ser autosuficientes o conectarse a una red internet o a Internet.

- **Aplicaicones web**: Necesitas un navegador web para su ejecución. Los navegadores pueden estar en ordenadores de escritorio o en un móvil.

- **Aplicaciones movi**l: aquellas que se ejecutan en un dispositivo móvil. funcionan sobre un sistema operatico que puede ser Android, IOS,

- **Firmwares**: Pueden haber programas que estén integrados en una pequeña memoria dentro de un microchip. Puede ser de una lavadora o tu smartwatch.

- **SmartTV**: Cada vez los teelvisores van adquiriendo más funciones a parte de mostrarte Netflix o o Youtube. Incluso algunos permiten descargarse sus propias aplicaciones.

- **Consolas**: Nintendo, PlayStation o Microsoft disponen de centros para descargar y gestionar tu catalogo de videojuegos. Incluso algunos genios se las han arreglado para instalar homebrew en la propia consola.

  

### 3.2. Clasificacion según Función

Depende del tipo de servicios o función que tenga. Están en constante cambio. Algunas clasificaciones no son oficiales, sino fruto de como los medios y la sociedad suelen describirlos.

- **SO**: Hace de intermedario entre el hardware y el resto de programas. sirve para gestionar el hardware y así ejecutar programas.
- **Ofimaticos**: Para la realización de tareas administrativas yd e gestión: editores de texto, hojas de cálculo, presentaciones...
- **Antimalware**: estos programas detectan y eliminan el malware de un equipo. Antaño se denominaban antivirus, pero debido a la variedad de los tipsod e atacantes (spyware, troyanos, ) se agruparon todos bajo el nombre de malware.
- **Retoque imagen**
- **Edición de Video**
- **Videjuegos**
- **Multimedia**: Reproductores de video y audio, grabación, captura...
- **Herramientas**: Chequeo del sistema, limpieza de archivos, medidor de rendimeinto...
- **Social Media**
- **Wikis**: Todas las aplicaciones que funcionan a modo de enciclopedia colaborativa (Wikipedia, Wikifandom)



### 3.3. Ejemplos

| Programa         | Plataforma             | Función                |
| ---------------- | ---------------------- | ---------------------- |
| Photoshop        | Desktop                | Retoque imágen         |
| Google Docs      | App Web                | Ofimática              |
| Facebook         | App Web/Móvil          | Social Media           |
| Leage of Legends | Desktop                | Videojuegos            |
| Tinder           | App Móvil              | Social Media/Contactos |
| NetFlix          | App web/móvil/smart tv | Multimedia             |
| The Witcher      | Desktop                | Videjuego              |



### 3.4. Conclusión

Seguro que con esto te has emocionado y estaras ansioso de crear la próxima red social o tu propio videojuego. Recuerda, la mente no tiene limites y por tanto la cantidad de programas existentes tampoco. Ánimo que estes es el primer peldaño paar tu gran aventura :)

🎲 **Ejercicios**

> - Identifica tipos de programas



## 4. Algoritmo

Me gusta explicar este concepto tras el de programación, ya que es más teorico y permite entenderlo mejor sabiendo lo que hace un programa.

📖 **Algoritmo**

> - Secuencia de pasos
> - Ordenada
> - Número finito
> - Soluciona un problema
> - Ante unos datos de entrada produce una salida

Veamos como sería el algoritmo de una hamburguesa 🍔

- Datos de entrada
  - Pan de Bretzel
  - Queso Havarti
  - Hamburguesa de Wagyu
  - Cebolla crujiente de Ikea
  - Salsa barbacoa de Mercadona
- Pasos
  - Calentar la plancha a fuego medio alto
  - Aderezar y untar de aceite la carne
  - Dejar la carne en la plancha 3 minutos
  - Darle la vuelta
  - Taparlo
  - Bajar el fuego a lento
  - Cocinar 5 minutos
  - Montar la burger al gusto
- Resultado
  - Una burger deliciosa

En la vida real no es tan suculento. Nos permiten encapsular soluciones como la ordenación de elementos de una lista, cálculo del camino más corto, resolución de ecuaciones... Visto así parece no diferenciarse del concepto de programa. El algoritmo ofrece soluciones genéricas, mientras que el prgrama son concretas. Un programa para su ejecución puede hacer uso de distintos algoritmos.



## 5. Lenguaje de Programación

En realidad todas las intrucciones de un programa hay que escribirlas en código binario. Pero claro, es bastante tedioso e inviable trabajar con él. En realidad los creamos usando los lenguajes de programación que son más amigables.

📖 **Lenguaje de Programación**

> Lenguaje formado por unas reglas sintácticas y semánticas que permite escribir órdenes. Al conjunto de ellas es lo que se conoce como programa. 

Existe una gran cantidad de lenguajes, pero solo unos pocos imperan dependiendo si es una plataforma web, mobil o desktop.



### 5.1. Compilación Vs Interpretación

Una vez escrito nuestro programa hay que traducirlo a codigo binario para que lo entienda la máquina. Principalmente existen 2 formas de hacerlo

📖 **Compilación**

> Coge todo el codigo y lo traduce a binario. Para ello se usan los llamados compiladores. Es un proceso lento que permite una ejecución mayor que el método de interpretación.

**📖 Interpretación** 

> Se traduce el código a medida que se necesite, puede hacerlo por instrucción o bloques. Para realizar el proceso se usan los intérpretes, que pueden ser máquinas virtuales o motores. La ejecución es más lenta.

¿Qué es una máquina virtual o motor? Digamos que cuando compilamos tenemos que tener en cuenta el sistema operativo. Esta es una tarea con la que tieen que lidiar los desarrolladores. Sin embargo con las máquinas virtuales dicha responsabilidad se elimina. El creador de un lenguaje desarrolla in interpreta para cada SO.  

## 6. Fases de Desarrollo

Escuchamos las leyednas de francotiradores que han logrado ellos solos sacar adelante una aplicación. Pero en realidad las grandes aplicaciones como Twitter o videojuegos como GTA son posibles gracias al trabajo en equipo. Para organizarse siguen sistemas y metodologías de desarrollo. En este apartado se hará una introducción, ya que necesitariamos una asignatura entera para verlo con todo detalle.



### 6.1. Code and Fix

- Se comienza a programar un fragmento de código.
- Lo ejecutamos para ver los errores. 
- Los corregimos y seguimos programando.

Es la metodología con la que comienza todo novato. Inviable en un desarrollo serio porque no hay planificación de ningún tipo

<img src="/home/ladysun/notes/uned/programacion-base-datos/01/pics/code-fix.svg" alt="code-fix" style="zoom:50%;" />



### 6.2. Desarrollo Tradicional o Cascada

El desarrollo está dividido en fases:

- **Análisis:** Tanto un cliente o un emprendedor tienen una idea. En esta fase se dialoga y estudian la propuesta.
- **Diseño:** Creación de planos, diagramas, diseño de interfaces... cualquier documento que sirva de apoyo para la escritura de código.
- **Codificación:** Escribir el programa.
- **Testing:** Hacer pruebas del código para ver si hay errores o funciona de acuerdo a lo establecido.
- **Mantenimiento:** Corrección de fallos o sugerir nuevas funcionalidades.

El problema de esta forma de trabajar es que a medida que se codifica van surgiendo nuevas ideas o funcionalidades. Incluirlas suele resultar muy tedioso y esperar hasta el final del desarrollo puede ser demasiado tarde. Incluso puede requerir crear de nuevo un programa para implementar lo nuevo.

<img src="/home/ladysun/notes/uned/programacion-base-datos/01/pics/cascada.svg" alt="cascada" style="zoom:50%;" />



### 6.3. Desarrollo Ágil

El programa se crea por medio de iteraciones o ciclos. En cada una podemos observar la fases de desarrollo de la metodología en cascada. Tras cada iteración se obtiene una apliación medianamente funcional. Cuantas mas iteraciones, más refinado es el programa. Si hay nuevas ideas o mejoras son más fáciles de incorporar.

Las metodologías ágiles supone todo un ecosistema. Entre las más famosas estñan SCRUM o Kamban-SCRUM. Incluso hay expertos en el manejo de una en concreto, se dedican a supervisar todo el proceso para garantizar su funcionamiento. Pero no nos compete aquí extendernos en ellas. 

<img src="/home/ladysun/notes/uned/programacion-base-datos/01/pics/agile.jpg" alt="agile" style="zoom:50%;" />



## 7. Testing

Lo normal es que cuando nuestros programas sean muy complejos, es decir miles de lineas de codigo y estén divididos en módulos, o incluso se creen microsistemas de programas que trabajan en conjunto, se hace necesario la creacion de baterias de pruebas. A grandes rasgos tenemos estos 2 tipos

- **Manual:** Personas físicas pruebas la aplicación. Hacen un test planing y escriben un informe con los problemas encontrados. El propósito es simular el comportamiento de un usuario final.
- **Automáticas:** Permite a un programador probar trozos de codigo determinado. También la interacción de conjuntos de estos. Lo que se hace en la práctica es que cada programador haga los suyos, se ejecutan todos para ver si la aplicaicón se ha roto en algún lado.



---

🎲 **Ejercicios**

> - Test para comprobar conocmientos sobre el tema
