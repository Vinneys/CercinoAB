<script>
	import { goto } from '$app/navigation';
	
	function goToLogin() {
		goto('/');
	}
</script>

<h1>Profile</h1>
<p>Your profile information will appear here.</p>

<button on:click={goToLogin} class="login-btn">Go to Login Page</button>

<style>
	:global(body) {
		background: #000000;
		color: white;
		margin: 0;
		padding: 2rem;
		min-height: 100vh;
	}

	h1 {
		color: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	p {
		color: rgba(255, 255, 255, 0.8);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		margin-bottom: 2rem;
		font-size: 1.1rem;
	}

	.login-btn {
		background: #ff6b9d;
		color: white;
		border: none;
		padding: 1rem 2rem;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		display: block;
		margin-top: 2rem;
		min-width: 200px;
	}

	.login-btn:hover {
		background: #ff8bb3;
		transform: translateY(-2px);
	}

	.login-btn:focus {
		outline: 2px solid rgba(255, 107, 157, 0.5);
		outline-offset: 2px;
	}
</style>