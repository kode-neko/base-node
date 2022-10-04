[TOC]

# Tema 04: Usuarios & Grupos



## 1. Introducción

Vital manejar la creación de usuarios y grupos. Evita sustos y ayuda a la gestión del sistema.

📖 **Usuario**

> Elemento del sistema para controlar la autenticación y autorización, tanto del sistema como de sus recursos. Permite proporcionar un espacio a la persona que utiliza el sistema. Este espacio sirve para guardar opciones de customización y configuración. También almacena programas, archivos y carpetas.

📖 **Grupo**

> Conjunto de usuarios. Permite gestionar la autorización. En vez gestionar uno por uno cada recurso, asociarlos a un grupo. Luego seleccionamos que usuarios pertenecen al grupo.

📖 **Autenticación**

> Control de la entrada de un usuario al sistema. Una vez dentro podrá estar autorizado a unas acciones determinadas.

📖 **Autorización**

> Control de acceso a recursos. Puede ser archivos, carpetas, programas o servicios del sistema. También se usa la palabra privilegios.



Estos conceptos no se dan solo en el mundo Linux, tambien en otros SO. Normalmente la autorización se aplica sobre archivos y carpetas. También se da a nivel de programa, pero lo que ocurre es que ese programa tiene que acceder a recursos protegidos. Puede ser un archivo, carpeta o servicio. 

Entender la autenticación y autorización es crucial, permite obtener seguridad y control:

- 🔒 **Seguridad**: Puede verse comprometido un usuario por culpa de un atacante. Puede leer información privada o alterarla. Si los privilegios del usuario son limitados el daño también lo es.
- 👮 **Control**: No es ponerse en modo "orweliano". No significa monitorizar al usuario para castigarlo si crees que no está trabajando o lo hace mal. Puede haber un error en el sistema y necesitemos saber cuando y dónde. Tal vez un atacante haya tomado el control de un usuario, decidiendo borrar ficheros. A través de logs de auditoria podemos analizar actividades. Solo acceder a ellos cuando haya un problema serio, no fetiche autoritario o cotilla. Incluso podría ser ilegal.



## 2. Autorización

### 2.1. Recursos

Sobre los recursos autorizamos acciones. Son de 2 tipos:

- **Archivos**: Con ellos autorizamos la lectura, modificación y ejecución.
- **Carpetas**: Con ellos autorizamos el acceso para ver sus ficheros y subcarpetas.

La ejecución de programas entraría en los 2 casos anteriores. Normalmente un programa es un conjutno de archivos organizados en carpetas. Para ejecutarlo lo hacemos a través de su archivo principal. Este archivo esta sujeto a una autorización. Puede que la carpeta donde está el archivo necesite autorización.

Los programas pueden ejecutarse por terminal o usar interfaz gráfica. En ambos casos es aplicable la situación anterior.



### 2.2. Permisos

En GNU/Linux los permisos se determinan a 3 entidades:

- **Owner - Dueño**: El usuario considerado como dueño del archivo.
- **Group - Grupo**: El grupo al que pertenece.
- **Other - Otro**: Se refiere al resto de grupos.

Para cada entidad se establece un tipo de permiso:

- <u>Lectura</u>
- <u>Escritura</u>
- <u>Ejecución</u>

Depende del usuario con el que autentiques y al grupo que pertenescas podrás hacer unas acciones u otras.



## 3. Grupos y Usuarios

### 3.1. Usuario "root"

Es el usuario con más privilegios en GNU/Linux. Pertenece al grupo root y a otros tantos que sirven para gestionar recursos vitales. Puedes acceder a cualquier carpeta y hacer lo que quieras con los ficheros. Tambiñen podemos ejecutar y configurar programas sin límites. Es vital que exista para que GNU/Linux, de esta forma lograr la labor del SO de intermediario entre SW y HW. 

