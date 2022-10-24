import * as keywords from './keywords';
import * as symbols from './symbols';

const create = (): Map<string, string> => {
  const kw = new Map(Object.entries(keywords));
  return new Map(
    Object.entries(symbols).map(
      ([key, sy]) => [sy, <string>kw.get(key)]
    )
  );
};

export default create;