# 2daw-abp-p1-s3-example
Exemple de suport per l'sprint 3 del projecte 1 de 2n de DAW 

## Vite

Projecte [Vite](https://vitejs.dev/guide/) sense frameworks (*Vanilla JavaScript*) que inclou:

 - Configuració amb variables d'entorn
 - Sistema propi de rutes amb [`router`](vanilla-wannapop/src/lib/router.js)
 - Sistema propi de logs amb [`logger`](vanilla-wannapop/src/lib/logger.js)
 - Estils CSS amb [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/vite/#import-bootstrap)
 - Motor de plantilles [Nunjucks](https://mozilla.github.io/nunjucks/getting-started.html)

### Config

Les **variables d'entorn** estan definides al fitxer `.env` (veure [exemple](vanilla-wannapop/.env.example)).

La configuració de Vite està al fitxer `vite.config.js` i allà hem definir les **variables d'entorn** que necessita la nostra aplicació i configurar altres aspectes de l'aplicació com, per exemple, els **plugins** instal·lats.

En un entorn Vite, definim les variables d'entorn dins de l'objecte `process.env` i podem accedir a les variables des del codi JavaScript. Per exemple:

```js
const debug = process.env.APP_DEBUG ? "on" : "off"
```

### Router

L'aplicació Vite és una *SPA* (*Single Page Application*). Això vol dir que renderitzem una pàgina HTML i, a diferència d'una aplicació al costat servidor, modifiquem la mateixa pàgina HTML de forma dinàmica i no carreguem noves pàgines.

Això genera un inconvenient de navegació per l'aplicació web perquè no tenim una ruta per cada pàgina i no podem compartir l'enllaç d'una pàgina específica de l'aplicació. Per això, hem implementat un sistema propi de rutes per tenir una *SPA* "multi-pàgina".

El sistema propi de rutes s'encarrega de mostrar les pàgines i actualitzar l'historial del navegador de forma dinàmica quan cliquem als enllaços. En aquesta aplicació d'exemple, diferenciem enllaços interns i externs, afegint l'atribut `route` dins de l'etiqueta `<a>` a les pàgines però podríem utilitzar un altre criteri per diferenciar-les.

#### Pàgines

Les pàgines estan desades al directori `pages` i la generació de cada pàgina requereix de, com a mínim, dos fitxers: un **fitxer HTML** amb la plantilla de la pàgina i un **fitxer JS** amb la lògica de renderitzat i interacció (`renderHTML` i `loadScript`).

Podem utilitzar el mètode `renderString` del motor de plantilles **Nunjucks** per agilitzar la generació estàtica de **pàgines** i la generació dinàmica de **components** dins de cada pàgina.

#### Rutes

La definició de les rutes i inicialització del sistema "multi-pàgina" està al fitxer [main.js](vanilla-wannapop/src/main.js). Cada cop que creem una nova pàgina, hem d'afegir la pàgina i definir la seva ruta en aquest fitxer.

### Logger

L'aplicació té un sistema propi de logs que, internament, utilitza l'objecte `console` (natiu de JavaScript), i que és configurable amb les variables d'entorn `APP_DEBUG` i `LOG_LEVEL`.

```js
// Exemple
import logger from '../../lib/logger'
logger.debug("A debug message")
logger.info("An info message")
logger.warn("A warning message")
logger.error("An error message")
```

Si tenim la depuració activada (`APP_DEBUG=true`) i configurem el nivell de logs "debug" (`LOG_LEVEL="debug"`), aleshores es mostraran tots els logs de l'exemple a la consola de JavaScript. En canvi, si definim un nivell superior de criticitat ("info", "warning" o "error"), no apareixeran els logs de nivells inferiors. Òbviament, si desactivem la depuració, no apareixerà cap log.

## Dependencies

Instal·lar les dependències de l'aplicació amb la següent comanda:

```bash
npm install
```

IMPORTANT: Recordeu configurar les variables d'entorn ABANS de continuar.

## Run

Executar l'aplicació amb la següent comanda:

```bash
npm run dev
```

I obrir l'adreça http://127.0.0.1:5173/ al navegador web.

## Deployment

Desplegar l'aplicació amb la següent comanda:

```bash
npm run build
```

I obrir el fitxer `index.html`, generat dins del directori `dist`, al navegador web.