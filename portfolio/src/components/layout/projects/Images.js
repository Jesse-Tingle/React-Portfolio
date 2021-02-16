import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { getImages } from "../../../redux/actions/imageActions.js";

function Images(props) {
	// const dispatch = useDispatch();
	console.log("images props", props);
	const images = props.projectImages;
	console.log("images ======>", images);

	useEffect(() => {
		console.log("images props", props);
		console.log("images", images);
	}, [props, images]);

	return (
		<div>
			{/* {images.map((e, i) => {
				return (
					<div>
						{e.src}
						<img src={`http://localhost:5000/${e.src}`} alt="" />
					</div>
				);
			})} */}
		</div>
	);
}

export default Images;
