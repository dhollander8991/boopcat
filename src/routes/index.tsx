import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	const state = useStore({
		posts: [{
			userName: "Daniel Hollander",
			text: "Welcome to the website dedicated to the number 1 cat in the world! His name is Charles Chacklinton Frenkel Hollander....He has many nicknames the most common one is Boop!",
			date: "11/07/2022",
			userImage: "./images/user/danielHollander.jpeg",
			postMedia: "./images/posts/11072022.jpeg",
			mediaType: "image"
		}]
	}, { recursive: true });
	return (
		<content>
			{state.posts.map(post =>
				<div class="container-fluid mt-100">
					<div class="row">
						<div class="col-md-12">
							<div class="card mb-4">
								<div class="card-header">
									<div class="media flex-wrap w-100 align-items-center" style="display:flex">
										<img width="45" height="45" src={post.userImage} class="d-block ui-w-40 rounded-circle" alt="" />
										<div class="text-container" style="margin-left: 10px">
											<div class="media-body ml-3"> <a href="javascript:void(0)" data-abc="true">{post.userName}</a>
											</div>
											<div class="text-muted small ml-3">
												<div>Posted on <strong>{post.date}</strong></div>
											</div>
										</div>
									</div>
								</div>
								<div class="card-body">
									<p> {post.text}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
			}
		</content>
	);
});

export const head: DocumentHead = {
	title: 'Boop the best cat in the world',
};
