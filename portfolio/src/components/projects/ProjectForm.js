import React, { useState } from "react";
import axios from "axios";

function ProjectForm() {
	const [selectedFile, setSelectedFile] = useState({
		selectedFile: null,
	});

	const fileSelectedHandler = (event) => {
		setSelectedFile({
			selectedFile: event.target.files[0],
		});
	};

	const fileUploadHandler = (event) => {
		const fd = new FormData();
		fd.append("image", selectedFile, selectedFile.name);
		axios.post("http://http://localhost:3001/upload", fd).then((res) => {
			console.log("res", res);
		});
	};

	return (
		<div className="container">
			<h1>File Upload</h1>
			{typeof msg != "undefined" ? msg : ""}
			<form action="/upload" method="POST" encType="multipart/form-data">
				<div className="file-field input-field">
					<div className="btn grey">
						<span>File</span>
						<input name="myImage" type="file" />
					</div>
					<div className="file-path-wrapper">
						<input className="file-path validate" type="text" />
					</div>
				</div>
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
			<br />
			<img
				src={typeof file != "undefined" ? file : ""}
				// src="<%= typeof file != 'undefined' ? file : '' %>"
				className="responsive-img"
				alt=""
			/>
		</div>
	);
}

export default ProjectForm;
