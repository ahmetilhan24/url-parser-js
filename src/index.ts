import IURL from "./interfaces/url.interface";

class UrlParser {
  public url: IURL;
  constructor() {
    if (typeof window !== "undefined") {
      this.url = new URL(window.location.href);
      this.init();
    } else {
      this.url = new URL("https://www.example.com:3000/parameter");
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
    if (hostname.startsWith("www")) {
      hostname =
        this.url.hostname.split(".")[1] + "." + this.url.hostname.split(".")[2];
    }
    // for subdomain
    if (hostname.split(".").length === 3) {
      hostname =
        this.url.hostname.split(".")[1] + "." + this.url.hostname.split(".")[2];
    }
    return hostname;
  }
  public getPort(): number {
    return Number(this.url.port);
  }
}

const urlParser = new UrlParser();

console.group(urlParser.getPort());
