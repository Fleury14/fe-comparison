import { IRunner } from '../interfaces/runner.interface';
import { ISegmentTypes } from '../interfaces/segment-type.interface';

export const ParseSegmentType = (runners: IRunner[]) => {
    const segmentTypes: ISegmentTypes = {
        common: [],
        uncommon: [],
    };
    // get all segments
    const allSegments: number[] = [];
    runners.forEach(runner => {
        runner.segments.forEach(segment => allSegments.push(segment.locId));
    });

    // get unique values
    const uniqueVal: number[] = [];
    allSegments.forEach(segNo => {
        if (uniqueVal.indexOf(segNo) < 0) {
            uniqueVal.push(segNo);
        }
    });

    // now check each unique value and see if it occurs multiple times
    // making it either common or uncommon
    uniqueVal.forEach(val => {
        if(allSegments.indexOf(val) === allSegments.lastIndexOf(val)) {
            segmentTypes.uncommon.push(val);
        } else {
            segmentTypes.common.push(val);
        }
    });
    return segmentTypes;
}