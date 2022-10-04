[TOC]

# Programación Básica 2 - Estructuras de Datos & Métodos



## 1. String

Hasta ahora solo podiamos guardar en una variable un caracter y no una palabra o frase completa. Para poder hacerlo usaremos la clase `String` . No sabemos que son las clases y objetos, de momento aprende que con los `String` puedo guardar palabras o frases y ya está. Cuando veamos la programación orientada a objetos entenderás lo que es.

```java
String saludo = "Hola que tal";
String nombre = "Fulanito";
String frase = saludo + " " + nombre;
System.out.println(frase);
```



### 1.1. Métodos

Los objetos tienen asociados métodos. Gracias a ellos podemos realizar operaciones más complejas.

```java
String frase = "      Me gusta comer patatas    ";
String fraseMayusculas = frase.toUpperCase(); // "      ME GUSTA COMER PATATAS    "
String fraseSinEspacios = fraseMayusculas.trim(); // "ME GUSTA COMER PATATAS"
System.out.println(fraseSinEspacios);
```

`toUpperCase` transforma todas las leras en mayúsuclas, mientars que con `trim` quitamos esos molestos espacios del principio y final de la frase. 

A continuación a modo de ejemplo os mostramos una lista y ejemplos del uso de los métodos de la clase String. En este [enlace](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html) podrás consultar la lista completa.

| Método      | Descripción                                                  |
| ----------- | ------------------------------------------------------------ |
| charAt      | Saber que caracter tiene el String en una posición indicada  |
| contains    | Ver si el String contiene una palabra o frase indicada       |
| indexOf     | Conocer en posición está un caracter en un String            |
| isEmpty     | Comprobar si el String está vacio                            |
| length      | Conocer la longitud del String                               |
| replace     | Remplazar una parte de String con una palabra o frase indicada |
| subString   | Extraer un trozo del String                                  |
| toUpperCase | Convertir todos los caracteres en mayúsculas                 |
| toLowerCase | Convertir todos los caracteres en minñusculas                |
| trim        | Quitar espacios y tabualdores que hay al inciio y final del String |

**charAt**

```java
String matrix = "No pienses que lo eres. Sabes que lo eres (Morfeo - Matrix)";
char char01 = matrix.charAt(1); // 'o'
char char02 = matrix.charAt(0); // 'N'
// En programación toda posición comienza en '0'
```

**concat**

```java
String newFrase = matrix.concat("patatas fritas");
// Cuidado con los espacios
// La frase resultante es:
// "No pienses que lo eres. Sabes que lo eres (Morfeo - Matrix)patatas fritas"
String newFrase02 = matrix + "patatas fritas";
// Funciona igual. La experiencia y nociones de rendimiento te obligará a elegir una forma u otra
```

**contains**

```java
boolean isMorfeo = matrix.contains("Morfeo"); // true
boolean isMorfeo2 = matrix.contains("morfeo"); // false
// ¡Cuidado! Las comparacioens es por carácter, la 'M' y la 'm' son distintas
```

**indexOf**

```java
int index = matrix.indexOf('e'); // 5
// Hay varias 'e', solo indica en que posición aparece la primera.
// ¡Recuerda! Los espacios son caracteres también. 
// Tampoco olvides que la primera posición tiene índice '0' 
```

**isEmpty**

```java
String word01 = " ";
String word02 = "";
String word03 = "	"; // un tabulador
boolean isNoMatrix = matrix.isEmpty(); // false
boolean isNoWord01 = word01.isEmpty(); // false
boolean isNoWord02 = word02.isEmpty(); // true
boolean isNoWord03 = word03.isEmpty(); // false
// Los espacios y tabuladores son caractéres
```

**length**

```java
int longitud = matrix.length(); // 59 carácteres totales
```

**replace**

```java
String matrixModified = matrix.replace("Morfeo", "Perico de los Palotes");
// "No pienses que lo eres. Sabes que lo eres (Perico de los Palotes - Matrix)"
```

