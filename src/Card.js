import React from "react"
import PropTypes from "prop-types";


function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        width: props.width,
        height: props.height
    }
    
    return (
        <div style={styles}></div>
    )
}

Card.propTypes = {
  cardColor: PropTypes.oneOf(["blue", "red", "yellow", "green"]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number
}

Card.defaultProps = {
  width: 100,
  height: 100
};

export default Card
