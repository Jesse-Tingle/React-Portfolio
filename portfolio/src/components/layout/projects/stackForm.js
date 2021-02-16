import React from "react";

function stackForm() {
	return (
		<div>
			<form>
				{/* api/auth/stack => POST new stack option  */}
				<input
					type="text"
					placeholder="title"
					name="title"
					value={data.title}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="description"
					value={data.description}
					onChange={handleChange}
				/>
				<input />
				<input type="file" id="image-upload" onChange={handleImageChange} />
			</form>
		</div>
	);
}

export default stackForm;
