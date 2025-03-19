# SOLID principles

1. Single responsibility
2. Open-closed
3. Liskov substitution
4. Interface segregation
5. Dependency inversion

## Single Responsability(Responsabilidad unica)
El Principio de Responsabilidad Única establece que una clase o módulo debe tener un único propósito. Por ejemplo, si tienes una clase Wallet, esta solo debería implementar funcionalidades relacionadas con la billetera. Es válido llamar a otras funcionalidades, pero no deberían estar escritas dentro de esa clase.

## Open-closed Principle

"Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión, pero cerradas para su modificación.", 

### 🔍 ¿Qué significa esto?
Quiere decir que deberíamos poder agregar nuevas funcionalidades a un sistema sin necesidad de modificar el código existente. Esto ayuda a evitar errores en código que ya funciona y mejora la mantenibilidad del software.

## Liskov substitution 

"Los objetos de una clase derivada deben poder reemplazar a los objetos de su clase base sin afectar la corrección del programa."

### 🔍 ¿Qué significa esto?
Si tienes una clase base y varias clases derivadas, las clases hijas deben poder sustituir a la clase padre sin romper la funcionalidad.

## Interface segregation

"Los clientes no deberían verse obligados a depender de interfaces que no usan." 

En otras palabras, una interfaz debe ser específica para cada caso de uso y no forzar a las clases a implementar métodos que no necesitan.

En lugar de usar herencia y obligar a todas las clases a implementar métodos innecesarios, usamos composición para asignar solo las funcionalidades necesarias. ¡Más modular, flexible y limpio! 🚀

** Revisa como usa composicion js **

## Dependency Inversion 

"Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones."

"Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones."

**💡 En términos simples**: En lugar de que una clase dependa directamente de otra clase concreta, ambas deben depender de una interfaz o abstracción.


