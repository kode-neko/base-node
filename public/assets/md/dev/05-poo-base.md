[TOC]

# POO - Base



## 1. Introducción

La Región de Murcia nos ha pedido hacer una aplicación para gestionar los albergues de animales de la comunidad. Antes de nada, nos ponemos a recoger información de que elementos nos encontramos en los dichos albergues

| Elementos  | Propiedades                                                  | Acciones                           |
| ---------- | ------------------------------------------------------------ | ---------------------------------- |
| gatos      | color, raza, personalidad, collar,                           | ronronear, lamer, maullar, adoptar |
| edificios  | plantas, puertas, despachos, aparcamiento                    | trabajar, aparcar                  |
| gateras    | tamaño, color paredes, rejillas, entradas, capacidad, interna/externa | introducir, sacar                  |
| vehículos  | marca, capacidad, tipo, gasolina/diesel                      | introducir, sacar, conducir        |
| cuidadores | color ojos/pelo, estatura, peso, nombre, experiencia         | comer, beber, respirar, cuidar     |
| perreras   | tamaño, color paredes, rejillas, entradas, capacidad, interna/externa | introducir, sacar                  |
| perros     | color, raza, personalidad, collar,                           | lamer, ladrar, jugar, adoptar      |
| medicinas  | uso, cantidad, prospecto, vacunas                            | curar, vacunar                     |

La POO permite representar en código "elementos" con sus propiedades y acciones. Estos elementos los llamamos "objetos".

En la tabla anterior sacamos una serie de características del albergue, pero no todas son necesarias para el programa. Vamos a abstraer cuales son más relevantes. De momento la diputación de Murcia lo que quiere es gestionar las adopciones, por tanto quiere saber cuantos animales hay, la capacidad de los albergues y los cuidadores disponibles.

| Objeto     | Propiedades                                          | Acciones                                      |
| ---------- | ---------------------------------------------------- | --------------------------------------------- |
| gatos      | id, nombre, edad, sexo, raza, personalidad, cuidados | adoptar, obtener informe                      |
| perros     | id, nombre, edad, sexo, raza, personalidad, cuidados | adoptar, obtener informe                      |
| cuidadores | dni, nombre, edad, experiencia                       | asignar animal, desasignar animal             |
| gateras    | capacidad, interna/externa                           | introducir gato, sacar gato                   |
| perreras   | capacidad, interna/externa                           | introducir perro, sacar perro                 |
| edificios  | perreras, gateras                                    | incluir gatera/perrera, quitar gatera/perrera |

**📖 Abstracción** 

> Proceso de extraer la información relevante para incluirla en nuestro programa. El conjunto de esta información suele llamarse dominio.
>

¿Para que queremos información de los vehículos? ¿Y la información de las medicinas? respecto a este ultimo aspecto podemos destacar la vacunas, pro incluirlas como propiedad de los animales.



## 3. Clases & Objetos

Vamos a representar estos objetos usando diagramas UML. De momento verás muchos elementos que desconoces, a medida que avance la guia irás aprendiendolos.

Cada caja es lo que se llaman clases, las cuales permiten instanciar/crear objetos.

📖 **Clases**

> Plantillas que describen todas las características de los objetos. A partir de ellas se crean o instancian los objetos.

📖 **Objetos**

> Entidad que representa un concepto de la realidad. 

📖 **Instanciar**

> El proceso de crear objetos a partir de una clase.



## 4. Características

El mundo esta dominado por 3 cosas: Los gatos 🐱 los frikis 🎲 y Mercadona® 🏪 Vamos a honrar a nuestros amos felinos creando objetos en Java. Creemos la clase Gato.

### 4.1. Constructor

```java
public class Gato {
    public Gato() { // Construtor de la clase
    }
}

Gato gato = new Gato(); // Instanciar objeto
```

Toda clase ha de tener un constructor para poder instanciar objetos

📖 **Constructor**

> Método de una clase que permite instanciar objetos. En Java los constructores cumple los siguientes:
>
> - Tiene el mismo nombre que la clase
> - No se indica el tipo que devuelve
> - Pueden haber varios usando la sobrecarga de método

### 4.2. Atributos

Vamos añadir las propiedades que en POO se denominan atributos

