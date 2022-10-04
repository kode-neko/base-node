[TOC]

# Tema 08: Monitorización & Diagnóstico

### Distros para Diagnóstico

- [Kali Linux](https://www.kali.org/): Pensado para hacking ético y pen testing.
- [ArchStrike](https://archstrike.org/): Pensado para hacking ético y pen testing.
- [Rescatux](https://www.supergrubdisk.org/rescatux/): Para diagnóstico y arreglo del GRUB
- [Puppy Linux](https://puppylinux.com/): No es una distro de diagnóstico. Como ocupa poco tamaño y es muy liviano, está pensado para inspeccionar de forma rápida lo que ocurre en une quipo. Por ejemplo puede ser un fichero de configuración con mala sintaxis. Otra situación es comprobar el particionado del disco.



### Crear USB Arrancable

```bash
lsblk
sudo umount /dev/sdxx
sudo wget http://xxx/xxx/xxx -P [path_dest/] -O [new_name]
sudo dd bs=64M if=/[path_iso]/[name_iso] of=/dev/sdx conv=fdatasync status=progress
sudo eject /dev/s
```

1. Listar unidades
2. Desmontar pendrive
3. Descargar la ISO
4. Copiar la ISO al pen. No vamos a copiarlo a una partición del pendrive, sino a la unidad entera.

#### Notas

- No es muy verbose. Parece que se queda colgado pero no es así.

- Otra alternativa a `wget` es `curl`

  ```
  curl http://xxx/xxx/xxx -output [path_dest]/[new_name]
  ```

- No es necesario hacerlo con `wget`. Puedes usar el navegador e ir a la zona de descarga de la ISO. Una vez que la tengas en disco empezar con el comando `dd`



### Terminal

- [Top](https://soyadmin.com/sacandole-jugo-al-top/): Listado de procesos con todo tipo de información.
- [HTop](https://soyadmin.com/htop-excelente-herramienta-para-monitoreo-de-servidores/): Lo mismo que Top perpo más completo.
- [Nmon](https://soyadmin.com/nmon-un-sistema-de-monitorizacion-que-no-puede-faltarte-en-centos-6-y-7/): Muestra informes de distintos indicadores del sistema.
- [Iftop](https://soyadmin.com/monitorizando-nuestra-red-con-iftop/): Permite ver la actividad de las interfaces de red
- [Iotop](https://soyadmin.com/iotop-herramienta-para-monitoreo-del-uso-de-disco-en-linux/): Ver en tiempo real que procesos escriben y leen en disco



----



## 🎲 Ejercicios

- Crear un USB bootable con una distro de Linux. 
- Probar las distintas herramientas de diagnóstico de terminal. Elegir una de ellas y hacer un breve escritor de su utilidad.
- ¿Conoces otras herramientas? Investiga otras que puedan ser de utilidad.



## 📕 Bibliografía

- 5 Herramientas de Monitoreo para Linux que no deben faltar
  https://soyadmin.com/5-herramientas-de-monitoreo-para-linux-que-no-deben-faltar/
- Herramientas de línea de comandos para monitorizar GNU/Linux
  https://picodotdev.github.io/blog-bitix/2021/05/herramientas-de-linea-de-comandos-para-monitorizar-gnu-linux/

