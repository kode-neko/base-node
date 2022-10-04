[TOC]

# Tema 03: Directorios



## 1. Navegación

📖 **Path**

> Ruta que indica la ubicación de un archivo o carpeta.

📖 **Path Absoluto**

> Un path desde la raíz de la unidad de almacenamiento. Comienzan con `/`

📖 **Path Relativo**

> Un path desde el lugar donde se consulta. Comienzan sin `/` o con `./`

Pongamos un ejemplo.

```bash
# Estructura de directorios
|--folderA
|  |--docuA.txt
|  |--docuB.txt
|
|--folderPNG
   |--picA.png
   |--picB.png
   |--folderJPG
      |--picA.jpg
      |--picB.jpg
```

Imagina que estamos en el terminal dentro de la carpeta folderJPG.

```bash
# Path absoluto de docuB.txt
/folderA/docuB.txt
# Path relativo de docuB.txt
./../../folderA/docuB.txt
../../folderA/docuB.txt
```

- `./` indica la carpeta actual.
- `../` sirve para indicar la carpeta anterior.
- `~/` indica la carpeta home del usuario.



Ha continuación se muestra una serie de comandos relacionados útiles

#### cd

Permite navegar en la estructura de directorios.

En el ejemplo anterior si estamos en folderPNG y quisieramos ir a docuB.txt o picB.jpg

```bash
# Usando path relativos
cd ./../folderA/docuB.txt
cd folderJPG

# Usando path absoluto
cd /folderA/docuB.txt
cd /folderPNG/folderJPG/picB.jpg
```

#### ln

Para lista el contenido de una carpeta. Puede tener las siguientes opciones

- `-l` mostrar el resultado en una lista
- `-d` ver solo directorios
- `-a` ver archivos ocultos
- `-s` tamaño de ficheros

#### nano

No es un comando, es un pequeño editor de texto por consola. Como vamos ha hacer prácticas de navegación por ficheros, listaremos y veremos el contenido de ficheros. Todo por terminal, como los pro 😉

#### cat

Muestra por terminal el contenido de un fichero.

```bash
ls -la / > listado.txt
cat listado.txt
```

Gracias a `>` guardamso en un fichero el resultado del comando. Luego con `cat` lo vemos por pantalla.



## 2. Comandos de Archivos

#### touch

- Crear archivos

```bash
touch prueba.txt
```



#### mkdir

- Crear carpetas

```bash
mkdir pruebaFolder
```



#### rm

- Borra archivos o directorios. Para borrar directorios y el contenido que tiene dentro hay que usar las opciones.
  - `-d`: Borra directorios.
  - `-r`: Borra todo lo que hay dentro de la carpeta.

```bash
rm prueba.txt
rm -dr folder01
```



#### cp

- Copiar archivos o directorios. Primero se indica el origen y luego el destino.
  - `-r`: Copia todo lo que hay dentro de la carpeta

```bash
cp ./folder_src/pic.jpg ./folder_dest
cp -r ./folder_src ./folder_dest
```



#### mv

Mover ficheros. Primero se indica el origen y luego el destino

```bash
mv ./folder_src/pic.jpg ./folder_dest
mv ./folder_src ./folder_dest
```

También es usado para renombrar ficheros

```bash
mv mv ./pic.jpg ./pic-renamed.jpg
```



#### ln

Para crear accesos directos a archivos o carpetas. Hay de dos tipos, simbolicos y duros. No nos vamos a entretener en sus diferencias, ya que se comprenden mejor cuando veamos los sistemas de archivos. De momento aprendamos ha ahcer simbólicos

```bash
ln -s ./path_src_file/test.txt linkTest
```





## 3. Búsquedas 

Una de las tareas habituales en un administrador es buscar información en logs, informes o salidas de comandos. 



#### find

Permite buscar archivos y carpetas. Primero indicamos la carpeta donde buscar. Si queremos hacer una búsqueda en todo el sistema empezamos desde la raiz `/`. Si solo queremos desde el path actual en la terminal `.` 

```bash
find / -name "patata"
```



