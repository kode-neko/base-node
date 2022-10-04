[TOC]

# POO - Relaciones & Herencia

Hasta ahora hemos trabajado con objetos aislados. Hemos creado todas las clases pero están aisladas. En realidad se generan asociaciones y jeraraquías de clases.



## 1. Asociación

Continuemos con ele jemplo del albergue. Tenemos la clase Gato y Gatera

img

¿Cómo los asocias? Las gateras albergan un conjunto de gatos. Veamos a continuación como pdoemos asociarlos.



### 1.1. Agregación

```java

```

Esta forma de relación se caracteriza en que si borramos el objeto agtera la lista de gatos sigue existiendo.



### 1.2. Composición

```
```

En esta ocasión si borramos la gatera también desaparecen todos los gatos.

1.3. ¿Cuándo Utilizarlo?

Pueden ocurrirte la siguientes situaciones

- El arquitecto del sistema te pasa el diagrama UML indicandote el tipo de asociación. Tu solo obedeces y tecleas. Lo normal es que el arquitecto sea comprensivo, atendiendo a dudas o explique amablemente el pro qué de la decisión. Pero por desgracia algunos no han aprendido nada de civismo y ética profesional.
- La experiencia te hará convertirte en un caballero Jedi. Usando tu instinto sabrás cual será la mejor solución. Pero cuidado, tendrás que justificarla con argumentos y no por que al tirar la moneda aparezca cara o cruz.

Tomarás la decisión dependiendo con quienes trabaje o tue xperiencia. Tranquilo, todos nos hemos confuncdido o acertado, lo importante es aprender de todas nuestras dicisiones y disfrutar programando con tu equipo ;) 



### 1.3. Multiplicidad

www



## 2. Dependencia

Resulta que vamos a considerar que la experiencia de los cuidadores se mide por puntos, como en un juego de rol. Estos puntos los obtiene por los cursos que realice. Creamos la clase Experiencia y en Cuidador el método addExperiencia() 

img

```
```

Vemos que al método addExperiencia() tiene como parámetro un objeto Curso. La idea es que este método calcule los puntos de experiencia del curso y los sume en el atributo experiencia del objeto Cuidador. Si por cualquier motivo cambiase la clase Curso, nos obliga a actualizar el método addExperiencia para que continue funcionando.

A diferencia de las asociaciones, nos avisa de que una clase puede verse afectada si hay cambios en otra. Con las asociacioens puede pasar lo mismo, pero la clase guarda un conjunto de objetos de la otra clase



## 3. Herencia

Ya te distes cuenta de que hay clases "repes". Perro y Gato son iguales, tambiñen pasa lo mismo con la Gatera y la Perrera. Disponemos de varios mecanismos como puede ser la herencia.

img

```java
```

 Nos ayuda a compartir comportamiento y a al vez a cerar el suyo propio.



## 4. Clases Abstractas

Ahora queremos que neustros aniamles emitan un sonido. Podriamos crear el método maullar en Gato y el de ladrar en Perro. Pero imaginate que los albergues tienen cerdos, hurones, burros... tenemos que acordarnos a la hroa de diseñar nuestro sistema un método específico. Para este caso usemos una clase abstracta de la que herederan el resto de aniamels. Estas clases indican que mñetodos tienen que implementar sus hijos.

img

```java
```

Cada vez que añadamos un animal nuevo ya no se nos olvidará escribir el sonido que emiten.



## 5. Interfaces

Una forma de heredar que apenas se usa cuando es novato, pero fundamental cuando tienes un nivel senior o de arquitecto. En el siguiente ejemplo observamos que tenemos distintas formas de obtener información: a través de una base de datos, documento xml o uno de tipo json.

img

```
```



Las interfaces son meros contratos. La clase interfaz no implementa ningún código, solo indican que atributos y métodos como mínimo han de incluir los hijos.  Estamos en un nivel de programación bajo como para meternos en ellas en profundidad, de momento dejamos este ejemplo para hacerse una ligera idea de lo poderosas que pueden ser.

```java
// El usuario nada más de arrancar el programa puede decidir de donde leer información
// Por pantalla elije cual será la fuente de información
...
IDatos accesoDatos = new IDatosJson();

// Resulta que tenemos un método en la clase Mascota que permite obtener su historial
...
Animal gato = new Gato();
gato.setId(100); // Tenemos un gato guardado con el id con valor 100
gato.getHistorial(accesoDatos);
```

El lugar donde se usan interfaces en profundidad son con los "patrones de diseño software". Un concepto muy avanzado al que uno se adentra tras ser machacado durante horas en el diseño e implementación de objetos. Además antes has de haberte peleado con streams y accesos a datos. A partir de ahí tu experiencia te ayudará a encontrar soluciones eficientes y cómodas, recurriendo a la poderosa herramientas de las interfaces. 



## 6. Conceptos Avanzados

w

