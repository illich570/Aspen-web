Sitio web desarrollado para una empresa de consultoria judicial llamada Aspen, hecha con Next.js

## Para Desarrollar

### Variables de entorno

El proyecto cuenta con 2 variables de entorno para conectarse de manera exitosa al CMS utilizado para este desarrollo: GraphCMS.

Se deben de configurar creando un archivo nuevo llamado .env dentro de la carpeta raiz del repositorio y colocarlos dentro del archivo para realizar de manera exitosa la conexión hacia el manejador de contenido.

### Para levantar el proyecto en una maquina local:

Abrir una consola de comandos, despues de bajar el repositorio en la maquina local y correr el siguiente script:
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) dentro de tu navegador de preferencia para ver los resultados.

De la misma forma, para probar la version de producción en una maquina local, en al consola de comandos usas el siguiente script:
```bash
npm run build
```

Y Despues de generarse:
```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000) dentro de tu navegador de preferencia para ver los resultados.

## Para revisar y administrar el manejador de contenido

Se debe dirigirse a [GraphCMS](https://graphcms.com/) y autenticarse mediante google con los datos suministrados al configurar el manejador de contenido (Correo del cliente: aspenlegalweb@gmail.com)

Al entrar, la primera opción disponible (resaltada en el cuadro amarillo) es el Schema, al entrar alli, podra modificarse la estructura de cada uno de los modelos utilizados y requeridos para la organización de la información de este desarrollo.
![Screenshot_39](https://user-images.githubusercontent.com/49048159/133852653-17646a41-495c-4b01-b748-6355179fff26.png)

En la siguiente opción, encontramos al Content(recuadro de color verde), en donde veremos todos los esquemas previamentes construidos para suministrarle los registros necesarios a guardar, cada esquema tendrá su tabla en el cual podrá verse de manera práctica la información introducida con el paso del tiempo.

![Screenshot_40](https://user-images.githubusercontent.com/49048159/133853313-390f3a59-dc99-445c-bd75-1b4ac604962d.png)

Por otra parte, en la sección de Assets, se encontraran todo los archivos multimedia que se suban al manejador de contenidos.
![Screenshot_41](https://user-images.githubusercontent.com/49048159/133865108-88cf7fdb-b3c7-4eef-ab60-2465af69f77b.png)

En esta sección llamada Api Playground, se pueden probar los queries de graphQL antes de ser implementados o usados dentro del proyecto.
![Screenshot_42](https://user-images.githubusercontent.com/49048159/133865128-9fa480c5-27aa-4120-8888-4b637119325c.png)

### Ubicación de las variables de Entorno

En la opción llamada settings (abajo a la izquierda de la imagen) se pueden ver la configuración del CMS, la primera URL llamada content API es 1 de las 2 variables de entorno que requiere el proyecto para levantarse correctamente, de aqui pueden copiar y pegar el valor para introducirlo en el archivo .env
![url_API](https://user-images.githubusercontent.com/49048159/133865190-a7584284-0182-4db1-9508-4c70e86ba7d4.png)

Para conseguir la 2da variable requerida, nos iremos al final de esta sección de configuracion, y veremos un espacio llamado Permanent Auth Tokens(debe de existir 1 solamente utilizado por el proyecto), al seleccionarlo veremos la información mas detallada de este token.
![Screenshot_43](https://user-images.githubusercontent.com/49048159/133865265-fe81b5f6-d751-4d56-becc-da4260c2c5dd.png)

Desde esta sección podemos configurar que tanta permisología tiene este token con respecto a consumir o mutar la información, actualmente solo fue configurado para consumir, asi que solamente se requiere copiar el valor de este token y colocarlo en el archivo .env
![Screenshot_44](https://user-images.githubusercontent.com/49048159/133865267-e9550e3a-c29e-4bf3-8286-020dc7ecc1cb.png)


El archivo .env debe de quedar de la siguiente forma:

```bash
NEXT_PUBLIC_TOKEN_GRAPHCMS=VALOR_DEL_TOKEN
NEXT_PUBLIC_URL_GRAPHCMS=VALOR_URL_CONTENT_API
```

## Despliegue a producción

La manera más rapida y eficiente para desplegar un proyecto desarrollado con Next.js es mediante [Vercel](https://vercel.com). Solo deben de auntentificarse, vincular la cuenta de Github/Gitlab que contenga el repositorio y configurar las variables de entorno que requiere el proyecto para consumir la información, en el siguiente espacio:
![Screenshot_51](https://user-images.githubusercontent.com/49048159/133865793-de10a57f-c49e-47b7-a948-ea5a19f57dd5.png)

### Configuración de dominios

Una vez desplegado a producción, Vercel te dará automaticamente una URL para consultar el proyecto. Para configurar un dominio comprado anteriormente se entra a la siguiente opción:

![Screenshot_52](https://user-images.githubusercontent.com/49048159/133865874-0f7d31e3-6ae3-4345-9dce-efb16cad58db.png)

Desde aqui, agregamos el nuevo dominio al que queremos apuntar:
![Screenshot_53](https://user-images.githubusercontent.com/49048159/133865889-16f9c238-3724-4e5b-9dc5-10c8c3f6b348.png)

Sin embargo, no funcionará de manera automatica, faltará configurar desde el lado del proveedor del dominio los records o los nameservers, donde esta [página](https://kswanie21.medium.com/how-to-set-up-godaddy-domain-with-vercel-f42430ed4f6) da un paso a paso detallado del proceso. Una vez hecho esto, deberá a redireccionar correctamente el proyecto hacia el dominio configurado y estará listo.

