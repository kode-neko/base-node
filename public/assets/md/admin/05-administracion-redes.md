[TOC]

# Tema 05:Administración de Redes



## 1. Internet

Podemos definir Internet como una red mundial para acceder y compartir recursos. Estos recursos pueden ser webs, imagenes, vidos o juegos. También permite comunicarnos ya sea por correo, chat o videoconferencia. Cada participante de esta red recibe el nombre de nodo. Para simplificar, los hay de 2 tipos:

- **Cliente**: Equipo que hace peticiones a los servidores. Puede ser un ordenador, un móvil, una smartTV... practicamente todo lo que se conecta a Internet. Envían pequeños mensajes para que el servidor les proporciones el recurso que quiere. Puede darse casos donde el cliente recibe un mensaje del servidor sin pedirselo. Sucede sobretodo en mensajería, donde no está el cliente preguntando una y otra vez si hay mensajes
- **Servidor**: Proveen recursos a la red. El ejemplo más básico es proporcionar una página web a un cliente. Como se dijo arriba, puede que el servidor tome la iniciatiba de comunicarse con el cliente. Continuando el ejemplo, recibe un mensaje de texto y decide enviarlo al cliente destinatario, el cual no ha hecho ninguna petición de recepción.

Como te habrás dado cuenta existen muchos más dispositivos interconectados como routers, switches o puntos de acceso. Permiten conectarse a Internet y gestionar las comunciaciones entre cliente-servidor. Los iremos viendo poco a poco a lo largo de la sesión.

La idea es que tengamos unas nociones básicas para administrar redes de area local. No es un curso intensivo y por tanto falta profundidad en muchos aspectos. No obstante, en la actualidad aprender redes supone un curso entero de universidad.

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/data-transfer.png" alt="data-transfer" style="zoom: 50%;" />

### 1.1. Enrutado

Puede tu móvil enviar un correo o descargarse una imágen. Tanto para recibir y enviar la información la dividimos en paquetes. Estos tienen una dirección, al igual que los paquetes de correos. Para ello se usan las direcciones IP o dirección de red.

En el ejemplo, el correo no lo enviamos directamente al destinatario. Este primero va a un servidor y lo reenvia al destinatario. Tanto el camino hacia el servidor como el de éste mismo al destinatario, esta interconectado por routers. 

Alrededor del mundo existen grandes enrutadores. Tienen tablas de IPs o con los prefijos de éstas. Guardarse todas las IPs que hay en el mundo es inviable. Al comprara con el prefijo sabe a que router enviarlo. Por tanto el paquete va reenviandose de router a router hasta que llegue a su destino. Una vez que lo recibe el router de tu casa lo envía a un miembro de su red. 



### 1.2. IP

En un principio teniamos solo IPv4. Son cadenas numericas con el patrón `xxx.xxx.xxx.xxx`. Cada segmento podía ser un valor del 0 al 255. Esto da lugar a un total de 2^32 direcciones distintas. Esta dirección es la que nos referiamos en el apartado anteriro de "1.1. Enrutado".

La idea es que cada dispositivo conectado tenga su propia dirección IP. Los hogares, negocios o escuelas tienen su propia red privada. Estas redes se conecta al final a un router, el cual enlaza con el proveedor de servicios (IPS) para salir a Internet. También recibe el nombre de red pública.

Podemos tener 2 equipos de redes privadas distintas con la misma IP. En teoría si te conectas directamente a la red pública tienes una sola IP. Se supone que el IPS asigna una IP única a cada router. Como hay escasez de direcciones tienen que ingeniarselas. Usan mecanismos para asignar la misma IP a varios dispositivos, pero de cara a Internet tiene una única dirección.

Desde hace unos años se agotaron todas las direcciones IPv4. Hace bastante tiempo se ha ido implementando IPv6, cuyo direccionamiento permite no haber ningún tipo de deshabastecimiento. Tienen el formato xxxx:xxxx:xxxx:xxxx y cada segmento es un número hexadecimal. Da lugar 2^128 direcciones distintas. 

Todavía no se usa IPv6 de forma generalizada, hay una especie de "convivencia" entre ambas versiones.



### 1.3. DNS

¿Qué es más fácil acordarse? ¿De 127.0.0.53 o de www.google.com? Las DNS permiten poner un alias a una IP, llamados "nombres de dominio".

#### Organización DNS

Los dominios se organizan por niveles