Lo recomendable es nunca usarlo. Puede que en el momento de utilizarlo el sistema sea víctima de un ataque. Aprovechan la situación y toma el control. También ignorar las consecuencias y borrar ciertos recursos o cambiar configuraciones. Podría inutilizarse todo el sistema.

Para acceder a root desde la consola de comandos hacemos `sudo su`. Solo puede ejecutarlo los super-usuarios. El comando permite en la terminal estar logeado como root.

¿No puedo ser root pero me dan el comando `sudo su`? Esto es como los cheats en las consolas de los 90. Unas combinaciones en el mando permitía obtener vidas infinitas, selección de niveles, meter gráficos nuevos, oro infinito... A veces los desarrolladores crean atajos para hacer pruebas. En el caso de las consolas es por hacer una gracia, pero imaginate que formas parte del desarrollo GNU/Linux. Tal vez en un entorno controlado necesites root porque tu misión es hacer una mejora en la gestión de procesos. Puede que simplemente seas un curioso y quieras aprender. Linux no trata a los usuarios como niños, tu estableces los límites. Para lo que hacen el 90% de los usuarios no es necesario root, pero tal vez alguien lo necesite.



### 3.2. Superusuario

Pertenecen al grupo root. Tienen bastantes privilegios pero no los más críticos, para eso está root. Este tipo de usuarios están pensados para profesionales. No hacen un uso casual del sistema: leer correos, escribir documentos, navegar, Facebook, ver videos... Necesitan hacer uso de todos los comandos de terminal y acceder a archivos importante del sistema.

⚠️ **Sudoers**

> Hay bastante confusión con este termino. Primero definamos que es el comando sudo. Se antepone delante de comandos de terminal parapoderlo ejecutar. Normalmente los únicos que le sestán permitidas estas operacioens son los super-usuarios, es decir, los que están en el grupo "root". De ahí que digan que los super-usuarios son sudoers. Pero no siempre es así, el fichero /etc/sudoers establece quienes ejecutan sudo. Puedes establecer otros usuarios si ves conveniente.



### 3.3. Usuarios Normales

Como hemos indicado sus tareas son triviales. No necesitan altos privilegios.



## 4. Archivos de Configuración

¿Dónde se almacena esta información de usuarios y grupos? 

#### /etc/passwd

Almacena la información de todos los usuarios del sistema. El nombre confunde pensando que solo guarda contraseñas. Cada usuario es una linea con la información delimitada por ":". Siguiendo el orden cada segmento es lo siguiente:

1. <u>nombre de usuario</u>
2. <u>contraseña</u>: Lo normal es que aparezca una x. De ser así la contraseña se guarda cifrada en el fichero /etc/shadow
3. <u>uid</u>: Identificador numérico único.
4. <u>gid</u>: Grupo principal al que pertenece. Auqnue no aparezca, también peude pertenecer a más grupos.
5. <u>carpeta</u>:  Path de la carpeta de usuario
6. <u>shell</u>: Terminal a utilizar. Incluso podemos establecer una terminal limitada, o simplemente que no la usen.

#### /etc/group

Almacena información de todos los grupos del sistema. Al igual que los usuarios, contiene una linea por inforación de cada grupo. Cada una tiene segmentos delimitados por :. Siguiendo el orden significa lo siguiente:

1. <u>Nombre de grupo</u>
2. <u>Contraseña de grupo</u>: Es opcional. Con ella pueden usuarios ajenos unirse al grupo.
3. <u>ID de grupo</u>: Identificador numérico único.
4. <u>Miembros del grupo</u>: Lista de nombres de usuarios de sus miembros.

#### /etc/login.defs

Para configurar diversos aspectos de los usuarios. Para ello se usan unas variables:

- <u>PAS_MAX_DAYS</u>: Número de días que una contraseña es válida.
- <u>PASS_MIN_LEN</u>: Número mínimo de carateres de la contraseña.
- <u>CREATE_HOME</u>: Flag que indica si al crear el usuario se crea su directorio en `/home`



