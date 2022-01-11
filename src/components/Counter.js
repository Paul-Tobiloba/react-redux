import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementBy,
  toggle
} from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByHandler = (event) => {
    dispatch(incrementBy(parseInt(5)));
  };

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.buttons}>
        <button onClick={incrementHandler} >
          Increment
        </button>
        <button onClick={incrementByHandler} >
          Increment By 5
        </button>
        <button onClick={decrementHandler} >
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