- <u>Primer nivel</u>

   www.[nombre].[nivel 1]

  www.ejemplo.com - www.ejemplo.net -  www.ejemplo.es - www.ejemplo.ninja - www.ejemplo.shop

- <u>N niveles</u>

  www.[nombre].[nivel n].[nivel n-1].[...].[nivel 1]

  www.ejemplo.gov.es - www.ejemplo.co.it - www.ejemplo.es.com - www.ejemplo.resorces.es.net

#### Obtención de la IP

1. Los SO tiene el archivo hosts. Un archivo de texto que guardar direcciones junto con su alias. Normalmente está vacía. Son las empresas y centros los que añaden algunas por cuestiones de seguridad y administración. Las ubicaciones de este archivo por lo general es la siguiente:

2. Cada ordendor guarda las direcciones IP de sus servidores DNS principales. Los más famosas son los de Google (8.8.8.8 y 8.8.4.4). También están las que nos proporcionan los IPS, que son las que generalmente usamos.

3. Si estos servidores DNS no conocen las IPs, la consulta se lanza a los llamados servidores raiz. Resulta que los servidores DNS están repartidos por el mundo. Su estructura es jerarquizada y arborea, una consulta comienza por la raiz y va descendiendo por las ramas. La consulta se para al encontrarse con el nodo del árbol que conoce el alias.

4. Hay 2 formas de realizar la consulta de IP:

   - Recursivo: Si el servidor no tiene la respuesta lo pide a otro.

   - Iterativo: Si el servidor no tiene la respuesta dice al ordenador o servidor anterior en que servidor DNS obtenerla. De nuevo vuelve hacer la petición al servidor que indicaron

5. En la realidad las consultas usan tanto recursivo como iterativo. El ordenador espera que lo resuelvan los servidores DNS. Los propios servidores DNS están configurados de una forma u otra.

#### Jerarquía de Dominios

Los servidores DNS están repartidos en distintas zonas del mundo. Están replicados, para que en caso de que caiga uno haya otro. Cada uno tiene una zona de autoridad, espacio de nombres de dominio donde es resposnable. Puede darse el caso que conozca una parte del nombre de dominio. Por ejemplo .shop.uk, el servidor al que consulta sabe responder la IP de .uk pero no de .shop. Sin embargo si concoe que servidor que lleva la parte .shop.uk.

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/DNS Hierarchy Screenshot.png" alt="DNS Hierarchy Screenshot" style="zoom: 67%;" />

#### Caché

Se hacen tantas peticiones a los servidores que muchas de ellas se repiten. Mantienen inetrnamente uan memoria de las repuetas a consultas más recurrentes. Así evita tener que ir preguntando de servidor en servidor.

#### Archivo hosts

- **GNU/Linux**
  /etc/hosts

- **Windows** 

  - <u>95 - 98 -ME</u>

    \Windows\hosts

  - <u>NT - 2000</u>

    \WINNT\System32\drivers\etc\hosts

  - <u>XP - 2003 - Vista - 7 - 8 - 10</u>

    \Windows\System32\drivers\etc\hosts

- **MacOS**
  /private/etc/hosts



## 2. Tecnología

### 2.1. Ethernet cobre

Cables de cobre con conectores RJ45. A través de ellos transmiten señales usando variaciones de voltaje. Estas variaciones suponen 2 estados interpretándose como el cero o el uno. 

Dependiendo de como se construya el cable tienen una longitud determinada. Esto es debido a que se atenua o debilita la señal. Esta variabel viene determinada por su frecuencia.

A continuación una tabla con información de los

| Nombre | Velocidad   | Distancia |
| ------ | ----------- | --------- |
| Cat 5e | 1.000 Mbps  | 100m      |
| Cat 6  | 1.000 Mbps  | 100m      |
| Cat 6A | 10.000 Mbps | 100m      |
| Cat 7  | 10.000 Mbps | 100m      |
| Cat 8  | 40.000 Mbps | 30m       |

La tabla muestra la velocidad teórica. Hay muchos factores que hace que disminuya en la práctica. La distancia, dispositivos intermedios, interferencias electromagnéticas, errores de transmision, calidad de los dispositivos, configuración de estos... También están las propias recomendacioens del fabricante que puede variar.

También hay clasificación según apantallamiento, blindaje o aislamiento. Cuanto mejor sea más caro, pero más distancia y menos errores.

