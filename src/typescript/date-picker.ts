import {SnapScroll} from '@feather-ts/ui-common/dist/snap-scroll'
import {documentClick} from '@feather-ts/ui-common/dist/util'
import {format, parse} from 'fecha'
import {Month} from './month'
import {monthOffset, yearOffset} from './date-utils'
import {YearSelector} from './year-selector'
import {Construct} from '@feather-ts/feather-ts/dist/decorators/construct'
import {TemplateNode} from '@feather-ts/feather-ts/dist/decorators/template-node'
import {findWidget, render} from '@feather-ts/feather-ts/dist/core/bind'
import {On, Scope} from '@feather-ts/feather-ts/dist/decorators/event'
import {Template} from '@feather-ts/feather-ts/dist/decorators/template'
import {FormWidget, FormWidgetConfig} from '@feather-ts/ui-common/dist/form-widget'
import {Batch} from '@feather-ts/feather-ts'
import './year-selector'
import './month-selector'
import './date-picker.pcss'

export interface DatePickerConfig extends FormWidgetConfig<Date> {
    dateFormat: 'DD.MM.YYYY'
}

@Construct({selector: 'date-picker'})
export class DatePicker extends FormWidget<DatePickerConfig> {

    @TemplateNode('input.input') input
    element: HTMLElement

    showDropDown = false
    size = 'is-small'
    months: Month[] = []
    currentMonth: Date
    monthSelectorVisible = false
    yearSelectorVisible = false

    init = (el: HTMLElement) => {
        this.element = el
        const now = this.config.initialValue
        this.currentMonth = now
        this.goTo(now)
        render(this, el)
    }

    @On({selector: '.button'})
    click() {
        if (!this.showDropDown) {
            this.showDropDown = true
            documentClick(this.element, () => this.close())
        } else {
            this.close()
        }
    }

    close() {
        this.showDropDown = false
        this.monthSelectorVisible = false
        this.yearSelectorVisible = false
        findWidget(this, SnapScroll).abort(1)
    }

    @On({event: 'click', selector: '.next-month'})
    nextMonth() {
        if (this.yearSelectorVisible) {
            findWidget(this, YearSelector).next()
        } else if (this.monthSelectorVisible) {
            this.goTo(yearOffset(this.currentMonth, 1))
        } else {
            findWidget(this, SnapScroll).next()
        }
    }

    @On({event: 'click', selector: '.prev-month'})
    prevMonth() {
        if (this.yearSelectorVisible) {
            findWidget(this, YearSelector).prev()
        } else if (this.monthSelectorVisible) {
            this.goTo(yearOffset(this.currentMonth, -1))
        } else {
            findWidget(this, SnapScroll).prev()
        }
    }

    @On({event: 'tap', scope: Scope.UntilMatch, selector: '.dates > li'})
    dayClicked(ev: MouseEvent, li: HTMLLIElement) {
        const date = parse(li.getAttribute('date'), 'DD/MM/YYYY') as Date
        this.select(date)
    }

    @On({event: 'click', selector: '.month-selector'})
    openMonthSelector() {
        this.yearSelectorVisible = false
        this.monthSelectorVisible = !this.monthSelectorVisible
    }

    @On({event: 'click', selector: '.year-selector'})
    openYearSelector() {
        this.monthSelectorVisible = false
        if (!this.yearSelectorVisible) {
            findWidget(this, YearSelector).createYears(this.currentMonth)
        }
        this.yearSelectorVisible = !this.yearSelectorVisible
    }

    @On({event: 'click', selector: '.year-months > li'})
    monthClicked(ev: MouseEvent, li: HTMLLIElement) {
        const date = parse(li.getAttribute('date'), 'DD/MM/YYYY') as Date
        date.setFullYear(this.currentMonth.getFullYear())
        this.goTo(date)
        this.monthSelectorVisible = false
        findWidget(this, SnapScroll).reset(1)
    }

    @On({event: 'click', selector: '.years > li'})
    yearClicked(ev: MouseEvent, li: HTMLLIElement) {
        const date = parse(li.getAttribute('date'), 'DD/MM/YYYY') as Date
        date.setMonth(this.currentMonth.getMonth())
        this.goTo(date)
        this.yearSelectorVisible = false
        findWidget(this, SnapScroll).reset(1)
    }

    @Batch()
    goTo(date: Date) {
        this.months.splice(0, this.months.length,
            new Month(monthOffset(date, -1)),
            new Month(date),
            new Month(monthOffset(date, 1))
        )
        this.currentMonth = date
    }

    select(date: Date) {
        this.input.value = format(date, this.config.dateFormat)
        this.config.changed(date)
    }

    slideChanged(slide: number) {
        this.currentMonth = this.months[slide].date
        if (slide === 0) {
            this.months.unshift(new Month(monthOffset(this.currentMonth, -1)))
            this.months.pop()
        }
        if (slide === 2) {
            this.months.push(new Month(monthOffset(this.currentMonth, 1)))
            this.months.shift()
        }
        findWidget(this, SnapScroll).reset(1)
    }

    @Template()
    markup() {
        return `
        <div class="field has-addons">
            <div class="control">
                <input type="text" class="input {{size}}" value="{{config.initialValue:format}}">
            </div>
            <div class="control dropdown is-right {{showDropDown:toActive}}">
                <div class="dropdown-trigger">
                    <button type="submit" class="button {{size}} is-info icon">
                        <i class="far fa-calendar"/>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <div class="head">
                            <span class="prev-month">
                                <span class="icon">
                                    <i class="fas fa-chevron-left"/>
                                </span>
                            </span>
                            <div>
                                <span class="month-selector">{{currentMonth:justMonth}}</span>
                                <span class="year-selector">{{currentMonth:justYear}}</span>
                            </div>
                            <span class="next-month">
                                <span class="icon">
                                    <i class="fas fa-chevron-right"/>
                                </span>
                            </span>
                        </div>
                        <div class="viewport">
                            <month-selector class="{{monthSelectorVisible:onOff}}"/>
                            <year-selector class="{{yearSelectorVisible:onOff}}" current-year="{{currentMonth}}" />
                            <ul class="months snap-scroll"
                                current-slide={1}
                                slide-changed="{{slideChanged}}"
                                {{months}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    onOff = (flag: boolean) => flag ? 'on' : 'off'
    justMonth = (date: Date) => format(date, 'MMMM')
    justYear = (date: Date) => format(date, 'YYYY')
    format = (date: Date) => format(date, this.config.dateFormat)
    toActive = (show: boolean) => show ? 'is-active' : undefined
}
