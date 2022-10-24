import * as kw from './keywords';
import * as sy from './symbols';

export const KEYWORDS = [
  kw.YOTTA,
  kw.ZETTA,
  kw.EXA,
  kw.PETA,
  kw.TERA,
  kw.GIGA,
  kw.MEGA,
  kw.KILO,
  kw.HECTO,
  kw.DEKA,
  kw.DECI,
  kw.CENTI,
  kw.MILLI,
  kw.MICRO,
  kw.NANO,
  kw.PICO,
  kw.FEMTO,
  kw.ATTO,
  kw.ZEPTO,
  kw.YOCTO
] as const;

export const SYMBOLS = [
  sy.YOTTA,
  sy.ZETTA,
  sy.EXA,
  sy.PETA,
  sy.TERA,
  sy.GIGA,
  sy.MEGA,
  sy.KILO,
  sy.HECTO,
  sy.DEKA,
  sy.DECI,
  sy.CENTI,
  sy.MILLI,
  sy.MICRO,
  sy.NANO,
  sy.PICO,
  sy.FEMTO,
  sy.ATTO,
  sy.ZEPTO,
  sy.YOCTO
] as const;

export type FactorKeyword = typeof KEYWORDS[number];
export type FactorSymbol = typeof SYMBOLS[number];