| Nombre | Descripción                                                  |
| ------ | ------------------------------------------------------------ |
| UTP    | Sin apantalalmiento. Para uso doméstico                      |
| FTP    | Par de cables trenzados. Sin apantallar. Para uso doméstico. |
| STP    | Cada par trenzado recubierto de una malla conductora. Para una instalación por la pared. |
| SFTP   | Son como los SFTP pero adicionalmente tiene un recubrimiento global. Para largas longitudes. |

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/ethernet_purple.jpeg" alt="ethernet_purple" style="zoom:25%;" />

### 2.2. Fibra Óptica

Cables opacos que en su interiro alberga fibras de vidrio. La señal consiste en pulsos de luz. Permite altas trasnferencias a largas distancias. Están pensados para interconectar en ciudades o pueblos casas, empresas, comercios... También hay modelos muy sofisticados que conectan contienentes con cables subacuaticos. Principalmente es de 2 tipos:

- **Monomodo**: La señal viaja por el centro del cable. Permiet distancias mallores de 100km
- **Multimodo**: La señal va rebotando dentro del cable. Permite distancias hasta 2k. Son también más gruesos que los anteriores.

Ateniendonos a lo anterior tenemos los siguientes cables

| Nombre | Descripción                                           |
| ------ | ----------------------------------------------------- |
| OM1    | Multimodo 62,5/125                                    |
| OM2    | Multimodo 50/125 1 Gigabit                            |
| OM3    | Multimodo 50/125 10 Gigabit                           |
| OM4    | Multimodo 50/125 40 Gigabit                           |
| OS2    | Monomodo 9/125 (también conocida como 8/125 y 10/125) |

Dependiendo de su construcción nos encontramos estos tipos:

| Nombre | Descripción                                      |
| ------ | ------------------------------------------------ |
| LTU    | Sin armadura de tubo holgado                     |
| LTT    | Armado con cinta de acero y tubo holgado         |
| LTW    | Armadura de alambre de acero y tubo holgado      |
| TBU    | Sin armadura con tubo ajustado                   |
| MTU    | Sin armadura de multitubo holgado                |
| MTT    | Armado con cinta de acero y multitubo holgado    |
| MTW    | Armadura de alambre de acero y multitubo holgado |

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/fiber-optic-cable-types.jpg" alt="fiber-optic-cable-types" style="zoom:50%;" />

### 2.3. Coaxial

Cables con un nucleo de cobre con un grueso recubrimiento. Gracias a ello permite altas transferencias a grandes distancias. Es más barata, fácil de instalar y más duradero que la fibra. La contra es que la fibra es más rápida. Elegir uno u otro supone sopesar la situación con sus ventajas y desventajas. Hace varais décadas era la opción para interconectar empresas o universidades. Desde que se generalizó la fibra óptica cada vez se usa menos.

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/cable coaxial.jpg" alt="cable coaxial" style="zoom:50%;" />

### 2.4. PLC

Permite la comunciación entre dispositivos usando el tendido electrico de una casa o despacho. Consisten en un artefacto que se conecta a los enchufes. Este tiene una toma para usar un cable de cobre y conectarlo al equipo. Tambiñen puede incluir una toma de enchufe a modo de compensación.

La idea es enchufar uno conectado al router. Este actua emitiendo señales por la red eléctrica. Despues en cada estancia enchufar otro para conectarlo al equipo. Funcionan a modo de receptor de señales. Algunos receptores incluso dispone de WiFi. 

¿Por qué no se usan tanto? 

- Por una parte en los hogares es más cómodo usar Wi-Fi. Tenemos cada vez más dispositivos inalámbricos. Normalmente las instalaciones cableadas están pensados para ordenadores profesionales de sobremesa.
- Después tenemos electrodomésticos que generan grandes interferencias, pudiendo afectar al dispositivo. Conectarlos lejos de dichas fuentes.
- Para lograr grandes velocidades conectarlos directamente al enchufe, sin regletas o ladrones de por medio. También conectarlo al dispositivo con cable.

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/plc.jpg" alt="plc" style="zoom: 50%;" />

### 2.5. Wi-Fi

Wi-Fi en realidad es una marca registrada de la Wi-fi Alliance. A finales de los 90 diversas empresas de tecnología se unieron para lograr un consenso en al conexión inalámbrica. La idea es que independientemente del aparato y equipo que comprases pudieran comunicarse a distancia. Incluyendo el sello Wi-Fi ese dispositivo incluía el estándar IEEE 802.11b para comunicaciones inalámbricas.

El tiempo ha ido avanzando y la familia IEEE 802.11x es ele standar actual para las redes locales inalámbricas. Ahora aparece más el estándar que el sello de la marca. Lo que ocurre que lo llamamos "Wifi" porque suena mejor y es más fácil.

