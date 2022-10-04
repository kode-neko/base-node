[TOC]

# Tema 06: Sistema de Archivos y Particionamiento



## 1. Unidades Almacenamiento

En nuestros equipo guardamos y tratamos información de distintos tipos: documentos, imágenes, videos, música... la memoria principal solo mantiene el kernel, parte del programa y datos que estemos tratando en ese momento. Lo demás se mantiene guardado en las unidades de almacenamiento.

Las unidades de almacenamiento pueden ser de distintas tecnologías. Las principales son SSD y HDD. En la primera la información se guarda en memorias flash. En el otro caso usan discos, donde van imantando o no pequeñas secciones para guardar ceros y unos. En ambos casos las unidades mínimas de almacenamiento se las denomina sectores. 

El SO para poder trabajar con ellas tiene que establecer una estructuración lógica. Esta estructuración consiste tanto en indicar las partes en las que se divide la unidad, como también el sistema de archivos elegido para gestionarlo.



## 2. Particionado

Primero hay que elegir el sistema o tipo de particionado. Actualmente se sigue el sistema GPT, pero antaño se usaba solo el MBR.

### 2.1. MBR

![mbr](/home/kodeneko/notes/uned/sistema-operativos-redes/pics/mbr.png)

Consiste en guardar en los primero 512 bytes toda la información para el arranque y el particionado. Se llama a esta sección "Master Boot Record".

Como máximo permite crear 4 particiones "primarias". Para superar el límite puedes coger una de ellas y hacerla "extendida". Dentro de ella te permite crear las llamadas particiones "lógicas". Cada SO establece un máximo de cantidad de particiones de este tipo. Por ejemplo Windows deja 23 mientars que GNU/Linux en determinadas condiciones solo 15.



#### Master Boot Record

- **Master Boot Code:** Cuando la BIOS termina su chequeo ejecuta el código de arranque que hay almacenado aquí. Lo que hace es ir a la partición primaria marcada como activa. Ahí encontrará el cargador de arranque del SO.
- **Partition Table:** Incluye información de las 4 particiones. En concreto en que lugar físico comienza y termina.
- **Firma de Arranque:** Son 2 bytes que contiene 0x55 0xAA. Permite discernir si la unidad es bootable o no. La BIOS cuando termina el chequeo busca el programa la unidad que contiene la partición de arranque. Si esta unidad el byte 511 y 512 no coincide con 0x55 y 0xAA, pasa a la siguiente unidad de almacenamiento. Las BIOS guardan en que orden consultar las unidades.



### 2.2. GPT

<img src="/home/kodeneko/notes/uned/sistema-operativos-redes/pics/gpt.png" alt="gpt" style="zoom:50%;" />

Debido a las limitaciones de la BIOS y del MBR idearon el estándar UEFI. Define una interfaz entre el SO y el firmware/BIOS de la placa. Aporta más flexibilidad al no tener que estar pendientes de las 3 BIOS clásicas AMI, Award y Phoenix. El nuevo estándar vino acompañado de otro para particionamiento llamado GPT. No es obligatorio usar GPT con UEFI, también podemos elegir el modo "legacy" para unidades con MBR o instalar un SO que solo permite este sistema.

En principio es destacable que permita 128 particiones, cantidad más que suficiente para entornos de escritorio.



#### Esquema de partición

Esta zona está dividida en bloques de 512 bytes llamados LBA.

- **Protective MBR (LBA0):** Para que sea leido por SW que solo use MRB. Contiene el mismo código que el MRB, pero en este caso indica que la undiad solo tiene una única partición.
- **Primary GPT**
  - **Header (LBA1):** Guarda información sobre que bloques puede usar en la unidad. También el número y tamaño de cada partición. Aparece el GUID, un identificador único de unidad para diferenciarlas. Indica la localización del "Secondary GPT". Incluye una suma de comprobación CRC32 que es verificada por UEFI durante el arranque
  - **Entradas de partición:** Incluye id y nombre de la propia. También en que LBA comienza y acaba.
- **Secondary GPT:** Es una copia del primary GPT. Usada a modo de backup si la primary GPT estuviera corrompida.



## 3. Sistemas de Archivos

### 3.1. FAT32

- Desarrollado por Microsoft
- Tamaño de partición depende del SO. De 32 Gb hasta 2Tb
- Tamaño máximo de archivo 4Gb
- Nombre máximo de carpetas y ficheros >255 caractéres
- La partición como máximo tiene 2^28 archivos
- 32 níveles de profundidad de directorio

### 3.2. NTFS

- Desarrollado por Microsoft
- Tamaño de partición 8Tb
- Tamaño máximo de archivo 16Tb
- Nombre máximo de carpetas y ficheros >255 caractéres
- La partición como máximo tiene 2^32 archivos
- 32 níveles de profundidad de directorio
- Journaling: Sistema para completar operaciones transaccionales. Si el SO provoca un error y deja dicha transacción a medias, puede continuarla o revertirla.
- Soporte de metadatos
- Lista de control de acceso
- Permite configurar permisos de archivos a nivel de usuario
- Establecer cuotas de uso a usuarios
- Permite comprimir la información de la partición

