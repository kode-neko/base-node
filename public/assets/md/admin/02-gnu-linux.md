[TOC]

# Tema 02: GNU/Linux



## 1. Introducción

Cuando preguntas a un "normie" sobre sistemas operativos para ordenadores te dirán Windows o "Apple" (refiriendose a MacOS). Es normal ya que las tiendas ofertan equipos con uno de estos 2 sistemas. Con un gamer es más probable que mencione Linux, no es casualidad que Steam sacase su propia versión llamada [SteamOS](https://store.steampowered.com/steamos). Para servidores y supercomputadores es considerado la opción número uno, abarcando más del 90%.

Respecto a terminales móviles responderán Android o IOS. Pero muchos hemos olvidado que el kernel de Android es el de GNU/Linux. Adelantamos que usamos mal la palabra Linux, es distinta a los terminos de GNU/Linux y UNIX. Sin embargo están muy estrechamente relacioandos.

Ser consciente de que usas Linux significa que quieres conectar con el equipo, ir más allá de lo casual. Pero cuidado, muchos han caido en el fanatismo de la filosofía del software libre. 

<img src="pics/gamer-boy.jpg" alt="gamer-boy" style="zoom:15%;" />

## 2. Historia

La historia de Linux se entremezcla con al del software libre y UNIX. También es necesario de hablar de otros fenómenos y herramientas que ayudaron a su difusión. Si hablasemos por separado de cada una se quedarían cojas.



### 2.1. Compartir y Aprender

A finales de los 50 y durante los 60, el SW era creado por académicos e investigadores que trabajaban en corporaciones. Colaboraban y distrubuían el código fuente. La idea era que entre todos crecer y contibuir en añadir mejoras y buscar errores. No era concevible su comercialización. El SO del mainframe de IBM llamado ACP (Airline Control Program) se distribuía su código fuente sin mucha restricción.

Con el IBM 701 apareció el grupo "SHARE" y usuarios de equipos DEC crearón el grupo "DECUS". Podrían considerarse entre los primeros grupos de software libre, ya que elaboraban y compartían el SW creado para éstas máquinas.

A finales de los 60 el panorama cambió. Era más caro la elaboración de SW debido a la evolución de los SO y compiladores. Las empresas para competir embebían el SW en el HW de los equipos. Éstas máquinas eran arrendadas e incluían el sobrecosto del SW. Dichos costes incluía la asistencia técnica tanto del HW como del SW. Usuarios se quejaban de la situación, se sentían autosuficientes y solo querían pagar por la parte del HW. En 1969 IBM fue demanadada por los Estados Unidos por violar la libre competencia.

<img src="pics/gnu_hackers.jpg" alt="gnu_hackers" style="zoom:40%;" />



### 2.2. Software Privativo

A finales de los 70 y principios de los 80 se volvió rutinario el cobrar licencias software, comenzando lo que conocemos como "software privativo". Usando los derechos de autor, registro de marcas y contratos de arrendamiento, desarrollaron una seríe de herramientas legales. 

Uno de los que mejor supo aprovechar este terreno para despretigiar el mundo del SW libre fue Bill Gates. Afirmó en la "Carta abierta a los aficionados" que los "hackers" llamaban "compartir" a "robar". Hay que matizar que el termino hacker en sus inicios no fue ni peyorativo ni delictivo. Desde siempre los medios de comunicación han crecido a costa del sensacionalismo, el morbo y el alarmismo. Esto junto al desconocimiento y casos de personas que lo usaron para su propio beneficio, engrosaron sus arteras a costa de desprestigiar. 

Ahora para subsanar este daño han creado el termino "hacking ético", un innecesario lavado de imágen porque no somos capaces de investigar, escuchar y ver más allá de las apariencias.



### 2.3. Usenet

Ahora tenemos foros, blogs, redes sociales y sistemas de mensajería para comunicarnos. El primer sistema que se creo para discutir artículos fué Usenet. Fué creado en 1979 por Tom Truscott y Jim Ellis, estudiantes de la Universidad de Duke. 

Consiste en un conjunto de servidores distribuidos que almacenan y transmiten los artículos y mensajes. Funcionaba a través de la creación de grupos de noticias, que se organizaban de forma jerárquica. Los usuarios se subscriben a los grupos que más les gusta.

Aquí no hay emojis, imágenes o videos, solamente mensajes de texto. Usaban para la comunicación el protocolo UUCP. A diferencia de ahora, Internet se basa en la arquitectura TCP/IP para funcionar.



### 2.4. UNIX

En 1969 apareció un proyecto por investigadores de General electrics, AT&T Bell y del MIT. Querían crear un SO con nuevos conceptos como interfaces multimedia y gestión de archivos. Se llamó MULTICS pero fué tan grande que los contratiempos y retrasos provocó su abandono.

Más tarde en 1969 Ken Thompson (uno de los creaodres del lenguaje C), Dennis Ritchie y otros lo retomaros creando UNICS. A diferencia de la idea original daría soporte a 2 usuarios a la vez. En 1970 implementaron una pequeña variación y cambairon el nombre a UNIX. El problema que había es que estaba escrito en esamblador, siendo difícil portarlo a otras máquinas. En 1973 Denis y Ken crearon un proyecto para reescribirlo en C. Era solo trabajo del compilador de C el tarducir el código para que sea compatible con distitnos sistemas. Ya el problema de la distribución de UNIX se superó.

Comenzó a crecer una comunidad y a surgir la "filosofía UNIX". En un principio solo se distribuyó en algunos departamentos de informática de algunas universidades. Más tarde los laboratorios Bell empezaron a conceder licencias. 

La universidad de Berkeley trabajo por su cuenta añadiendo nuevas funcionalidades a UNIX. Otorgó popularidad y se convirtió en un SO estándar. En 1975 Ken sacó su versión llamada BSD. Los laboratoriso Bell continuaron por su parte presentando en 1982 Sistema III. Consistía en una versión para comercializarse. También estaba AT&T que en 1983 creó UNIX Sistema. Sacarón distintas versiones que permitían al retrocompatibilidad con programas.

¿Qué paso con BSD? también continuó su desarrollo. A finales de los años 70 fué usado como base para el proyecto gubernamental DARPA, el antecesor de Internet. Sacarón la versión 4.2. donde destacaba su gestión de archivos y el trabajo en red. Para comunicarse entre equipos crearon los protocolos TCP/IP, que son los que usamos hoy en día para que Intenet sea posible. 

Microsoft tampoco quiso quedarse atrás, cogió UNIX y lo transformo en XENIX en 1980. Como mérito fué acercar UNIX a los PC, que solo era concebido para grandes computadoras. Mas tarde colaboró con AT&T sacando UNIX Sistema V para ser usado en PC y garndes estaciones.

Todo este desarrollo se tradujo en muchos quebraderos d ecabeza para programadores. Las distintas versiones de UNIX eran tan distintas que había que programar distintas versiones. Esto hizo que apareciera la necesidad de crear algún tipo de estándar. En los 80 apareció el estándar POSIX, todo desarrollo realizado bajo estas recomendaciones era compatible con los distintos sistemas UNIX. ¿Sabías que se sigue usándo hoy en día? sobretodo dentro del mundo GNU/Linux.

<img src="pics/unix.png" alt="unix" style="zoom:50%;" />



### 2.5. Proyecto GNU

Primero hablemos de la historia de una de las figuras más importante de la informática, quien diga Steve Jobs o Bill Gates recibirá golpe de remo 😠 Richard Stallman forma parte de la cultura hacker clásica de los 70, la cual iba desapareciendo por el auge del modelo de software privativo. Compañeros suyos de laboratorio fundaron la compañía Symbolics. Remplazaban el SW del laboratorio por el suyo privativo. Stallman trabajo para impedir que Symbolics monopolizase todos los ordenadores del laboratorio. Los hackers fueron desapareciendo del laboratorio quedando solo él. 

Un día hubo un problema con unas impresoras. Stallman necesitaba sus drivers para arreglarlo y hablo con el fabricante. Accederían a darselos pero debía de firmar una cuerdo de no divulgación y comprometerse a unas acciones. No accedió ya que lo consideraba una traición a sus propios principios.

Harto de la situación del software privativo, anunció en 1983 el inicio del "[Proyecto GNU](https://www.gnu.org/)" a través de Usenet. Su misión era la de crear un SO completo y de código abierto. De esta forma quedaba libre de restricciones para usarlo, modificarlo y distribuirlo. Sería compatible con Unix para facilitar el cambio de sistema operativo. El nombre GNU es un acrónimo recursivo que significa "GNU's Not Unix". Al compartirse la interfaz gráfica y otras herramientas libres generaba confusiones.

Los SO están formados por el kernel, diversas herramientas y una interfaz gráfica. Incorporaron al proyecto algunas aplicaciónes ya existentes. Por ejemplo para los textos estaba el programa TeX y para la interfaz X Window (también usada en Unix). El resultado fue la aparición de GNU/Linux a principios de los 90. Debido a que era de código abierto y la incipiente comunidad, surgieron las distribuciones. Era GNU/Linux pero optimizado y con conjunto de aplicaciones distintas. Yggdrasil, Slackware y Debian fueron las primeras.

Hoy en día GNU continúa con el desarrollo de GNU/Linux. Todo proyecto software nunca acaba, sino es un proceso de continua mejora. La sociedad evoluciona y nuevas necesidades van apareciendo.

![gnu-tux](pics/gnu-tux.png)

### 2.6. Linux

El proyecto GNU necesitaba un kernel si quería tener un SO. Este hueco lo cubrió el núcleo Linux, proyecto liderado por Linus Torvalds.

En 1991 Linus quería hacer un SO inspirado en Minix (un clon de Unix de código abierto). Hizo un anuncio en Usenet y muchos se animaron a ayudar. La primera versión no era una licencia de software libre, pero si hacia mención explicita de no cobrar por distribuir el código. La siguiente fué bajo GPL, licenciamiento creado por la Free Software Fundation.

Se combinó las herramientas desarrollados por GNU con Linux dando lugar al sistema operativo GNU/Linux. Popularmente se llama Linux, ya que un SO sin su kernel nosería como tal. Alguno acólitos (entre ellos Stallman) piden que por favor se diga GNU/Linux, para atribuir méritos a ambas partes.

A modo anecdótico, en 1996 Linus adoptó a Tux como la mascota de Linux. Un pingüino simpático sentado. Fué diseñado por Larry Ewing basándose en una imágen que encontró Linus en un servidor FTP. 



### 2.7. Software Libre

El proyecto GNU necesitaba apoyo logístico, legales y financieros. También era necesario dar forma al movimiento de software libre. Todo ello condujo a que Stallman fundase la Free Software Fundation (FSF) en 1985. 

Primero se definió el concepto de software libre. En ingles la palabra "free" puede significar tanto "gratis" como "libre". Estás aplicaciones se adquieren de forma gratuita o pagando unos bajos costos de distribución en un soporte. Esta situación provoca que pensemos que es software gratuito en vez de libre.

Para facilitar la comprensión se establecieron los 4 principios:

1. Libertad de ejecución
2. Libertad de estudio del código. 
3. Libertad de redistribución de copias.
4. Libertad de mejorar el programa y publicarlas.

Para que puedan cumplirse es necesario poder acceder al código fuente.

<img src="/home/ladysun/notes/uned/sistema-operativos-redes/pics/stallman.jpeg" alt="stallman" style="zoom: 20%;" />

### 2.8. Open Source

En 1997 Eric S. Raymond fundó la [Open Source Initiative](https://opensource.org/). El objetivo es promover las ventajas de la publicación del código fuente en los negocios. Los integrantes iniciales eran interesados en el software libre y GNU/Linux.

Los conceptos de software libre y open source se confunden, incluso a veces se usan como sinónimos. El único punto en común es la necesidad de publicar el código. El software libre preserva la filosofía de los programadores hackers de los 70, grupos para compartir y aprender. El open source se centra en fomentar los beneficios del código abierto en las empresas. Son visiones distintas que generan matices diferentes. Por ejemplo en una aplicación open source puede que haya restricciones en la distribución de mejoras. Podría darse el caso de que el código se publica solo con la intención de encontrar fallos.



## 3. Distribuciones

También son llamadas "distro". Son SO compuestos de 3 partes:

- Un core GNU/Linux. Incluye el kernel de Linux junto con unas herramientas.
- Un conjunto de programas. En Linux son llamados paquetes.
- Una interfaz gráfica llamada "escritorio" o "desktop".

El core GNU/Linux es común en todas las distros, tal vez con algunas configuraciones y optimizaciones propias. Solo cambia los paquetes y el escritorio. Incluso una misma distro se ofrece con distintos escritorios. Da lugar a la creación de sistemas Linux con distintso sabores. 

Vamos a detenernos en los escritorios. Los más famosos son [GNOME](https://www.gnome.org/), [KDE](https://kde.org/), [Xfce](https://xfce.org/), [Mate](https://mate-desktop.org/), [Unity](https://ubuntuunity.org/) (culpable de que muchos dejásemos Ubuntu) y un montón más. Todos son interfaces de ventanas, algunos nos recuerdan más Windows y otros a MacOS. Algunos se abanderan de ser ligeros como Xfce para distros ligeras. Hay muchas personas que quieren dar una segunda vida a equipos viejos y usan [Puppy](https://puppylinux.com/), [Lubuntu](https://lubuntu.net/), [Bodhi](https://www.bodhilinux.com/) o [Linux Lite](https://www.linuxliteos.com/). Llegan a ocupar 200Mb y hacer un consumo de 64Mb de RAM.

<img src="/home/ladysun/notes/uned/sistema-operativos-redes/pics/distro.png" alt="distro" style="zoom: 80%;" />



## 4. ¿Por qué Linux?

### Ventajas

- Al ser de código abierto cualquiera puede observarlo. Esto ayuda a encontrar bugs y sugerir mejoras. Si el proyecto gusta y se crea comunidad, al final obtienes programas de mayor calidad. En el software de codigo cerrado hay que depener de la buena fé de la empresa desarrolladora.
- Existen en Internet una gran cantidad de distribuciones. Incluso puedes animarte con un equipo y hacer la tuya propia. Cada una está pensada para un usuario o equipo en concreto. Por ejemplo, algunas son tan ligeras que llegan a ocupar 200Mb. Incluso están optimizadas para que funcionen en equipos con muy pocos recursos.
- Si eres programador "no Windows" y "no Mac" tienes una gran ventaja. Casi todos los lenguajes y herramientas de programación son pensadas primero en Linux. Por tanto el soporte está garantizado de entrada.
- Prácticamente la administración de servidores se hace con GNU/Linux.
- En computación científica de grandes pestaciones, sino fuera por Linux no sería posible. Necesitan programas y sistemas a medida. También apoyarse en las herramientas de software libre para su distribución y crear comunidades.
- A día de hoy puedes hacer las mismas cosas que en Windows o Mac. Todos los navegadores están disponibles ¡Incluso Edge! Tenemos editor de imágen, video, suite ofimática, gestor de correos...
- Dispone de una gran cantidad de herramientas para diagnóstico y arreglo. La mayoría son por consola de comandos. Esto puede suponer una desventaja pero no es así. La interfaz de comandos puede incluso ser más ágil y rápida. También tiene la ventaja de ocupar menor tamaño. Las interfaces gráficas en muchas ocasiones se hacen pesadas y enrevesadas.
- Puedes meter en un USB una distribución autoarrancable. Dando igual el SO, si un equipo tiene problemas de arranque puedes diagnosticarlo con un USB Linux. Permite ejecutar una distro desde el pendrive y acceder a todas sus herramientas. Incluso hay distribuciones de solo diagnóstico y arreglo.

 

### Contras

- Como su mercado es un usuario espcializado no es popular. Familias y personas de a pié no se preocupan en los equipos que adquieren. Buscan la imágen, renombre o "cuestionables" comodidades.
- Aunque con el paso del tiempo haya mejorado la facilidad de instalar programas, sigue siendo oscura en muchas ocasiones. Muchas distribuciones ofrecen gestores de paquetes con interfaz gráfica. El problema es que están pensadas para usuarios casuales, los cuales son poquitos. Los más avanzados se las apañan con paquetes .deb o la herramienta de consola apt-get. Aún así pueden surgir algunos problemas de compatibilidades y dependencias que pueden llegar a ser tediosas de arreglar. Ya no digamos los "tarball", paquetes comprimidos en formato .tar.gz, .tar.bz2 o .tar.xz. Un .tar solo es un empaquetado de ficheros, dando como resultado el mismo tamaño en disco. Posteriormente se comprime en .gz, .bz2 o .xz, para ocupar menos espacio y distribuirlos mejor. Una vez que logras descomprimir y desempaquetar, tienes que compilarlo tu mismo. Normalmente se ayudan con la herramienta makefile, pero aún así muchos programadores no dejan las instrucciones claras y es arduo hacerlo.
- Todavía existen algunas incompatibilidades con drivers. Hace cosa de más de una decada habían bastantes problemas, sobretodo con las tarjetas gráficas. Incluso algunos periféricos podían no funcionar. Ahora el panorama a mejorado mucho.
- Grandes aplicaciones como las de Adobe no se ofrecen para Linux. Hace perder bastante la cuota de diseñadores que es bastante grande.
- A pesar de existir SteamOS no hay gran soporte gaming.



### Conclusión

Analizado lo anterior se deduce que los equipos con GNU/Linux están pensados para expertos informáticos. Ya sea técnicos, administradores o desarrolladores. No obstante hay esfuerzos para atraer diseñadores como Ubuntu Design, o bien gamers con SteamOS. Respecto al usuario doméstico queda mucho camino. Si tal vez se superase la cuestión de imágen social y una mayor curiosidad, podriamos ver a más casuales usando GNU/Linux. 



## 5. Virtualización

📖 **Virtualizar**

> Capacidad de poder simular un equipo con su HW dentro de otro equipo.
>

Hay aplicaciones que permiten simular equipos completos. De esta forma creamos entornos controlados. Podemos configurar y asignar recursos hardware como añadir varios adaptadores de red, la cantidad de memoria o el espacio en disco. Cuidado con lo que añadimos, podemos pasarnos y quitar recursos a nuestro equipo host. Esto se traduce en una bajada de rendimiento.

Una vez creada la máquina podemos instalar un sistema operativo y el conjunto de aplicacioens que queramos. Podemos crear varias máquinas y simular una red de area local. También aprender a crear un acceso de usuarios controlado. Muchas personas que les gusta el retrogaming instalan sistemas operativos antiguo como MS Dos para juegos de los 80-90.



### 5.1. Software de Virtualización

- **VirtualBox**: El que vamos a usar en las prácticas. Tiene licenciamiento GPL, por tanto su código fuente está disponible. Tampoco hay impedimentos legales para instalarlo y ejecutarlo en un aula, empresa o en tu casa. Interfaz sencilla e intuitiva.
- **VMWare**: Es una opción con licencia privativa. Bastante completa y muy configurable. VMWare Workstation Player es gratuito si no lo usas con fines comerciales. Por tanto puedes instalarla en el aula o en casa, pero no en tu empresa.  Esta versión no es tan completa como su producto comercial Workstatin Pro (pero si lo instalas en casa de piratilla para aprender no llamaré a la poli 😉).



### 5.2. Docker

No se usará en las sesiones, solo lo mencionamos para que nos sea familiar. Permite empaquetar una aplicación junto con librerías, herramientas y configuración. Estos paquetes son llamados contenedores. El cliente Docker los ejecuta permitiendo acceder a la aplicación.

La idea reside de que la virtualización consume muchos recursos. Tambien supone un costo temporal configurarlas. La instalación de servidores, gestores de bases de datos y programas pueden generar conflictos. Hay distintas versiones y configuraciones distintas para hacerlos funcionar. Podemos crear un programa compatible con un servidor, pero otro necesite una versión anterior del mismo. Con los contenedores podemos tener distintas versiones del mismo servidor sin interferirse. Estos contenedores consumen menos recursos que tener varias máquinas virtuales.

Ha ganado mucha popularidad esta opción entre programadores. Su ligereza, rápidez de instalación y configuracón a generado que sea indispensable manejarlos para ser programador.



### 5.3. Instalar Maquina Virtual Linux

Vamos a indicar por pasos como instalar una distro de GNU/Linux en VirtualBox.

#### Crear Nueva Máquina

Pulsamos al botón "new" de la barra de herramientas

<img src="pics/vb_01.png" alt="vb_01" style="zoom:60%;" />

En el asistente introducimos la configuración hardware. Estas specs están basadas en als recomendaciones mínimas para hacer funcionar Linux Mint.

![vb_02](pics/vb_02.png)

![vb_03](pics/vb_03.png)

![vb_04](pics/vb_04.png)

![vb_05](pics/vb_05.png)

![vb_06](pics/vb_06.png)

![vb_07](pics/vb_07.png)

#### Linkar la ISO

En el lateral izquierdo se muestra el listado de máquinas virtuales. Haz click con el botón derecho en la de Linux Mint. Selecciona en el menú la opción "configuración". En la opción "storage" podemos indicar que la unidad de CD/DVD emulada cargue una iso.

![vb_10](pics/vb_10.png)



![vb_10](pics/vb_10.png)





#### Encender la Máquina

Selecciona la maquina virtual del menu lateral, luego pulsa al botón "Start" de la barra de herramientas superior

![vb_11](pics/vb_11.png)

Una vez dentro selecciona el icono del escritorio "Install Linux Mint"

<img src="pics/vb_12.png" alt="vb_12" style="zoom:65%;" />

Sigue los pasos de la instalación. Cuando llegues a la selección del nombre de usuario y equipo usa esta nomenclatura:

| nombre  |                               |                 |
| ------- | ----------------------------- | --------------- |
| usuario | "user" + "_" + [pseudónimo]   | user_kodeneko   |
| equipo  | "equipo" + "_" + [pseudónimo] | equipo_kodeneko |



---



## 🎲 Ejercicios

- [Test de Repaso 01](https://pregunta2.com/quiz/71eaeddc)

- Vamos a crear una máquina virtual con Linux Mint. Primero hay que instalar [Virtual Box](https://www.virtualbox.org/). A continuación vamos a descargar la última versión de [Linux Mint](https://linuxmint.com/). A la hora de crear la máquina virtual seguiremos las recomendaciones que aparecen en el apartado "Virtualización". No olvides seguir las reglas para nombrar al usuario y al equipo.

  Si te sobra tiempo prueba a crear otra máquina con otra distro. Por ejemplo usa [Manjaro](https://manjaro.org/), [Ubuntu Studio](https://ubuntustudio.org/), [SteamOS](https://store.steampowered.com/steamos), [Pop!_OS](https://pop.system76.com/) o [ArchStrike](https://archstrike.org/). Si tienes otra en mente que te motiva más puedes hacer.

  Has de entregar un breve escrito indicando las impresiones que tienes sobre las máquinas virtuales y del uso de Linux. Si te ha dado tiempo a instalar otra máquina escribe en el documento los motivos de su elección. Tranquilo, no consiste en hacer una redacción perfecta y que guste al profe. Trata de expresarte y hacer críticas constructivas 😉
  
  

## 📕 Bibliografía

- Artículo Wikipedia "Historia del Software Libre y de código abierto"
  https://es.wikipedia.org/wiki/Historia_del_software_libre_y_de_c%C3%B3digo_abierto
- Artículo proyecto GNU "¿Qué es el Software Libre?"
  https://www.gnu.org/philosophy/free-sw.es.html
- Timetoast "Linea del Tiempo de la Historia del Software libre"
  https://www.timetoast.com/timelines/linea-del-tiempo-de-la-historia-del-software-libre--2
- Artículo Wikipedia "Usenet"
  https://es.wikipedia.org/wiki/Usenet
- Artículo Wikipedia "GNU/Linux"
  https://es.wikipedia.org/wiki/GNU/Linux
- Artículo Wikipedia "Richard Stallman"
  https://es.wikipedia.org/wiki/Richard_Stallman
- Artículo "Historia de Linux"
  https://histinf.blogs.upv.es/2011/12/23/historia-de-linux/
- Artículo "La historia de Linux: nacimiento, crecimiento y madurez de un pingüino"
  https://www.malavida.com/es/analisis/la-historia-de-linux-nacimiento-crecimiento-y-madurez-de-un-pinguino-005489
- Artículo proyecto GNU "¿Qué es el software libre?"
  https://www.gnu.org/philosophy/free-sw.es.html#copyleft
- Artículo proyecto GNU "El proyecto GNU"
  https://www.gnu.org/gnu/thegnuproject.es.html
- Artículo "Hitoria de UNIX - Origen y versiones del Sistema Operativo"
  https://disenowebakus.net/historia-de-unix.php



