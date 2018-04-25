import {Construct, Widget} from '@feather-ts/feather-ts/dist/decorators/construct'
import {range} from '@feather-ts/feather-ts/dist/utils/arrays'
import {render} from '@feather-ts/feather-ts/dist/core/bind'
import {Template} from '@feather-ts/feather-ts/dist/decorators/template'
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
