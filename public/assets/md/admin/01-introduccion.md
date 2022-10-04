[TOC]

# Tema 01: Introducción



## 1. Codificación

Un ordenador es una máquina. Está compuesto de distintas piezas, las cuales continen una circuitería, chips, ranuras, ventiladores, condensadores... Gracias a estos componentes podemos usar programas que nos permiten trabajar con información. El interrogante es como un fichero de texto o una imágen es entendida por estas piezas. Necesitamos codificar la información para que sea entendidble por la máquina:

📖 **Información**

> Conjunto de datos. Por ejemplo una imágen o un documento de texto.

📖 **Dato**

> Unidad mínima con un significado. Por ejemplo la palabra "patata" sería un dato y el documento dodne aparece "información". En una imagen un pixel es un dato y la imagen información.

📖 **Codificar**

> Traducir una información a otra representación siguiendo las normas de un código. Se dá de forma bidireccional. Una foto puede traducirse en un conjunto de 0s y 1s, o éste plasmarse en una imágen por impresora o pantalla.

A través de los circuitos pasan corrientes eléctricas. Estas usan una diferencia de voltaje que corresponde a 2 estados: el 0 y 1. Esto es lo que conocemos como código binario. Largas cadenas de ceros y unos codifican los programas y la información.El nombre de binario no es un capricho. "Bi" es un prefijo que significa "dos", por tanto se llama bianrio por que solos e usan 2 cifras. 

📖 **Código Binario**

> Código que usa solo las cifras 1 y 0 para representar información



### 1.1. Información Numérica

Existen otros códigos numñericos que dependen del numero de cifras usadas. En la siguientes tablas podemos ver una comparación:

| Codificación | Dígitos                                                      |
| ------------ | ------------------------------------------------------------ |
| Decimal      | 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9                        |
| Binaria      | 0 - 1                                                        |
| Octal        | 0 - 1 - 3 - 4 - 5 - 6 - 7                                    |
| Hexadecimal  | 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A - B - C  - D - E - F |



| Decimal | Binario | Octal | Hexadecimal |
| ------: | ------: | ----: | ----------: |
|       0 |       0 |     0 |           0 |
|       1 |       1 |     1 |           1 |
|       2 |      10 |     2 |           2 |
|       3 |      11 |     3 |           3 |
|       4 |     100 |     4 |           4 |
|       5 |     101 |     5 |           5 |
|       6 |     110 |     6 |           6 |
|       7 |     111 |     7 |           7 |
|       8 |    1000 |    10 |           8 |
|       9 |    1001 |    11 |           9 |
|      10 |    1010 |    12 |           A |
|      11 |    1011 |    13 |           B |
|      12 |    1100 |    14 |           C |
|      13 |    1101 |    15 |           D |
|      14 |    1110 |    16 |           E |
|      15 |    1111 |    17 |           F |
|      16 |   10000 |    20 |          10 |

¿Por qué tantas representaciones? La octal y hexadecimal se usan como codificaciones intermedias a la bianria. Resulta que cuando se trabaja a nivel de máquina es muy lioso ver por pantallas listas de ceros y unos. Usando representaciones hexadecimales o octales podemos simplificar el número de cifras. Un ejemplo son las direcciones de memoria, en la literatura de computadores siempre usan la notación hexadecimal.

⭐ **Octomatics**