```java
public class Gato 
    public int id;
    public String nombre;
    public int edad;
    public char sexo;
    public String raza;
    public String personalidad;
    public String[] cuidados;
    
    public Gato() { 
    }
    
    public Gato(
        int id, 
        String nombre, 
        int edad,
        char sexo,
        String raza, 
        String personalidad, 
        String[] cuidados
    ) {
        this.id = id; 
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.raza = raza;  
        this.personalidad = personalidad;
        this.cuidados = cuidados;
    }
}

String[] cuidados = {"Dieta baja en calorías", "Ejercicio físico"}
Gato gato = new Gato(
	1,
    "Godzilla",
    12,
    'm',
    "Negro común",
    "Tranquilo",
    cuidados
)
```

📖 **Atributos**

> Las propiedades de un objeto. Son variables 

### 4.3. Métodos

Te has dado cuenta que hemos usado la palabra `this`. Si en una clase queremos acceder a un atributo o método de la misma usamos esta palabra. 

Es normal en Java incluir como constructores uno vacio y otro para inicializar todos los atributos. Usando la sobecarga de funciones podemos crear tantos como necesidades tengamos.

Bueno, la clase Gato no es solo un contenedor de atributos, también tiene un comportamiento expresado a través de métodos.

```java
public class Gato {
    
    ...
    
    String propietario = "";
    
    public void adoptar(String nuevoPropietario) {
        if(propietario.isEmpty()) {
            this.propietario = nuevoPropietario;
        } else {
            System.out.println("El animal ya ha sido adoptado");
        }
    }
    
    public void getInforme() {
        System.out.println("Nombre: " + this.nombre);
        System.out.println("Edad: " + this.edad);
        System.out.println("Sexo: " + this.sexo);
        System.out.println("Raza: " + this.raza);
    }
    
}
```

📖 **Métodos / Operaciones**

> Las acciones que puede realizar el objeto. Se usan funciones para expresarlas.
>

### 4.4. Modificadores de Acceso

Te has dado cuenta que en el constructor, atributos y métodos se les antepone la palabra public. Esto se conoce como "modificadores de acceso" o visibilidad, permite indicar quienes pueden manipular dicho elementos una vez creado el objeto.

```java
public class AgenteSecreto {
    public String nombreFalso;
    private String nombreReal;
    
    public AgenteSecreto(
        String nombreFalso, 
        String nombreReal
    ){
        this.nombreFalso = nombreFalso;
        this.nombreReal = nombreReal;
    }
    
    public String getNombreReal() { 
        return this.nombreReal;
    }
}

AgenteSecreto agente = new AgenteSecreto("James Bond", "Eusebio García");
System.out.println(agente.nombreFalso);
System.out.println(agente.nombreReal); // Error de compilación
System.out.println(agente.getNombreReal); 
// Las propiedades y métodos de la clase son las únicas que acceden a las variables privadas
```

También observamos que la propia clase tiene una visibilidad, pero lo veremos más adelante con la modularización con los namespace.

📖 **Modificadores de Acceso / Visibilidad**

> Aspecto que tiene que tener todo atributo y método de una clase. Aunque depende bastante del lenguaje de programación, normalmente las encontramos de 3 tipos:
>
> - **public:** Podemos acceder a ellos a través del objeto
> - **private:** Solo tiene acceso los mñetodos y atributos de la misma clase
> - **protected:** Pueden acceder tanto la propia clase como aquellas si todas comparten el mismo namespace

☕ **Java**

> Lo normal es crear todos los atributos como privados y que sean accesibles mediantes métodos get y set, popularmente referidos como los "setters" y los "getters". Normalmente se sigue este convencionalismo en la mayoría de los lenguajes, pero recordemos que cada uno tiene sus peculiaridades.
>
> ```java
> public class AgenteSecreto {
>     private String nombreFalso;
>     private String nombreReal;
>     
>     public AgenteSecreto() {}
>     
>     public AgenteSecreto(
>         String nombreFalso, 
>         String nombreReal
>     ){
>         this.nombreFalso = nombreFalso;
>         this.nombreReal = nombreReal;
>     }
>     
>     public String getNombreFalso() { 
>         return this.nombreFalso;
>     }
>     
>     public String getNombreReal() { 
>         return this.nombreReal;
>     }
>     public void setNombreFalso(String nombreFalso) { 
>         this.nombreFalso = nombreFalso;
>     }
>     
>     public void setNombreReal(String nombreReal) { 
>         this.nombreReal = nombreReal;
>     }
> }
> ```
>



