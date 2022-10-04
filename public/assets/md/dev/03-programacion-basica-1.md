[TOC]

# Programación Básica 1 - Variables & Estructuras de Control



## 1. Variables

📖 **Variable** 

> Estructura básica para almacenar un dato. Se les asocia un nombre y tipo.

```java
int cont = 3;
double price = 3.2;
char grade = 'A';
boolean isSuperman = true;
```

No es lo mismo "declarar" que "asignar" una variable

```java

int cont; // declaración
cont = 4; // asignación
int num = 7; // declaración y asignación
```

📖  **Declaración**

> Definir una variable

📖  **Asignación**

> Asociar un valor a una variable de acuerdo a su tipo



### 1.1. Tipos

Vamos a mostrar las más comunes

| Tipo    | Definición                       |
| ------- | -------------------------------- |
| int     | Nº enteros                       |
| double  | Nº decimales                     |
| float   | Nº decimales con mayor precisión |
| char    | Un caracter                      |
| boolean | Guarda el valor true o false     |

```java
int cont = 1;
double price = 0.02;
float temperature = 0.005;
char score = 'S';
boolean isMonster = false;
boolean isSuperman = true;
```

☕ **Java**

> Este tipo de datos comunmente se llaman datos simples, en el caso de Java también reciben el nombre de datos "primitivos". Cuando avancemos podremos ver estructuras de datos y los llamados objetos. Con ellos podemos guardar de otra forma la información y hacer más operaciones.



### 1.2. Nombres

- Han de empezar con una letra, guión bajo (_) o dolar ($)
- Pueden contener letras, números, guión bajo (_) o dolar ($)

Se recomienda que el nombre cumpla las siguienets normas. Por lo general toda la comunidad las usa y ayuda a una mejor comprensión del código. Incluso algún fundamentalista puede quemarte en la hoguera sino las sigues 🔥

- <u>Han de ser *"camelcase"*:</u> `numPersonas`, `edadPerro`, `checkPuertaGiratoria`
- num<u>Que tengan significado</u>
  - `a`, `qw12`, `kk`, `pioPio`: ¿Qué significan?
  - `numCoches`, `isActive`, `nombreAlumnoClase`: ¡Te dan una pista de lo que son!
- <u>Preferiblemente que sean en inglés:</u> No es oficial, pero la mayor parte de la documentación sobre programación está en inglés. En esta guía usamos diversas variables en español paraq ue sea ameno y gracioso, pero en la vida real escribo mi código en Inglés. Me han llegado a contar compañeros que han visto código en gallego y catalán. Si quieres tener difusión usa el inglés, aunque hay que reconocer que hay una gran comundiad hispana.

🎲 **Ejercicios**

> - ¿Cómo nombrarías a las variables?



### 1.3. Tipados

Hay lenguajes de programación donde no se establece o no es necesario especificar el tipado. Normalmente ocurre en aquellos que funcionan mediante un intérprete o motor. El propio interprete deduce su tipo, incluso este muta con las sucesivas operaciones que se aplica a la variables.

📖  **Tipado Fuerte** 

> Lenguaje donde las variables cumplen lo siguiente
>
> - Se especifica su tipo en el momento de la declaración
> - Solo se puede asignar valores del tipo declarado
> - Normal en lenguajes compilados
> - Si se incumplen las normas el compilador se detiene e informa del problema ocurrido

📖  **Tipado Débil** 

> Lenguaje donde las variables cumplen lo siguiente
>
> - Lenguajes donde no es necesario indicar el tipo en la declaración
> - Puede asignarse con valores de distinto tipo
> - Normal en lenguajes interpretados

☕ **Java**

> Es un lenguaje de tipado fuerte. Si compilamos nuestra aplicación y no declaramos ningún tipo o asignamos un valor que no corresponde, ésta se para y nos muestra en la pantalla el error y donde fué.
>
> Para evitar estos problemas los programadores usamos los IDE. Incluyen mecanismos para subrayar lineas de código que incumplen la sintaxis u otros errores. Como esto es un curso de inciación seguimos proponiendo el uso del editor de textos y de los editores online. Nos limitamos a pequeñas aplicaciones donde es fácil encontrar el error.
>



