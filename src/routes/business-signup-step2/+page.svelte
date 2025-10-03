<script>
	import LoginImage from '$lib/assets/Login.jpg';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
	let bankAccount = '';
	let vatNumber = '';
	let acceptSignup = false;
	let acceptTerms = false;
	let step1Data = {};
	
	onMount(() => {
		// Retrieve step 1 data
		const stored = sessionStorage.getItem('businessSignupStep1');
		if (stored) {
			step1Data = JSON.parse(stored);
		}
	});
	
	function goToApp() {
		// Demo - no data saving, just navigate to app
		goto('/app');
	}
	
	function goBack() {
		goto('/business-signup-form');
	}
</script>

<svelte:head>
	<title>Cercino Events - Business Registration Step 2</title>
</svelte:head>

<div class="hero" style="background-image: url({LoginImage})">
	<div class="hero-content">
		<div class="step-indicator">2/2</div>
		<div class="signup-container">
			<h1 class="signup-title">Almost there</h1>
			<p class="signup-subtitle">Complete your business registration with financial details and documentation.</p>
			
			<form class="signup-form" on:submit|preventDefault={goToApp}>
				<div class="form-group">
					<label for="bankAccount" class="form-label">Bank account</label>
					<input 
						type="text" 
						id="bankAccount" 
						class="form-input" 
						placeholder="Description"
						bind:value={bankAccount}
						required
					/>
				</div>
				
				<div class="form-group">
					<label for="vatNumber" class="form-label">VAT number</label>
					<input 
						type="text" 
						id="vatNumber" 
						class="form-input" 
						placeholder="Ticket price"
						bind:value={vatNumber}
						required
					/>
				</div>
				
				<div class="form-group">
					<label class="form-label">Upload licences</label>
					<div class="upload-area">
						<div class="upload-icon">☁</div>
						<p class="upload-text">Click or drag file to this area to upload</p>
					</div>
					<p class="upload-disclaimer">Upload alcohol/service licence, public liability insurance, and any age-restriction documentation</p>
				</div>
				
				<div class="checkbox-group">
					<label class="checkbox-label">
						<input type="checkbox" bind:checked={acceptSignup} required />
						<span class="checkbox-text">Accept signup/onboarding form</span>
					</label>
					<p class="checkbox-disclaimer">I confirm that the information provided is accurate and complete.</p>
				</div>
				
				<div class="checkbox-group">
					<label class="checkbox-label">
						<input type="checkbox" bind:checked={acceptTerms} required />
						<span class="checkbox-text">Accept terms of policy</span>
					</label>
					<p class="checkbox-disclaimer">I agree to the Terms of Service and Privacy Policy. (link both documents)</p>
				</div>
				
				<div class="button-group">
					<button type="button" class="back-btn" on:click={goBack}>Back</button>
					<button type="submit" class="signup-btn">LET'S DO BUSINESS</button>
				</div>
			</form>
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

	.step-indicator {
		position: absolute;
		top: -3rem;
		right: 0;
		background: transparent;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.signup-container {
		background: transparent;
		padding: 0.5rem;
		border-radius: 12px;
	}

	.signup-title {
		font-size: 2rem;
		font-weight: bold;
		color: white;
		margin: 0 0 0.5rem 0;
	}

	.signup-subtitle {
		font-size: 0.9rem;
		color: #999999;
		margin: 0 0 2rem 0;
		line-height: 1.4;
	}

	.signup-form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-label {
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.form-input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #333333;
		border-radius: 8px;
		background: #1a1a1a;
		color: white;
		font-size: 0.9rem;
		box-sizing: border-box;
	}

	.form-input::placeholder {
		color: #666666;
	}

	.form-input:focus {
		outline: none;
		border-color: #555555;
		background: #222222;
	}

	.upload-area {
		border: 2px dashed #555555;
		border-radius: 8px;
		padding: 2rem;
		text-align: center;
		background: #1a1a1a;
		margin: 0.5rem 0;
		cursor: pointer;
		transition: all 0.2s;
	}

	.upload-area:hover {
		border-color: #777777;
		background: #222222;
	}

	.upload-icon {
		font-size: 2rem;
		color: white;
		margin-bottom: 0.5rem;
	}

	.upload-text {
		color: white;
		font-size: 0.9rem;
		margin: 0;
	}

	.upload-disclaimer {
		color: #999999;
		font-size: 0.8rem;
		margin: 0.5rem 0 0 0;
		line-height: 1.3;
	}

	.checkbox-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.checkbox-label {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		cursor: pointer;
	}

	.checkbox-label input[type="checkbox"] {
		width: 18px;
		height: 18px;
		margin: 0;
		accent-color: #F16CB3;
	}

	.checkbox-text {
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.checkbox-disclaimer {
		color: #999999;
		font-size: 0.8rem;
		margin: 0.5rem 0 0 0;
		line-height: 1.3;
	}

	.button-group {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.back-btn {
		flex: 1;
		padding: 1rem;
		background: transparent;
		color: white;
		border: 2px solid #555555;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s;
	}

	.back-btn:hover {
		background: #333333;
		border-color: #777777;
	}

	.signup-btn {
		flex: 2;
		padding: 1rem;
		background: #F16CB3;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		cursor: pointer;
		transition: background 0.2s;
	}

	.signup-btn:hover {
		background: #e55ba0;
	}

	.signup-btn:disabled {
		background: #666666;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 1rem;
		}
		
		.signup-container {
			padding: 1rem;
		}
		
		.signup-title {
			font-size: 1.5rem;
		}
		
		.button-group {
			flex-direction: column;
		}
	}
</style>
