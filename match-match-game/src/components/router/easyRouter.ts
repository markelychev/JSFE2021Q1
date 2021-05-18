export default class Router {
  private routes: Map<string, Function> = new Map();
  constructor() {
    window.addEventListener('hashchange', this.onNavigate)
  }

  addRoute = (path: string, callback: Function) => {
    this.routes.set(path, callback);
    return this
  }

  remove = (path: string) => {
    this.routes.delete(path);
    return this;
  }

  private onNavigate = () => {
    let callback = this.routes.get(window.location.hash.replace(/^#\//, ""));
    if (callback) {
      callback();
    }
  }
}