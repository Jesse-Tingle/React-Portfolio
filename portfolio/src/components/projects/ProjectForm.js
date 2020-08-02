import React from "react";
import axios from "axios";

function ProjectForm() {
	const handleImageChange = (e) => {
		const image = e.target.files[0];
		const formData = new FormData();
		formData.append("image", image, image.name);
	};

	const uploadImage = (formData) => {
		axios.post("/project/image", formData).then((res) => {});
	};

	return (
		<div>
			<input type="file" id="image-upload" onChange={handleImageChange} />
		</div>
	);
}

export default ProjectForm;
