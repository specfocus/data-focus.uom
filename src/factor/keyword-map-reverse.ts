import * as keywords from './keywords';
import * as symbols from './symbols';

const create = (): Map<string, string> => {
  const sy = new Map(Object.entries(symbols));
  return new Map(
    Object.entries(keywords).map(
      ([key, kw]) => [kw, <string>sy.get(key)]
    )
  );
};

export default create;