Listemos aquellos que podamos encontrarnos:

| Nombre   | Estándar | Tasa (Mbits/s) | Año  | Frecuencia (GHz) |
| -------- | -------- | -------------- | ---- | ---------------- |
| Wi-Fi 6E | 802.11ax | 600 - 9608     | 2020 | 6                |
| Wi-Fi 6  | 802.11ax | 600 - 9608     | 2019 | 2.4 / 5          |
| Wi-Fi 5  | 802.11ac | 433 - 6933     | 2014 | 5                |
| Wi-Fi 4  | 802.11n  | 72 - 600       | 2008 | 2.4 / 5          |
| Wi-Fi 3  | 802.11g  | 6 - 54         | 2003 | 2.4              |

Dependiendo de la frecuencia usada podemos obtener mayor o menor velocidad. En cada generación va mejorando permitiendo ante una misma frecuencia obteenr más velocidad. Las frecuencias altas les cuesta más atravesar obstáculos como paredes (en teoría).

#### Seguridad

Al viajar la información usando radiofreciencia, podrías con cualquier receptor captarla. Para evitarlo se cifra la comunicación. Existen diversos mecanismos o protocolos como WEP, WPA, WPA2 y WPA3. 

WEP está en desuso. Puedes con una plicación móvil facilmente obtener la clave. A medida que va aumentando la potencia de los equipos, más facilidad para obtener la clave. De ahí que hayan ido apareciendo distintas mejoras de WPA.

Junto con estos mecanismos se usa una tecnología de cifrado, como TKIP o AES. El más seguro es AES pero dispositivos antiguos no lo soportan, teniendo que usar TKIP.

Si nos vamos a un campus universitario o a una gran corporación usan sistemas más soficticados. Entre ellos destaca Radius. Es un servidor que gestiona la conexiones Wi-Fi. Para conectarse necesitas un certificado.

#### WPS

Una tecnología que facilita la conexión de dispositivos al puntod e acceso. La idea es evitar las moelstias de introducir una clave. Hay varias formas de implementarlo. La mñas famosa es mantener en el router pulsado un botón. En ese momento el equipo puede sociarse y guardar la clave para las siguientes conexiones. La desventaja es que durante un breve momento dejas un canal abierto y puede un atacante aprovecharlo.

#### Wi-fi Direct

Es distinto a la tecnología Wi-fi que estamos explicando. Es para la comunicación directa entre 2 dispositivos. No hay un punto de acceso o router entre medias gestionando la comunicación. Es una alternativa a Bluetooth. Tiene más alcance y mayor tasa de transferencia.



### 2.6. Bluetooth

Tecnología de comunicación inalámbrica a corta distancia. Muy usada hoy en día en perifericos como auriculares y altavoces. Apareció a principios del 2000 y ha ido actualizandose, proporcionando mayor velocidad de transferencia y ahorro de energía.

En general para conectar dos dispositivos tenemos que uno de ellos activarlo. El otro dispositivo escucha todos los aparatos bluetooth disponibles. Entonces elije al que queremos sincronizarnos. Pasado unos segundos se ligan. 

La sincronización es la parte más problematica Puede que no encuentre el dispositivo a conectar. También al intentar conectar fracase. Estas situaciones provoca descativar y volver a activar d enuevo el bluetooth. Incluso si el dispositivo tiene una lista de anteriores aparatos a los que se conecto, quitarlo de la lista y volverlo a añadir. A pesar de estas incomodidades se sigue amplimente utilizando. 

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/bluetooth.jpg" alt="bluetooth" style="zoom:10%;" />

### 2.7. NFC

En este caso tenemos comunicación instantanea a muy corta distancia, unos 20 cms. Esta pensado para identificaciones. Uno de los usos más comunes es acercar el móvil a un datafono para pagar. También como sustituto de tarjetas de identificación, por ejemplo autenticación de tu seguro médico en una clínica privada.

¿Es seguro? Debido a la facilidad de su uso, un atacante puede incluir algún sniffer para obtener información. Como contramedida está la muy corta distancia a la que funciona, es dificil interceptarlo. Pero imagínate que roban el móvil y logran desbloquear la pantalla. Si las aplicaciones que manejan datos sensibles no están configuradas para bloquearse, puede provocar un daño irreparable.

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/nfc-datafono.jpg" alt="nfc-datafono" style="zoom:12%;" />

## 3. Tamaño

