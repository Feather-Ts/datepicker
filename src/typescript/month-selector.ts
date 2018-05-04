import {Construct, range, render, Template, Widget} from '@feather-ts/feather-ts'
import {format as formatDate} from 'fecha'
import {Day} from './day'
import './selector.pcss'

@Construct({selector: 'month-selector'})
export class MonthSelector implements Widget {

    months: Day[]

    init = (el: Element) => {
        this.months = range(0, 11).map(i => new Day(new Date(2017, i, 1)))
        render(this, el)
    }

    @Template()
    markup() {
        return `<ul class="year-months" template="month" {{months}}/>`
    }

    format = (date: Date) => formatDate(date, 'MMM')
}
