import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { increment, selectCount } from './reducer/counter'

const MBOSettingFeature = () => {
  const { count } = useSelector(selectCount)
  const dispatch = useDispatch<AppDispatch>()
  const handleIncrement = () => {
    const action = increment(1)
    dispatch(action)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>increment</button>
    </div>
  )
}

export default MBOSettingFeature