**subString**

```java
String subStr = matrix.substring(3, 10); // "pienses"
```

**toUpperCase & toLowerCase**

```java
String str = "Patatas con Tomate";
String mayus = str.toUpperCase(); // "PATATAS CON TOMATE"
String minus = str.toLowerCase(); // "patatas con tomate"
```

**trim**

```java
String saludo = "       hola caracola   ";
String noSpacesBetween = saludo.trim(); // "hola caracola"
```



🖥️ **Codificar**

> - Parsear nombres
> - Extraer cadenas

🎲 **Ejercicios**

> - A ver si eres capaz de diferenciar métodos de la clase String



## 2. Arrays



### 2.1. Concepto

Nos piden que hagamos un programa para gestionar gatos de los albergues que hay en Murcia. Para guardar sus nombres sería cansino crear una variable por cada uno. Imaginate que hay 300, sería inviable. Para estas situaciones necesitamos una estructura de datos más cómoda. 

Las variables que creamos ocupan un espacio en la memoria de nuestro ordenador. En cuestión de rendimiento si tenemos que crear 300 variables tenemos que avisar 300 veces que reserve espacio, no es eficiente. Sin embargo hay una forma para decir que nos reserven 300 espacios de una sola vez. Ya no hay 300 avisos, sólamente uno con lo que ganamos eficiencia.

Los array o vectores solucionan nuestro problema. 

```java
// Multiplicar por 2 cada elemento del array
int arrayDummy[] = {10, 2, 7, 5};
for(int i=0 ; i<arrayDummy.length ; i++) {
    arrayDummy[i] = arrayDummy[i] * 2;
}
// {20, 4, 14, 10}
```

📖 **Array** 

>  Estructura de datos que reserva espacios consecutivos de memoria. Cada elemento del array tiene un índice para poder acceder a él.

![array](/home/ladysun/notes/uned/programacion-base-datos/01/pics/array.svg)

```java
String catArray[] = new String[300];
catArray[0] = "Saitama";
catArray[24] = "Venom";
```

Hemos llamado al primer gato "Saitama" y en la posición 24 tenemos a "Venom". Recordad que la primera posición del array es el "0". Una forma de acceder y trabajar con las posiciones es usando bucles.

```java
// Multiplicar por 2 cada elemento del array
int arrayDummy[] = {10, 2, 7, 5};
for(int i=0 ; i<arrayDummy.length ; i++) {
    arrayDummy[i] = arrayDummy[i] * 2;
}
// {20, 4, 14, 10}
```

Vemos que todo vector tiene una propiedad llamada `length`. Con ella podemos saber el tamaño del array.

Son simplemente listas, ¿no?. Resulta que en programación no es lo mismo un array, coleccion, lista o conjunto. Internamente funcionan de forma distinta y tienen distintos usos. Incluso cada lenguaje los interpreta a su modo. Llamalos listas de momento, te perdono, pero cuando seas senior ni se te ocurra 😤



🖥️ **Codificar**

> - Mostrar por pantalla el contenido del array
> - Calcular la potencia de 3 de los elementos de un array
> - Rellena el vector con los 100 primeros números pares

🎲 **Ejercicios**

> - ¿Cómo se incializa un array?



### 2.2. Arrays Multidimensionales

Vamos a ir un paso más adelante ¿Qué pasa si te dijese que cada posición de un array pudiera almacenar otro array? Da miedo pensarlo pero podemos hacerlo.

#### Bidimensional

```java
// Cada posición tiene un array de 10 posiciones
// Podemos considerarlo como una tabla de 2x10
int arrayBi[][] = new int[2][10];
    arrayBi[0][3] = 3;
	arrayBi[1][7] = 5;
```

![matrix](/home/ladysun/notes/uned/programacion-base-datos/01/pics/matrix.svg)

```
// Podemos indicar arrays de tamaños distintos
int arrayBiBi[][] = new int[4];
arrayBiBi[0] = new int[6];
arrayBiBi[1] = new int[8];
```



