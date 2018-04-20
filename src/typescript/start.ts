import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
import 'bulma/css/bulma.css'

import {DatePickerConfig} from './date-picker'
import {Construct, start, Widget} from '@feather-ts/feather-ts/dist/decorators/construct'
import {render} from '@feather-ts/feather-ts/dist/core/bind'
import {Template} from '@feather-ts/feather-ts/dist/decorators/template'
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
