export const ParseTime = (totalSecs: number) :string => {
    let secs: number = 0;
    let mins: number = 0;
    let hrs: number = 0;

    secs = totalSecs % 60;
    mins = Math.floor(totalSecs / 60) % 60;
    hrs = Math.floor(totalSecs / 60 / 60);

    const secString:string = secs < 10 ? `0${secs}` : secs.toString();
    const minString:string = mins < 10 && hrs > 0 ? `0${mins}` : mins.toString();
    return hrs > 0 ? `${hrs}:${minString}:${secString}` : `${minString}:${secString}`;
}