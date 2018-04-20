import {ArrayWidget} from '@feather-ts/feather-ts/dist/decorators/construct'
import {Template} from '@feather-ts/feather-ts/dist/decorators/template'
import {format as formatDate} from 'fecha'
import {isToday} from './date-utils'
import './date-picker.pcss'

export class Day implements ArrayWidget {

    date: Date

    constructor(date: Date) {
        this.date = date
    }

    @Template('date')
    dateMarkup() {
        return `<li date="{{date:parsable}}" class="{{date:isToday}}">{{date:asDate}}</li>`
    }

    @Template('weekday')
    weekDayMarkup() {
        return `<li>{{date:asWeekDay}}</li>`
    }

    @Template('month')
    monthMarkup() {
        return `<li date="{{date:parsable}}">{{date:asMonth}}</li>`
    }

    @Template('year')
    yearMarkup() {
        return `<li date="{{date:parsable}}">{{date:asYear}}</li>`
    }

    parsable = (date: Date) => formatDate(date, 'DD/MM/YYYY')
    asDate = (date: Date) => formatDate(date, 'D')
    asWeekDay = (date: Date) => formatDate(date, 'ddd').substr(0, 2)
    asMonth = (date: Date) => formatDate(date, 'MMM')
    asYear = (date: Date) => formatDate(date, 'YYYY')
    isToday = (date: Date) => isToday(date) ? 'today' : undefined
}
