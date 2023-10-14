// Boostrap stuff
import { Container, Image } from "react-bootstrap"

// PropTypes
import PropTypes from "prop-types"

// Images
import thumbIcon from "./images/thumb.png"

const QuoteSlide = ({ children }) => (
	<Container fluid>
		<section className="quote-slide">
			<Image src={thumbIcon} />
			<h3>{children}</h3>
			<Image src={thumbIcon} />
		</section>
	</Container>
)

QuoteSlide.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default QuoteSlide
