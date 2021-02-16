import React from "react";
// import axios  from "axios";

function ProjectForm() {
	const handleImageChange = (e) => {
		const image = e.target.files[0];
		const formData = new FormData();
		formData.append("image", image, image.name);
	};

	// const uploadImage = (formData) => {
	// 	axios.post("/project/image", formData).then((res) => {});
	// };

	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="title"
					name="title"
					// value={data.title}
					// onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="description"
					// value={data.description}
					// onChange={handleChange}
				/>
				<input type="file" id="image-upload" onChange={handleImageChange} />
			</form>
		</div>
	);
}

export default ProjectForm;
