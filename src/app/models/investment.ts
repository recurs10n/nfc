import { Fee } from "./fee";
import { Performance } from "./performance";

export class Investment {
    id: number;
    assetClass: string;
    category: string;
    name: string;
    website: string;
    benchmarkId: number;
    objective: string;
    performance: Performance[];
    fees: Fee[];
}
