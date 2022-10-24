import * as powers from './powers';
import * as symbols from './symbols';

const create = (): Map<string, number> => {
  const pw = new Map(Object.entries(powers));
  return new Map<string, number>(
    Object.entries(symbols).map(
      ([key, sy]) => [sy, <number>pw.get(key)]
    )
  );
};

export default create;