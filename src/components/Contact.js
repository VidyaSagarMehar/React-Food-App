const Contact = () => {
	return (
		<div className="m-4 p-4">
			<h1 className="text-2xl">This is contact page</h1>

			<form className="mt-4">
				<input
					type="text"
					className="border border-black p-2 m-2"
					placeholder="Name"
				/>
				<input
					type="text"
					className="border border-black p-2 m-2"
					placeholder="Message"
				/>
				<button className="border  rounded-lg bg-red-400 p-2 m-2">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
