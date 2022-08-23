import { DatePicker, Input } from 'antd'
import { RiCalendarEventFill } from 'react-icons/ri'
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import 'antd/dist/antd.css'
import styles from './SearchBar.module.scss'

const calendarIcon = <RiCalendarEventFill className={styles.dataIcon} />

const SearchBar = () => {
    const onChange = (date, dateString) => {}

    return (
        <div className={styles.search_wrapper}>
            <Input
                className={styles.input_search}
                placeholder='Откуда'
                maxLength={3}
                allowClear={true}
            />
            <div className={styles.switcher}>
                <img
                    src={ArrowLeft}
                    alt='arrow_left'
                    className={styles.arrows}
                />
                <img
                    src={ArrowRight}
                    alt='arrow_right'
                    className={styles.arrows}
                />
            </div>

            <Input
                className={styles.input_search}
                placeholder='Куда'
                maxLength={3}
                allowClear={true}
            />
            <DatePicker
                placeholder='Когда'
                className={styles.input_search}
                onChange={onChange}
                placement='topRight'
                format='DD.MM.YYYY'
                suffixIcon={calendarIcon}
                allowClear={false}
            />
            <DatePicker
                placeholder='Обратно'
                className={styles.input_search}
                onChange={onChange}
                placement='topRight'
                format='DD.MM.YYYY'
                suffixIcon={calendarIcon}
                allowClear={false}
            />
        </div>
    )
}

export default SearchBar
