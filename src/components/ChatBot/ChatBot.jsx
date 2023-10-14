// PropTypes
import PropTypes from "prop-types"

// Bootstrap stuff
import { Image } from "react-bootstrap"
import { X } from "react-bootstrap-icons"

// Images
import chatIcon from "./images/chat-icon.png"

const ChatBot = ({ setOpen }) => (
	<div className="chat">
		<div className="chat-sec">
			<div className="chat-bubble">
				Hi! I am Ben, your virtual assistant.
				<br />
				How can I make your day better?
			</div>
			<X
				onClick={() => setOpen(false)}
				size="25px"
			/>
		</div>

		<Image
			src={chatIcon}
			className="chat-icon"
		/>
	</div>
)

ChatBot.propTypes = {
	setOpen: PropTypes.func.isRequired
}

export default ChatBot
