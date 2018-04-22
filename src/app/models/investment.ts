import { Fee } from "./fee";
import { Performance } from "./performance";
import { PerformanceType } from "./performance-type.enum";
import { Output } from "@angular/core";

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