⚠️ **¡Atención!**

> Para GNU/Linux tiene en cuenta las mayúsculas y minúsculas en los nomrbes de fichero. No es lo mismo `patata.txt`, `PATATA.txt` o `pATaTa.txt`.



⭐ **Expresiones Regulares**

> Normalmente en las búsquedas no suamos cadenas exactas, sino expresiones regulares o también llamadas regex. San bastante arduas de aprender. Hay algunas páginas como RegexR para aprender y prácticar. A parte de proporcionar un cheatsheet, tenemos un pequeño editor. Con él poemos comprobar la regex creada, incluso hace un análisis de su funcionamiento.
>
> Vamos a ver algunos ejemplos:
>
> | Regex        | Explicación                                       | Ejemplo    |
> | ------------ | ------------------------------------------------- | ---------- |
> | `\w*`        | Cualquier cadena                                  | `gatos206` |
> | `\d*`        | Solo cadenas de números                           | `5168498`  |
> | `[a-zA-z]*`  | Solo cadénas con letras                           | `gatos`    |
> | `^(pa)(ta)$` | Cadenas que comiencen con 'pa' y terminen en 'ta' | `patata`   |



**Opciones**

- `-name`: Buscar por nombre case sensitive. Podemos usar expresiones regulares.
- `-iname`: Buscar por nombre no case sensitive. Podemos usar expresiones reulares.
- `-not`: Se antepone a otras opciones para indicar que descarte esa coincidencia.
- `-type`: Pueden ser
  - `f`: Fichero
  - `d`: Directorio
  - `l`: Enlace

- `-size`: La unidad sigue la siguiente nomenclatura

  - `c`: Byte
  - `k`: Kilobyte
  - `M`: Megabyte
  - `G`: Gigabyte

  También nos ayudamos de los simbolos `-` y `+` para indicar que busque por encima o por debajo del tamaño. Si no se indica busca exactamente ese tamaño.

- `-maxdepth` y `mindepth`: Si buscamos en un directorio con uan estructura profunda de carpetas, podemos indicar "hasta" o "a partir" de que nivel.

Para los logs es interesante las fechas. Usamos estos prefijos para diferenciar el uso de éstas:

- `-a`: La ultima vez que se escribió o leyó.
- `-m`: La última vez que se modificó el contenido.
- `-c`: La última vez que se modificaron los metadatos.

A estos prefijos les sigue uno de las siguientes palabras:

- `time`: Nº de días.
- `min`: Nº de minutos.

Otras opciones relacionadas con los usuarios son:

- `-user`: nombre de usuario.

- `-group`: grupo.

- `-perm`: permisos expresados por número.

  

**Ejemplos**

- Buscar archivos que contienen la palabra "patata". Han de ser mayores de 3 Kilobytes. tambiñen que hayan sido escritos o leidos hace un día.
- Buscar en el path actual los ficheros que comiencen por 'pa'. Han de pertenecer al usuario "kodeneko". Su tamaño ha de ser menor de 1G.

```bash
find / -name "patata" -type f -size +3k -atime 1
find . -name '(patata.*)$' -user kodeneko -size -1G
```



#### grep

Permite buscar una cadena por cada linea. Las búsquedas pueden ser resultados de comandos o ficheros de texto.

```bash
ls -la | grep "perico"
cat ./log.txt | grep "error"
```

El símbolo `|` es una "pipe". Permite que la salida de un programa sea la entrada para otro. Son muy potentes, desde mi punto de vista dominarlos es lo que separa a un "super pro" de un "pro".

Tabién podemos decir que no busque por una cadena usando -v. Por ejemplo no queremos del log ver los mensajes "warning".

```bash
cat ./log.txt | grep -v "warning"
```



#### cut

Con `grep` tenemos lineas, pero en ocasiones queremos de esa linea un segmento. Podemos con `cut` hacerlo. Existen bastante opciones pero lo normal es usar el comando con estas opciones:

- `-d`: Especificar un delimitador.
- `-f`: Con el delimitador divide la linea por segmentos. Con esta opción indicarmos cual mostrar.

