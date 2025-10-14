<script>
	import BottomNav from '$lib/components/BottomNav.svelte';
	import CuliseDemo from '$lib/assets/CuliseDemo.jpg';
</script>

<div class="forgot-password-page desktop-container">
	<!-- Background Image -->
	<div class="background-image">
		<img src={CuliseDemo} alt="Restaurant background" class="bg-image" />
	</div>

	<!-- Content Card -->
	<div class="content-card desktop-form">
		<h1 class="main-title desktop-title">Let's solve the issue 👋</h1>
		<p class="instructions desktop-subtitle">Write your email down below and we will send you a password reset link!</p>

		<div class="form-section">
			<label for="email" class="input-label">Email</label>
			<input type="email" id="email" placeholder="Example@email.com" class="email-input" />
		</div>

		<button class="login-btn">Login</button>
	</div>

</div>

<style>
	.forgot-password-page {
		min-height: 100vh;
		background: #000000;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		padding-bottom: 0; /* Removed space for bottom nav */
	}

	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}

	.bg-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.3);
	}

	.content-card {
		background: #000000;
		border-radius: 15px;
		opacity: 0.9;
		padding: 2rem;
		max-width: 400px;
		width: 100%;
		position: relative;
		z-index: 2;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.main-title {
		font-size: 1.8rem;
		font-weight: bold;
		color: white;
		margin: 0 0 1rem 0;
		text-align: center;
	}

	.instructions {
		font-size: 1rem;
		color: #cccccc;
		margin: 0 0 2rem 0;
		text-align: center;
		line-height: 1.5;
	}

	.form-section {
		margin-bottom: 1.5rem;
	}

	.input-label {
		display: block;
		font-size: 1rem;
		font-weight: 500;
		color: white;
		margin-bottom: 0.5rem;
	}

	.email-input {
		width: 100%;
		padding: 0.75rem 1rem;
		background: #1C1C1C;
		border: 1px solid #333333;
		border-radius: 8px;
		color: white;
		font-size: 1rem;
		outline: none;
		box-sizing: border-box;
		transition: border-color 0.2s ease;
	}

	.email-input::placeholder {
		color: #999999;
	}

	.email-input:focus {
		border-color: #F16CB3;
	}

	.login-btn {
		width: 100%;
		padding: 0.75rem 1rem;
		background: #F16CB3;
		border: none;
		border-radius: 8px;
		color: white;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.login-btn:hover {
		background: #ff8bb3;
	}

	/* Desktop Responsive Styles */
	@media (min-width: 768px) {
		.forgot-password-page {
			padding: 2rem;
		}

		.content-card {
			padding: 3rem;
			max-width: 500px;
			border-radius: 20px;
			box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
		}

		.main-title {
			font-size: 2.2rem;
			margin-bottom: 1.5rem;
		}

		.instructions {
			font-size: 1.1rem;
			margin-bottom: 2.5rem;
		}

		.input-label {
			font-size: 1.1rem;
			font-weight: 600;
		}

		.email-input {
			padding: 1rem 1.5rem;
			font-size: 1.1rem;
			border-radius: 10px;
		}

		.login-btn {
			padding: 1rem 1.5rem;
			font-size: 1.1rem;
			border-radius: 10px;
		}
	}

	@media (min-width: 1024px) {
		.forgot-password-page {
			padding: 3rem;
		}

		.content-card {
			padding: 4rem;
			max-width: 600px;
		}

		.main-title {
			font-size: 2.5rem;
			margin-bottom: 2rem;
		}

		.instructions {
			font-size: 1.2rem;
			margin-bottom: 3rem;
		}

		.input-label {
			font-size: 1.2rem;
		}

		.email-input {
			padding: 1.25rem 2rem;
			font-size: 1.2rem;
		}

		.login-btn {
			padding: 1.25rem 2rem;
			font-size: 1.2rem;
		}
	}

	@media (min-width: 1440px) {
		.forgot-password-page {
			padding: 4rem;
		}

		.content-card {
			padding: 5rem;
			max-width: 700px;
		}

		.main-title {
			font-size: 3rem;
			margin-bottom: 2.5rem;
		}

		.instructions {
			font-size: 1.3rem;
			margin-bottom: 3.5rem;
		}

		.input-label {
			font-size: 1.3rem;
		}

		.email-input {
			padding: 1.5rem 2.5rem;
			font-size: 1.3rem;
		}

		.login-btn {
			padding: 1.5rem 2.5rem;
			font-size: 1.3rem;
		}
	}
</style>
