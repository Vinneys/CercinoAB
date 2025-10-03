<script>
	import LoginImage from '$lib/assets/Login.jpg';
	import { goto } from '$app/navigation';
	
	function goToLogin() {
		goto('/login');
	}
	
	function goToApp() {
		goto('/app');
	}
	
	function goToBusinessSignup() {
		goto('/business-signup');
	}
</script>

<svelte:head>
	<title>Cercino Events - STEP INTO THE CHAOS</title>
</svelte:head>

<div class="hero" style="background-image: url({LoginImage})">
	<div class="hero-content">
		<h1 class="headline">STEP INTO THE CHAOS</h1>
		<p class="subtitle">A world of unforgettable nights, unstoppable energy, and the pulse of youth culture at its peak</p>
		
		<div class="button-group">
			<button class="btn-secondary" type="button" on:click={goToLogin}>Party Peep</button>
			<button class="btn-primary" type="button" on:click={goToBusinessSignup}>Business</button>
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
		background: linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 100%);
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
		background: #F16CB3;
		color: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.btn-primary:hover {
		background: #F16CB3;
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
		.btn-primary, .btn-secondary {
			transition: none;
		}

		.btn-primary:hover, .btn-secondary:hover {
			transform: none;
		}
	}

	/* Focus management for keyboard navigation */
	.btn-primary:focus-visible,
	.btn-secondary:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.8);
		outline-offset: 2px;
	}
</style>