⭐ **grep + cut**

> Vimos en la unidad "03 - Archivos" como usar los comandos `grep` y `cut`. Incluso el ejemplo era sobre éstos ficheros. Para obtener una lista de nombres de usuario ejecutamos lo siguiente:
>
> ```bash
> sudo cat /etc/passwd | cut -d ":" -f1 
> ```



⭐ **Modificar Archivos**

> Podemos cambiar la configuración escribiendo en los archivos. No es recomendable, ya que un leve error de sintaxis puede hacer que no inicie el sistema. Para ello tenemos una serie de comandos de terminal. Es más cómodo y seguro.



## 5. Comandos

**sudo**

> Los siguientes comandos solo pueden ser ejecutados por super-usuarios. Para ello anteponemos el comando `sudo`. Comprobará si el usuario actual es un super-usuario y pedirá la contraseña. Cuando introduces la contraseña la primera vez, no la vuelve a pedir las siguienets veces. Pero si cierras el terminal y lo vuelves abrir vuelve a pedirlo.



### 5.1. Usuario

#### login

Aunque hayamos entrado en la distro con un usuario, podemos dentro de una terminal logearnos con otro usuario. Incluso tener varios terminales con distintos usuarios. Imagina que eres un admin y quieres logearte en el terminal como Pablo3000

```bash
sudo login Pablo3000
```



#### useradd

Para crear usuarios. Podemos añadir las siguientes opciones:

- `-c`: Añadir comentario.
- `-d`: Especificar otro directorio de usuario.
- `-e`: Fecha de expiración de la cuenta. Tiene el formato AAAA-MM-DD.
- `-g`: Identificador del grupo principal de usuario.
- `-s`: Indicar un terminal distinto.

```bash
sudo useradd powerman -c "Un macho Ibérico en peligro de extinción"
```



#### passwd

Establecer el password de un usuario. Por pantalla nos indicará cuando introducir la contraseña

```bash
sudo passwd powerman
```



#### userdel

Eliminar el usuario

```bash
sudo userdel powerman
```



#### usermod

Modificar usuarios. Tenemos las siguientes opciones:

- `-c`: Añadir comentario.
- `-d`: Especificar otro directorio de usuario.
- `-e`: Fecha de expiración de la cuenta. Tiene el formato AAAA-MM-DD.
- `-g`: Cambiar el identificador de su grupo principal.
- `-G`: Añade otros identificadores de grupo.
- `-l`: Cambia el nombre de usuario.
- `-L`: Bloquea la cuenta de usuario.
- `-U`: Desbloquea la cuenta.
- `-s`: Establecer otro terminal.

```bash
sudo usermod powerman -l powerwoman
```



### 5.2. Grupos

#### groupadd

Crear grupos.

```bash
sudo groupadd nuevogrupo 
```



#### groupmod

Podemos cambiar el nombre del grupo

```bash
sudo groupmod -n viejogrupo nuevogrupo
```



#### groupdel

Eliminar el grupo

```bash
sudo groupdel borrargrupo
```



### 5.3. Permisos

Cambiar los permisos del fichero o carpeta. Podemos hacerlo de 2 formas. 



#### chown

Cambiar el dueño o grupo de un archivo o carpeta. No olvidar colocar `:` delante del grupo a cambiar.

Imagina que tenemos al usuario "marta2000" y el grupo "pizza". Queremos cambiar el duseño y el grupo al recurso "almeja.txt".

```bash
sudo chown marta2000 almeja.txt
sudo chown :pizza almeja.txt
```

Podemos hacer la opción de una sola vez

```bash
sudo chown marta2000:pizza almeja.txt
```



#### chmod xxx

A través de un número de 3 cifras, correspondiendo cada una al owner, group y others respecticamente. Esta cifra es un número de 1 al 7 ¿por qué? veamoslo en el diagrama.