#### Multidimensional

¡Podemos crear un array inception! 😯

```java
int arrayTri[][][] = new int[4][2][2]
```

Ufff... pensar así en este curso de introducción a la programación puede ser árido. De momento quédate con que existen trastear un poco con los arrays bidimensionales. 

#### Usos

¿Para que usarlo? Por ejemplo con los array bidimensionales podemos guardar infromación de imágenes. También guardar información de una maya tridimensional para crear una figuras 3D con la ayuda de un array tridimensional. Por tanto los usaras en profundidad cuando seas un programador senior, de momento basta saber con que existen y trastear un poco con ellos 😃 



## 3. Funciones

Vamos ha hacer nuestra primera peque aplicación 😃 Dado un número introducido por el usuario realizará alguna operación matemática. El usuario tendrá que elegir la opción de las que se muestra por pantalla.

**Introducir información**

Para poder coger lo que teclea el usuario usaremos la clase Scanner. A diferencia de String tenemos que explicitamente importarlo. En Java toda improtación ha de hacerse en la primera linea, sino produce problemas de compilación.

```java
import java.util.Scanner;
...

System.out.println("---- OPERATOR 3000 ----");
System.out.println("1. Calcular el 30%");
System.out.println("2. Calcular el factorial");
System.out.println("3. Calcular el 30% del factorial");
System.out.println("Elige una opción: ");

Scanner sc = new Scanner(System.in);
char opt = sc.next().charAt(0);

System.out.println("Ha elegido la opción " + opt);
```

**Implementamos las operaciones**

Vamos a implementar la primera opción

```java
System.out.println("Introduce un número: ");
int num = sc.nextInt();
int result = 1;

switch(opt) {
    case '1':
        result = num*30/100;
        break;
    case '2': 
        for(int i=1 ; i<=num ; i++) {
           result = result * i; 
        }
        break;
    case '3': 
        for(int i=1 ; i<=num ; i++) {
           result = result * i; 
        }
        result = result*30/100;
        break;
    default:
        System.out.println("La opción introducida no existe :(");
}

System.out.println("El resultado es: " + result);
```

Imagínate que tenemos 10 opciones, siendo algunas de ellas tan complejas como cálculos trigonométricos o resolución de ecuaciones. Sería difícil e incómodo de leer todo el código. Observa también que hay código repetido. Para solventarlo vamos a encapsularlo en funciones.

📖 **Funciones**

>  Bloques de código que los encapsulamos bajo un nombre.
>
> - Los invocamos usando su nombre
> - Pueden tener ningún o varios parametros/argumentos de entrada
> - Devuelve un tipo de resultado

Vamos a crear 2 funciones, para el porcentaje y factorial.

```java
int calcularPorcentaje(int porcentaje, int num) {
    int result = 1;
    result = num*porcentaje/100;
    return result;
}

int calcularFactoral(int num) {
    int result = 1;
    for(int i=1 ; i<=num ; i++) {
        result = result * i; 
    }
    return result;
}
```

Veamos como queda el código completo del menú. Vamos a ser más pro aún y encapsulamos el menú y su lógica

```java
class MenuCalculos {
   public static void main(String[] args) {
      char opt = mostrarMenu(); 
      procesarOpcion(char opt);
   }
    
    char mostrarMenu() {
       System.out.println('---- OPERATOR 3000 ----');
       System.out.println('1. Calcular el 30%');
       System.out.println('2. Calcular el factorial');
       System.out.println('3. Calcular el 30% del factorial');
       System.out.println('Elige una opción: ');

       Scanner sc = new Scanner(System.in);
       char opt = sc.next().charAt(0);
       return opt;
    }
    
    void procesarOpcion(char opt) {    
       System.out.println('Ha elegido la opción ' + opt);
       System.out.println('Introduce un número: ');
       Scanner sc = new Scanner(System.in);
       char num = sc.next().charAt(0);    
        
       int result;
       switch(opt) {
           case 1:
               result = this.calcularPorcentaje(30, num);
               break;
           case 2: 
               result = this.calcularFactoral(num);
               break;
           case 3: 
               result = this.calcularFactoral(num);
               result = this.calcularPorcentaje(result);
               break;
           default:
               System.out.println('La opción introducida no existe :(');
       }
       System.out.println('El resultado es: ' + result);
    }
    
    int calcularPorcentaje(int porcentaje, int num) {
        int result;
        result = num*porcentaje/100;
        return result;
    }

    int calcularFactoral(int num) {
        int result;
        for(int i=1 ; i<=num ; i++) {
            result =* i; 
        }
        return result;
    }
}
```

