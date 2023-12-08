import {useState} from "react";
import dumyData from "../common/dumy.json";
import {filterMarkersInBounds} from "../common/mapUtil";

export const usePosts =() =>{
	const [posts, setPosts] = useState(dumyData);
	const handler = (mapRef) => {
		setPosts(filterMarkersInBounds(dumyData, mapRef));
	};
	
	return { posts, handler };
}