### 1.4. Case Sensitive

```java
int num = 1;
int NUM = 1;
int NuM = 1;
int nUm = 1;
```

Los 4 ejemplos son 4 variables distintas. Todas se llaman "num" pero fíjate, se usan mayúsuculas y minúsuclas.

📖  **Case Sensitive**

> Caracteristica de un lenguaje donde el nombre de las variables tiene en cuenta mayúsculas y minúsculas, a pesar de que se trate de la misma palabra.



### 1.5. Constantes

📖  **Constante**

> Variables cuyo valor no se puede cambiar posteriormente en el programa. La variable es asignada en el momento de su declaración.

```java
const int NUM_MAX_CATS = 3;
NUM_MAX_CATS = 4; // genera un error de compilación
const int NUM_MIN_DOGS;  // genera un error de compilación
```

De momento su utilidad no lo entenderas, empiezan a aparecer en la programación orientada a objetos. Normalmente se ubican en las primeras lineas de código, pero si se incumple esta normal no provoca error de compilación. Tampoco es obligatorio que se escriban con mayúsculas, es una convención que normalmente se mantiene entre programadores de Java. De momento basta con saber su existencia para cuando nos lo encontremos en ejemplos y ejercicios 😉

☕ **Java**

> Se usa la palabra `const` para crearlas. Cada lenguaje tiene su manera peculiar de hacerlo. En diversos lenguajes interpretados tradicionales no habían mecanismos para definirlas, sin embargo en la actualidad debido a sus ventajas se ha visto necesario su incorporación. A continuación un ejemplo de código Javascript, un lenguaje interpretado utilizado en los navegadores web.
>
> ```javascript
> // tradicional
> phone_es_code = 94;
> isSpain;
> var randomVar = "c";
> 
> // actual
> const PHONE_ES_CODE = 94;
> let isSpain;
> ```
>
> ¡Solo con el nombre bastaba para su existencia! En Javascript si usabas una variable sin declarar, dependiendo del contexto, asignaba el valor más adecuado. Incluso podias usar la palabra ```var```, pero se generaban problemas de "contexto" (tranquilos, un concepto que se ve con la práctica y que ahora apenas no molesta). Parece una locura, pero en diversas situaciones es ventajoso usar tipado débil. En los últimos años aparecieron las palabras ```const``` y ```let```, uno para declarar constantes y el otro para variables modificables.
>



---

🎲 **Ejercicios**

> - ¿Cuánto sabes de variables?



## 2. Operadores

Hemos visto como declarar y asignar variables ¿pero habrá que hacer algo con ellas?. Comencemos con los operadores

### 2.1. Aritméticos

```java
int ingresos = 1000;
int deudas = 600;
int finDeMes = 1000 - 600;
System.out.println("Solamente ahorras " + finDeMes + " euros al mes");
```

Aquí una lista junto con un ejemplo de uso

| Operador | Operación                    |
| -------- | ---------------------------- |
| `+`      | suma                         |
| `-`      | resta                        |
| `*`      | multiplicación               |
| `/`      | división entera              |
| `%`      | módulo, resto de la división |
| `^`      | potencia                     |

```java
int num01 = 5;
int num02 = 2;

int suma = num01 + num02;
int resta = num01 - num02;
int mult = num01 * num02;
int div = num01 / num02;
int mod = num01 % num02;
int potencia = num01 ^ num02;

System.out.println(suma); // 7
System.out.println(resta); // 3
System.out.println(mult); // 10
System.out.println(div); // 2
System.out.println(mod); // 0
System.out.println(potencia); // 25

```

Hay otro tipo de operados que son los de incremento y decremento. Permiten de forma sencilla sumar o restar 1 unidad.

