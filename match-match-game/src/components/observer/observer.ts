class Observer {
  private listeners: Map<string, Function[]> = new Map();

  subscribe = (event: string, callback: Function) => {
    const calbacks = this.listeners.get(event) ?? [];
    calbacks.push(callback);
    this.listeners.set(event, calbacks);
  };

  notify = (event: string, data: string) => {
    this.listeners.get(event)?.forEach((callback) => callback(data));
  };
}

const observer = new Observer();

export default observer;
