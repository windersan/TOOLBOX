import { Rates } from "./rates.model";

export class Forex {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}
