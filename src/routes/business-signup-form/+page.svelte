<script>
	import LoginImage from '$lib/assets/Login.jpg';
	import { goto } from '$app/navigation';
	
	let venueName = '';
	let locationType = 'Club Location';
	let contactName = '';
	let contactEmail = '';
	let contactPhone = '';
	let companyName = '';
	
	function goToStep2() {
		// Store step 1 data and navigate to step 2
		const step1Data = {
			venueName,
			locationType,
			contactName,
			contactEmail,
			contactPhone,
			companyName
		};
		// Store in sessionStorage for demo purposes
		sessionStorage.setItem('businessSignupStep1', JSON.stringify(step1Data));
		goto('/business-signup-step2');
	}
	
	/** @param {string} type */
	function selectLocationType(type) {
		locationType = type;
	}
</script>

<svelte:head>
	<title>Cercino Events - Business Registration</title>
</svelte:head>

<div class="hero" style="background-image: url({LoginImage})">
	<div class="hero-content">
		<div class="step-indicator">1/2</div>
		<div class="signup-container">
			<h1 class="signup-title">Let's start</h1>
			<p class="signup-subtitle">You have to follow our rules in order to create your perfect business experience.</p>
			
			<form class="signup-form" on:submit|preventDefault={goToStep2}>
				<div class="form-group">
					<label for="venueName" class="form-label">Venue name</label>
					<input 
						type="text" 
						id="venueName" 
						class="form-input" 
						placeholder="Event name"
						bind:value={venueName}
						required
					/>
				</div>
				
				<div class="form-group">
					<label class="form-label">Adress</label>
					<div class="location-options">
						<button type="button" class="location-option" class:selected={locationType === 'Club Location'} on:click={() => selectLocationType('Club Location')}>Club Location</button>
						<button type="button" class="location-option" class:selected={locationType === 'Other Location'} on:click={() => selectLocationType('Other Location')}>Other Location</button>
					</div>
				</div>
				
				<div class="form-group">
					<label class="form-label">Primary contact person</label>
					<input 
						type="text" 
						class="form-input" 
						placeholder="Full name"
						bind:value={contactName}
						required
					/>
					<input 
						type="email" 
						class="form-input" 
						placeholder="Email"
						bind:value={contactEmail}
						required
					/>
					<input 
						type="tel" 
						class="form-input" 
						placeholder="Phone number"
						bind:value={contactPhone}
						required
					/>
				</div>
				
				<div class="form-group">
					<label for="companyName" class="form-label">Company name</label>
					<input 
						type="text" 
						id="companyName" 
						class="form-input" 
						placeholder="Event name"
						bind:value={companyName}
						required
					/>
				</div>
				
				<button type="submit" class="signup-btn">Continue</button>
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

	.location-options {
		display: flex;
		margin: 0.5rem 0;
	}

	.location-option {
		flex: 1;
		padding: 0.75rem;
		border: none;
		border-radius: 0;
		background: #333333;
		color: #cccccc;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.location-option:hover {
		background: #444444;
		color: white;
	}

	.location-option.selected {
		background: #1C1C1C;
		color: white;
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

	.signup-btn {
		width: 100%;
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
		margin-top: 1rem;
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
		
		.location-options {
			flex-direction: row;
		}
	}
</style>
