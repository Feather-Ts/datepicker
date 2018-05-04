import {range} from '@feather-ts/feather-ts'

export const dayOffset = (date: Date, offset: number) =>
    new Date(+date + (offset * 24 * 60 * 60 * 1000))

export const monthOffset = (date: Date, offset: number) => {
    const d = new Date(+date)
    d.setMonth(d.getMonth() + offset)
    return d
}

export const yearOffset = (date: Date, offset: number) => {
    const d = new Date(+date)
    d.setFullYear(d.getFullYear() + offset)
    return d
}

export enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export const isToday = (d: Date) => {
    const td = new Date()
    return td.getDate() === d.getDate() && td.getMonth() === d.getMonth() && td.getFullYear() === d.getFullYear()
}

export const precedingDay = (date: Date, weekday: Weekday) => {
    const d = new Date(+date)
    d.setDate(d.getDate() - (d.getDay() + (7 - weekday)) % 7)
    return d
}

export const getRenderableMonth = (d: Date) => {
    const start = precedingDay(new Date(d.getFullYear(), d.getMonth(), 1), Weekday.Monday)
    return range(0, 41).map(day => dayOffset(start, day))
}
