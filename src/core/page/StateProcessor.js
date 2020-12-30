import {debounce} from '@core/utils';

export class StateProcessor {
  // saver is obj that can be localstorage or server...
  constructor(client, delay = 300) {
    this.client = client;
    this.listen = debounce(this.listen.bind(this), delay);
  }


  listen(state) {
    this.client.save(state);
  }

  get() {
    return this.client.get();
  }
}
