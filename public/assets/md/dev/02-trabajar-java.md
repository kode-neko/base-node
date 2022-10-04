[TOC]

# Trabajar con Java



## 1. Introducción

Para ponernos manos a la obra con ejercicios de programación vamos a familiarizarnos con un lenguaje. Hemos elegido el lenguaje Java debido a su extenso uso y la relativa facilidad de aprenizaje frente a otros lenguajes. Otras alternativas muy interesantes podrían ser Python, PHP, C# o Typescript. En realidad los lenguajes de uso común comparten una base, solo cambian su sintaxis ✨



## 2. Historia

A principios de los 90 estaba el equipo de ingenieros Green Team en Sun Microsystems, compuesto por James Gosling junto con sus compañeros Mike Sheridan y Patrick Naughton. Crearon el lenguaje Oak, pensado en un principio para decodificadores de televisión por cable. El problema es que era una tecnología demasiado avanzada para la época. Oak significa "roble", al parecer ser a Gosling se le ocurrió el nombre por el roble que había fuera de la oficina (que original...).

 En 1995 renombraron al lenguaje como Java. Otras propuestas fueron "Dynamic", "Revolutionary", "Silk", "jolt" o "DNA". El nombre de Java proviene de una isla de Indonesia productora de cafe. A Gosling le pareció buena idea mientras tomaba una taza de café (vuelve a ser original de nuevo...).

En 1996 Java se lanzo pero para un proposito más general, el uso en ordenadores y aplicaciones web. A partir de entonces fueron sacando versiones hasta nuestros días.

 

## 3. Máquina Virtual

Previo a Java los programas tenía que estar compilados para cada sistemas operativo. Incluso esta tarea se dejaba en manos de los usuarios, los cuales sino tenían cierta experiencia y conocimientos previos se hacía imposible. Los creadores de Java tuvieron la idea de que funcionase usando una máquina virtual. El proceso era el siguiente:

1. Escribir el código del programa
2. Compilarlo para la máquina virtual de Java
3. Iniciar la máquina
4. Ejecutar el programa

El programador no tenía que preocuparse de compilar el código para los distintos SO, solo tenía que hacer una única compilación y distribuirla. El equipo de Java se encargaba de que esta máquina virtual estuviera disponible para los distintos SO 😃



## 4. Herramientas

En la web https://www.java.com/ tiene en la sección de descargas las herramientas para programar con Java. A continuación una descripción de las herramientas disponibles

- **JDK - Java Development Kit** - Incluye diversas herramientas destacando las siguientes:
  - La máquina virtual o JVM (Java Virtual machine)
  - El compilador
  - Clases y librerias para ayudar en la programación
- **JRE - Java Runtime Environment**
  - Solo incluye la JVM y algunas herramientas de ejecución

Para programar solo necesitamos el JDK. Si eres un usuario y quieres solo hacer funcionar una aplicación java únicamente necesitas el JRE. Aquí solo nos vamos a centrar en el JDK ya que nuestro proposito es aprender a programar.



### 4.1. Instalación

Para tener una buena idea de como hacerlo se adjunta el siguientes videos, tanto para instalarlo en Windows como en Linux Mint. No obstante dejamos de forma esquemática los pasos a seguir:

1. **Descargar el JDK**
   - <u>Windows:</u> Es un ejecutable que atomáticamente ubica el JDK en la carpeta de "Archivos de Programa"
   - <u>Linux:</u> Normalmente la distribución incluye el JDK. De no ser así habrá que usar un gestor de paquetes.
   
2. **Variables de entorno**: Normalmente, tanto el Linux y Windows una vez instalado crea una variable llamada "JAVA_HOME". El valor es la ubicación del JDK.

3. **Variable PATH**: Hay que incluir la ubicación de la carpeta del JDK

   

### 4.2. Mi Primera Aplicación

Tras tanta teoría por fin vamos a "picar" código 😊

1. Creamos un fichero llamado `patata.java`
2. Escribimos lo siguiente. Tranquilo, más adelante entenderás que significan algunas palabras. De momento quedarse que todo lo que se escribe dentro de "main" se ejecuta:

```java
class Patata {
   public static void main(String[] args) {
      System.out.println("Mi primer patata programa :D");
   }
}
```

3. Abrir una consola
   - Windows: CMD o Powershell
   - Linux: Bash/terminal
4. Primero compilemos. Para ello tenemos que saber donde se ubica el programa. Imaginemos que estaEscribir en la consola `javac patatas.java`
5. Podemos comprobar que se ha creado un fichero llamado `patatas.class`
6. Para ejecutarlo escribir `java patatas.class`
7. En la consola vemos el mensaje "Mi primer patata programa :D"

Normalmente la tradición consiste en que salaga por pantalla "Hola Mundo", pero es más bonito ser original 😉



---

🎲 **Ejercicios**

> - Mini trivial Java



## 5. Editores de Código

Vamos a describir que herramientas disponemos para escribir código en Java.



### 5.1. Editor de texto

Simplemente consiste en coger cualquier editor de texto y animarse a escribir:

- **Editor de Texto del Sistema:** Todo sistema operativo incluye un editor de texto. Solo sirven para ver información de pequeño tamaño y anotaciones rápidas. Para comenzar no está mal pero en la red hay algunas herramientas un poco más completas.

- **Notepad++:** La que recomiendo 😃 Este editor es mucho más completo, podemso encontrarlo en esta web y aquí un video con sus capacidades. Detecta el lenguaje, multiples pestañas, colorea el código, formatea el texto, indica número de lineas, formatea código...

  

### 5.2. Editor Online

Hay muchas webs que permiten crear y ejecutar codigo a través del navegador. A continuación una serie de editores online para Java perfectos para hacer pruebas.

- [Coding Ground](https://www.tutorialspoint.com/compile_java_online.php)
- [Online Java](https://www.online-java.com/)
- [Online GDB](https://www.onlinegdb.com/online_java_compiler)
- [Paiza.io](https://paiza.io/projects/CHtUCwkcvPPS2UdTcJRczA)
- [One Compiler](https://onecompiler.com/java)

En esta guía los ejemplos y ejercicios de codigo se proporcionan tanto en ficheros a parte como un enlace a alguno de estos editores online.



### 5.3. IDE

Pensado para programadores avanzados, es con lo que se trabaja en la vida real. En los inicios solo hacemos pequeñas pruebas, pero un proyecto de verdad puede abarcar cientos de ficheros. Modularización, control de versiones, terminal integrado, dependencias de Maven, buscador avanzado, debuging integrado, levantar servidores, informes de testing... 😵 Estamos en un estadio tan inicial de la programación que no encesitamos los IDE por ahora. Incluso puede ser contraproducente porque hacen muchas tareas automáticas, camuflando conceptos importantes para el aprendizaje.



---

🎲 **Ejercicios**

> - Test para comprobar conocimientos sobre el tema
