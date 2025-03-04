# 📌 Resumen de `import` y `export` en JavaScript (ES Modules)

## 1️⃣ **¿Qué son los módulos en JavaScript?**
Los módulos permiten dividir el código en archivos reutilizables, mejorando la organización y mantenimiento del proyecto.

---

## 2️⃣ **Exportación de Módulos (`export`)**
Se usa para hacer que funciones, variables u objetos estén disponibles en otros archivos.

### **Exportación nombrada (`export`)**
Exporta múltiples valores en un módulo.

```js
// math.js
export const PI = 3.1416;

export function add(a, b) {
  return a + b;
}
```
