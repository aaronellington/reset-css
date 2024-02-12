import type { Meta, StoryObj } from "@storybook/react"

type Props = {
	children: JSX.Element
}

const Card = (props: Props) => {
	return <>{props.children}</>
}

const meta: Meta<typeof Card> = {
	component: Card,
	title: "Demo",
}
export default meta
type Story = StoryObj<typeof Card>

const demoData = (
	<>
		<main>
			<article id="preview">
				<h2>Preview</h2>
				<p>
					Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet
					suscipit sapien. Nulla iaculis eros a elit pharetra egestas.
				</p>
				<form>
					<input
						type="text"
						name="firstname"
						placeholder="First name"
						aria-label="First name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email address"
						aria-label="Email address"
						required
					/>
					<fieldset>
						<label htmlFor="terms">
							<input type="checkbox" role="switch" id="terms" name="terms" />I
							agree to the{" "}
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault()
								}}
							>
								Privacy Policy
							</a>
						</label>
					</fieldset>
					<button type="submit">Subscribe</button>
				</form>
			</article>

			<article id="typography">
				<h2>Typography</h2>
				<p>
					Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget
					efficitur feugiat. Vivamus porta nunc a erat mattis, mattis feugiat
					turpis pretium. Quisque sed tristique felis.
				</p>

				<blockquote>
					&ldquo;Maecenas vehicula metus tellus, vitae congue turpis hendrerit
					non. Nam at dui sit amet ipsum cursus ornare.&ldquo;
					<footer>
						<cite>- Phasellus eget lacinia</cite>
					</footer>
				</blockquote>

				<h3>Lists</h3>
				<ul>
					<li>Aliquam lobortis lacus eu libero ornare facilisis.</li>
					<li>Nam et magna at libero scelerisque egestas.</li>
					<li>Suspendisse id nisl ut leo finibus vehicula quis eu ex.</li>
					<li>Proin ultricies turpis et volutpat vehicula.</li>
				</ul>

				<h3>Inline text elements</h3>
				<figure>
					<table>
						<tbody>
							<tr>
								<td>
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault()
										}}
									>
										Link
									</a>
								</td>
								<td>
									<strong>Bold</strong>
								</td>
								<td>
									<em>Italic</em>
								</td>
							</tr>
							<tr>
								<td>
									<u>Underline</u>
								</td>
								<td>
									<del>Deleted</del>
								</td>
								<td>
									<ins>Inserted</ins>
								</td>
							</tr>
							<tr>
								<td>
									<s>Strikethrough</s>
								</td>
								<td>
									<small>Small </small>
								</td>
								<td>
									<abbr title="Abbreviation" data-tooltip="Abbreviation">
										Abbr.
									</abbr>
								</td>
							</tr>
							<tr>
								<td>
									Text <sub>Sub</sub>
								</td>
								<td>
									Text <sup>Sup</sup>
								</td>
								<td>
									<kbd>Kbd</kbd>
								</td>
							</tr>
							<tr>
								<td>
									<mark>Highlighted</mark>
								</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</figure>

				<h3>Heading 3</h3>
				<p>
					Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis
					ipsum, at efficitur sem scelerisque vel. Aliquam auctor diam ut purus
					cursus fringilla. Class aptent taciti sociosqu ad litora torquent per
					conubia nostra, per inceptos himenaeos.
				</p>
				<h4>Heading 4</h4>
				<p>
					Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at
					blandit nibh. Donec ac fermentum felis. Vivamus tincidunt arcu ut
					lacus hendrerit, eget mattis dui finibus.
				</p>
				<h5>Heading 5</h5>
				<p>
					Donec nec egestas nulla. Sed varius placerat felis eu suscipit. Mauris
					maximus ante in consequat luctus. Morbi euismod sagittis efficitur.
					Aenean non eros orci. Vivamus ut diam sem.
				</p>
				<h6>Heading 6</h6>
				<p>
					Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum
					tincidunt nulla ut tortor posuere, vitae malesuada tortor molestie.
					Sed nec interdum dolor. Vestibulum id auctor nisi, a efficitur sem.
					Aliquam sollicitudin efficitur turpis, sollicitudin hendrerit ligula
					semper id. Nunc risus felis, egestas eu tristique eget, convallis in
					velit.
				</p>

				<figure>
					<img
						src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
						alt="Photo alt text"
					/>
					<figcaption>
						Image from{" "}
						<a href="#" target="_blank" rel="noreferrer">
							unsplash.com
						</a>
					</figcaption>
				</figure>
			</article>

			<article id="button">
				<h2>Button</h2>
				<button>Primary</button>
			</article>

			<article id="form">
				<form>
					<h2>Form elements</h2>

					<label htmlFor="search">
						Search
						<input
							type="search"
							id="search"
							name="search"
							placeholder="Search"
						/>
					</label>

					<label htmlFor="text">
						Text
						<input type="text" id="text" name="text" placeholder="Text" />
					</label>
					<small>Curabitur consequat lacus at lacus porta finibus.</small>

					<label htmlFor="select">
						Select
						<select id="select" name="select" required>
							<option value="" selected>
								Select…
							</option>
							<option>…</option>
						</select>
					</label>

					<label htmlFor="file">
						File browser
						<input type="file" id="file" name="file" />
					</label>

					<label htmlFor="range">
						Range slider
						<input
							type="range"
							min="0"
							max="100"
							defaultValue="50"
							id="range"
							name="range"
						/>
					</label>

					<label htmlFor="valid">
						Valid
						<input
							type="text"
							id="valid"
							name="valid"
							placeholder="Valid"
							aria-invalid="false"
						/>
					</label>

					<label htmlFor="invalid">
						Invalid
						<input
							type="text"
							id="invalid"
							name="invalid"
							placeholder="Invalid"
							aria-invalid="true"
						/>
					</label>

					<label htmlFor="disabled">
						Disabled
						<input
							type="text"
							id="disabled"
							name="disabled"
							placeholder="Disabled"
							disabled
						/>
					</label>

					<label htmlFor="date">
						Date
						<input type="date" id="date" name="date" />
					</label>

					<label htmlFor="time">
						Time
						<input type="time" id="time" name="time" />
					</label>

					<label htmlFor="color">
						Color
						<input type="color" id="color" name="color" value="#0eaaaa" />
					</label>

					<fieldset>
						<legend>
							<strong>Checkboxes</strong>
						</legend>
						<label htmlFor="checkbox-1">
							<input
								type="checkbox"
								id="checkbox-1"
								name="checkbox-1"
								defaultChecked={true}
							/>
							Checkbox
						</label>
						<label htmlFor="checkbox-2">
							<input type="checkbox" id="checkbox-2" name="checkbox-2" />
							Checkbox
						</label>
					</fieldset>

					<fieldset>
						<legend>
							<strong>Radio buttons</strong>
						</legend>
						<label htmlFor="radio-1">
							<input
								type="radio"
								id="radio-1"
								name="radio"
								value="radio-1"
								defaultChecked={true}
							/>
							Radio button
						</label>
						<label htmlFor="radio-2">
							<input type="radio" id="radio-2" name="radio" value="radio-2" />
							Radio button
						</label>
					</fieldset>

					<fieldset>
						<legend>
							<strong>Switches</strong>
						</legend>
						<label htmlFor="switch-1">
							<input
								type="checkbox"
								id="switch-1"
								name="switch-1"
								role="switch"
								checked
							/>
							Switch
						</label>
						<label htmlFor="switch-2">
							<input
								type="checkbox"
								id="switch-2"
								name="switch-2"
								role="switch"
							/>
							Switch
						</label>
					</fieldset>

					<input
						type="reset"
						value="Reset"
						onClick={(e) => {
							e.preventDefault()
						}}
					/>
					<input
						type="submit"
						value="Submit"
						onClick={(e) => {
							e.preventDefault()
						}}
					/>
				</form>
			</article>

			<article id="tables">
				<h2>Tables</h2>
				<figure>
					<table role="grid">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Heading</th>
								<th scope="col">Heading</th>
								<th scope="col">Heading</th>
								<th scope="col">Heading</th>
								<th scope="col">Heading</th>
								<th scope="col">Heading</th>
								<th scope="col">Heading</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
								<td>Cell</td>
							</tr>
						</tbody>
					</table>
				</figure>
			</article>

			<article id="accordions">
				<h2>Accordions</h2>
				<details>
					<summary>Accordion 1</summary>
					<article>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque urna diam, tincidunt nec porta sed, auctor id velit.
							Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo.
							Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
							lectus rutrum quam hendrerit, in facilisis elit sollicitudin.
							Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis.
							Maecenas ac ipsum ultrices, porta turpis sit amet, congue turpis.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque urna diam, tincidunt nec porta sed, auctor id velit.
							Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo.
							Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
							lectus rutrum quam hendrerit, in facilisis elit sollicitudin.
							Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis.
							Maecenas ac ipsum ultrices, porta turpis sit amet, congue turpis.
						</p>
					</article>
				</details>
				<details open>
					<summary>Accordion 2</summary>
					<ul>
						<li>Vestibulum id elit quis massa interdum sodales.</li>
						<li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
						<li>Quisque sed eros non eros ornare elementum.</li>
						<li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
					</ul>
				</details>
			</article>

			<article id="article">
				<h2>Article</h2>
				<p>
					Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed
					ultricies dolor non ante vulputate hendrerit. Vivamus sit amet
					suscipit sapien. Nulla iaculis eros a elit pharetra egestas. Nunc
					placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra
					rutrum.
				</p>
				<footer>
					<small>
						Duis nec elit placerat, suscipit nibh quis, finibus neque.
					</small>
				</footer>
			</article>

			<article id="progress">
				<h2>Progress bar</h2>
				<progress id="progress-1" value="25" max="100" />
				<progress id="progress-2" />
			</article>
		</main>
	</>
)

export const Demo: Story = {
	args: {
		children: <>{demoData}</>,
	},
}
