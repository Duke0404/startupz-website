// Boostrap stuff
import { Container, Image } from "react-bootstrap"

// PropTypes
import PropTypes from "prop-types"

const BulletSlide = ({ title, subtitle, image, bulletArray }) => (
	<Container
		fluid
		className="offwhite-bg"
	>
		<section className="bullet-slide">
			<div className="bullet-slide-row-1">
				<div className="bullet-slide-text">
					<h2>{title}</h2>
					{subtitle && <div className="subtitle">{subtitle}</div>}
				</div>

				<Image
					src={image}
					className="bullet-icon"
				/>
			</div>

			<div className="bullet-slide-row-2 flex-column flex-md-row">
				{bulletArray.map((bullet, index) => (
					<div
						key={index}
					>
						<h4>{bullet.heading}</h4>
						<hr />
						<div className="subtitle">{bullet.body}</div>
					</div>
				))}
			</div>
		</section>
	</Container>
)

BulletSlide.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	image: PropTypes.string.isRequired,
	bulletArray: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BulletSlide