#### PAN/WPAN

Todo dispositivo que se conecte a corta distancia con un ordenador. Normalmente abarca el tamañod e un escritorio, una habitación y en algunos casos una vivienda.

- **PAN**: Conectado mediante cable o directamente a un puerto.
  - <u>Tecnologías</u>: USB - Firewire - DisplayPortPRIVACIDAD
  - <u>Ejemplos</u>: Ratones - teclados - monitores - pen USB - conexión móvil
- **WAN**: Periféricos inalámbricos
  - <u>Tecnologías</u>: Bluetooth - Radio frecuencia - Infrarorrojo - NFC
  - <u>Ejemplos</u>: Cascos BT - teclado & ratón RF - Monitor - Móvil 

#### LAN

Los equipos conectados son de un mismo hogar, empresa, comercio, escuela, centro, ayuntamiento... digamos que de un mismo "grupo". Son redes privadas que en un punto salen al exterior a internet. Incluso esta red privada se subdidivide en redes más pequeñas. 

#### MAN

Serían conjuntos de LAN ineterconectadas, abarcando un barrio o una ciudad. Puede ser de dos tipos:

- **Privada**: Una empresa que tiene varios edifcios distribuidos en una ciudad. Están ineterconectados usando una infraestrcutura propia. Luego la salida a Internet lo hacen a través de un IPS.
- **Pública**: El propio IPS para organizarse crea una o varais MAN por areas en una ciudad. Aquí entrarían antiguos sistemas como WIMAX. Red inalámbrica para proveer Internet a zonas donde es dificil que llegue el cableado.



## 4. Administración



### 4.1. Direcciones de Red

Cuando configuramos la red de un equipo tenemos que saber las direcciones de red: 

- **Dirección IP**: Dirección única del equipo en su red LAN. Esta puede ser version 4 o 6.
- **Mascara de red**: Permite identificar a que red es el equipo. Es usado tanto por el propio equipo como por el router o el switch. Permite saber a que red pertenece el paquete o a cual enviar.
- **Gateway**: El equipo por el cual toda la red sale a Internet. Normalmente será un router o switch. El SO envia.
- **MAC**: La dirección física. Esta viene de fábrica y en teoría no se debría cambiar. Está asociada a la tarjeta/adaptador de red, router, punto de acceso, switch o cualquier dispositivo con interfaces de red.
- **DNS**: Dirección de los servidores DNS

Otra consideración es si la configuración de red es estática o dinámica:

- **Estática**: El propio administrador decide el mismo las direcciones de red. Fácil si tenemos unos poco equipos, llegando a ser inviable si tenemos decenas.
- **Dinámica**: Para ello se usa el llamado protocolo DHCP. El equipo al conectarse a la red, el router o switch otorga las direciones de red. Muy cómodo para decenas de equipos. También entornos donde varios usuarios con móviles o laptops quieren coenctarse, por ejemplo cafeterías. 

Respecto a la configuración, en general la encontramo en `/etc/network`. El problema es que cada distro tiene una estructura y nombre de archivos distinto. Incluso Ubuntu se desmarca, obligando a usar la utilidad Netplan.



### 4.2. Comandos

#### ifconfig

Obtiene información de los adaptadores de red junto con las direcciones de red.

```bash
ifconfig
```

#### ifup

Habilita una interfaz de red

```bash
ifup eth0
```

#### ifdown

Deshabilitar una interfaz  de red

```bash
ifdown eth0
```

#### ping

Para comprobar la conexión a un sitio

- `-c`: Paquetes a enviar.
- `-i`: Inetrvalo de la transmisión.
- `-t`: Definir el TTL en ms (Tiempo de vida). Si pasado ese tiempo no hay respuesta se dá por perdido

```bash
ping -c 12 www.google.com
```

#### tracerouter

Permite conocer el camino de los paquetes enviados a un destino. Este va saltando entre enrutadores. Útil para saber en que punto hay una avería en el enrutado. 

```bash
traceroute www.google.com
```

#### host

Podemos ver la dirección IP de una web o servidor

```bash
host www.google.com
```

#### iwconfig

Permite configurar el adaptador de red inalámbrico

- `nwid`: Seguido de `on` u `off`, activas o descativas el adaptador

- `mode`: Indicar el modo en que funciona el adaptador de red

  - Ad-hoc

  - Managed

  - Master

  - Repeater

  - Secondary

  - Monitor

- `channel`: Cambiar el canal



## 5. Dispositivos

### 5.1. Router