<table>
    <tr>
        <th style="text-align: center">owner</th>
        <th style="text-align: center">group</th>
        <th style="text-align: center">others</th>
    </tr>
    <tr>
    	<td>
    		<table>
    			<tr>
                    <th style="text-align: center">r</th>
                    <th style="text-align: center">w</th>
                    <th style="text-align: center">x</th>
                </tr>
                <tr>
                    <td style="text-align: center">1</td>
                    <td style="text-align: center">1</td>
                    <td style="text-align: center">1</td>
                </tr>
            </table>
    	</td>
    	<td>
    		<table>
    			<tr>
                    <th style="text-align: center">r</th>
                    <th style="text-align: center">w</th>
                    <th style="text-align: center">x</th>
                </tr>
                <tr>
                    <td  style="text-align: center">1</td>
                    <td  style="text-align: center">0</td>
                    <td  style="text-align: center">0</td>
                </tr>
            </table>
    	</td>
    	<td>
    		<table>
    			<tr>
                    <th style="text-align: center">r</th>
                    <th style="text-align: center">w</th>
                    <th style="text-align: center">x</th>
                </tr>
                <tr>
                    <td  style="text-align: center">0</td>
                    <td  style="text-align: center">0</td>
                    <td  style="text-align: center">0</td>
                </tr>
            </table>
    	</td>
    </tr>
    <tr>
    	<td  style="text-align: center">7</td>
    	<td  style="text-align: center">6</td>
    	<td  style="text-align: center">0</td>
    </tr>
</table>
```bash
sudo chmod 760 ./pantoja.txt
```

Cada entidad puede tener permisos de escritura, lectura o ejecución. Son representados por las letras `r`, `w` y `x` respectivamente (read, write, execution). El `1` indica si tiene el permiso, el `0` si no lo tiene. Las 3 cifras juntas conforman un número binario. Este número se traduce a decimal para determinar los permisos. La cifra solo puede ser del `0` al `7`. Por tanto el rango de permisos es del `000` hasta el `777`. 



#### chmod +-

Dependiendo de la entidad, el permiso y su operación usamos un flag u otro.

<u>Entidades</u>:

- `u`: Owner.
- `g`: Group.
- `o`: Others.
- `a`: Referirse al owner, group y others.

<u>Permiso</u>:

- `r`: Lectura.

- `w`: Escritura.
- `x`: Ejecuión.

<u>Operación</u>:

- `-`: Quitar un permiso.
- `+`: Añadir permiso.
- `=`: Los permisos sean exactamente los indicados.

Seguiendo el ejemplo del aparatdo anterior hariamos lo siguiente.

```bash
sudo chmod u=rwx ./pantoja.txt
sudo chmod g=r ./pantoja.txt
sudo chmod o= ./pantoja.txt
```

Una alternativa más compacta.

```bash
sudo chmod u=rwx,g=r,o= ./pantoja.txt
```

Imagina que queremos ser menos restrictivos. Al `group` otorgamos escritura y a `others` lectura.

```bash
sudo chmod g+w, o+r ./pantoja.txt
```

Finalmente nos arrepentimos que others tenga lectura

```bash
sudo chmod o-r ./pantoja.txt
```



#### -R

Hemos visto que otorgamos permisos a ficheros ¿y las carpetas?

```bash
sudo chmod 760 ./pantojaFolder
sudo chmod 760 -R ./pantojaFolder
```

¿Que es la opción -R? De la primera forma solo cambiamos los eprmisos de la carpeta. Con -R damos permiso a la carpeta y a todos sus archivos y subcarpetas.



⭐ **¿Qué es mejor?**

> Usar chmod con números o con opciones dependerá de tu experiencia. Es muy compacto e inmediato esribir un número de 3 cifras. Sin embargo, si solo quieres cambiar el permiso de una entidad es más cómodo las opciones. Tu decides, no hay respuesta correcta. 



