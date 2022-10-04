[TOC]

# Tema 07: Gestión de Paquetes



## 1. Introducción

Estamos acostumbrados a la facilidad en Windows o en MacOS de disponer de ejecutables. Con un doble click abrimos un asistente que nos ayuda. Con Linux puede llegar a ser tedioso. Incluso es considerado la principal desventaja para usuarios casuales.

Existen gestores gráficos de paquetes, pero al final quienes usan GNU/Linux son usuarios avanzados. Prefieren usarlos por terminal, les proporciona mayor flexibilidad. 



## 2. Apt-get

Existen diversos gestores de paquetes por terminal, pero el ``apt-get`` es de los más famosos. 

Todos funcionan usando las listas de repositorios. Normalmente cada distro que instalas tienes predefinidas unas URL que corresponden a ellas. Se encuentra en el fichero ``/etc/apt/sources.list``. Sin embargo un usuario puede añadir repositorios de terceros. Pueden estas URLs alojarse en `/etc/apt/sources.list` o en un listado propio dentro de ``/etc/apt/sources.list.d``.



#### install

```
apt-get install [nombre_paquete]
```

Instala un paquete nuevo. Normalmente se pone la opción ``-y`` para no estar pulsando la tecla "y" en confirmaciones.



#### remove

```
apt-remove [nombre_paquete]
```

Borra el paquete pero no sus ficheros de coniguración.



#### purge

```
apt-get purge [nombre de paquete]
```

Borra el paquete y toda información que haya creado en el sistema.



#### check

```
apt-get check
```

Sobretodo para comprobar si hay dependencias rotas.



#### reinstall

```
apt-get --reinstall [nombre_paquete]
```

Reinstala el paquete.



#### list

```
apt list 
apt list | grep [nombre_paquete]
```

Comprobar si está instalado un paquete. Te habrás dado cuenta que es ``apt``y no ``apt-get``. Resulta que ``apt-get`` usa por debajo ``apt``. Es como una covertura para otorgar más funcionalidades.



#### update

```
apt-get update 
```

Comprueba la versión de los paquetes instalados. Si no tienen la última versión la descargan.



#### add-repository

```bash
apt-add-repository 'deb http://myserver/path/to/repo stable myrepo'
apt-add-repository 'http://myserver/path/to/repo myrepo'
apt-add-repository 'https://packages.medibuntu.org free non-free'
apt-add-repository http://extras.ubuntu.com/ubuntu
apt-add-repository ppa:user/repository
apt-add-repository ppa:user/distro/repository
apt-add-repository multiverse
```

La utilidad ``apt-add-repository`` permite añadir un repositorio al listado ``/etc/apt/sources.list``. Se han listado distintas formas de hacerlo, lo normal es consultar la documentación en su web. Normalmente señalan los comandos necesarios.

También se puede añadir a mano:

```bash
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
```

No es muy recomendable ya que puede dar problemas. El consejo es que si en la documentación nos lo sugiere hacerlo así lo hagamos. Si falla, borrarlo a mano del ``/etc/apt/sources.list``. Después intentarlo usando ``apt-add-repository``.



#### apt-key

La mayoría de repositorios de terceros nos obliga a usar la clave pública. De esta forma nosotros nos aseguramos que nos descargamos el repositorio de un lugar de confianza.

```bash
curl -sS https://download.spotify.com/debian/pubkey_5E3C45D7B312C643.gpg | sudo apt-key add -
```

Primero con ``curl`` descargamos la clave y luego con ``apt-key`` la guardamos. Mejor usar este último comando que añadiendola a mano.



## 3. Tarballs

Llamados así porque son ficheros que primero se agrupan en un ``.tar`` y luego se aplica una compresión. Dependiendo del tipo se descomprime de una forma u otra usando el comando `tar` y las opciones necesarias. 

```bash
tar zxf [nombre_paquete].tar.gz
tar zxf [nombre_paquete].file.tgz
tar jxf [nombre_paquete].file.tar.bz2
tar jxf [nombre_paquete].file.tbz2
```

Lo complicado viene después:

- Podemos encontrarnos con una carpeta que incluya toda la aplicación compilada, todas sus carpetas, ficheros y archivos de configuración. Normalmente uno mismo lo coloca en la carpeta `/opt` o en la que él quiera. A mano tendrás que crear el acceso directo en el menú o en el escritorio. Cada desarrollador lo hace a su manera, topándonos con distintas formas de estructuración de carpetas.
- makefile: Pueden venirnos un fichero "readme" dando las instrucciones de ejecución de `makefile`. Es una aplicación que permite compilar los archivos fuente. Incluso puede hacer que nos ubique la compilación y la configuración en la estructura de directorios de GNU/Linux. No se suele ver mucho esta forma ya que es muy tediosa. En muchas ocasiones sigues las indicaciones y no funciona. 



## 4. Deb

La forma más cómoda, es similar a los ejecutables de Windows. Un único fichero que al hacer doble click nos abre un asistente propio. Nos indica que vamos a instalar y otros paquetes necesarios a descargar. Una vez instalado podemos encontrar un acceso directo en el menú del escritorio.



---



## 🎲 Ejercicios

- [Test de Repaso 01](https://pregunta2.com/quiz/cbb35d87)

- El alumno tendrá que instalar una serie de aplicaciones. En un documento brevemente explicará los comandos o acciones necesarias para ello. Para provar que se ha realizado correctmanete tendrá que hacer capturas mostrando la versión del programa instalado. Si es con interfaz gráfica basta con una captura de "about". Si es por terminal, por lo general la opción -v lo proporciona.

  - Instalar node.js
  - Instalar el navegador Opera
  - Instalar Docker. ¡Cuidado! si os dice añadir repositorio hacerlo pro los comandos, no añadir a mano la url.
  - Instalar Git
  - Instalar Spotify
  - Instalar Brave browser
  - Instalar Tor browser
  - Actualiza todos los paquetes.
  - Chequea que no haya dependencias rotas
  - Chequea el ``/etc/apt/sources.list`` y la carpeta ``/etc/apt/sources.list.d`` ¿Han habido cambios?
  - En aquellos repositorios que hayas instalado por ``apt-get``, comprueba que está instalado usando el terminal.
  - Si los ha encontrado borra uno de ellos. Recuerda que hay 2 formas de hacerlo. Justifica el por qué has decido una de ellas. Pista: no hay una mejor que otra, depende del razonamiento tuyo ;)

  

## 📕 Bibliografía

- The apt command in Linux – A Complete Reference
  https://www.linuxfordevices.com/tutorials/linux/apt-command-in-linux
- Instalar Paquetes con apt-get
  https://terminaldelinux.com/terminal/administracion/instalar-paquetes-apt-get/
- How to install Linux / UNIX *.tar.gz tarball files
  https://www.cyberciti.biz/faq/install-tarballs/
- Qué es un paquete en Linux y qué gestores existen
  https://openwebinars.net/blog/que-es-un-paquete-en-linux-y-que-gestores-existen/