Son los que permiten que lleguen los paquetes de información a las distints LAN. Normalmente hacen de frontera entre la red pública y una o varias LAN privadas. Por ejemplo en una casa el router nos da salida a internet. La propia vivienda tiene una LAN al que se coenctan ordenadores, moviles o el smartTV. En el caso de una empresa, puede que tenga una LAN por departamento. Cada una de ellas se conecta al router para tener salida.

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/router.jpg" alt="router" style="zoom:8%;" />

### 5.2. Punto de Acceso

Es el dispositivo que permite que se conecten inalambricamente otros. Puede ser un dispositivo independiente o estar integrado. Noralmente el router de una casa tiene integrado un punto de acceso.  

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/ac-machine.jpg" alt="ac-machine" style="zoom:8%;" />

### 5.3. Switch

Son dispositivos con gran cantidad de puertos. Conectan distintos dispositivos de un lugar. A su vez uno de sus puertos conecta a un router o a uns witch. Normalmente todos los equipos que se conectan forman una LAN propia.

Rsulta que cada dispositivo tiene una dirección física o MAC. Una tarjeta de red, un móvil o un smartTV tiene su MAC propia. Esta no se puede cambair y viene de fábrica. Habiamos dicho que los routers envían paquetes gracias a las IP. Cuando llegan a un switch se subdividen en tramas, cada una con una dirección física asociada. Un switch la primera vez no sabe que puerto pertenece a un ordenador con su MAC. Con prueba y error va aprendiendo.

<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/switch.jpg" alt="switch" style="zoom: 8%;" />

### 5.4. Otros

#### Hub

Tiene la misma funcionalidad que un switch, pero no se rpeocupa en saber que MAC hay por cada puerto. Reenvia todas las tramas por toos los puertos. Son mñas baratos pero menos eficientes

#### Bridge

Se interponen entre 2 redes LAN. Por un puerto conecta a un switch/hub de una red, por el otro a otra distinta. Ya no se usan, prefiriendo usar switchs o hubs. 

#### Repetidor

Sirven para amplificar la señal. Pueden ser:

- **Físico**: Amplifica una señal eléctrica que llega debilitada.
- **Inalámbrico**: Para comunciaciones Wifi. Ultimamente comunes en casas. Pueden haber varios pisos debilitando la señal viajando entre paredes. 



## 6. Privacidad

En estas últimas decadas han habido noticias de atacantes y activistas. Unos aprovechan vulnerabilidades para obtener o modificar datos. Los otros tienen que ocultarse para no recibir represalias de gobiernos antidemocráticos. Se han ido ideando y mejroando un abanico de herramientas para preservar la privacidad e integridad de la información.



### 6.1. TLS

Mecanismo que permite navegar por una web de forma cifrada. Cuando compramos online o escribimos un mensaje, la información se envía por Internet. Si no la ciframos una persona puede escucharlas con un sniffer. De ahí obtener información personal que puede ser usada en su propio beneficio.

Antes de explicarlo hay que saber lo que es el cifrado de clave pública. Imagina que A envía un mensaje a B. A tiene una clave privada y otra pública. La pública la envía a todos sus amigos, entre ellos B. Cuando A envía un mensaje lo cifra con su clave privada. Al llegar a B este lo descifra con la clave pública.

![Cifrado simetrico y asimetrico](/home/kodeneko/notes/uned/programacion-base-datos/01/pics/Cifrado simetrico y asimetrico.png)

Con este sistema podemos asegurarnos de que los mensajes proceden de A. Podría darse el caso de que un atacante tenga la clave pública. Lo único que podría hacer es leer los emnsajes de A, pero nunca suplantar a A.

Dicho esto veamos como funciona TLS:

- El cliente se comunica con la web.
- La web envía su certificado.
- El cliente usa la clave pública del certificado. Cifra un numero aleatorio y lo envía al servidor.
- El servidor los descifra con su clave privada. Con él crea una clave de sesión. A partir de esta clave van cifrando la comunciación.



### 6.2. Firewall

SW o HW que bloquea o permite paquetes o acceso a webs. Para ello disponen de un listado de reglas que configura el administrador. Puede optar por las siguienets estrategias:

- Permitir todo y crear reglas del contenido a prohibir.
- Denegar todo y crear reglas del contenido que se permite.

El primer motivo para su implantación es otorgar seguridad, evitando que atacantes entren. Por otra parte muchas empresas lo implantan por sus trabajadores. Bloquean servidores de juegos, redes sociales o diversas webs.



