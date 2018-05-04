import {Construct, range, render, Template, Widget} from '@feather-ts/feather-ts'
import {format as formatDate} from 'fecha'
import {Day} from './day'
import {yearOffset} from './date-utils'
import './selector.pcss'

@Construct({selector: 'year-selector'})
export class YearSelector implements Widget {

    years: Day[] = []
    currentYear: Date

    init = (el: Element) => {
        render(this, el)
    }

    createYears(date: Date) {
        this.years.splice(0, 12, ...range(-7, 4)
            .map(i => new Day(new Date(date.getFullYear() + i, 1, 1))))
    }

    next() {
        this.currentYear = yearOffset(this.currentYear, 12)
        this.createYears(this.currentYear)
    }

    prev() {
        this.currentYear = yearOffset(this.currentYear, -12)
        this.createYears(this.currentYear)
    }

    @Template()
    markup() {
        return `<ul class="years" template="year" {{years}}/>`
    }

    format = (date: Date) => formatDate(date, 'MMM')
}
