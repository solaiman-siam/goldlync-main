import PropTypes from "prop-types"

function Container({children}) {
  return (
    <div className="container max-w-[1720px] mx-auto ">
        {children}
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.node
}
export default Container