# Url Parser Utils V1.0.0

_**URL parser for javascript**. With this package, you will be able to get all the information about the URL in the browser. This information is presented to you in a disaggregated form. You will not need to put forth any extra effort. 💪💪_

##### The returned `url` instance contains the following properties:

- `getProtocol`: The protocol scheme of the URL (e.g. `http || https`).
- `getAuth`: Authentication information portion (e.g. `{username: string, password: string}`).
- `getUsername`: Username of basic authentication.
- `getPassword`: Password of basic authentication.
- `getHost`: Host name with port number. The hostname might be invalid.(e.g. `localhost:8080`)
- `getHostname`: Host name without port number. This might be an invalid hostname. (e.g `localhost`)
- `getPort`: Optional port number. (e.g `3000`)
- `getPathname`: URL path. (e.g `/products`)
- `getParams`: URL params. (e.g. `["/param1", "/param2"]` || ["/"] => default)
- `getQueries`: Parsed object containing query string, unless parsing is set to false. (e.g `{page: 1, limit: 10, q: "search value"}`)
- `getHashes`: The "fragment" portion of the URL including the pound-sign (e.g.`["hash1"]`).
- `getHref`: The full URL. (e.g. `http://localhost:8080/ankara?query1=1&test=2#test`)
- `getSubdomain`: Get subdomain. (e.g. `beta`)

##### Usage (CSR or SSR project)

```js
import UrlParser from  "url-parser-js";

const urlParser = new UrlParser();
    console.group({
      getProtocol: urlParser.getProtocol(),
      getHost: urlParser.getHost(),
      getHostname: urlParser.getHostname(),
      getPort: urlParser.getPort(),
      getPathname: urlParser.getPathname(),
      getQueries: urlParser.getQueries(),
      getHashes: urlParser.getHashes(),
      getSubdomain: urlParser.getSubdomain(),
      getHref: urlParser.getHref(),
      getPassword: urlParser.getPassword(),
      getUsername: urlParser.getUsername(),
      getAuth: urlParser.getAuth(),
      getParams: urlParser.getParams(),
    });
  },
```

##### Example code structure

_with defensive code_

```js
public getQueries(): string[] {
    const isHaveQuery = this.url.search;
    let queries: string[] = [];
    if (isHaveQuery) {
      queries = this.url.search.split("?")[1]?.split("&");
    }
    return queries;
  }
```

_Powered by Ahmet İlhan_
