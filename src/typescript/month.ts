import {ArrayWidget, Template} from '@feather-ts/feather-ts'
import {getRenderableMonth} from './date-utils'
import {Day} from './day'
import './date-picker.pcss'

export class Month implements ArrayWidget {

    days: Day[]
    date: Date

    constructor(date: Date) {
        this.days = getRenderableMonth(date).map(d => new Day(d))
        this.date = date
    }

    @Template()
    markup() {
        return `
        <li class="month">
            <ul class="weekdays" template="weekday" {{days:firstWeek}} />
            <ul class="dates"  template="date" {{days}} />
        </li>
        `
    }

    firstWeek = () => (day, idx) => idx < 7
}
