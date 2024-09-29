import { useRef, useState } from 'react'
import classes from './Checkout.module.css'
const isEmpty = (value) => value.trim() === ''
const fivechar = (value) => value.trim().length === 5
const Checkout = (props) => {
  const [foreval, setformval] = useState({
    name: true,
    strret: true,
    code: true,
    city: true,
  })

  const confirmHandler = (event) => {
    event.preventDefault()
    const entername = YourName.current.value
    const enterstreet = Street.current.value
    const enterCode = PostalCode.current.value
    const entercity = City.current.value
    const enternameisval = !isEmpty(entername)
    const enterstreetisval = !isEmpty(enterstreet)
    const entercodeisval = !isEmpty(enterCode)
    const entercityisval = fivechar(entercity)
    setformval({
      name: enternameisval,
      strret: enterstreetisval,
      code: entercodeisval,
      city: entercityisval,
    })
    const formisval =
      entercityisval && entercodeisval && enternameisval && enterstreetisval
    if (formisval === false) {
      return
    }
    props.onconfourm({
      name: entername,
      street: enterstreet,
      PostalCode: enterCode,
      city: entercity,
    })
  }
  const YourName = useRef()
  const Street = useRef()
  const PostalCode = useRef()
  const City = useRef()

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={YourName} type="text" id="name" />
        {foreval.name && <p>name is not val</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={Street} type="text" id="street" />
        {foreval.strret && <p>street is not val</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={PostalCode} type="text" id="postal" />
        {foreval.code && <p>Postal Code is not val</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={City} type="text" id="city" />
        {foreval.city && <p>city is not val</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.oncansel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