## 6. Consejos

Estos consejos son fruto de la experiencia y otro saber compartido por la comunidad. Son recomendaciones que ayudan a evitar sustos y facilitar la gestión. Puedes seguirlos o no, es decisión tuya. 

En muchas ocasiones se prefiere hacerlo. De esta forma facilitas la comunicación con otros compañeros. También hay situaciones donde se abandona el puesto de trabajo, relegando el trabajo a un nuevo administrador. Es más fácil para éste aprender el nuevo sistema ya que está acostumbrado a las recomendaciones. Lo ideal es entender el por qué, ya que seguirlas sin razonar significa que no las entiendes 

También tenemos que analizar la situación. Hay empresas o centros donde se establece su propia política de seguridad, incluso no cumpliendo dichas recomendaciones. Las necesidades cambian dependiendo del lugar. Al final es sentido común y adaptarse a la situación.

- Las contraseñas tiene que ser de un mínimo de 8 caractéres. Han de contener minúsulas, mayúsulas, números y símbolos. debend e aparecer intercalado.
- Es mejor que sea el administrador quien proporcione las contraseñas. A través de ingeniería social podemos sonsacar la contraseña de un usuario. El administrador usará un generador aleatorio para que no sea deducible.
- La cuenta root no se toca.
- Normalmente cuando instalamos una distro generamos un super-usuario.  Tampoco lo tocamos a no ser que administremos el sistema con él.
- Dependiendo del uso del equipo creamos las siguientes cuentas:
  - Casual: Un oficinista promedio. Un usuario que no sea super-usuario. Ponerles un terminal restringido o quitárselo. Establecer que permisos tiene sobre determinados recursos.
  - Profesional: Programadores, diseñadores u otros administradores. Necesitan libertad, por tanto ser superusuario. A través de la terminal realizan una gran cantidad de tareas. 
  - Invitado: Imagina que una persona necesita el sistema de forma temporal. Tal enviar un correo, ver noticias, escribir una carta, ver videos, jugar... sería igual que un usuario casual.
- Realizar grupos por recursos. Por ejemplo un grupo para utilizar una impresora o un conjunto de programas. Vamos incluyendo a los usuarios idoneos.



---



## 🎲 Ejercicios

- [Test de Repaso 01](https://pregunta2.com/quiz/c9b6f805)
- Vamos a hacer una serie de operaciones con el terminal. Todos los comandos que uses los guardarás en documento .txt para entregarlo. El ejercicio consiste en realizar los siguientes pasos:

  - Crea un un usuario normal llamado "Perico".
  - Crea un super usuario llamado "Super-perico". Recuerda que puedes indicar el grupo al crear el usuario o después con otro comando.
  - Obten por terminal los grupos al que pertenecen "Perico" y "Super-perico". Recuerda que están en fichero del sistema. Tampoco olvides que tenemos comandos como cat, grep o cut.
  - Crea una carpeta llamada "test".
  - Pon como dueño de la carpeta creada "Perico".
  - Modifica los permisos para que Perico sea el único que pueda leer, escribir y ejecutar.
  - Logeate con Super-perico en la terminal.
  - Bloquea al usuario Perico.
  - Intenta logearte con Perico ¿puedes hacerlo?.




## 📕 Bibliografía

- Administración de usuarios
  https://www.linuxtotal.com.mx/index.php?cont=info_admon_008
  
- Cómo limitar el acceso a usuarios en Linux
  https://www.ochobitshacenunbyte.com/2021/01/25/como-limitar-el-acceso-a-usuarios-en-linux/

- Comandos Linux para la Gestión de Grupos

  https://laguialinux.es/comandos-linux-para-gestion-de-grupos/

- Cómo cambiar permisos y propietarios en Linux través de la línea de comandos
  https://www.hostinger.es/tutoriales/cambiar-permisos-y-propietarios-linux-linea-de-comandos/

