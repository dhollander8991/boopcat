import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './sidebar.css';

export default component$(() => {
	const state = useStore({
    	ads : [1],
    	images: [1,2,3,4,5,6]
  	}, { recursive: true });
	return (
		<rightsidebar>
			{state.images.map(imageCounter => 
				<div class="col-md-4">
						<img class="img-responsive" src={"./images/right/" + imageCounter +".jpeg"} width="300" height = "400" alt="" style="margin-bottom: 10px" />
						<img width="300" height = "250" class="img-responsive" src="./images/ad-1.jpg" alt="" style="margin-bottom: 10px" />
				</div>
			)}
		</rightsidebar>
    );
});