```java
int cont = 5;
cont = cont + 1; //6
cont ++; //7
cont ++; //8
cont --; //7
```

Sobretodo son usados con los "bucles" que los veremos más adelante.

### 2.2. Lógicos

Son muy usados en las estructuras de control y bucles. Hay que tener muy claro como funcionan los operadores lógicos. A continuación mostramos en tablas la información de estos operadores junto con un ejemplo.

| Operador | Operación Lógica |
| -------- | ---------------- |
| `&&`     | AND              |
| \|\|     | OR               |
| `==`     | EQUAL            |
| `!=`     | NOT EQUAL        |

| variable 1 | variable 2 | &&    | **\|\|** | ==    | !=    |
| ---------- | ---------- | ----- | -------- | ----- | ----- |
| false      | false      | false | false    | true  | false |
| true       | true       | true  | true     | true  | false |
| true       | false      | false | true     | false | true  |
| false      | true       | false | true     | false | true  |

```java
boolean logic01 = true;
boolean logic02 = false;

System.out.println(logic01 && logic02); // false
System.out.println(logic01 || logic02); // true
System.out.println(logic01 == logic02); // false
System.out.println(logic01 != logic02); // true

int num01 = 1;
int num02 = 2;

System.out.println(num01 == num02); // false
System.out.println(num01 != num02); // true
```



---

🎲 **Ejercicios**

> - Veamos si sabes calcular el resultado de estas operaciones lógicas
> - ¿Qué hace cada operador?



## 3. Estructuras de Control



### 4.1. CondicionalesCo

Estas estructruas comprueban una condición que determina que bloques de código se ejecutan.



#### 4.1.1. Simple

Con if podemos comprobar una única condición

```java
int num = 5;
if(num > 3) {
   System.out.println("Es mayor que 3");
}
```

Dentro de lso parentesis del if se halla la condición. Ésta es una operación lógica cuyos únicos resultados son verdadero o falso, o bien true o false. Si la condición es verdadera se ejecuta el código entre llaves.



#### 4.1.2. Doble

Un if puede ir acompañado de un else. Permite indicar que hacer cuando la condición sea falsa.

```java
int num = 5;
if(num > 3) {
   System.out.println("Es mayor que 3");
} else {
   System.out.println("Es menor o igual que 3");
}
```



#### 4.1.3. Múltiple

Cuando queremos comprobar múltiples condiciones concatenamos multiples else if. Si encuentra una condición que se cumple, no comprueba las siguientes restantes.

```java
int num = 70;
if(num < 50) {
   System.out.println("Es menor que 50");
} else if(num === 70) {
   System.out.println("Es igual a 70");
} else if(num === 80) {
   System.out.println("Es igual que 80");
} else {
   System.out.println("Ninguna de las condiciones anteriores");
}

// Estos son los mensajes que mostraría por consola
// 'Es igual a 70'
```

Cuidado al concatear varias condiciones if seguidas. Comprobará todas las condiciones hasta el final.

```java
int num = 70;
if(num < 50) {
   System.out.println("Es menor que 50");
}
if(num === 70) {
   System.out.println("Es igual a 30");
}
if(num === 80) {
   System.out.println("Es igual que 80");
} else {
   System.out.println("Ninguna de las condiciones anteriores");
}

// Estos son los mensajes que mostraría por consola
// "Es igual a 70"
// "Ninguna de las condiciones anteriores"
```

Hay otra estructura que es switch case que permite hacer condiciones múltiples.

```java
char opcion = 'b';
switch(opcion) {
   case 'a':
      System.out.println("Has elegido la opción A");
   break;
   case 'b':
      System.out.println("Has elegido la opción B");
   break;
   case 'c':
      System.out.println("Has elegido la opción C");
   break;
   default:
      System.out.println("Lo lamentamos. O bien has indicado la opción en mayúsculas o no está disponible.");
   break;
}
```



