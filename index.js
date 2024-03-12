const Notifications = props => {
  return (
    <div className='Msgs'>
      <h1>{props.msg}</h1>
    </div>
  )
}

const element = (
  <div className='container'>
    <p clasName='heading'> Notifications </p>
    <div className='imgs'>
      <img
        clasName='i1'
        src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notifications msg='Information Message' />

      <img
        clasName='i2'
        src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notifications msg='Success Message' />

      <img
        clasName='i3'
        src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notifications msg='Warning Message' />

      <img
        clasName='i4'
        src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
      <Notifications msg='Error Message' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
