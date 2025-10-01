<script>
	import LoginImage from '$lib/assets/Login.jpg';
	import { goto } from '$app/navigation';
	
	function goToFeed() {
		goto('/feed');
	}
</script>

<svelte:head>
	<title>Cercino Events - Login</title>
</svelte:head>

<div class="hero" style="background-image: url({LoginImage})">
	<div class="hero-content">
		<h1 class="headline">STEP INTO THE CHAOS</h1>
		<p class="subtitle">A world of unforgettable nights, unstoppable energy, and the pulse of youth culture at its peak</p>
		
		<div class="button-group">
			<button class="btn-secondary" type="button" on:click={goToFeed}>Sign In</button>
			<button class="btn-primary" type="button" on:click={goToFeed}>Join Us</button>
		</div>
	</div>
</div>

<style>
	.hero {
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

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.25) 100%);
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 34rem;
		color: white;
		padding: 0 2rem;
		margin-left: 0;
		width: 100%;
		top: 20vh;
	}

	.headline {
		font-size: clamp(32px, 5.5vw, 48px);
		font-weight: 600;
		line-height: 1.1;
		margin-bottom: 0.75rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	.subtitle {
		font-size: clamp(16px, 2.8vw, 20px);
		font-weight: 400;
		line-height: 1.4;
		margin-bottom: 2.5rem;
		color: rgba(255, 255, 255, 0.9);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		max-width: 28rem;
	}

	.button-group {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.btn-primary, .btn-secondary {
		height: 50px;
		padding: 0 2rem;
		border-radius: 9999px;
		font-size: 0.95rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 130px;
		letter-spacing: 0.01em;
	}

	.btn-primary {
		background: white;
		color: black;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.btn-primary:hover {
		background: #f5f5f5;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	}

	.btn-primary:focus {
		outline: 2px solid rgba(255, 255, 255, 0.3);
		outline-offset: 2px;
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: white;
	}

	.btn-secondary:focus {
		outline: 2px solid rgba(255, 255, 255, 0.3);
		outline-offset: 2px;
	}

	.login-form {
		background: rgba(0, 0, 0, 0.8);
		padding: 2rem;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.9);
	}

	.form-group input {
		width: 100%;
		padding: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
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
		box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
	}

	.form-group input[aria-invalid="true"] {
		border-color: #ff6b9d;
	}

	.btn-submit {
		width: 100%;
		height: 56px;
		background: white;
		color: black;
		border: none;
		border-radius: 9999px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}

	.btn-submit:hover {
		background: #f8f8f8;
		transform: translateY(-1px);
	}

	.btn-submit:focus {
		outline: 2px solid rgba(255, 255, 255, 0.5);
		outline-offset: 2px;
	}

	.error-message {
		color: #ff6b9d;
		font-size: 0.9rem;
		margin-top: 0.5rem;
		padding: 0.5rem;
		background: rgba(255, 107, 157, 0.1);
		border-radius: 6px;
		border: 1px solid rgba(255, 107, 157, 0.3);
	}

	/* Desktop styles */
	@media (min-width: 768px) {
		.hero-content {
			padding: 0 5rem;
		}

		.headline {
			font-size: clamp(42px, 5vw, 56px);
			margin-bottom: 1rem;
		}

		.subtitle {
			font-size: clamp(18px, 2.5vw, 22px);
			margin-bottom: 3rem;
			max-width: 32rem;
		}

		.button-group {
			flex-direction: row;
			gap: 1.5rem;
			margin-bottom: 3rem;
		}

		.btn-primary, .btn-secondary {
			height: 52px;
			padding: 0 2.5rem;
		}
	}

	/* Reduced motion */
	@media (prefers-reduced-motion: reduce) {
		.btn-primary, .btn-secondary, .btn-submit, .form-group input {
			transition: none;
		}

		.btn-primary:hover, .btn-secondary:hover, .btn-submit:hover {
			transform: none;
		}
	}

	/* Focus management for keyboard navigation */
	.btn-primary:focus-visible,
	.btn-secondary:focus-visible,
	.btn-submit:focus-visible,
	.form-group input:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.8);
		outline-offset: 2px;
	}
</style>