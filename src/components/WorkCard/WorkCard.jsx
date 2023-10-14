// Boostrap stuff
import { Card, Button } from "react-bootstrap"

// PropTypes
import PropTypes from "prop-types"

const WorkCard = ({ title, subtitle, image, link, color }) => (
		<Card className="work-card">
			<Card.Title>
				<h4 style={{ color: color }}>{title}</h4>
			</Card.Title>
			<Card.Text>{subtitle}</Card.Text>
			<Card.Img src={image} />
			<Card.Link
				href={link}
				target="_blank"
			>
				<Button
					variant="outline-secondary"
				>
					More
				</Button>
			</Card.Link>
		</Card>
)

WorkCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}

export default WorkCard
