// React dependencies
import { useState } from "react"

// Bootstrap stuff
import { Form, Button } from "react-bootstrap"

export default function MessageForm() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const emailCorrect = str => /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)
	const fieldsCorrect = (name, email, message) => name && email && message && emailCorrect(email)
	const emailLink = (name, email, message) =>
		`mailto:recruiting+240570166@applytojob.com?subject=Job Application to Startupz.com&body=Name: ${name}\nEmail: ${email}\n\n${message}`

	return (
		<Form className="message-form">
			<Form.Group controlId="name">
				<Form.Control
					type="text"
					placeholder="Name*"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="email">
				<Form.Control
					type="email"
					placeholder="Email*"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="message">
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Message*"
					value={message}
					onChange={e => setMessage(e.target.value)}
					className="message-form-message"
				/>
			</Form.Group>

			<Button
				variant="dark"
				disabled={!fieldsCorrect(name, email, message)}
				href={emailLink(name, email, message)}
				target="_blank"
				className="message-form-button"
			>
				Shoot us a message
			</Button>
		</Form>
	)
}