### 3.3. EXT4

- Desarrollado para Linux
- Tamaño de partición 8Tb
- Tamaño máximo de archivo 1 EiB (ExbiByte 2^60)
- Nombre máximo de carpetas y ficheros de 256 bytes
- La partición como máximo tiene 4 mil millones archivos
- 64.000 níveles de profundidad de directorio
- Soporta journaling
- Asignador multibloque: Evita fragmentación al intentar elegir bloques contiguos en el disco.
- Sistema de permisos POSIX
- Mejora la velocidad de escritura y lectura que sus predecesores



## 4. GNU/Linux



### 4.1. Organización

En GNU/Linux las unidades de almacenamiento y particiones son tratados como archivos. Éstos se ubican en el directorio ``/dev``. A continuación comentamos la nomenclatura usada.

- ``/dev/sd[x]``: La ``x`` es una letra de la "a" a la "z". Hace referencia a las unidades de almacenamiento.
- ``/dev/sd[xy]``: La ``y`` hace referencia a la partición de la unidad ``x``.

En el siguiente ejemplo tenemos 2 unidades de almacenamiento, ``sda`` y ``sdb``. La primera tiene dos particiones y la otra solo una.

```bash
/sda1
/sda2
/sdb1 
```



⭐ **No pienses solo en SSD y HDD**

> Si metes una memoria USB, un disco duro interno o incluso conectas tu móvil o cámara, éstos son también unidades de almacenamiento. GNU/LInux los considera una unidad más con sus particiones.



### 4.2. Comandos

#### lsblk

Permite listar las unidades y particiones.

```bash
lsblk
```

#### df

Usando la opción ``-h`` permite de forma amigable ver un listado de las unidades. con ``-m`` podemos ver su tamaño.

```
df -hm
```

#### fdisk

Aplicación por consola para gestionar las unidades de disco. Tenemos que pasar la unidad a inspeccionar.

```
fdisk /dev/sda
```

Con el argumento ``-l`` podemos listar las particiones de las unidades o de una unidad en concreto.

```bash
fdisk -l
fdisk -l /dev/sda
```

Cuando iniciamos la herramienta nos muestra una ayuda y nos pide introducir una opción .

- ``m ``: Ver los comandos disponibles.
- ``p ``: Mostrar la tabla de partición.
- ``d ``: Eliminar una partición. Nos pedirá su número.
- ``n ``: Crear una partición. Nos pedira su tamaño en Mb, para ello nos dira en que sector comienza y acaba. Por defecto nos propone el primer sector libre, solo hay que indicar el final. Si queremos que sea de 1Gb podemos escribir ``+1000MB`` o ``+1GB``.
- ``x ``: Opciones avanzadas. De entre ellas la interesante es la ``f `` que permite arreglar tablas de particiones.
- ``w ``: Las opciones anteriores no se aplican al instante. Con esta opción confirmamos los cambios. Serán aplicados al reinicio del sistema.  



#### mkfs

Hemos visto como hacer particiones, pero no darlas formato.

```bash
mkfs -t ext4 /sda1
```

Con la opción -t podemos elegir el sistema de archivos



---



## 🎲 Ejercicios

- [Test de Repaso 01](https://pregunta2.com/quiz/bb5941fa)
- El alumno cogerá un pendrive y tendrá que realizar una serie de operaciones con él. Posteriormente tendrá que entregar que comandos de terminal fueron necesarios. 
  - Borrar todo el contenido del pendrive.
  - Crear 3 particiones.
  - Listar las particiones.
  - Borrar una partición.
  - Dar formato FAT32 a una partición y a la otra EXT4.



## 📕 Bibliografía

- Partición GPT: ¿qué es la tabla de particiones GUID?
  https://www.ionos.es/digitalguide/servidores/configuracion/en-que-consiste-la-particion-gpt/
- MBR vs. GPT (tablas de particionamiento): ¿cuáles son las diferencias?
  https://entrechips.jaol.net/mbr-vs-gpt-tablas-de-particionamiento-cuales-son-las-diferencias/
- https://wiki.osdev.org/GPT
- https://es.wikipedia.org/wiki/Tabla_de_particiones_GUID
- http://www.asirlasgalletas.com/2019/10/02-esquema-gpt-arranque-uefi.html
- Partición de disco
  https://es.wikipedia.org/wiki/Partici%C3%B3n_de_disco
- Comandos Linux para gestión de Disco Duro y particiones
  https://www.profesionalreview.com/2017/02/18/comandos-linux-gestion-disco-duro-particiones/
- Cómo utilizar Diskpart para gestionar particiones de disco duro
  https://www.profesionalreview.com/2019/01/18/utilizar-diskpart/
- Cómo instalar con particionado manual
  https://forums.linuxmint.com/viewtopic.php?t=240571

