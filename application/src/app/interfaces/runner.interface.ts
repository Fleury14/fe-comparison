import { ISegment } from './segment.interface';

export interface IRunner {
    id: number;
    name: string;
    segments: ISegment[],
    totalTime: number;
}