<script>
	import LoginImage from '$lib/assets/Login.jpg';
	import { goto } from '$app/navigation';
	import { Button } from '$lib';
	
	let email = '';
	let password = '';
	
	function goToApp() {
		goto('/app');
	}
</script>

<svelte:head>
	<title>Cercino Events - Welcome Back</title>
</svelte:head>

<div class="hero" style="background-image: url({LoginImage})">
	<div class="hero-content">
		<div class="login-container">
			<h1 class="welcome-title">Welcome Back 👋</h1>
			<p class="welcome-subtitle">Today is a new day. It's your day. You shape it.</p>
			<p class="welcome-subtitle">Sign in to start managing your projects.</p>
			
			<form class="login-form" on:submit|preventDefault={goToApp}>
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input 
						type="email" 
						id="email" 
						class="form-input" 
						placeholder="Example@email.com"
						bind:value={email}
						required
					/>
				</div>
				
				<div class="form-group">
					<label for="password" class="form-label">Password</label>
					<input 
						type="password" 
						id="password" 
						class="form-input" 
						placeholder="At least 8 characters"
						bind:value={password}
						required
					/>
					<a href="#" class="forgot-password">Forgot Password?</a>
				</div>
				
				<Button type="submit" variant="secondary" size="md" fullWidth>Login</Button>
			</form>
			
			<p class="signup-text">Don't you have an account? <a href="/signup" class="signup-link">Sign up</a></p>
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
		justify-content: center;
		padding: 2rem;
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
		width: 100%;
		max-width: 400px;
		text-align: left;
	}

	.login-container {
		background: rgb(255 255 255 / 0%);
		padding: 2rem;
		border-radius: 12px;
	}

	.welcome-title {
		font-size: 2rem;
		font-weight: bold;
		color: white;
		margin: 0 0 0.5rem 0;
	}

	.welcome-subtitle {
		font-size: 0.9rem;
		color: white;
		margin: 0 0 0.2rem 0;
		line-height: 1.4;
		opacity: 0.9;
	}
	
	.welcome-subtitle:last-of-type {
		margin-bottom: 3.5rem;
	}

	.login-form {
		margin-bottom: 1.5rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
		margin-top: 1rem;
	}

	.form-label {
		display: block;
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.form-input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-size: 0.9rem;
		box-sizing: border-box;
		backdrop-filter: blur(10px);
	}

	.form-input::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}

	.form-input:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.4);
		background: rgba(255, 255, 255, 0.15);
	}

	.forgot-password {
		display: block;
		text-align: right;
		color: white;
		font-size: 0.8rem;
		text-decoration: none;
		margin-top: 0.5rem;
		opacity: 0.8;
	}

	.forgot-password:hover {
		opacity: 1;
	}

    /* button styles replaced by reusable Button component */

	.signup-text {
		text-align: center;
		color: white;
		font-size: 0.9rem;
		margin: 0 0 2rem 0;
	}

	.signup-link {
		color: white;
		text-decoration: underline;
		opacity: 0.8;
	}

	.signup-link:hover {
		opacity: 1;
	}


	@media (max-width: 768px) {
		.hero {
			padding: 1rem;
		}
		
		.login-container {
			padding: 1.5rem;
		}
		
		.welcome-title {
			font-size: 1.5rem;
		}
	}
</style>
