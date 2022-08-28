import IURL from "./interfaces/url.interface";

class UrlParser {
  public url: IURL;
  constructor() {
    if (typeof window !== "undefined") {
      this.url = new URL(window.location.href);
      this.init();
    } else {
      this.url = new URL("https://www.example.com:3000/parameter#test");
      //console.error("window is not defined");
    }
  }
  init(): void {
    // @ts-ignore-start
    if ((process.client || process.browser) && window) {
      // @ts-ignore-end
      this.url = window.location.href;
      console.log("asdasd");
    }
  }
  public getProtocol(): string {
    return this.url.protocol.split(":")[0];
  }
  public getHostname(): string {
    let hostname: string = this.url.hostname;
    //for started www
    if (this.url.port) {
      hostname = hostname.split(":")[0];
    }
    return hostname;
  }
  public getPort(): number {
    return Number(this.url.port);
  }
  public getPathname(): string {
    return this.url.pathname;
  }
  public getQueries(): string[] {
    return this.url.search.split("?")[1].split("&");
  }
  public getHashes(): string[] {
    return this.url.hash.split("#").slice(1);
  }
  public getHost(): string {
    return this.url.host;
  }
  public getSubdomain(): string {
    return this.url.hostname.split(".")[0];
  }
}

const urlParser = new UrlParser();

console.log(urlParser.getSubdomain());