🖥️ **Codificar**

> - Completar la clase Gato
> - Crear la clase Cuidador
> - Crear la clase Gatera

🎲 **Ejercicios**

> - ¿Cuánto sabes de POO?
> - ¿Verdad o mentira?



### 4.3. Conceptos

Tras tener unas nociones sobre los objetos vamos a profundizar un poco más sobre su teoría. Veamos que es la estado, identidad y comportamiento de un objeto:

📖 **Estado**

> El valor de los atributos y variables internas de un objeto. Éste muta cada vez que se cambia alguno de sus valores.

📖 **Identidad**

> Propiedad que permite a un objeto ser único, a pesar de que puedan tener el mismo estado.

📖 **Comportamiento**

> Conjunto de acciones de un objeto, expresado a través de sus métodos.

```java
AgenteSecreto agente01 = new Agente("Motoko Kusanagi", "Rafaela López");
AgenteSecreto agente02 = new Agente();

agente02.setNombreFalso("Ethan Hunt");
agente02.getNombreReal("Demetrio Pérez");
// Hemos cambiado 2 veces el estado del agente02

agente02.setNombreFalso("Motoko Kusanagi");
agente02.getNombreReal("Rafaela López");
// Hemos cambiado de nuevo el estado del agente02
// Tiene le mismo estado que el agente01

if(agente01 === agente02){
    System.out.println("Tienen la misma identidad");
} else {
    System.out.println("Las identidades son distintas"); 
}
// Sin embargo poseen la misma identidad
// El mensaje por pantalla es: "Las identidades son distintas"
```

¿Que ocurre al comprara 2 objetos? En realidad la variable de un objeto guarda lo que se conoce como "referencia". Cada variable tiene un espacio en la memoria del ordenador donde se almacena su valor. Si tenemos la variable int num = 3, cuando accedemos a ellas recupera el valor que tiene en memoria que es el 3. Con los objetos lo que recuperamos es la posicón en memoria, la dirección en memoria donde está albergado el objeto. También pasa lo mismo con los vectores.

img

📖 **Referencia**

> Valor que hace referencia a una dirección o posición en la memoria del equipo. Si vamos a ese lugar encontraremos toda la información de la variables. Normalmente los vectores y objetos almacenan como valor una referencia.

Más adelante veremos otros conceptos teóricos más avanzados como el polimorfismo y la herencia. Como ya sabéis Roma no se construyó en un día y poca a poco, gracias a ejemplos y ejercicios nos convertiremos en maestros ;)



🎲 **Ejercicios**

> - Estado - Identidad - Comportamiento



## 6. POO como Paradigma

Vamos a ponernos serios definiendo la POO.

📖 **Programación Orientada a Objetos**

> Paradigma de programación que trabaja con un conjunto de entidades llamadas objetos.
>
> - Representan elementos o conceptos del mundo real.
> - Para crearlos necesitamos definir una clase, que es una plantilla de la que parten todos.
> - Cada uno posee un conjunto de atributos y acciones.
> - Los atributos son variables internas del objeto. Su conjunto se llama estado.
> - Las acciones son métodos, otorga al objeto un comportamiento.
> - Cada objeto es único, poseen una identidad propia.
> - Los objetos se relacionan entre ellos. A través de sus acciones envían mensajes.
> - Pueden crearse jerarquías de clases para compartir o extender el comportamiento.

Vemos en al definición 2 conceptos que no habíamos visto antes, las relaciones y la herencia. En los siguientes temas se verán en detalle ya que son 2 temas que tienen bastante miga.

---



🖥️ **Codificar**

> - Crear la clase Perro
> - Crear la clase Perrera
> - Crear la clase Edificio
> - Modelar Centro Geriátrico
>

🎲 **Ejercicios**

> - Verdadero o falso
>
> - Test para comprobar conocmientos sobre el tema
>

