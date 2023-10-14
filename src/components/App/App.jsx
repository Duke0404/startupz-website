// React stuff
import { useState } from "react"

// Bootstrap stuff
import { Navbar, Nav, Button, Container, Image, Row } from "react-bootstrap"
import { Twitter, Linkedin, Instagram } from "react-bootstrap-icons"

// Images
import headerLogo from "./images/header-logo.svg"
import page1Art from "./images/page1-art.png"
import page2Icon from "./images/page2-icon.png"
import page4Icon from "./images/page4-icon.png"
import tolq from "./images/tolq.png"
import feedbackLabs from "./images/feedback-labs.png"
import codekeeper from "./images/codekeeper.png"
import legalsite from "./images/legalsite.png"
import hireLeft from "./images/hire-left.png"
import hireRight from "./images/hire-right.png"
import page8Art from "./images/page8-art.png"

// Components
import BulletSlide from "../BulletSlide/BulletSlide"
import QuoteSlide from "../QuoteSlide/QuoteSlide"
import WorkCard from "../WorkCard/WorkCard"
import MessageForm from "../MessageForm/MessageForm"
import ChatBot from "../ChatBot/ChatBot"

function App() {
	const [open, setOpen] = useState(true)

	return (
		<>
			{/* Header */}
			<Navbar as="header" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/">
						<Image
							src={headerLogo}
							alt="Logo"
							className="company-logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle/>
					<Navbar.Collapse>
						<Nav className="flex-col flex-lg-row">
							<Nav.Item>
								<Nav.Link href="#work">Startups</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#message">Contact</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#hiring">
									<Button
										className="navbar-button"
										variant="outline-secondary"
									>
										Work with us!
									</Button>
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Page 1 */}
			<Container fluid>
				<section className="fixed-slide">
					<h1>
						We Create
						<br />
						Startups.
					</h1>
					<div className="subtitle">
						We are startup studio that develops and launches new companies.
					</div>
					<Button
						className="px-3"
						variant="secondary"
						href="#work"
					>
						See our works
					</Button>
				</section>
				<Image
					src={page1Art}
					className="background-art"
				/>
			</Container>

			{/* Page 2 */}
			<BulletSlide
				title="Who we are"
				subtitle="We create products that have innovation and technology at their core. We value working with talented people that understand the possibilities of today."
				image={page2Icon}
				bulletArray={[
					{
						heading: "01",
						body: "We develop innovative products, systems and services"
					},
					{
						heading: "02",
						body: "Next we build teams to scale them into companies"
					},
					{
						heading: "03",
						body: "Each startup solving one problem at a time"
					}
				]}
			/>

			{/* Page 3 */}
			<QuoteSlide>We love solving problems!</QuoteSlide>

			{/* Page 4 */}
			<BulletSlide
				title="Our core values"
				image={page4Icon}
				bulletArray={[
					{
						heading: "01. Innovation",
						body: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models."
					},
					{
						heading: "02. People",
						body: "Talent is what enable us to create great companies."
					}
				]}
			/>

			{/* Page 5 */}
			<Container
				fluid
				id="work"
			>
				<section className="card-slide">
					<h2>Our Works</h2>

					<Row lg={{ cols: 2 }}>
						<WorkCard
							title="Tolq"
							subtitle="Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution."
							image={tolq}
							link="https://tolq.com/"
							color="#A9BC87"
						/>

						<WorkCard
							title="Feedback Labs"
							subtitle="Feedback Labs turns feedback into actionable insights for your team."
							image={feedbackLabs}
							link="https://www.feedbacklabs.com/"
							color="#8BB5C9"
						/>

						<WorkCard
							title="Codekeeper"
							subtitle="Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements."
							image={codekeeper}
							link="https://codekeeper.co/"
							color="#00A0B6"
						/>

						<WorkCard
							title="LegalSite"
							subtitle="Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments."
							image={legalsite}
							link="https://legalsite.co/"
							color="#8B60D3"
						/>
					</Row>
				</section>
			</Container>

			{/* Page 6 */}
			<QuoteSlide>
				Startups create a world that actually is better.
				<br />
				Any problem that can be solved, will be solved by a startup, and that is a huge
				opportunity.
			</QuoteSlide>

			{/* Page 7 */}
			<Container
				fluid
				className="offwhite-bg"
				id="hiring"
			>
				<Image src={hireLeft} />

				<section className="hiring-slide">
					<h2>We are hiring!</h2>
					<div className="subtitle">
						We&#39;re always looking for talented people to join and help build our
						startups. Check out our current openings
					</div>
					<Button
						className="hiring-button"
						variant="secondary"
						href="https://www.linkedin.com/company/startupz.com/jobs/"
						target="_blank"
					>
						See current openings
					</Button>
				</section>

				<Image src={hireRight} />
			</Container>

			{/* Page 8 */}
			<Container
				fluid
				className="yellow-bg"
				id="message"
			>
				<section className="basic-slide">
					<h2>
						Are you ready
						<br />
						to board this rocket ship?
					</h2>
					<div>Share your excitement with us.</div>
					<MessageForm />
				</section>
				<Image
					src={page8Art}
					className="background-art"
				/>
			</Container>

			{/* Footer */}
			<Container
				fluid
				className="footer"
				as="footer"
			>
				<Row>
					<div className="footer-module">
						<Image
							src={headerLogo}
							alt="Logo"
							className="company-logo"
						/>

						<div>
							© 2020 Startupz.
							<br />
							All rights reserved.
						</div>
					</div>

					<div className="footer-module">
						<h5>Companies</h5>
						<a
							href="https://tolq.com/"
							target="_blank"
							rel="noreferrer"
						>
							Tolq
						</a>
						<a
							href="https://www.feedbacklabs.com/"
							target="_blank"
							rel="noreferrer"
						>
							Feedback Labs
						</a>
						<a
							href="https://codekeeper.co/"
							target="_blank"
							rel="noreferrer"
						>
							Codekeeper
						</a>
						<a
							href="https://legalsite.co/"
							target="_blank"
							rel="noreferrer"
						>
							LegalSite
						</a>
					</div>

					<div className="footer-module">
						<h5>Contact</h5>
						<div>
							World Trade Center - The Hague
							<br />
							Prinses Margrietplantsoen 33
							<br />
							2595 AM The Hague
							<br />
							The Netherlands
						</div>
						<a href="#message">Send us an email</a>
					</div>

					<div className="footer-module">
						<h5>Follow us</h5>
						<a
							href="https://twitter.com/startupzcom"
							target="_blank"
							rel="noreferrer"
						>
							<Twitter />
						</a>
						<a
							href="https://www.linkedin.com/company/startupz.com"
							target="_blank"
							rel="noreferrer"
						>
							<Linkedin />
						</a>
						<a
							href="https://www.instagram.com/startupzcom"
							target="_blank"
							rel="noreferrer"
						>
							<Instagram />
						</a>
					</div>
				</Row>
			</Container>

			{/* Chat Bot */}
			{open && <ChatBot setOpen={setOpen} />}
		</>
	)
}

export default App
