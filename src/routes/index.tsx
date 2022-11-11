import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	const state = useStore({
		posts: [
			// {
			// userName: "Daniel Hollander",
			// text: "Welcome to the website dedicated to the number 1 cat in the world! His name is Charles Chacklinton Frenkel Hollander....He has many nicknames the most common one is Boop!",
			// date: "11/07/2022",
			// userImage: "./images/user/danielHollander.jpeg",
			// postMedia: "./images/posts/11072022.jpeg",
			// mediaType: "image"
			// }
			{
				name: "Welcome",
				text: "Welcome to the website dedicated to the number 1 cat in the world! His name is Charles Chacklinton Frenkel Hollander....He has many nicknames the most common one is Boop!",
				image: "./images/homepage/welcome.png"

			},
			{
				name: "Birthday",
				text: "Boop's birthday is on September 17th!",
				image: "./images/homepage/birthday.png"

			}
		]
	}, { recursive: true });
	return (
		<content>
			{state.posts.map(post =>
				<section class="welcome" style="width:100vw; height: 51vw; display: flex;align-items: center;">
					<div class="image-placeholder" style="position: absolute;">
						<img src={post.image} style="width: 100vw; height: 51vw;" />
					</div>
					<div class="text" style="width: 30vw; margin-left: 10%; z-index:1">
						<h2 style="font-family: 'amatic sc',cursive; font-size: 60px;">{post.name}</h2>
						<div style="font-family: avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;">{post.text}</div>
					</div>
				</section>
			)
			}
		</content>
	);
});

export const head: DocumentHead = {
	title: 'Boop the best cat in the world',
};