Para el ejemplo vamos a visualizar el fichero /etc/passwd, una lista de los usuarios del sistema. Cada linea es un usuario de la forma `unicorn:x:1000:1000:unicorn,,,:/home/unicorn:/bin/bash`. Imagina que solo queremos una lista de nombres.

```bash
sudo cat /etc/passwd | cut -d ":" -f1 
```

El delimitador de la linea es el símbolo ":". De todos los segemento el primero es elq ue contiene el nombre



## 4. Otros comandos

#### clear

Limpia la pantalla de la terminal

#### exit

Cierra la pantalla de terminal

#### date

Muestra la fecha en formato ISO

#### reboot

Reinicia el equipo

#### man

Permite consultar la documentación del comando. Por ejemplo no sabemos como mostrar usando `ls` el listado de archivos y directorios. Escribiendo `man ls` nos aparece por terminal el manual completo. 

Esta documentación está disponible en muchas webs. Como es denso es recomendable hacer uso del manual a través del navegador. Dispones de mejores opciones de búsqueda. Por terminal es para sacarte de un apuro.



## 5. Jerarquía del Sistema de Archivos

La comunidad GNU/Linux ha ido definiendo la estructrua de directorios del sistema. Incluso podemos ver modificaciones en distintas distribuciones. También se la conoce como Filesystem Hierarchy (FSH). Conocerla nos quita muchos quebraderos de cabeza. A veces queremos buscar los archivos de un programa, o bien realizar una instalación. Su desconocimiento dificulta mucho éstas labores.

**FHS**

> Norma de estcruturación de carpetas del sistema de GNU/LInux. No es un estñandar estricto. Diversas distros añaden sus variaciones. 



#### /

- El punto de inicio de toda la estructrua de directorios.
- Se le llama raíz.



#### /dev

- Los dispositivos HW los representa Linux como archivos.
- En esta carpeta podemos encontrarlos todos.
  - `sd[x]`: Representa una unidad de almacenamiento. Pueden ser tanto interna como externa. No se incluyen los lectores de discos. La x se sustituye por letras de la a-z. Si hay 2 discos duros y una memoria USB, son nombrados como `sda`, `sdb` y `sdc`.
  - `cdrom`: El dispositvo CDROM.
  - `audio`: La tarjeta de audio.



#### /mnt

- Para poder usar un dispositivo de almacenamiento hay que montarlo.
- Cuando está montado aparece en esta carpeta.
- HDD - SSD



#### /media

- Para poder usar un dispositivo óptico hay que montarlo
- Cuando está montado aparece en esta carpeta
- CD, DVD, BluRay, USB...



#### /home

- Contiene una carpeta por usuario.

- Hay diversos usuarios que son propios del sistema, como root. Estos no tienen carpeta en home.

- Alojan los archivos personales del usuario.

- También las configuraciones de las aplicaciones para ese usuario.

  

#### /root

- En linux el usuario con mayor privilegios es llamado "root".
- Es su carpeta personal, como las que hay en `/home` para cada usuario.
- Podemos acceder al sistema con root, pero no es recomendable. Si por algún motivo se corrompe deja inservible el sistema por completo. Para ello se crean usuarios con privilegios de "superusuario". También reciben el nombre de "sudoer"
- En priemr usuario que creas en la instalación es un sudoer. Hay diversas aplicaciones que para ejecutarlas necesitas anteponer "sudo" en el terminal. Aparece en el prompt el aviso de introducir su contraseña. En GNU/Linux se toman en serio la seguridad añadiendo esta capa.



#### /bin

- Almacena binarios ejecutables del sistema.
- Podemos encontrar los binarios de los comandos del terminal como `cp`, `echo`, `cat`, `mv`, `rm`...
- Solo contiene archivos, no hay carpetas..



#### /sbin

- Tiene el mismo propósito que /bin
- En este caso son binarios del sistema ejecutados por superusuarios
- Entre ellos encontramos `fsck`, `shutdown`, `fastboot`...



#### /usr

