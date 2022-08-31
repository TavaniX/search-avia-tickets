import { useSelector, useDispatch } from 'react-redux/es/exports'
import { setSearchParamsFrom } from '../../redux/slices/searchParamsSlice'
import { setSearchParamsTo } from '../../redux/slices/searchParamsSlice'
import { DatePicker, Select } from 'antd'
import { RiCalendarEventFill } from 'react-icons/ri'
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import 'antd/dist/antd.css'
import styles from './SearchBar.module.scss'

const { Option } = Select
const calendarIcon = <RiCalendarEventFill className={styles.dataIcon} />

const handleChange = (value, dispatch, params) => {
    dispatch(params(value))
}

const switchValues = (
    dispatch,
    setSearchParamsFrom,
    stateTo,
    setSearchParamsTo,
    stateFrom
) => {
    dispatch(setSearchParamsFrom(stateTo))
    dispatch(setSearchParamsTo(stateFrom))
}

const SearchBar = () => {
    const dispatch = useDispatch()
    const tickets = useSelector((state) => state.tickets.tickets)
    const routes = [...new Set(tickets.map((ticket) => ticket.info.origin))]

    const stateTo = useSelector((state) => state.searchParams.searchParamsTo)
    const stateFrom = useSelector(
        (state) => state.searchParams.searchParamsFrom
    )

    return (
        <div className={styles.search_wrapper}>
            <Select
                className={styles.selectOptions}
                showArrow={false}
                placeholder='Откуда'
                onChange={(value) =>
                    handleChange(value, dispatch, setSearchParamsFrom)
                }
            >
                {routes
                    .filter((route) => route !== stateTo)
                    .map((item) => (
                        <Option value={item} key={item}>
                            {item}
                        </Option>
                    ))}
            </Select>

            <div
                className={styles.switcher}
                onClick={() =>
                    switchValues(
                        dispatch,
                        setSearchParamsFrom,
                        stateTo,
                        setSearchParamsTo,
                        stateFrom
                    )
                }
            >
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

            <Select
                className={styles.selectOptions}
                showArrow={false}
                placeholder='Куда'
                onChange={(value) =>
                    handleChange(value, dispatch, setSearchParamsTo)
                }
            >
                {routes
                    .filter((route) => route !== stateFrom)
                    .map((item) => (
                        <Option value={item} key={item}>
                            {item}
                        </Option>
                    ))}
            </Select>

            <DatePicker
                placeholder='Когда'
                className={styles.input_search}
                placement='topRight'
                format='DD.MM.YYYY'
                suffixIcon={calendarIcon}
                allowClear={false}
            />

            <DatePicker
                placeholder='Обратно'
                className={styles.input_search}
                placement='topRight'
                format='DD.MM.YYYY'
                suffixIcon={calendarIcon}
                allowClear={false}
            />
        </div>
    )
}

export default SearchBar
