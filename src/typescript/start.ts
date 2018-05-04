import {Construct, render, start, Template, Widget} from '@feather-ts/feather-ts'
import {DatePickerConfig} from './date-picker'
import './date-picker'
import './start.pcss'

@Construct({selector: 'body'})
export class Showcase implements Widget {

    datePickerConfig: DatePickerConfig = {
        changed: (date: Date) => console.log(date),
        dateFormat: 'DD.MM.YYYY',
        initialValue: new Date()
    }

    init = (el: Element) => render(this, el)

    @Template()
    markup() {
        return `<date-picker class="control has-icons-right" config="{{datePickerConfig}}"/>`
    }
}

start()