- Contiene los programas que no son del sistema
- Los paquetes de las distro que se incluyen en la instalación van generalmente aquí. No es lo mismo una herramienta propia del sistema que los paquetes. A veces esta linea puede ser tenue.
- Subdirectorios
  - `/usr/bin`: Los ejecutables.
  - `/usr/include`: Archivos de cabecera.
  - `/usr/lib`: Bibliotecas compartidas. También ficheros que solo pueden ejecutar superusuarios.
  - `/usr/local`: Puede que nuestro usuario no este "físicamente" en nuestro ordenador. Accedamos a él a través de un servidor. Por tanto el contenido de la carpeta /usr no lo tenemos. Pero tenemos /usr/local para instalar fisicamente programas. 
  - `/usr/sbin`: Binarios que solo peuden ser ejecutados por superusuarios.
  - `/usr/share`: Documentación de los programas.
  - `/usr/src`: El código fuente de las aplicaciones.



#### /etc

- Incluye archivos de configuración.

- Pueden ser del sistema o de otros programas.

- Subdirectorios.

- - `/etc/apt`: Configuración del gestor de paquetes apt.

  - `/etc/opt`: Configuración de programas de las carpetas de /opt.

  - `/etc/profile`: Configuración de usuarios para iniciar el terminal.

    

#### /lib

- Contiene bibliotecas para los ejecutables de las carpetas `/bin` y `/sbin`.
- También módulos del kernel y drivers. Aquellos necesarios durante el arranque.



#### /var

- Variables o archivos temporales.

- Por ejemplo logs u otros registros.
  - `/var/cache`: Para cacheo. Por ejemplo apt-get lo usa como cache de paquetes descargados.
  - `/var/lib`: Info sobre ele stado de aplicaciones.
  - `/var/log`: Logs!
  - `/var/opt`: Variables de programas en /opt
  - `/var/tmp`: Temporales



#### /opt

- Para programas que no siguen el estándar de carpetas de linux



#### /boot

- Incluye archivos usados en el arranque del equipo.

- No incluye archivos de configuración.

- Está ubicado el kernel y el gestor de arranque.

  

#### /srv

- Para aplicaciones servidor
- Guarda directorios y datos
- Por ejemplo apache



#### /tmp

- Archivos temporales
- También algunas variables para el funcionamiento de programas
- Se supone que esta se vacia cuando reiniciamos. 



#### /sys

- Información sobre el kernel, particiones, sistema de archivos, drivers...
- No tocarlo mucho 😅



----



## 🎲 Ejercicios

- [Test de Comandos](https://pregunta2.com/quiz/d9e42377)
- [Test de Estructura de Directorios](https://pregunta2.com/quiz/d48637d7)
- Vamos a hacer una serie de operaciones con el terminal. Todos los comandos que uses los guardarás en un documento .txt para entregarlo. Para ello descargamos la siguiente carpeta. Abrimos un terminal en ella y realizaremos lo siguiente:

  - Listar la subcarpeta "pics". Incluir su resultado en un fichero llamado "list-pics.txt". Usa el comando `>` para ello.

  - Buscar dentro de "list-pics.txt" las imágenes que comiencen por "animal". El resultado guardarlo en un fichero llamado "lis-animal-pics.txt".

  - Crear una carpeta llamada "future-delete".

  - Copiar el contenido de la carpeta "logs" a "future-delete". ¡Cuidado! contiene subcarpetas.

  - Renombrar la carpeta "test" a "nosense". 



## 📕 Bibliografía

- Estructura de directorios en Gnu-Linux
  https://geekland.eu/estructura-de-directorios-en-linux/
- ¿Cómo crear enlaces simbólicos y duros en GNU/Linux?
  https://www.raulprietofernandez.net/blog/gnu-linux/como-crear-enlaces-simbolicos-y-duros-en-gnu-linux
- Linux man pages online
  https://man7.org/linux/man-pages/index.html
- Cómo usar Find y Locate para buscar archivos en Linux
  https://www.digitalocean.com/community/tutorials/how-to-use-find-and-locate-to-search-for-files-on-linux-es
- RegexR
  https://regexr.com/