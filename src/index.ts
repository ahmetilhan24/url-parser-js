import IURL from "./interfaces/url.interface";

export default class UrlParser {
  private url: IURL;
  constructor() {
    if (typeof window !== "undefined") {
      this.url = new URL(window.location.href);
    } else {
      this.url = new URL(
        "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password"
      );
      console.error("window is not defined");
    }
  }
  public getProtocol(): string {
    return this.url.protocol.split(":")[0];
  }
  public getHost(): string {
    return this.url.host;
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
    return this.url.search.split("?")[1]?.split("&");
  }
  public getParams(): string[] {
    const params = this.url.pathname
      .split("/")
      ?.slice(1)
      .map((param) => "/" + param);
    return params;
  }
  public getHashes(): string[] {
    return this.url.hash.split("#").slice(1);
  }
  public getSubdomain(): string {
    return this.url.hostname.split(".")[0];
  }
  public getHref(): string {
    return this.url.href;
  }
  public getPassword(): string {
    return this.url.password;
  }
  public getUsername(): string {
    return this.url.username;
  }
  public getAuth(): { username: string; password: string } {
    return {
      username: this.url.username,
      password: this.url.password,
    };
  }
}