----

🖥️ **Codificar**

> - Selección if
> - Selección if else
> - Selección switch case



### 4.2. Repetición / Bucles

Permite un bloque de código se repita mientras se cumple una condición. Si deja de cumplirse no se ejecuta el código y el programa sigue su curso.



#### 4.2.1. while

```java
int num = 2;

while(num > 0){
   num = num - 1;
}

System.out.println("Fin del bucle");
```

Vamos hacer una traza para entenderlo mejor:

- Declaramos y asignamos 2 a la variable `num`.
- Llegamos al `while`. La condición es ver si num es mayor que 0.
- Al ser cierto se ejecuta el bloque de código que hay entre las llaves del `while`.
- Ejecutamos la linea `num = num - 1`. Ahora num vale 1.
- Llegamos al final de la llave y de nuevo nos vamos a la condición del `while`
- Ahora `num` vale 1. La comprobación es `1 > 0`, esta sigue siendo verdadera.
- De nuevo es ejecutado el bloque de codigo del `while` y `num` cambia a valor 0.
- Esta vez `while`comprueba `0 > 0`. Por tanto no se cumple. Deja de ejecutarse el bloque de código que tiene el while.
- Finalmente el prograam sigue su cruso. Vemos por pantalla el mensaje 'Fin del bucle'



#### 4.2.2. do while

```java
int num = 2;

do{
   num --;
}while(num > 0);

System.out.println("Fin del bucle");
```

Funciona igual que el while, pero con una única diferencia. Primero se ejecuta el bloque de código y luego se comprueba condición. Esto hace que el bucle se ejecute al menos 1 vez. Con while podía pasar que nunca se ejecutase. Veamos este ejemplo.

```java
int num = 0;

while(num != 0) {
   System.out.println("Dentro de while");
}

do{
   System.out.println("Dentro de do while");
}while(num != 0)

```

Nunca mostrará por pantalla el mensaje 'Dentro de while', mientras que el mensaje 'Dentro de do while' solo se ejecuta al principio ¿Por qué? do while comprueba la condición al final.



#### 4.2.3. for

```java
int cont = 5;
int result = 0;

for(int i = 0; i<cont; i++) {
   result = result + i;
}

System.out.println("La suma de los 5 primeros numeros es " + result);
```

El for tiene una condiciones dividida en 3 partes separadas por ";"

- int i = 0 - Definimos y asignamos una variable. Solo podemos usarla dentro del bucle. Nos puede servir a modo de índice.
- i<cont - La condición del bucle. Funciona de la misma forma que while. Si cumple la condición sigue iterando.
- i++ - Una vez que termine de ejecutar el bloque de código, podemos operar con la variable que inicializamos antes. En este caso incrementamos su valor en 1.

Nos permite hacer bucles mucho más controlados



#### 4.2.4. Saltos

¿Podemos dentro de un bucle parar o saltarnos la irteración? ¡claro que si! Te sorprenderá, pero muchos programadores senior no conocen esta utilidad de los bucles.

```java
// Vamos a sumar los 100 primeros número pares

int cont = 0;
int result = 0;

while(cont < 100) {
   cont ++;
   if(cont % 2 != 0) // si no es par pasamos a la siguiente iteración usando "continue"
      continue;
   result = result + cont;
}

System.out.println("La suma de los 100 primeros númro pares es " + result);

```

```java
// Cuando la cantidad a sumar supere el 100 nos salimos del bucle

int cont = 0;
int result = 0;
while(true) { // itera de forma infinita, la condición va a ser siempre verdadera
   cont ++;
   result = result + cont;
   if (result > 100)
      break;
}
System.out.println("La suma de los 100 primeros númro pares es " + result);

```

🖥️ **Codificar**

> - Mostrar los 100 primeros números impares
> - Visualizar una cuenta atrás
> - La serie de Fibonacci



🎲 **Ejercicios**

> - Test para comprobar conocmientos sobre el tema
