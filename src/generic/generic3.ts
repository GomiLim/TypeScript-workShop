interface Vegitable {
  v: string;
}

interface Meet {
  m : string;
}

interface Cart2<T> {
  getItem() : T extends Vegitable ? Vegitable : Meet
}

const cart1 : Cart2<Vegitable> = {
  getItem() {
    return {
      v: ''
    }
  }
}

cart1.getItem();