### 6.3. Proxys

Servidores que hacen de inetrmediario ocultando una de las partes. Por ejemplo quiero conectarme a un servicio solo disponible en EEUU. Me conecto a un proxy que se ubique allí. El proxi envía y recibe mensajes por mí. El servicio cree que se comuncia con el proxy.

En estos últimos tiempos han proliferado. Muchos servicios de streaming ofrecen series y películas que se estrenan solo en un país. Gracias al proxy podemos acceder a ellos.



### 6.4. VPN

Imagina un equipo de programadores que viven en distintas ciudades de España. Para que no escuchen sus mensajes y recursos que compartan, necesitan cifrar su comunciación. Lo que se hace es crear una VPN, un mecanismo que crea una LAN virtual. Lo que se hace es cifrar toda la comunciación y mediante SW o HW gestionar la comunciación:

- **SW**: Se crea un servidor y cada usuario en su ordenador instala un cliente. Suelen ser difíciles de configurar. Incluso dar muchos quebraderos de cabeza incorporar alguien nuevo.
- **HW**: Dispositivos que se conectan en los equipos. Con una mínima configuración y tal vez recurrir a un servicio de terceros, la tienes montada. Es más fácil pero hay que invertir en la compra de dispositivos

Debido a las restricciones de paises (y sorprendenetmente muchos de ellos "democrátcicos"), han aparecido muchos servicios VPN de terceros. Con una subscripción y descargando su cliente, ya tienes montada una. Pueden acceder a proxys y servidores que tienen en otros paises. De esta forma pueden enviar paquetes como si fuera originario del país y evitar la geolocalización.



### 6.5. Tor

Para crear una comunciación punto a punto cifrada. También oculta al remitente, haciendo casi imposible su rastreo. Funciona gracias a una red de nodos soportada por voluntarios.  

Si un emisor quiere enviar un mensaje primero calcula la ruta. Esta ruta supone varios nodos, cifrará en orden el mensaje con la clave de cada uno. De ahí que Tor tenga como logo una "cebolla", cada capa es un cifrado. A medida que viaja por cada nodo, se descifra el mensaje. El nodo final envía el mensaje al receptor descifrado.<img src="/home/kodeneko/notes/uned/programacion-base-datos/01/pics/tor_logo.png" alt="tor_logo" style="zoom: 33%;" />

Para comunciarse usando Tor tenemos varias formas:

- **Tor browser**: La más fácil. Es un navegador basado en Chromium y gratuito. Toda navegación se realiza a través de redes de nodo siguiendo el protocolo Tor. Requiere configuración zero. De esta forma un "normie" puede navegar seguro y anónimo sin complicaciones.
- **Montar nodo**: Podemos montar nuestro propio nodo y salir a través de él. Opción más complicada y requiere conocimientos.
- **Orbot**: App Android que captura todo el tráfico saliente, así sale cifrado por una red Tor. Otra forma para que un casual facilmente user Tor

Sin embargo hay algunas consideraciones:

- No es al 100% segura como lo quieren vender. El último nodo envía als ervidor al información al desnudo. Si hay una comunciación TLS de por medio, si hay privacidad. Digamos que es un 95% seguro.
- Realentiza las comunicaciones. Tengamos en cuenta que antes de enviar el mensaje ha de realizar varais operaciones. Primero calcular la ruta, cifrar el mensaje, e ir descifrándolo en cada nodo. Si solo es enviar mensajes y leer artículos no pasa nada. Si hablamos de streaming y descargas es molesto. Mejor usar proxies, VPNs o redes P2P privadas.

A pesar de estos inconvenientes, si eres activista y receloso de tus mails y conversaciones, es la mejor opción.




⭐ **Chromium**

> Navegador web gratuito y de código abierto desarrollado por un equipo de Google. Chrome está basado en este proyecto y muchos otros navegadoes alternativos. Si estás acostumbrado a Chrome no lo hecharás de menos en los navegadores basados en Chromium. Usan las mismas extensiones y son casi iguales sus herramientas.
>
> Un navegador interesante basado en él es Brave. Muy usado por activistas de la privacidad ya que pesume de no recopilar información. También viene por defecto un filtro de publicidad muy bueno. La cuestión de los anuncios web es polémica. Por una parte tenemos el problema de la privacidad, las cookies de tercero que obtienen nuestros datos de navegación, incluso información personal. Sin embargo hay servicios alternativos y activistas que necesitan financiarse. Tu decides, informáte y sigue tus principios.



