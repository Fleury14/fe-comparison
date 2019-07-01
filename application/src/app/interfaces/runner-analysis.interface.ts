import { ISegment } from './segment.interface';

export interface IRunnerAnalysis {
    id: number;
    common: ISegment[],
    uncommon: ISegment[],
}