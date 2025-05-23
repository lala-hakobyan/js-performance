export interface LoopData {
    count: number;
    operator: OperatorType;
    time: number;
    result: number;
}

export interface ChartData {
    title: string;
    xValues: Operator[],
    yValues: number[],
    barColors: BarChartColor[]
}

export interface ChartsHtmlData {
    html: string;
    script: string,
}

export enum BarChartColor {
    for = 'red',
    forEach = 'green',
    reduce = 'blue',
    forOf = 'orange',
    while = 'brown',
}

export enum Operator {
    for = 'for',
    forEach = 'forEach',
    reduce = 'reduce',
    forOf = 'for of',
    while = 'while'
}

type OperatorType = 'for' | 'forEach' | 'reduce' | 'forOf' | 'while';

