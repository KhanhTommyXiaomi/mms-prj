import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { increment, selectCount } from './reducer/counter'
import TodoService from './services/todo.service'
import { useEffect } from 'react'

const MBOSettingFeature = () => {
  const { count } = useSelector(selectCount)
  const dispatch = useDispatch<AppDispatch>()
  const handleIncrement = () => {
    const action = increment(1)
    dispatch(action)
  }
  const getDetailTodo = async () => {
    const res = await TodoService.getDetailTodoApi('1')
    console.log(res)
  }
  useEffect(() => {
    getDetailTodo()
  }, [])
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>increment</button>
    </div>
  )
}

export default MBOSettingFeature
