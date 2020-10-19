import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getImages } from "../../redux/actions/imageActions.js";

function Images() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getImages());
		console.log("------You are here-------");
	}, [dispatch]);
	const imageList = useSelector((state) => state.ImagesReducer.images.files);

	// return <div className="cont">{console.log("imageList", imageList)}</div>;

	return !imageList ? (
		<div>No images found</div>
	) : (
		imageList.map((el, index) => {
			return (
				<div className="img-container" key={index}>
					<img src={`http://localhost:5000/uploads/${el}`} alt="" />
				</div>
			);
		})
	);

	// return (
	// 	<div className="container">
	// 		<img src="http://localhost:5000/uploads/puppy.png " />
	// 	</div>
	// );
}

export default Images;
