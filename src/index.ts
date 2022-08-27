import { URL } from "url";

class UrlParser {
  constructor(public url?: URL) {
    this.init();
  }
  init(): void {
    // @ts-ignore-start
    if (process.client || process.browser || true) {
      // @ts-ignore-end
      console.log("asdasd");
    }
  }
  public parseProtocol() {
    console.log(this.url?.protocol);
  }
}

const urlParser = new UrlParser(
  new URL("https://www.linkedin.com/notifications")
);

urlParser.parseProtocol();