Vemos un código más ordenado, incluso reutiliza las funciones calcularfatcorial y calcularPorcentaje en la tercera opción.



### 3.1. Características

Hay que indicar el tipo de dato que devuelve la función. Si no devuelve nada se usa la palabra void

```java
int sumaNumeros(int numA, int numB) {
	int result = numA + numB;
	return result;
}

void saludoPantalla(String nombre) {
	System.out.println('Hola ' + nombre);
}
```

El nombre de los argumentos de entrada no tienen porque coincidir

```java
int sumando01 = 2;
int sumando02 = 5;
int total = sumaNumeros(sumando01, sumando02); 
```



🖥️ **Codificar**

> - Los sonidos de la fauna
> - Censura

🎲 **Ejercicios**

> - ¿Están bien escritas las funciones?
> - Adivinar parámetros y respuestas



## 4. Colecciones

Habrás comprobado que una desventaja de los array es que tenemos que indicar un tamaño en el momento que lo inicializas. Son bastante inflexibles en al vida real. Hay toda una literaruta sobre otros sistemas para almacenar la información: listas. mapas, conjuntos, tablas hash, árboles... cada una tiene sus ventajas y desventajas. Cada lenguaje decide cuales incluir y como implementarlas.

Vamos ha centrarnos en las listas, debido a su extenso uso en Java y nos servirán de ayuda para mñas adelante trabajar cómodamente con la programación orientada a objetos.



#### 4.1. Listas

Se acabo el tener que saber desde el principio el tamaño del vector, las listas permiten aumentar su tamaño bajo demanda.

```

```



#### 4.2. Otras Estructuras

Lo importante aquí es quedarte con el concepto. Ofrecemos algún ejemplo e incluso donde consultar para saber más sobre ellas.

📖 **Tablas Hash**

Conjunto donde cada elemento es un duo clave - valor. Para poder acceder a cada elemento debemos de saber la clave. Internamente pueden poseer una ordenación distinta.

```java
```

Más información en este link



**📖 Conjuntos**

Conjunto dodne cada elemento no está repetido. 

```java

```

Más información en este link



🖥️ **Codificar**

> - Crear lista de fast-food
> - Censura

🎲 **Ejercicios**

> - ¿Están bien escritas las funciones?
> - Adivinar parámetros y respuestas



## 5. Programación Procedural

Por fin vamos a introducir un poco el concepto de "paradigma". Tranquilo, nadie lo entiende a la primera, es más, el proposito aquí es que solo sepas que existe esta palabra y ya al final del curso ver si eres capaz de entenderlo. Intentaremos definirlo un poco para que te suene.

Hasta este momento hemos visto lo que se llama programación procedural. Ejecución secuencial de isntrucciones dodne como mucho encapsularemos en rutinas aquellas tareas mñas repetitivas. La Programación Procedural es un paradigma de programación, existen otros como la "Programación orientada a Objetos" que veremos en el siguiente tema. Digamos que son distintas formas de entender la programación. Cada una es dieal para realizar determinados programas con mñas o menos faclidad. Incluso pueden entremezclarse paradigmas para abordar la solución idonea 🙂



---

🎲 **Ejercicios**

> - Test para comprobar conocmientos sobre el tema

