export interface Metric {

    id: number,
    type: string,
    name: string,
    owner: string,
    time: string,
    state: string,
    metrics: any,
    build: any,
    unitTest: any,
    functionalTest: any

}
