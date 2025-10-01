<script>
	import { page } from '$app/stores';
	import LoginImage from '$lib/assets/Login.jpg';
	
	export let form;
	
	let showLoginForm = false;
	
	function toggleLoginForm() {
		showLoginForm = !showLoginForm;
	}
</script>

<svelte:head>
	<title>Cercino Events - Login</title>
</svelte:head>

<div class="landing-page" style="background-image: url({LoginImage})">
	<div class="landing-content">
		<div class="text-content">
			<h1 class="headline">Bringing Cercino<br>Members the best<br>events, inspiration<br>and stories in entertainment.</h1>
			
			<div class="button-group">
				<button class="btn-primary" type="button">Join Us</button>
				<button class="btn-outline" type="button" on:click={toggleLoginForm}>Sign In</button>
			</div>
		</div>
		
		{#if showLoginForm}
			<div class="login-form">
				<h2>Sign In</h2>
				<form method="POST" action="?">
					<div class="form-group">
						<label for="username">Username</label>
						<input type="text" id="username" name="username" required />
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" id="password" name="password" required />
					</div>
					{#if form?.error}
						<div class="error-message">{form.error}</div>
					{/if}
					<button type="submit" class="btn-submit">Sign In</button>
				</form>
			</div>
		{/if}
	</div>
</div>

<style>
	.landing-page {
		min-height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0;
	}

	.landing-page::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 100%);
		z-index: 1;
	}

	.landing-content {
		position: relative;
		z-index: 2;
		max-width: 50%;
		color: white;
		padding: 0 4rem;
		margin-left: 0;
	}

	.text-content {
		margin-bottom: 3rem;
	}

	.headline {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 0;
		line-height: 1.1;
		letter-spacing: -0.02em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}

	.button-group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary, .btn-outline {
		padding: 1rem 2rem;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		border: 2px solid transparent;
		min-width: 140px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}

	.btn-primary {
		background: white;
		color: black;
		border-color: white;
	}

	.btn-primary:hover {
		background: #f0f0f0;
		border-color: #f0f0f0;
		transform: translateY(-2px);
	}

	.btn-outline {
		background: transparent;
		color: white;
		border-color: white;
	}

	.btn-outline:hover {
		background: white;
		color: black;
		transform: translateY(-2px);
	}

	.login-form {
		background: rgba(0, 0, 0, 0.9);
		padding: 2.5rem;
		border-radius: 12px;
		border: 1px solid #333;
		max-width: 400px;
		margin-top: 2rem;
		backdrop-filter: blur(10px);
	}

	.login-form h2 {
		margin-bottom: 1.5rem;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.form-group input {
		width: 100%;
		padding: 1rem;
		border: 1px solid #555;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-size: 1rem;
		box-sizing: border-box;
		transition: all 0.2s ease;
	}

	.form-group input:focus {
		outline: none;
		border-color: white;
		background: rgba(255, 255, 255, 0.15);
	}

	.form-group input::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}

	.btn-submit {
		width: 100%;
		padding: 1rem;
		background: white;
		color: black;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}

	.btn-submit:hover {
		background: #f0f0f0;
		transform: translateY(-2px);
	}

	.error-message {
		color: #ff6b9d;
		font-size: 0.9rem;
		margin-bottom: 1rem;
		padding: 0.75rem;
		background: rgba(255, 107, 157, 0.1);
		border-radius: 8px;
		border: 1px solid rgba(255, 107, 157, 0.3);
	}

	@media (max-width: 1024px) {
		.landing-content {
			max-width: 60%;
			padding: 0 2rem;
		}

		.headline {
			font-size: 2.8rem;
		}
	}

	@media (max-width: 768px) {
		.landing-page {
			padding: 2rem;
		}

		.landing-content {
			max-width: 100%;
			padding: 0;
		}

		.headline {
			font-size: 2.2rem;
		}

		.button-group {
			flex-direction: column;
		}

		.btn-primary, .btn-outline {
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		.headline {
			font-size: 1.8rem;
		}

		.btn-primary, .btn-outline {
			padding: 0.875rem 1.5rem;
		}
	}
</style>