> Una autentica pasadas. Es una propuesta de traducir las matemñaticas actuales a un sistema octal. pero en vez de usar los digitos del 0 al 7 usan unos simbolos. No hace falta cálculos mentales o contar con los dedos, dependiendo de la operación se juntan visualmente las cifras y obtienes por magia el resultado. Mejor verlo en una imágen, es flipante. 
>
> <img src="pics/octo-calc.gif" alt="octo-calc" style="zoom:150%;" />
>
> Merece la pena echar un vistazo a la [web](http://www.infoverse.org/octomatics/octomatics.htm)



### 1.2. Información Textual

En programación los textos son representados por carácteres. 

📖 **Carácter**

> Dato mínimo que hay en una representación textual. Pueden ser letras, números, simbolos o espacios.
>

Podemos hacer que cada caracter le corresponda un código binario. La representación más famosa es la tabla ASCII. Usando 7 dígitos pueden representar 168 caracteres distintos.

![ascii-table](pics/ascii-table.png)

Resumamos la tabla en grupos:

- **Letras**
  - Minúsculas y mayúsculas. Solo las pertenecientes al alfabeto inglés. Nada de acentos, diéresis ni letras especiales como la ñ
- **Números**
- **Símbolos**
- **Espacios - tabuladores - retorno de carro**
  - Son considerados caracteres. 
  - Cuando un editor de textos se encuentra con ellos añade dichos espacios o efectos. 
  - Es raro al principio, pero cuando practiques la programación parecerá de lo más natural.
- **Señales de Control**
  - Están en desuso. 
  - El código ASCII apareció en los años 60. Por aquel entonces la forma más amigable de tener un ordenador de escritorio era con terminales. Eran máquinas con pantalla y teclado que se conectaban a una enorme computadora (tan grandes que ocupaban varias habitaciones). No tenían capacidad de cálculo, enviaban la instrucciones e infromacion por teclado a la máquina central. Ésta devolvía el resultado o la confirmación. Para manejar esta comunciación usaban señales de control que son las que vemos en la tabla. 

### 1.3. Imágenes

¿Te suenan los píxeles? resulta que las imágenes están compuestas por una rejilla de cuadritos. Cada uno de ellos son llamados píxeles. Incluyen 3 números que representan la intensidad del rojo, verde y azul (RGB). Los números son del 0 al 255. Al mezclarse crean el color del cuadrito. 

![bitmap](/home/ladysun/notes/uned/sistema-operativos-redes/pics/bitmap.png)



## 2. Ordenador

Antes de adentrarnos en la arquitectura aprendamos la definición correcta

📖 **Ordenador**

> Máquina principalmente electrónica. Permite crear y procesar información a través de programas. Éstos usan unos datos de entrada y los transforman en una salida. Por ejemplo la entrada sería las pulsaciones de teclado, mientras que la salida el fichero guardado que vemos por pantalla. 

Los programas forman la parte lógica llamada software, mientras que las piezas son la parte física o hardware. El SW y el HW son interdependientes, una no puede funcionar sin la otra.  



### 2.1. Arquitectura

Vamos a explicar a grandes rasgos la arquitectura de un equipo. Si nos ponemos en detalle necesitamos varios temas. Al menos lo fundamental para trabjar con los Sistema Operativos. El siguiente diagrama muestra la arquitectura de un equipo:



#### Procesador

Al final cualquier trabajo que hagas en un ordenador se traduce en una serie de operaciones. Desde escribir un documento hasta mover el ratón. Todo se traduce en operaciones elementales llamadas instrucciones: sumas, restas, desplazamiento de datos, operaciones lógicas... lo que pasa es que se realizan millones por milisegundo. Todas ellas son calculadas por el procesador. 

Desde hace varias décadas el procesador inclye varios núcleos. Estos son unidades de procesamiento independientes. Permite procesar en paralelo instrucciones.

#### Memoria Principal

Donde guarda la información y las partes de los programas que está usando en el momento. El procesador trae pequeñas porciones para operar con ellas. Como habrás podido darte cuenta un disco duro tiene mucha más capacidad. Hay aplicaciones como videojuegos cuyo tamaño superan a la memoria. Lo que ocurre es que solo cargan la parte que necesitan. Lo mismo ocurre con datos más grandes como por ejemplo modelos 3D o videos 4K.

#### Buses

Serían todos esos caminitos que ves en la circuitería. Aquellos que interconectan la CPU, la memoria principal, las ranuras de expansión y demás componentes de E/S. Estos caminos no se conectan directamente, entre medias tenemos al chipset y controladores de E/S gestionando la comunicación.

#### Controlador Gráfico

Resulta que con el paso del tiempo las exigencias gráficas han ido en aumento. Requiriendo un "mini" ordenador que se dedique al apartado gráfico. Tienen su propia CPU llamada GPU y una memoría exclusiva. Pueden presentarse de las siguientes formas:

- <u>Tarjeta de Expansión Independiente</u>: La opción que permite obtener la mayor potencia posible. En la actualidad son conectadas a una ranura PCIe o PLX. Permiten un rendimiento desde medio, alto o colosal. Si eres gamer, editor de video o imágen experimentado, o desarrollador de gráficos 3D profesional, es la opción deseable. También pueden usarse para minar criptodivisas, ya que las operaciones criptográficas necesarias necesitan una gran capacidad de computo. Todos los usos listados tienen como contrapartida el gran consumo electrico. Algunos usuarios incluso ocupan 2 ranuras PCIe con gráficas. A su vez éstas se interconectan con tecnologías SLI o NVLink. 
- <u>Soldado a la Placa</u>: Pensado para ordenadores portátiles que requieran un rendimiento medio-alto gráfico. Hay personas que viajan o llevan sus equipos al entorno de trabajo. Incluso prefieren tomarse un café o una cerveza teniendo su portatil en la mesa (yo lo he hecho y es muy agardable). Por tanto no importa sacrificar algo de potencia para obteenr portabilidad. Pueden presentar gran potencia, pero estos modelos no llegan al máximo rendimiento. Incluso si encontrásemos una bestia no merecería la pena comprar dicho portatil. El precio sería tan elevado que no compensa.
- <u>Integrado en el Propio Procesador</u>: Son pequeños controladores gráficos dentro de la CPU. Esto no sería posible sin los grandes avances de la miniaturización. están pensados para ordenadores portátiles que requieran unr endimiento bajo-medio. Podrás jugar a juegos pero de hace 3 o 4 años con los specs bajados. Normalmente allados en portatiles económicos.

#### Controlador E/S

Chips integrados que gestionan un conjunto de comunicaciones procedentes de interfaces de E/S, como puertos USB o conexiones SATA.

#### BIOS/Firmware

Son pequeños programas dentro de circuitos integrados. Con ellos podemos hacer lo siguiente:

- <u>Arrancar el Equipo</u>: Cuando encendemos el equipo el control lo toma el programa de arranque del firmware. Primero hace un chuqueo de los componentes (memoria, video, chipsets...). Si hay algún error lo muestra por pantalla o emite un código de pitidos. Luego busca el SO en el disco duro para que se ejecute. Al final el SO toma el control y prepara todo el sistema para el usuario. También puede suceder que no haya SO y el firmware ayude a su instalación a través de un USB o unidad óptica.
- <u>Configuración y Monitorización</u>: Podemos acceder a un panel de monitorización para ver la temperatura, hora del sistema, caracteristicas de componentes, etc. También 

Son una pieza bastante crítica. Una mala manipulación de su programa supone su avería, por tanto la inutilidad y finalmente tirar a la basura la placa. Como son circuitos integrados soldados, no podemos arreglarlos (a no ser que seas un genio y recicles una BIOS de otra placa). 

#### Almacenamiento

Donde guardamos la información y los programas, si van a usarse por el sistema se traslada a la memoria principal. Si el procesador tuviera que acceder directamente a los datos en disco sería muy lento. ¿Por qué no lo arreglamos con una memoria principal de 1Tb? sería carísimo. Cuanta más rápida sea la memoria más cara es, de ahí que las caches y RAM tenga menor capacidad. En la vida real el procesador no va atrabajar en ese mismo instante con todo lo que tengas almacenado en disco. 

Pueden presentarse se varias formas:

- <u>SATA</u>: Dispositivos de cierto tamaño conectados a interfaces SATA. Es la forma más común. Pueen ser HDD o SSD
- <u>PCIe</u>: SSD en un pequeño circuito integrado que se conecta a un zócalo de la placa. Encontrados sobretodo en portátiles.
- <u>Externos</u>: SDD o HDD conectados desde fuera del ordenador por medio de inetrfaz USB. Puedes comprar uno integrado en una caja con la inetrfaz USB. Tambiñen la caja con la interfaz USB para meter el disco que quieras.



### 2.2. Dispositivos Smart

Smarthome, smartwear, electrodomesticos, consolas, smartTV.... En ellos podemos apreciar la siguiente arquitectura:

- <u>Chip firmware con pequeña circuitería</u>.
- <u>Pequeño ordenador</u>: Con memoria principal e interfaces de E/S.

Este firmware puede alojar programas completos. Por ejemplo un smartband con su medidor de frecuencia cardiaca y sistema de notificaciones. Otro caso son los smartTV que incluyen un cliente de Yuutube o Netflix.



### 2.3. Móviles & Tablets

Tienen el mismo esquema que un ordenador, pero se estructuran distinto. En un único chip se embeben una buena parte de los componentes que hemos visto anteriormente. Esto es debido al pequeño tamaño y ahorro de consumo energético.



## 3. Programación

Todo este amasijo de circuitos, chips y demás componentes no sirven por si mismos. Los programas ayudan al usuario ha hacer sus tareas o disfrutar del ocio. Pero esto no quiere decir que el SW sea mejor que el HW, son interdependientes. La cuestión es que los profesionales por gusto nos inclinamos hacia un lado u otro en su conocimiento.

📖 **Programa**

> Secuencia ordenada de instrucciones para ejecutar tareas. Aceptan una o varios datos de entrada para generar un resultado o salida.



### 3.1. Clasificación según Plataforma

Dependiendo de que plataforma o dispositivo donde se use.

- **Desktop**: Se ejecutan en un ordenador de sobremesa o portatil. Funcionan sobre un sistema operativo que puede ser Windows, Linux o Mac. Pueden ser autosuficientes o conectarse a una red internet o a Internet.
- **Aplicaciones web**: Necesitas un navegador web para su ejecución. Éstos estan tanto en un ordenador o en un móvil.
- **Aplicaciones movi**l: Aquellas que se ejecutan en un dispositivo móvil. Funcionan sobre un sistema operatico que puede ser Android o IOS.
- **Firmwares**: Pueden haber programas que estén integrados en una pequeña memoria dentro de un microchip. Puede ser de una lavadora o tu smartband.
- **SmartTV**: Cada vez los televisores van adquiriendo más funciones a parte de mostrarte Netflix o o Youtube. Incluso algunos permiten descarga de aplicaciones.
- **Consolas**: Nintendo, PlayStation o Microsoft disponen de centros para descargar y gestionar tu catalogo de videojuegos. Incluso algunos genios se las han arreglado para instalar homebrew en la propia consola.



### 3.2. Clasificación Según licencia

- **Privativo**: El código fuente no está publicado. Solo es visible por parte de los integrantes del proyecto. 

- **Libre**: El código está público, puede verlo cualquiera. Personas ajenas al proyecto pueden acceder a él. Debe también cumplir las condiciones de libre uso, estudio, distribución de copias y creación de mejoras. De no ser así sería solo Open Source.

  Aquellos que programan de esta forma lo consideran como una filosofía. Esto es debido a que hubo un tiempo donde se compartía todo programa que se creaba, era inconcebible su comercialización. Habían comunidades donde se compartía y aprendía. Al final por intereses económicos cada vez más empresas no hicían público sus códigos fuente. 

  Dentro de esta modalidad hay distintos modos de licenciamiento. Por ejemplo algunos te permiten usar el código en un producto comercial propio, mientras que otros solo puede ser usado el codigo libre en otro programa libre.



### 3.3. Clasificación según Función

Depende del tipo de servicios o función que tenga. Están en constante cambio. Algunas clasificaciones no son oficiales, sino fruto de como los medios y la sociedad suelen describirlos.

- **SO**: Sirven para gestionar el hardware y ejecutar programas.

- **Ofimáticos**: Para la realización de tareas administrativas y de gestión. Por ejemplo editores de texto, hojas de cálculo, presentaciones...

- **Antimalware**: estos programas detectan y eliminan el malware de un equipo. Antaño se denominaban antivirus, pero debido a la variedad de los tipsod e atacantes (spyware, troyanos, ) se agruparon todos bajo el nombre de malware.

- **Retoque de Imágen**: El más famoso es el Adobe Photoshop pero también tenemos GIMP de software libre. Aunque Photoshop tenga filtros muy potentes, GIMP no se queda corto con su repertorio de herramientas.

- **Creación de gráficos**: Muchos de los programas de retoque tienen pequeñas herramientas para gráficos. Pero la creaciónd e gráficos implica elaborar imñagenes vectoriales. El más famoso es Adobe Illustrator, pero tenemos también la alternativa libre InkScape. 

- **Edición de Video**

- **Videojuegos**: LOL, Fortnite, Tetris, Diablo, Pokémon, Mario, Sonic, Plant Vs Zombies, Subway Surfers... 

- **Multimedia**: Reproductores de video y audio, grabación, capturadores...

- **Herramientas**: Chequeo del sistema, limpieza de archivos, medidores de rendimeinto...

- **Social Media**: Meta, Twitter, Tiktok, Pinterest, Flickr...

- **Mensajería**: Whatsapp, Telegram, Line, Slack...

- **Videoconferencia**: Skype, Zoom, Teams...

- **Wikis**: Todas las aplicaciones que funcionan a modo de enciclopedia colaborativa. Por ejemplo Wikipedia o Wikifandom.

  

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



## 4. SO

Por fin hemos llegado al rey de este tema. Estos apuntes forman parte de un curso de administración y mantenimiento de sistemas. Por tanto es bastante importante saber que es un SO y como funciona.

📖 **Sistema Operativo**

> Software que controla y gestiona los recursos hardware. Hace de intermediario sobre éstos a través de un conjunto de servicios. Gracias a ellos el software puede instalarse y ejecutarse.  



### 4.1. Kernel

Es la parte del sistema operativo que permanece permanentemente en la memoria principal. 

#### Gestión de Procesos

Un programa al ejecutarse puede supone la creación de uno o varios procesos. Cada uno ejecuta un programa. Cada nucleo del procesador solo puede realizar una tarea en un momento dado. Para aparentar que trabaja en paralelo se distribuye el tiempo de procesamiento entre lso procesos.

Esta parte del SO crea, para, renauda o finaliza los procesos. También los asigna la prioridad y proporciona sistemas de comunicación entre ellos.

#### Gestión de Memoria

Sabe que zonas de la memoria están ocupadas o por quien. Decide que procesos se cargan en memoria. Si no está cargado en memoria el procesador no puede ejecutar el proceso. Tendrá que traer la información del disco duro. Por tanto es importante una buena planificación en el uso de este recurso.

#### Gestión de Archivos

Asigna espacio a ficheros en el disco duro. Supervisa el espacio libre y ocupado. También los accesos y permisos.

#### Gestión de E/S

Los programas pueden competir por el acceso a disco, red o dispositivos conectados. El SO actúa como arbitro. Puede suceder que uno de estos dispositivos haya terminado su tarea y tenga que comunicarse. Manda una señal de interrupción a la CPU y está usa el gestor del SO para arbitrarla.



### 4.2. Servicios & Librerías

Los usuarios interactúan con el sistema operativo a través de servicios. Por ejejmplo el servicios de actualizaciones o el task manager de Windows. 

En cambio los programadores hacen uso de servicios de bajo nivel. Los SO proporcionan librerías para acceder a ellos. Incluso el propio lenguaje ofrece librerías que a su vez acceden a las librerías de los SO.



### 4.3. Interfaz gráfica

Podemos usar un SO a tarvés de una consola de comandos o con una interfaz gráfica. Ésta contiene un escritorio, ventanas y menus de acceso a aplicaciones y configuraciones.



### 4.2. Clasificación

Según el número de usuarios que lo esté utilizando.

- <u>Monousuario</u>: Solo un usuario simultaneo.
- <u>Multiusuario</u>: Varios usuarios simultaneos. Pensado más en un entorno de servidores.

Tambien está la clasificación según la cantiad de tareas ejecutándose.

- <u>Monotarea</u>: Solo puede ejecutar una aplicación a la vez.
- <u>Multitarea</u>: Pueden ejecutarse diversas aplicaciones ala vez.



---



## 🎲 Ejercicios

- [Test de repaso 1](https://pregunta2.com/quiz/40ddc0e1)
- [Test de repaso 2](https://pregunta2.com/quiz/a36c0689)
- Busca información de distintas distribuciones de Linux. Incluye algunas de sus características. Una vez terminado envíalo al buzón de entrega asignado



## 📕 Bibliografía

- Página sobre "Octomatics"
  http://www.infoverse.org/octomatics/octomatics.htm
- Entrada Wikipedia "ASCII"
  https://es.wikipedia.org/wiki/ASCII
- Artículo "Placas base – Toda la información que necesitas saber"
  https://www.profesionalreview.com/placas-base-motherboard/
- Artículo "PCIe, SATA, USB: Cuáles son los diferentes buses de datos de un PC"
  https://hardzone.es/reportajes/que-es/bus-datos-pc-cuales/
- Redhat - ¿Qué es el kernel de Linux?
  https://www.redhat.com/es/topics/linux/what-is-the-linux-kernel
- Artículo "Historia y todo lo que debes saber sobre un sistema operativo"
  https://www.adslzone.net/reportajes/software/que-es-sistema-operativo/
- Apuntes de Sistemas Operativos Tema 1
  https://www.infor.uva.es/~fjgonzalez/apuntes/Tema_1_Introduccion.pdf
- Artóculo "¿Qué es el Kernel y para qué sirve?"
  https://www.geeknetic.es/Kernel/que-es-y-para-que-sirve

