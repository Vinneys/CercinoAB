<script>
	import LoginImage from '$lib/assets/Login.jpg';
	import { goto } from '$app/navigation';
	
	let firstName = '';
	let surname = '';
	let selectedAge = '';
	let address = '';
	let city = '';
	let phone = '';
	let acceptTerms = false;
	let identityVerification = false;
	
	function goToApp() {
		// Demo - no data saving, just navigate to app
		goto('/app');
	}
	
	function selectAge(age) {
		selectedAge = age;
	}
</script>

<svelte:head>
	<title>Cercino Events - Let's start</title>
</svelte:head>

<div class="hero" style="background-image: url({LoginImage})">
	<div class="hero-content">
		<div class="signup-container">
			<h1 class="signup-title">Let's start</h1>
			<p class="signup-subtitle">You have to follow our rules in order to create your perfect experience.</p>
			
			<form class="signup-form" on:submit|preventDefault={goToApp}>
				<div class="form-group">
					<label for="firstName" class="form-label">First name</label>
					<input 
						type="text" 
						id="firstName" 
						class="form-input" 
						placeholder="Event name"
						bind:value={firstName}
						required
					/>
				</div>
				
				<div class="form-group">
					<label for="surname" class="form-label">Surname</label>
					<input 
						type="text" 
						id="surname" 
						class="form-input" 
						placeholder="Description"
						bind:value={surname}
						required
					/>
				</div>
				
				<div class="form-group">
					<label class="form-label">Age?</label>
					<div class="age-options">
						<button type="button" class="age-option" class:selected={selectedAge === '16+'} on:click={() => selectAge('16+')}>16+</button>
						<button type="button" class="age-option" class:selected={selectedAge === '18+'} on:click={() => selectAge('18+')}>18+</button>
						<button type="button" class="age-option" class:selected={selectedAge === '25+'} on:click={() => selectAge('25+')}>25+</button>
					</div>
					<p class="age-disclaimer">No point of altering you're age... club personell will always check your ID either way</p>
				</div>
				
				<div class="form-group">
					<label class="form-label">Adress</label>
					<div class="address-row">
						<input 
							type="text" 
							class="form-input address-input" 
							placeholder="Adress"
							bind:value={address}
							required
						/>
						<input 
							type="text" 
							class="form-input city-input" 
							placeholder="City"
							bind:value={city}
							required
						/>
					</div>
				</div>
				
				<div class="form-group">
					<label for="phone" class="form-label">Phone number</label>
					<input 
						type="tel" 
						id="phone" 
						class="form-input" 
						placeholder="Phone (+46)"
						bind:value={phone}
						required
					/>
				</div>
				
				<div class="checkbox-group">
					<label class="checkbox-label">
						<input type="checkbox" bind:checked={acceptTerms} required />
						<span class="checkbox-text">Accept terms of policy</span>
					</label>
					<p class="checkbox-disclaimer">It's important that you dont use any emojis, icons or other elements that will effect the overall look of the app in BETA.</p>
				</div>
				
				<div class="checkbox-group">
					<label class="checkbox-label">
						<input type="checkbox" bind:checked={identityVerification} required />
						<span class="checkbox-text">Identity & Age Verification</span>
					</label>
					<p class="checkbox-disclaimer">By continuing, you confirm that the information you provide is true and accurate, including your identity and age. Providing false details may result in restricted access to the platform.</p>
				</div>
				
				<button type="submit" class="signup-btn">LET'S F*CKING PARTY</button>
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

	.signup-container {
		background: #00000073;
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

	.age-options {
		display: flex;
		margin: 0.5rem 0;
	}

	.age-option {
		flex: 1;
		padding: 0.75rem;
		border: none;
		border-radius: 0;
		background: #333333;
		color: #cccccc;
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.2s;
	}

	.age-option:hover {
		background: #444444;
		color: white;
	}

	.age-option.selected {
		background: #1C1C1C;
		color: white;
	}

	.age-disclaimer {
		color: #999999;
		font-size: 0.8rem;
		margin: 0.5rem 0 0 0;
		line-height: 1.3;
	}

	.address-row {
		display: flex;
		gap: 0.5rem;
	}

	.address-input {
		flex: 2;
	}

	.city-input {
		flex: 1;
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
			/* padding: 1.5rem; */
			/* height: fit-content; */
		}
		
		.signup-title {
			font-size: 1.5rem;
		}
		
		.address-row {
			flex-direction: column;
		}
		
		.age-options {
			flex-direction: row;
		}
	}
</style>