---

## 🎲 Ejercicios

- [Test de Repaso 01](https://pregunta2.com/quiz/14bb5355)
- [Test de Repaso 02](https://pregunta2.com/quiz/cf863071)
- Usando los comandos anteriores obten lo que se pide a continuación. Entrega un documento indicando los comandos usados, justificando su uso y que información proporciona:
  - Tenemos problemas para acceder a [tor.derechosdigitales.org](tor.derechosdigitales.org) ¿Qué diagnóstico podriamos hacer?
  - No tenemos Internet. La cuestión es que con el comando `ping` con la IP del móvil hay respuesta ¿Qué comando podemos usar para ver que hacen los paquetes?
  - Me gustaría ver la IP de mi equipo ¿Cómo la hacemos?
  - Soy cotilla y quiero saber la IP de la Wikipedia ¿Cómo lo hago?

- El alumno intentará hacer funcionar una de estas 3 opciones: una VPN, proxy o nodo Tor. La idea no es hacerlo perfecto y que funcione, sino acostumbrarse a consultar documentación. En la vida real no sabemos de todo. Se proporciona a continuación tutoriales base para comenzar. Se puede hacer por equipos o ayudarse mutuamente.
  - OpenVPN: https://www.solvetic.com/tutoriales/article/3645-como-instalar-configurar-servidor-openvpn-ubuntu-linux/
  - Squid Proxy: https://linuxconfig.org/squid-proxy-configuration-tutorial-on-linux
  - Tor: https://mikejr1.es/laboratoriolinux.es/index.php/-noticias-mundo-linux-/software/12409-como-configurar-un-nodo-de-tor-en-ubuntu.html




## 📕 Bibliografía

- Artículo Wikipedia "Sistema de nombres de dominio"
  https://es.wikipedia.org/wiki/Sistema_de_nombres_de_dominio
- ¿Qué es un servidor DNS?
  https://dinahosting.com/ayuda/que-es-un-servidor-dns/
- Conoce los tipos de redes más importantes
  https://www.ionos.es/digitalguide/servidores/know-how/los-tipos-de-redes-mas-conocidos/
- El cable Ethernet, nuestra conexión básica a internet
  https://blog.orange.es/consejos-y-trucos/tipos-de-cable-ethernet/
- Tipos de cable ethernet: ¿Cuál debo utilizar?
  https://guiahardware.es/tipos-de-cable-ethernet-cual-debo-utilizar/
- Todos los tipos de cables de fibra óptica
  https://blog.orange.es/consejos-y-trucos/tipos-fibra-optica/
- Cables coaxiales: ¿Qué son y para qué sirven?
  https://guiahardware.es/cables-coaxiales-que-son-y-para-que-sirven/
- Cable de Fibra Óptica
  https://www.elandcables.com/es/cables/fibre-optic-cables
- Artículo Wikipedia "Wi-Fi"
  https://en.wikipedia.org/wiki/Wi-Fi
- Protocolos de seguridad inalámbrica: WEP, WPA, WPA2, y WPA3
  https://www.netspotapp.com/es/blog/wifi-security/wifi-encryption-and-security.html
- Guía a fondo sobre el PLC: qué es, cómo funciona, qué debemos tener en cuenta y modelos recomendados
  https://www.xatakamovil.com/guias-de-compra/guia-a-fondo-plc-que-como-funciona-que-debemos-tener-cuenta-modelos-recomendados
- Guía a fondo sobre el PLC: qué es, cómo funciona, qué debemos tener en cuenta y modelos recomendados
  https://www.redeszone.net/tutoriales/redes-wifi/velocidad-maxima-wi-fi-router-punto-de-acceso/
- Lista de comandos para configurar redes Linux
  https://www.solvetic.com/tutoriales/article/4184-lista-comandos-configurar-redes-linux/
- Obtener toda nuestra configuración de red con comandos
  https://blog.desdelinux.net/configuracion-red-por-terminal/
- Qué es la red Tor y qué ventajas me puede aportar
  https://www.redeszone.net/tutoriales/seguridad/que-es-tor/
- ¿Qué es y cómo funciona la red Tor para mejorar nuestra privacidad?
  https://geekland.eu/que-es-y-como-funciona-la-red-tor/
- Web "Torifícate". Información completa de Tor. Ideal si quieres dedicarte al activismo ;)
  https://tor.derechosdigitales.org/torificate//p1.1/
- Derechos Digitales
  https://www.derechosdigitales.org/

